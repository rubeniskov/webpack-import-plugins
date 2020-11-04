#!/usr/bin/env bash
get_npm_module_tarball() {
    npm view $1 dist.tarball | tail -n1 | sed -e "s/.*'\(.*\)\'/\1/"
}

wget_unpack() {
    local dest=$([ -z "$2" ] && echo "tmp" || echo "$2")
    mkdir -p "$dest" && wget -qO- $1 | tar xz - -C "$dest" --strip-components 1;
    echo "$dest"
}

install_webpack_temp() {
  npm i -C $(wget_unpack $(get_npm_module_tarball webpack@$1) tmp/webpack@$1) --production --ignore-scripts > /dev/null
}
# collects webpack plugin list with the following format
# {pluginJPath} {pluginFilename}
# .....
# if {pluginFilename} is empty , the plugin is considered deprecated
collect_webpack_plugins() {
    node -e "var u=(o,x)=>Object.keys(o).reduce((p,c)=>\
        [...p,...(/Plugin$/.test(c)?[x?x+'.'+c:c]:(typeof o[c]==='object'?u(o[c],c):[]))],[]);\
        u(require(\"./tmp/webpack@$1/\")).map((v)=>console.log(v))" 2>/dev/null \
    | xargs -L 1 -I {} \
        bash -c 'echo $1 $(find "tmp/webpack@$2" -type f -name "${1##*.}.js"|sed -e "s/^tmp\/webpack@$2\///")' -a {} $1
}

collect_webpack_plugins_from_dir() {
  find "tmp/webpack@$1/lib" -name '*Plugin.js' \
    | sed -e "s/^tmp\/webpack@$1\///" \
    | xargs -L 1 -I {} \
      bash -c 'printf "%s %s\n" $(sed -e "s/^lib\/\(.*\)\.js/\1/" <<<"{}" |tr "/" ".") "{}"'; 
}
format_plugin_json() { 
    sort -u -k1 | jq --slurp --raw-input 'split("\n")[:-1]|map({name: split(" ")[0], filename: split(" ")[1]})'
}

echo >&2 "Generating webpack@4 plugins list"
install_webpack_temp 4
# Auto insertion for unreferenced plugins for webpack 4 using file matching
cat \
  <(collect_webpack_plugins 4) \
  <(collect_webpack_plugins_from_dir 4) \
  | format_plugin_json > wp-plugins-v4.json
echo >&2 "Generating webpack@5 plugins list"
install_webpack_temp 5
collect_webpack_plugins 5 \
  | format_plugin_json > wp-plugins-v5.json
rm -rf tmp
