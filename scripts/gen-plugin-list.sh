#!/usr/bin/env bash
get_npm_module_tarball() {
    npm view $1 dist.tarball | tail -n1 | sed -e "s/.*'\(.*\)\'/\1/"
}

wget_unpack() {
    local dest=$([ -z "$2" ] && echo "tmp" || echo "$2")
    mkdir -p "$dest" && wget -qO- $1 | tar xz - -C "$dest" --strip-components 1;
    echo "$dest"
}

# collects webpack plugin list with the following format
# {pluginJPath} {pluginFilename}
# .....
# if {pluginFilename} is empty , the plugin is considered deprecated
collect_webpack_plugins() {
    npm i -C $(wget_unpack $(get_npm_module_tarball webpack@$1) tmp/webpack@$1) --production --ignore-scripts > /dev/null
    node -e "var u=(o,x)=>Object.keys(o).reduce((p,c)=>\
        [...p,...(/Plugin$/.test(c)?[x?x+'.'+c:c]:(typeof o[c]==='object'?u(o[c],c):[]))],[]);\
        u(require(\"./tmp/webpack@$1/\")).map((v)=>console.log(v))" 2>/dev/null \
    | xargs -L 1 -I {} \
        bash -c 'echo $1 $(find "tmp/webpack@$2" -type f -name "${1##*.}.js"|sed -e "s/^tmp\/webpack@$2\///")' -a {} $1
    rm -rf tmp
}

format_plugin_json() { 
    sort -k1 | jq --slurp --raw-input 'split("\n")[:-1]|map({name: split(" ")[0], filename: split(" ")[1]})'
}

echo >&2 "Generating webpack@4 plugins list"
# Manual insertion for unreferenced plugins in webpack 4
cat <(collect_webpack_plugins 4) <(cat <<EOF
node.NodeTargetPlugin lib/node/NodeTargetPlugin.js
EOF
) | format_plugin_json > wp-plugins-v4.json
echo >&2 "Generating webpack@5 plugins list"
collect_webpack_plugins 5 | format_plugin_json > wp-plugins-v5.json
