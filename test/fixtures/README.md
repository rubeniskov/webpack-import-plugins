
## Dependency Tree 

```shell
$ npm ls -C dep-tree
dep-tree@1.0.0
├─┬ hoisted@1.0.0
│ └── webpack@5.0.0 deduped
├─┬ no-hoisted@1.0.0
│ └── webpack@4.0.0
└── webpack@5.0.0
```

```texplain
/dep-tree/index.js
/dep-tree/node_modules/hoisted/index.js
/dep-tree/node_modules/hoisted/package.json
/dep-tree/node_modules/no-hoisted/index.js
/dep-tree/node_modules/no-hoisted/node_modules/webpack
/dep-tree/node_modules/no-hoisted/package.json
/dep-tree/node_modules/webpack
/dep-tree/package.json
```