/** 
 * @typedef {Object} WebpackPlugins
 * @property {typeof import("webpack/lib/AutomaticPrefetchPlugin.js")} AutomaticPrefetchPlugin 
 * @property {typeof import("webpack/lib/BannerPlugin.js")} BannerPlugin 
 * @property {typeof import("webpack/lib/ContextExclusionPlugin.js")} ContextExclusionPlugin 
 * @property {typeof import("webpack/lib/ContextReplacementPlugin.js")} ContextReplacementPlugin 
 * @property {typeof import("webpack/lib/DefinePlugin.js")} DefinePlugin 
 * @property {typeof import("webpack/lib/DelegatedPlugin.js")} DelegatedPlugin 
 * @property {typeof import("webpack/lib/DllPlugin.js")} DllPlugin 
 * @property {typeof import("webpack/lib/DllReferencePlugin.js")} DllReferencePlugin 
 * @property {typeof import("webpack/lib/DynamicEntryPlugin.js")} DynamicEntryPlugin 
 * @property {typeof import("webpack/lib/EntryOptionPlugin.js")} EntryOptionPlugin 
 * @property {typeof import("webpack/lib/EntryPlugin.js")} EntryPlugin 
 * @property {typeof import("webpack/lib/EnvironmentPlugin.js")} EnvironmentPlugin 
 * @property {typeof import("webpack/lib/EvalDevToolModulePlugin.js")} EvalDevToolModulePlugin 
 * @property {typeof import("webpack/lib/EvalSourceMapDevToolPlugin.js")} EvalSourceMapDevToolPlugin 
 * @property {typeof import("webpack/lib/ExternalsPlugin.js")} ExternalsPlugin 
 * @property {typeof import("webpack/lib/HotModuleReplacementPlugin.js")} HotModuleReplacementPlugin 
 * @property {typeof import("webpack/lib/IgnorePlugin.js")} IgnorePlugin 
 * @property {typeof import("webpack/lib/javascript/JavascriptModulesPlugin.js")} JavascriptModulesPlugin 
 * @property {typeof import("webpack/lib/LibManifestPlugin.js")} LibManifestPlugin 
 * @property {typeof import("webpack/lib/LibraryTemplatePlugin.js")} LibraryTemplatePlugin 
 * @property {typeof import("webpack/lib/LoaderOptionsPlugin.js")} LoaderOptionsPlugin 
 * @property {typeof import("webpack/lib/LoaderTargetPlugin.js")} LoaderTargetPlugin 
 * @property {typeof import("webpack/lib/NoEmitOnErrorsPlugin.js")} NoEmitOnErrorsPlugin 
 * @property {typeof import("webpack/lib/NormalModuleReplacementPlugin.js")} NormalModuleReplacementPlugin 
 * @property {typeof import("webpack/lib/PrefetchPlugin.js")} PrefetchPlugin 
 * @property {typeof import("webpack/lib/ProgressPlugin.js")} ProgressPlugin 
 * @property {typeof import("webpack/lib/ProvidePlugin.js")} ProvidePlugin 
 * @property {typeof import("webpack/lib/SingleEntryPlugin.js")} SingleEntryPlugin 
 * @property {typeof import("webpack/lib/SourceMapDevToolPlugin.js")} SourceMapDevToolPlugin 
 * @property {typeof import("webpack/lib/WatchIgnorePlugin.js")} WatchIgnorePlugin 
 * @property {typeof import("webpack/lib/cache/MemoryCachePlugin.js")} cache.MemoryCachePlugin 
 * @property {typeof import("webpack/lib/container/ContainerPlugin.js")} container.ContainerPlugin 
 * @property {typeof import("webpack/lib/container/ContainerReferencePlugin.js")} container.ContainerReferencePlugin 
 * @property {typeof import("webpack/lib/container/ModuleFederationPlugin.js")} container.ModuleFederationPlugin 
 * @property {typeof import("webpack/lib/debug/ProfilingPlugin.js")} debug.ProfilingPlugin 
 * @property {typeof import("webpack/lib/electron/ElectronTargetPlugin.js")} electron.ElectronTargetPlugin 
 * @property {typeof import("webpack/lib/schemes/HttpUriPlugin.js")} experiments.schemes.HttpUriPlugin 
 * @property {typeof import("webpack/lib/schemes/HttpsUriPlugin.js")} experiments.schemes.HttpsUriPlugin 
 * @property {typeof import("webpack/lib/ids/ChunkModuleIdRangePlugin.js")} ids.ChunkModuleIdRangePlugin 
 * @property {typeof import("webpack/lib/ids/DeterministicChunkIdsPlugin.js")} ids.DeterministicChunkIdsPlugin 
 * @property {typeof import("webpack/lib/ids/DeterministicModuleIdsPlugin.js")} ids.DeterministicModuleIdsPlugin 
 * @property {typeof import("webpack/lib/ids/HashedModuleIdsPlugin.js")} ids.HashedModuleIdsPlugin 
 * @property {typeof import("webpack/lib/ids/NamedChunkIdsPlugin.js")} ids.NamedChunkIdsPlugin 
 * @property {typeof import("webpack/lib/ids/NamedModuleIdsPlugin.js")} ids.NamedModuleIdsPlugin 
 * @property {typeof import("webpack/lib/ids/NaturalModuleIdsPlugin.js")} ids.NaturalModuleIdsPlugin 
 * @property {typeof import("webpack/lib/ids/OccurrenceChunkIdsPlugin.js")} ids.OccurrenceChunkIdsPlugin 
 * @property {typeof import("webpack/lib/ids/OccurrenceModuleIdsPlugin.js")} ids.OccurrenceModuleIdsPlugin 
 * @property {typeof import("webpack/lib/javascript/EnableChunkLoadingPlugin.js")} javascript.EnableChunkLoadingPlugin 
 * @property {typeof import("webpack/lib/javascript/JavascriptModulesPlugin.js")} javascript.JavascriptModulesPlugin 
 * @property {typeof import("webpack/lib/library/AbstractLibraryPlugin.js")} library.AbstractLibraryPlugin 
 * @property {typeof import("webpack/lib/library/EnableLibraryPlugin.js")} library.EnableLibraryPlugin 
 * @property {typeof import("webpack/lib/node/NodeEnvironmentPlugin.js")} node.NodeEnvironmentPlugin 
 * @property {typeof import("webpack/lib/node/NodeSourcePlugin.js")} node.NodeSourcePlugin 
 * @property {typeof import("webpack/lib/node/NodeTargetPlugin.js")} node.NodeTargetPlugin 
 * @property {typeof import("webpack/lib/node/NodeTemplatePlugin.js")} node.NodeTemplatePlugin 
 * @property {typeof import("webpack/lib/node/ReadFileCompileWasmPlugin.js")} node.ReadFileCompileWasmPlugin 
 * @property {typeof import("webpack/lib/optimize/AggressiveMergingPlugin.js")} optimize.AggressiveMergingPlugin 
 * @property {typeof import("webpack/lib/optimize/AggressiveSplittingPlugin.js")} optimize.AggressiveSplittingPlugin 
 * @property {typeof import("webpack/lib/optimize/LimitChunkCountPlugin.js")} optimize.LimitChunkCountPlugin 
 * @property {typeof import("webpack/lib/optimize/MinChunkSizePlugin.js")} optimize.MinChunkSizePlugin 
 * @property {typeof import("webpack/lib/optimize/ModuleConcatenationPlugin.js")} optimize.ModuleConcatenationPlugin 
 * @property {typeof import("webpack/lib/optimize/RuntimeChunkPlugin.js")} optimize.RuntimeChunkPlugin 
 * @property {typeof import("webpack/lib/optimize/SideEffectsFlagPlugin.js")} optimize.SideEffectsFlagPlugin 
 * @property {typeof import("webpack/lib/optimize/SplitChunksPlugin.js")} optimize.SplitChunksPlugin 
 * @property {typeof import("webpack/lib/prefetch/ChunkPrefetchPreloadPlugin.js")} prefetch.ChunkPrefetchPreloadPlugin 
 * @property {typeof import("webpack/lib/sharing/ConsumeSharedPlugin.js")} sharing.ConsumeSharedPlugin 
 * @property {typeof import("webpack/lib/sharing/ProvideSharedPlugin.js")} sharing.ProvideSharedPlugin 
 * @property {typeof import("webpack/lib/sharing/SharePlugin.js")} sharing.SharePlugin 
 * @property {typeof import("webpack/lib/wasm-async/AsyncWebAssemblyModulesPlugin.js")} wasm.AsyncWebAssemblyModulesPlugin 
 * @property {typeof import("webpack/lib/web/FetchCompileAsyncWasmPlugin.js")} web.FetchCompileAsyncWasmPlugin 
 * @property {typeof import("webpack/lib/web/FetchCompileWasmPlugin.js")} web.FetchCompileWasmPlugin 
 * @property {typeof import("webpack/lib/web/JsonpTemplatePlugin.js")} web.JsonpTemplatePlugin 
 * @property {typeof import("webpack/lib/webworker/WebWorkerTemplatePlugin.js")} webworker.WebWorkerTemplatePlugin 
 */

/** 
 * Given a webpack@5 path return a list of plugins 
 * 
 * @param {String} webpackPath 
 * @returns {WebpackPlugins} 
 */
module.exports = (webpackPath) => ({
/** @type {typeof import("webpack/lib/AutomaticPrefetchPlugin.js")} */
get AutomaticPrefetchPlugin(){ return require(webpackPath + "/lib/AutomaticPrefetchPlugin.js"); },
/** @type {typeof import("webpack/lib/BannerPlugin.js")} */
get BannerPlugin(){ return require(webpackPath + "/lib/BannerPlugin.js"); },
/** @type {typeof import("webpack/lib/ContextExclusionPlugin.js")} */
get ContextExclusionPlugin(){ return require(webpackPath + "/lib/ContextExclusionPlugin.js"); },
/** @type {typeof import("webpack/lib/ContextReplacementPlugin.js")} */
get ContextReplacementPlugin(){ return require(webpackPath + "/lib/ContextReplacementPlugin.js"); },
/** @type {typeof import("webpack/lib/DefinePlugin.js")} */
get DefinePlugin(){ return require(webpackPath + "/lib/DefinePlugin.js"); },
/** @type {typeof import("webpack/lib/DelegatedPlugin.js")} */
get DelegatedPlugin(){ return require(webpackPath + "/lib/DelegatedPlugin.js"); },
/** @type {typeof import("webpack/lib/DllPlugin.js")} */
get DllPlugin(){ return require(webpackPath + "/lib/DllPlugin.js"); },
/** @type {typeof import("webpack/lib/DllReferencePlugin.js")} */
get DllReferencePlugin(){ return require(webpackPath + "/lib/DllReferencePlugin.js"); },
/** @type {typeof import("webpack/lib/DynamicEntryPlugin.js")} */
get DynamicEntryPlugin(){ return require(webpackPath + "/lib/DynamicEntryPlugin.js"); },
/** @type {typeof import("webpack/lib/EntryOptionPlugin.js")} */
get EntryOptionPlugin(){ return require(webpackPath + "/lib/EntryOptionPlugin.js"); },
/** @type {typeof import("webpack/lib/EntryPlugin.js")} */
get EntryPlugin(){ return require(webpackPath + "/lib/EntryPlugin.js"); },
/** @type {typeof import("webpack/lib/EnvironmentPlugin.js")} */
get EnvironmentPlugin(){ return require(webpackPath + "/lib/EnvironmentPlugin.js"); },
/** @type {typeof import("webpack/lib/EvalDevToolModulePlugin.js")} */
get EvalDevToolModulePlugin(){ return require(webpackPath + "/lib/EvalDevToolModulePlugin.js"); },
/** @type {typeof import("webpack/lib/EvalSourceMapDevToolPlugin.js")} */
get EvalSourceMapDevToolPlugin(){ return require(webpackPath + "/lib/EvalSourceMapDevToolPlugin.js"); },
/** @type {typeof import("webpack/lib/ExternalsPlugin.js")} */
get ExternalsPlugin(){ return require(webpackPath + "/lib/ExternalsPlugin.js"); },
/** @type {typeof import("webpack/lib/HotModuleReplacementPlugin.js")} */
get HotModuleReplacementPlugin(){ return require(webpackPath + "/lib/HotModuleReplacementPlugin.js"); },
/** @type {typeof import("webpack/lib/IgnorePlugin.js")} */
get IgnorePlugin(){ return require(webpackPath + "/lib/IgnorePlugin.js"); },
/** @type {typeof import("webpack/lib/javascript/JavascriptModulesPlugin.js")} */
get JavascriptModulesPlugin(){ return require(webpackPath + "/lib/javascript/JavascriptModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/LibManifestPlugin.js")} */
get LibManifestPlugin(){ return require(webpackPath + "/lib/LibManifestPlugin.js"); },
/** @type {typeof import("webpack/lib/LibraryTemplatePlugin.js")} */
get LibraryTemplatePlugin(){ return require(webpackPath + "/lib/LibraryTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/LoaderOptionsPlugin.js")} */
get LoaderOptionsPlugin(){ return require(webpackPath + "/lib/LoaderOptionsPlugin.js"); },
/** @type {typeof import("webpack/lib/LoaderTargetPlugin.js")} */
get LoaderTargetPlugin(){ return require(webpackPath + "/lib/LoaderTargetPlugin.js"); },
/** @type {typeof import("webpack/lib/NoEmitOnErrorsPlugin.js")} */
get NoEmitOnErrorsPlugin(){ return require(webpackPath + "/lib/NoEmitOnErrorsPlugin.js"); },
/** @type {typeof import("webpack/lib/NormalModuleReplacementPlugin.js")} */
get NormalModuleReplacementPlugin(){ return require(webpackPath + "/lib/NormalModuleReplacementPlugin.js"); },
/** @type {typeof import("webpack/lib/PrefetchPlugin.js")} */
get PrefetchPlugin(){ return require(webpackPath + "/lib/PrefetchPlugin.js"); },
/** @type {typeof import("webpack/lib/ProgressPlugin.js")} */
get ProgressPlugin(){ return require(webpackPath + "/lib/ProgressPlugin.js"); },
/** @type {typeof import("webpack/lib/ProvidePlugin.js")} */
get ProvidePlugin(){ return require(webpackPath + "/lib/ProvidePlugin.js"); },
/** @type {typeof import("webpack/lib/SingleEntryPlugin.js")} */
get SingleEntryPlugin(){ return require(webpackPath + "/lib/SingleEntryPlugin.js"); },
/** @type {typeof import("webpack/lib/SourceMapDevToolPlugin.js")} */
get SourceMapDevToolPlugin(){ return require(webpackPath + "/lib/SourceMapDevToolPlugin.js"); },
/** @type {typeof import("webpack/lib/WatchIgnorePlugin.js")} */
get WatchIgnorePlugin(){ return require(webpackPath + "/lib/WatchIgnorePlugin.js"); },
cache: {
/** @type {typeof import("webpack/lib/cache/MemoryCachePlugin.js")} */
get MemoryCachePlugin(){ return require(webpackPath + "/lib/cache/MemoryCachePlugin.js"); },
},
container: {
/** @type {typeof import("webpack/lib/container/ContainerPlugin.js")} */
get ContainerPlugin(){ return require(webpackPath + "/lib/container/ContainerPlugin.js"); },
/** @type {typeof import("webpack/lib/container/ContainerReferencePlugin.js")} */
get ContainerReferencePlugin(){ return require(webpackPath + "/lib/container/ContainerReferencePlugin.js"); },
/** @type {typeof import("webpack/lib/container/ModuleFederationPlugin.js")} */
get ModuleFederationPlugin(){ return require(webpackPath + "/lib/container/ModuleFederationPlugin.js"); },
},
debug: {
/** @type {typeof import("webpack/lib/debug/ProfilingPlugin.js")} */
get ProfilingPlugin(){ return require(webpackPath + "/lib/debug/ProfilingPlugin.js"); },
},
electron: {
/** @type {typeof import("webpack/lib/electron/ElectronTargetPlugin.js")} */
get ElectronTargetPlugin(){ return require(webpackPath + "/lib/electron/ElectronTargetPlugin.js"); },
},
experiments: {
schemes: {
/** @type {typeof import("webpack/lib/schemes/HttpUriPlugin.js")} */
get HttpUriPlugin(){ return require(webpackPath + "/lib/schemes/HttpUriPlugin.js"); },
/** @type {typeof import("webpack/lib/schemes/HttpsUriPlugin.js")} */
get HttpsUriPlugin(){ return require(webpackPath + "/lib/schemes/HttpsUriPlugin.js"); },
}},
ids: {
/** @type {typeof import("webpack/lib/ids/ChunkModuleIdRangePlugin.js")} */
get ChunkModuleIdRangePlugin(){ return require(webpackPath + "/lib/ids/ChunkModuleIdRangePlugin.js"); },
/** @type {typeof import("webpack/lib/ids/DeterministicChunkIdsPlugin.js")} */
get DeterministicChunkIdsPlugin(){ return require(webpackPath + "/lib/ids/DeterministicChunkIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/DeterministicModuleIdsPlugin.js")} */
get DeterministicModuleIdsPlugin(){ return require(webpackPath + "/lib/ids/DeterministicModuleIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/HashedModuleIdsPlugin.js")} */
get HashedModuleIdsPlugin(){ return require(webpackPath + "/lib/ids/HashedModuleIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/NamedChunkIdsPlugin.js")} */
get NamedChunkIdsPlugin(){ return require(webpackPath + "/lib/ids/NamedChunkIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/NamedModuleIdsPlugin.js")} */
get NamedModuleIdsPlugin(){ return require(webpackPath + "/lib/ids/NamedModuleIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/NaturalModuleIdsPlugin.js")} */
get NaturalModuleIdsPlugin(){ return require(webpackPath + "/lib/ids/NaturalModuleIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/OccurrenceChunkIdsPlugin.js")} */
get OccurrenceChunkIdsPlugin(){ return require(webpackPath + "/lib/ids/OccurrenceChunkIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/ids/OccurrenceModuleIdsPlugin.js")} */
get OccurrenceModuleIdsPlugin(){ return require(webpackPath + "/lib/ids/OccurrenceModuleIdsPlugin.js"); },
},
javascript: {
/** @type {typeof import("webpack/lib/javascript/EnableChunkLoadingPlugin.js")} */
get EnableChunkLoadingPlugin(){ return require(webpackPath + "/lib/javascript/EnableChunkLoadingPlugin.js"); },
/** @type {typeof import("webpack/lib/javascript/JavascriptModulesPlugin.js")} */
get JavascriptModulesPlugin(){ return require(webpackPath + "/lib/javascript/JavascriptModulesPlugin.js"); },
},
library: {
/** @type {typeof import("webpack/lib/library/AbstractLibraryPlugin.js")} */
get AbstractLibraryPlugin(){ return require(webpackPath + "/lib/library/AbstractLibraryPlugin.js"); },
/** @type {typeof import("webpack/lib/library/EnableLibraryPlugin.js")} */
get EnableLibraryPlugin(){ return require(webpackPath + "/lib/library/EnableLibraryPlugin.js"); },
},
node: {
/** @type {typeof import("webpack/lib/node/NodeEnvironmentPlugin.js")} */
get NodeEnvironmentPlugin(){ return require(webpackPath + "/lib/node/NodeEnvironmentPlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeSourcePlugin.js")} */
get NodeSourcePlugin(){ return require(webpackPath + "/lib/node/NodeSourcePlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeTargetPlugin.js")} */
get NodeTargetPlugin(){ return require(webpackPath + "/lib/node/NodeTargetPlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeTemplatePlugin.js")} */
get NodeTemplatePlugin(){ return require(webpackPath + "/lib/node/NodeTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/node/ReadFileCompileWasmPlugin.js")} */
get ReadFileCompileWasmPlugin(){ return require(webpackPath + "/lib/node/ReadFileCompileWasmPlugin.js"); },
},
optimize: {
/** @type {typeof import("webpack/lib/optimize/AggressiveMergingPlugin.js")} */
get AggressiveMergingPlugin(){ return require(webpackPath + "/lib/optimize/AggressiveMergingPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/AggressiveSplittingPlugin.js")} */
get AggressiveSplittingPlugin(){ return require(webpackPath + "/lib/optimize/AggressiveSplittingPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/LimitChunkCountPlugin.js")} */
get LimitChunkCountPlugin(){ return require(webpackPath + "/lib/optimize/LimitChunkCountPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/MinChunkSizePlugin.js")} */
get MinChunkSizePlugin(){ return require(webpackPath + "/lib/optimize/MinChunkSizePlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/ModuleConcatenationPlugin.js")} */
get ModuleConcatenationPlugin(){ return require(webpackPath + "/lib/optimize/ModuleConcatenationPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/RuntimeChunkPlugin.js")} */
get RuntimeChunkPlugin(){ return require(webpackPath + "/lib/optimize/RuntimeChunkPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/SideEffectsFlagPlugin.js")} */
get SideEffectsFlagPlugin(){ return require(webpackPath + "/lib/optimize/SideEffectsFlagPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/SplitChunksPlugin.js")} */
get SplitChunksPlugin(){ return require(webpackPath + "/lib/optimize/SplitChunksPlugin.js"); },
},
prefetch: {
/** @type {typeof import("webpack/lib/prefetch/ChunkPrefetchPreloadPlugin.js")} */
get ChunkPrefetchPreloadPlugin(){ return require(webpackPath + "/lib/prefetch/ChunkPrefetchPreloadPlugin.js"); },
},
sharing: {
/** @type {typeof import("webpack/lib/sharing/ConsumeSharedPlugin.js")} */
get ConsumeSharedPlugin(){ return require(webpackPath + "/lib/sharing/ConsumeSharedPlugin.js"); },
/** @type {typeof import("webpack/lib/sharing/ProvideSharedPlugin.js")} */
get ProvideSharedPlugin(){ return require(webpackPath + "/lib/sharing/ProvideSharedPlugin.js"); },
/** @type {typeof import("webpack/lib/sharing/SharePlugin.js")} */
get SharePlugin(){ return require(webpackPath + "/lib/sharing/SharePlugin.js"); },
},
wasm: {
/** @type {typeof import("webpack/lib/wasm-async/AsyncWebAssemblyModulesPlugin.js")} */
get AsyncWebAssemblyModulesPlugin(){ return require(webpackPath + "/lib/wasm-async/AsyncWebAssemblyModulesPlugin.js"); },
},
web: {
/** @type {typeof import("webpack/lib/web/FetchCompileAsyncWasmPlugin.js")} */
get FetchCompileAsyncWasmPlugin(){ return require(webpackPath + "/lib/web/FetchCompileAsyncWasmPlugin.js"); },
/** @type {typeof import("webpack/lib/web/FetchCompileWasmPlugin.js")} */
get FetchCompileWasmPlugin(){ return require(webpackPath + "/lib/web/FetchCompileWasmPlugin.js"); },
/** @type {typeof import("webpack/lib/web/JsonpTemplatePlugin.js")} */
get JsonpTemplatePlugin(){ return require(webpackPath + "/lib/web/JsonpTemplatePlugin.js"); },
},
webworker: {
/** @type {typeof import("webpack/lib/webworker/WebWorkerTemplatePlugin.js")} */
get WebWorkerTemplatePlugin(){ return require(webpackPath + "/lib/webworker/WebWorkerTemplatePlugin.js"); },
},

});
