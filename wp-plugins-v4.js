/** 
 * @typedef {Object} WebpackPlugins
 * @property {typeof import("webpack/lib/APIPlugin.js")} APIPlugin 
 * @property {typeof import("webpack/lib/AmdMainTemplatePlugin.js")} AmdMainTemplatePlugin 
 * @property {typeof import("webpack/lib/AutomaticPrefetchPlugin.js")} AutomaticPrefetchPlugin 
 * @property {typeof import("webpack/lib/BannerPlugin.js")} BannerPlugin 
 * @property {typeof import("webpack/lib/CachePlugin.js")} CachePlugin 
 * @property {typeof import("webpack/lib/CommonJsStuffPlugin.js")} CommonJsStuffPlugin 
 * @property {typeof import("webpack/lib/CompatibilityPlugin.js")} CompatibilityPlugin 
 * @property {typeof import("webpack/lib/ConstPlugin.js")} ConstPlugin 
 * @property {typeof import("webpack/lib/ContextExclusionPlugin.js")} ContextExclusionPlugin 
 * @property {typeof import("webpack/lib/ContextReplacementPlugin.js")} ContextReplacementPlugin 
 * @property {typeof import("webpack/lib/DefinePlugin.js")} DefinePlugin 
 * @property {typeof import("webpack/lib/DelegatedModuleFactoryPlugin.js")} DelegatedModuleFactoryPlugin 
 * @property {typeof import("webpack/lib/DelegatedPlugin.js")} DelegatedPlugin 
 * @property {typeof import("webpack/lib/DllEntryPlugin.js")} DllEntryPlugin 
 * @property {typeof import("webpack/lib/DllPlugin.js")} DllPlugin 
 * @property {typeof import("webpack/lib/DllReferencePlugin.js")} DllReferencePlugin 
 * @property {typeof import("webpack/lib/DynamicEntryPlugin.js")} DynamicEntryPlugin 
 * @property {typeof import("webpack/lib/EntryOptionPlugin.js")} EntryOptionPlugin 
 * @property {typeof import("webpack/lib/EnvironmentPlugin.js")} EnvironmentPlugin 
 * @property {typeof import("webpack/lib/EvalDevToolModulePlugin.js")} EvalDevToolModulePlugin 
 * @property {typeof import("webpack/lib/EvalDevToolModuleTemplatePlugin.js")} EvalDevToolModuleTemplatePlugin 
 * @property {typeof import("webpack/lib/EvalSourceMapDevToolModuleTemplatePlugin.js")} EvalSourceMapDevToolModuleTemplatePlugin 
 * @property {typeof import("webpack/lib/EvalSourceMapDevToolPlugin.js")} EvalSourceMapDevToolPlugin 
 * @property {typeof import("webpack/lib/ExportPropertyMainTemplatePlugin.js")} ExportPropertyMainTemplatePlugin 
 * @property {typeof import("webpack/lib/ExtendedAPIPlugin.js")} ExtendedAPIPlugin 
 * @property {typeof import("webpack/lib/ExternalModuleFactoryPlugin.js")} ExternalModuleFactoryPlugin 
 * @property {typeof import("webpack/lib/ExternalsPlugin.js")} ExternalsPlugin 
 * @property {typeof import("webpack/lib/FlagAllModulesAsUsedPlugin.js")} FlagAllModulesAsUsedPlugin 
 * @property {typeof import("webpack/lib/FlagDependencyExportsPlugin.js")} FlagDependencyExportsPlugin 
 * @property {typeof import("webpack/lib/FlagDependencyUsagePlugin.js")} FlagDependencyUsagePlugin 
 * @property {typeof import("webpack/lib/FlagInitialModulesAsUsedPlugin.js")} FlagInitialModulesAsUsedPlugin 
 * @property {typeof import("webpack/lib/FunctionModulePlugin.js")} FunctionModulePlugin 
 * @property {typeof import("webpack/lib/FunctionModuleTemplatePlugin.js")} FunctionModuleTemplatePlugin 
 * @property {typeof import("webpack/lib/HashedModuleIdsPlugin.js")} HashedModuleIdsPlugin 
 * @property {typeof import("webpack/lib/HotModuleReplacementPlugin.js")} HotModuleReplacementPlugin 
 * @property {typeof import("webpack/lib/IgnorePlugin.js")} IgnorePlugin 
 * @property {typeof import("webpack/lib/JavascriptModulesPlugin.js")} JavascriptModulesPlugin 
 * @property {typeof import("webpack/lib/JsonModulesPlugin.js")} JsonModulesPlugin 
 * @property {typeof import("webpack/lib/LibManifestPlugin.js")} LibManifestPlugin 
 * @property {typeof import("webpack/lib/LibraryTemplatePlugin.js")} LibraryTemplatePlugin 
 * @property {typeof import("webpack/lib/LoaderOptionsPlugin.js")} LoaderOptionsPlugin 
 * @property {typeof import("webpack/lib/LoaderTargetPlugin.js")} LoaderTargetPlugin 
 * @property {typeof import("webpack/lib/MultiEntryPlugin.js")} MultiEntryPlugin 
 * @property {typeof import("webpack/lib/NamedChunksPlugin.js")} NamedChunksPlugin 
 * @property {typeof import("webpack/lib/NamedModulesPlugin.js")} NamedModulesPlugin 
 * @property {typeof import("webpack/lib/NoEmitOnErrorsPlugin.js")} NoEmitOnErrorsPlugin 
 * @property {typeof import("webpack/lib/node/NodeEnvironmentPlugin.js")} NodeEnvironmentPlugin 
 * @property {typeof import("webpack/lib/NodeStuffPlugin.js")} NodeStuffPlugin 
 * @property {typeof import("webpack/lib/NormalModuleReplacementPlugin.js")} NormalModuleReplacementPlugin 
 * @property {typeof import("webpack/lib/PrefetchPlugin.js")} PrefetchPlugin 
 * @property {typeof import("webpack/lib/ProgressPlugin.js")} ProgressPlugin 
 * @property {typeof import("webpack/lib/ProvidePlugin.js")} ProvidePlugin 
 * @property {typeof import("webpack/lib/RecordIdsPlugin.js")} RecordIdsPlugin 
 * @property {typeof import("webpack/lib/RequireJsStuffPlugin.js")} RequireJsStuffPlugin 
 * @property {typeof import("webpack/lib/SetVarMainTemplatePlugin.js")} SetVarMainTemplatePlugin 
 * @property {typeof import("webpack/lib/SingleEntryPlugin.js")} SingleEntryPlugin 
 * @property {typeof import("webpack/lib/SourceMapDevToolModuleOptionsPlugin.js")} SourceMapDevToolModuleOptionsPlugin 
 * @property {typeof import("webpack/lib/SourceMapDevToolPlugin.js")} SourceMapDevToolPlugin 
 * @property {typeof import("webpack/lib/SystemMainTemplatePlugin.js")} SystemMainTemplatePlugin 
 * @property {typeof import("webpack/lib/TemplatedPathPlugin.js")} TemplatedPathPlugin 
 * @property {typeof import("webpack/lib/UmdMainTemplatePlugin.js")} UmdMainTemplatePlugin 
 * @property {typeof import("webpack/lib/UseStrictPlugin.js")} UseStrictPlugin 
 * @property {typeof import("webpack/lib/WarnCaseSensitiveModulesPlugin.js")} WarnCaseSensitiveModulesPlugin 
 * @property {typeof import("webpack/lib/WarnNoModeSetPlugin.js")} WarnNoModeSetPlugin 
 * @property {typeof import("webpack/lib/WatchIgnorePlugin.js")} WatchIgnorePlugin 
 * @property {typeof import("webpack/lib/debug/ProfilingPlugin.js")} debug.ProfilingPlugin 
 * @property {typeof import("webpack/lib/dependencies/AMDDefineDependencyParserPlugin.js")} dependencies.AMDDefineDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/AMDPlugin.js")} dependencies.AMDPlugin 
 * @property {typeof import("webpack/lib/dependencies/AMDRequireDependenciesBlockParserPlugin.js")} dependencies.AMDRequireDependenciesBlockParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/CommonJsPlugin.js")} dependencies.CommonJsPlugin 
 * @property {typeof import("webpack/lib/dependencies/CommonJsRequireDependencyParserPlugin.js")} dependencies.CommonJsRequireDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/HarmonyDetectionParserPlugin.js")} dependencies.HarmonyDetectionParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/HarmonyExportDependencyParserPlugin.js")} dependencies.HarmonyExportDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/HarmonyImportDependencyParserPlugin.js")} dependencies.HarmonyImportDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/HarmonyModulesPlugin.js")} dependencies.HarmonyModulesPlugin 
 * @property {typeof import("webpack/lib/dependencies/HarmonyTopLevelThisParserPlugin.js")} dependencies.HarmonyTopLevelThisParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/ImportParserPlugin.js")} dependencies.ImportParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/ImportPlugin.js")} dependencies.ImportPlugin 
 * @property {typeof import("webpack/lib/dependencies/LoaderPlugin.js")} dependencies.LoaderPlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireContextDependencyParserPlugin.js")} dependencies.RequireContextDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireContextPlugin.js")} dependencies.RequireContextPlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireEnsureDependenciesBlockParserPlugin.js")} dependencies.RequireEnsureDependenciesBlockParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireEnsurePlugin.js")} dependencies.RequireEnsurePlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireIncludeDependencyParserPlugin.js")} dependencies.RequireIncludeDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireIncludePlugin.js")} dependencies.RequireIncludePlugin 
 * @property {typeof import("webpack/lib/dependencies/RequireResolveDependencyParserPlugin.js")} dependencies.RequireResolveDependencyParserPlugin 
 * @property {typeof import("webpack/lib/dependencies/SystemPlugin.js")} dependencies.SystemPlugin 
 * @property {typeof import("webpack/lib/node/NodeChunkTemplatePlugin.js")} node.NodeChunkTemplatePlugin 
 * @property {typeof import("webpack/lib/node/NodeEnvironmentPlugin.js")} node.NodeEnvironmentPlugin 
 * @property {typeof import("webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js")} node.NodeHotUpdateChunkTemplatePlugin 
 * @property {typeof import("webpack/lib/node/NodeMainTemplatePlugin.js")} node.NodeMainTemplatePlugin 
 * @property {typeof import("webpack/lib/node/NodeSourcePlugin.js")} node.NodeSourcePlugin 
 * @property {typeof import("webpack/lib/node/NodeTargetPlugin.js")} node.NodeTargetPlugin 
 * @property {typeof import("webpack/lib/node/NodeTemplatePlugin.js")} node.NodeTemplatePlugin 
 * @property {typeof import("webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js")} node.ReadFileCompileWasmTemplatePlugin 
 * @property {typeof import("webpack/lib/optimize/AggressiveMergingPlugin.js")} optimize.AggressiveMergingPlugin 
 * @property {typeof import("webpack/lib/optimize/AggressiveSplittingPlugin.js")} optimize.AggressiveSplittingPlugin 
 * @property {typeof import("webpack/lib/optimize/ChunkModuleIdRangePlugin.js")} optimize.ChunkModuleIdRangePlugin 
 * @property {typeof import("webpack/lib/optimize/EnsureChunkConditionsPlugin.js")} optimize.EnsureChunkConditionsPlugin 
 * @property {typeof import("webpack/lib/optimize/FlagIncludedChunksPlugin.js")} optimize.FlagIncludedChunksPlugin 
 * @property {typeof import("webpack/lib/optimize/LimitChunkCountPlugin.js")} optimize.LimitChunkCountPlugin 
 * @property {typeof import("webpack/lib/optimize/MergeDuplicateChunksPlugin.js")} optimize.MergeDuplicateChunksPlugin 
 * @property {typeof import("webpack/lib/optimize/MinChunkSizePlugin.js")} optimize.MinChunkSizePlugin 
 * @property {typeof import("webpack/lib/optimize/ModuleConcatenationPlugin.js")} optimize.ModuleConcatenationPlugin 
 * @property {typeof import("webpack/lib/optimize/NaturalChunkOrderPlugin.js")} optimize.NaturalChunkOrderPlugin 
 * @property {typeof import("webpack/lib/optimize/OccurrenceChunkOrderPlugin.js")} optimize.OccurrenceChunkOrderPlugin 
 * @property {typeof import("webpack/lib/optimize/OccurrenceModuleOrderPlugin.js")} optimize.OccurrenceModuleOrderPlugin 
 * @property {typeof import("webpack/lib/optimize/OccurrenceOrderPlugin.js")} optimize.OccurrenceOrderPlugin 
 * @property {typeof import("webpack/lib/optimize/RemoveEmptyChunksPlugin.js")} optimize.RemoveEmptyChunksPlugin 
 * @property {typeof import("webpack/lib/optimize/RemoveParentModulesPlugin.js")} optimize.RemoveParentModulesPlugin 
 * @property {typeof import("webpack/lib/optimize/RuntimeChunkPlugin.js")} optimize.RuntimeChunkPlugin 
 * @property {typeof import("webpack/lib/optimize/SideEffectsFlagPlugin.js")} optimize.SideEffectsFlagPlugin 
 * @property {typeof import("webpack/lib/optimize/SplitChunksPlugin.js")} optimize.SplitChunksPlugin 
 * @property {typeof import("webpack/lib/performance/SizeLimitsPlugin.js")} performance.SizeLimitsPlugin 
 * @property {typeof import("webpack/lib/wasm/WasmFinalizeExportsPlugin.js")} wasm.WasmFinalizeExportsPlugin 
 * @property {typeof import("webpack/lib/wasm/WasmMainTemplatePlugin.js")} wasm.WasmMainTemplatePlugin 
 * @property {typeof import("webpack/lib/wasm/WebAssemblyModulesPlugin.js")} wasm.WebAssemblyModulesPlugin 
 * @property {typeof import("webpack/lib/web/FetchCompileWasmTemplatePlugin.js")} web.FetchCompileWasmTemplatePlugin 
 * @property {typeof import("webpack/lib/web/JsonpChunkTemplatePlugin.js")} web.JsonpChunkTemplatePlugin 
 * @property {typeof import("webpack/lib/web/JsonpExportMainTemplatePlugin.js")} web.JsonpExportMainTemplatePlugin 
 * @property {typeof import("webpack/lib/web/JsonpHotUpdateChunkTemplatePlugin.js")} web.JsonpHotUpdateChunkTemplatePlugin 
 * @property {typeof import("webpack/lib/web/JsonpMainTemplatePlugin.js")} web.JsonpMainTemplatePlugin 
 * @property {typeof import("webpack/lib/web/JsonpTemplatePlugin.js")} web.JsonpTemplatePlugin 
 * @property {typeof import("webpack/lib/web/WebEnvironmentPlugin.js")} web.WebEnvironmentPlugin 
 * @property {typeof import("webpack/lib/webworker/WebWorkerChunkTemplatePlugin.js")} webworker.WebWorkerChunkTemplatePlugin 
 * @property {typeof import("webpack/lib/webworker/WebWorkerHotUpdateChunkTemplatePlugin.js")} webworker.WebWorkerHotUpdateChunkTemplatePlugin 
 * @property {typeof import("webpack/lib/webworker/WebWorkerMainTemplatePlugin.js")} webworker.WebWorkerMainTemplatePlugin 
 * @property {typeof import("webpack/lib/webworker/WebWorkerTemplatePlugin.js")} webworker.WebWorkerTemplatePlugin 
 */

/** 
 * Given a webpack@4 path return a list of plugins 
 * 
 * @param {String} webpackPath 
 * @returns {WebpackPlugins} 
 */
module.exports = (webpackPath) => ({
/** @type {typeof import("webpack/lib/APIPlugin.js")} */
get APIPlugin(){ return require(webpackPath + "/lib/APIPlugin.js"); },
/** @type {typeof import("webpack/lib/AmdMainTemplatePlugin.js")} */
get AmdMainTemplatePlugin(){ return require(webpackPath + "/lib/AmdMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/AutomaticPrefetchPlugin.js")} */
get AutomaticPrefetchPlugin(){ return require(webpackPath + "/lib/AutomaticPrefetchPlugin.js"); },
/** @type {typeof import("webpack/lib/BannerPlugin.js")} */
get BannerPlugin(){ return require(webpackPath + "/lib/BannerPlugin.js"); },
/** @type {typeof import("webpack/lib/CachePlugin.js")} */
get CachePlugin(){ return require(webpackPath + "/lib/CachePlugin.js"); },
/** @type {typeof import("webpack/lib/CommonJsStuffPlugin.js")} */
get CommonJsStuffPlugin(){ return require(webpackPath + "/lib/CommonJsStuffPlugin.js"); },
/** @type {typeof import("webpack/lib/CompatibilityPlugin.js")} */
get CompatibilityPlugin(){ return require(webpackPath + "/lib/CompatibilityPlugin.js"); },
/** @type {typeof import("webpack/lib/ConstPlugin.js")} */
get ConstPlugin(){ return require(webpackPath + "/lib/ConstPlugin.js"); },
/** @type {typeof import("webpack/lib/ContextExclusionPlugin.js")} */
get ContextExclusionPlugin(){ return require(webpackPath + "/lib/ContextExclusionPlugin.js"); },
/** @type {typeof import("webpack/lib/ContextReplacementPlugin.js")} */
get ContextReplacementPlugin(){ return require(webpackPath + "/lib/ContextReplacementPlugin.js"); },
/** @type {typeof import("webpack/lib/DefinePlugin.js")} */
get DefinePlugin(){ return require(webpackPath + "/lib/DefinePlugin.js"); },
/** @type {typeof import("webpack/lib/DelegatedModuleFactoryPlugin.js")} */
get DelegatedModuleFactoryPlugin(){ return require(webpackPath + "/lib/DelegatedModuleFactoryPlugin.js"); },
/** @type {typeof import("webpack/lib/DelegatedPlugin.js")} */
get DelegatedPlugin(){ return require(webpackPath + "/lib/DelegatedPlugin.js"); },
/** @type {typeof import("webpack/lib/DllEntryPlugin.js")} */
get DllEntryPlugin(){ return require(webpackPath + "/lib/DllEntryPlugin.js"); },
/** @type {typeof import("webpack/lib/DllPlugin.js")} */
get DllPlugin(){ return require(webpackPath + "/lib/DllPlugin.js"); },
/** @type {typeof import("webpack/lib/DllReferencePlugin.js")} */
get DllReferencePlugin(){ return require(webpackPath + "/lib/DllReferencePlugin.js"); },
/** @type {typeof import("webpack/lib/DynamicEntryPlugin.js")} */
get DynamicEntryPlugin(){ return require(webpackPath + "/lib/DynamicEntryPlugin.js"); },
/** @type {typeof import("webpack/lib/EntryOptionPlugin.js")} */
get EntryOptionPlugin(){ return require(webpackPath + "/lib/EntryOptionPlugin.js"); },
/** @type {typeof import("webpack/lib/EnvironmentPlugin.js")} */
get EnvironmentPlugin(){ return require(webpackPath + "/lib/EnvironmentPlugin.js"); },
/** @type {typeof import("webpack/lib/EvalDevToolModulePlugin.js")} */
get EvalDevToolModulePlugin(){ return require(webpackPath + "/lib/EvalDevToolModulePlugin.js"); },
/** @type {typeof import("webpack/lib/EvalDevToolModuleTemplatePlugin.js")} */
get EvalDevToolModuleTemplatePlugin(){ return require(webpackPath + "/lib/EvalDevToolModuleTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/EvalSourceMapDevToolModuleTemplatePlugin.js")} */
get EvalSourceMapDevToolModuleTemplatePlugin(){ return require(webpackPath + "/lib/EvalSourceMapDevToolModuleTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/EvalSourceMapDevToolPlugin.js")} */
get EvalSourceMapDevToolPlugin(){ return require(webpackPath + "/lib/EvalSourceMapDevToolPlugin.js"); },
/** @type {typeof import("webpack/lib/ExportPropertyMainTemplatePlugin.js")} */
get ExportPropertyMainTemplatePlugin(){ return require(webpackPath + "/lib/ExportPropertyMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/ExtendedAPIPlugin.js")} */
get ExtendedAPIPlugin(){ return require(webpackPath + "/lib/ExtendedAPIPlugin.js"); },
/** @type {typeof import("webpack/lib/ExternalModuleFactoryPlugin.js")} */
get ExternalModuleFactoryPlugin(){ return require(webpackPath + "/lib/ExternalModuleFactoryPlugin.js"); },
/** @type {typeof import("webpack/lib/ExternalsPlugin.js")} */
get ExternalsPlugin(){ return require(webpackPath + "/lib/ExternalsPlugin.js"); },
/** @type {typeof import("webpack/lib/FlagAllModulesAsUsedPlugin.js")} */
get FlagAllModulesAsUsedPlugin(){ return require(webpackPath + "/lib/FlagAllModulesAsUsedPlugin.js"); },
/** @type {typeof import("webpack/lib/FlagDependencyExportsPlugin.js")} */
get FlagDependencyExportsPlugin(){ return require(webpackPath + "/lib/FlagDependencyExportsPlugin.js"); },
/** @type {typeof import("webpack/lib/FlagDependencyUsagePlugin.js")} */
get FlagDependencyUsagePlugin(){ return require(webpackPath + "/lib/FlagDependencyUsagePlugin.js"); },
/** @type {typeof import("webpack/lib/FlagInitialModulesAsUsedPlugin.js")} */
get FlagInitialModulesAsUsedPlugin(){ return require(webpackPath + "/lib/FlagInitialModulesAsUsedPlugin.js"); },
/** @type {typeof import("webpack/lib/FunctionModulePlugin.js")} */
get FunctionModulePlugin(){ return require(webpackPath + "/lib/FunctionModulePlugin.js"); },
/** @type {typeof import("webpack/lib/FunctionModuleTemplatePlugin.js")} */
get FunctionModuleTemplatePlugin(){ return require(webpackPath + "/lib/FunctionModuleTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/HashedModuleIdsPlugin.js")} */
get HashedModuleIdsPlugin(){ return require(webpackPath + "/lib/HashedModuleIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/HotModuleReplacementPlugin.js")} */
get HotModuleReplacementPlugin(){ return require(webpackPath + "/lib/HotModuleReplacementPlugin.js"); },
/** @type {typeof import("webpack/lib/IgnorePlugin.js")} */
get IgnorePlugin(){ return require(webpackPath + "/lib/IgnorePlugin.js"); },
/** @type {typeof import("webpack/lib/JavascriptModulesPlugin.js")} */
get JavascriptModulesPlugin(){ return require(webpackPath + "/lib/JavascriptModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/JsonModulesPlugin.js")} */
get JsonModulesPlugin(){ return require(webpackPath + "/lib/JsonModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/LibManifestPlugin.js")} */
get LibManifestPlugin(){ return require(webpackPath + "/lib/LibManifestPlugin.js"); },
/** @type {typeof import("webpack/lib/LibraryTemplatePlugin.js")} */
get LibraryTemplatePlugin(){ return require(webpackPath + "/lib/LibraryTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/LoaderOptionsPlugin.js")} */
get LoaderOptionsPlugin(){ return require(webpackPath + "/lib/LoaderOptionsPlugin.js"); },
/** @type {typeof import("webpack/lib/LoaderTargetPlugin.js")} */
get LoaderTargetPlugin(){ return require(webpackPath + "/lib/LoaderTargetPlugin.js"); },
/** @type {typeof import("webpack/lib/MultiEntryPlugin.js")} */
get MultiEntryPlugin(){ return require(webpackPath + "/lib/MultiEntryPlugin.js"); },
/** @type {typeof import("webpack/lib/NamedChunksPlugin.js")} */
get NamedChunksPlugin(){ return require(webpackPath + "/lib/NamedChunksPlugin.js"); },
/** @type {typeof import("webpack/lib/NamedModulesPlugin.js")} */
get NamedModulesPlugin(){ return require(webpackPath + "/lib/NamedModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/NoEmitOnErrorsPlugin.js")} */
get NoEmitOnErrorsPlugin(){ return require(webpackPath + "/lib/NoEmitOnErrorsPlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeEnvironmentPlugin.js")} */
get NodeEnvironmentPlugin(){ return require(webpackPath + "/lib/node/NodeEnvironmentPlugin.js"); },
/** @type {typeof import("webpack/lib/NodeStuffPlugin.js")} */
get NodeStuffPlugin(){ return require(webpackPath + "/lib/NodeStuffPlugin.js"); },
/** @type {typeof import("webpack/lib/NormalModuleReplacementPlugin.js")} */
get NormalModuleReplacementPlugin(){ return require(webpackPath + "/lib/NormalModuleReplacementPlugin.js"); },
/** @type {typeof import("webpack/lib/PrefetchPlugin.js")} */
get PrefetchPlugin(){ return require(webpackPath + "/lib/PrefetchPlugin.js"); },
/** @type {typeof import("webpack/lib/ProgressPlugin.js")} */
get ProgressPlugin(){ return require(webpackPath + "/lib/ProgressPlugin.js"); },
/** @type {typeof import("webpack/lib/ProvidePlugin.js")} */
get ProvidePlugin(){ return require(webpackPath + "/lib/ProvidePlugin.js"); },
/** @type {typeof import("webpack/lib/RecordIdsPlugin.js")} */
get RecordIdsPlugin(){ return require(webpackPath + "/lib/RecordIdsPlugin.js"); },
/** @type {typeof import("webpack/lib/RequireJsStuffPlugin.js")} */
get RequireJsStuffPlugin(){ return require(webpackPath + "/lib/RequireJsStuffPlugin.js"); },
/** @type {typeof import("webpack/lib/SetVarMainTemplatePlugin.js")} */
get SetVarMainTemplatePlugin(){ return require(webpackPath + "/lib/SetVarMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/SingleEntryPlugin.js")} */
get SingleEntryPlugin(){ return require(webpackPath + "/lib/SingleEntryPlugin.js"); },
/** @type {typeof import("webpack/lib/SourceMapDevToolModuleOptionsPlugin.js")} */
get SourceMapDevToolModuleOptionsPlugin(){ return require(webpackPath + "/lib/SourceMapDevToolModuleOptionsPlugin.js"); },
/** @type {typeof import("webpack/lib/SourceMapDevToolPlugin.js")} */
get SourceMapDevToolPlugin(){ return require(webpackPath + "/lib/SourceMapDevToolPlugin.js"); },
/** @type {typeof import("webpack/lib/SystemMainTemplatePlugin.js")} */
get SystemMainTemplatePlugin(){ return require(webpackPath + "/lib/SystemMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/TemplatedPathPlugin.js")} */
get TemplatedPathPlugin(){ return require(webpackPath + "/lib/TemplatedPathPlugin.js"); },
/** @type {typeof import("webpack/lib/UmdMainTemplatePlugin.js")} */
get UmdMainTemplatePlugin(){ return require(webpackPath + "/lib/UmdMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/UseStrictPlugin.js")} */
get UseStrictPlugin(){ return require(webpackPath + "/lib/UseStrictPlugin.js"); },
/** @type {typeof import("webpack/lib/WarnCaseSensitiveModulesPlugin.js")} */
get WarnCaseSensitiveModulesPlugin(){ return require(webpackPath + "/lib/WarnCaseSensitiveModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/WarnNoModeSetPlugin.js")} */
get WarnNoModeSetPlugin(){ return require(webpackPath + "/lib/WarnNoModeSetPlugin.js"); },
/** @type {typeof import("webpack/lib/WatchIgnorePlugin.js")} */
get WatchIgnorePlugin(){ return require(webpackPath + "/lib/WatchIgnorePlugin.js"); },
debug: {
/** @type {typeof import("webpack/lib/debug/ProfilingPlugin.js")} */
get ProfilingPlugin(){ return require(webpackPath + "/lib/debug/ProfilingPlugin.js"); },
},
dependencies: {
/** @type {typeof import("webpack/lib/dependencies/AMDDefineDependencyParserPlugin.js")} */
get AMDDefineDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/AMDDefineDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/AMDPlugin.js")} */
get AMDPlugin(){ return require(webpackPath + "/lib/dependencies/AMDPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/AMDRequireDependenciesBlockParserPlugin.js")} */
get AMDRequireDependenciesBlockParserPlugin(){ return require(webpackPath + "/lib/dependencies/AMDRequireDependenciesBlockParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/CommonJsPlugin.js")} */
get CommonJsPlugin(){ return require(webpackPath + "/lib/dependencies/CommonJsPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/CommonJsRequireDependencyParserPlugin.js")} */
get CommonJsRequireDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/CommonJsRequireDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/HarmonyDetectionParserPlugin.js")} */
get HarmonyDetectionParserPlugin(){ return require(webpackPath + "/lib/dependencies/HarmonyDetectionParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/HarmonyExportDependencyParserPlugin.js")} */
get HarmonyExportDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/HarmonyExportDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/HarmonyImportDependencyParserPlugin.js")} */
get HarmonyImportDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/HarmonyImportDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/HarmonyModulesPlugin.js")} */
get HarmonyModulesPlugin(){ return require(webpackPath + "/lib/dependencies/HarmonyModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/HarmonyTopLevelThisParserPlugin.js")} */
get HarmonyTopLevelThisParserPlugin(){ return require(webpackPath + "/lib/dependencies/HarmonyTopLevelThisParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/ImportParserPlugin.js")} */
get ImportParserPlugin(){ return require(webpackPath + "/lib/dependencies/ImportParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/ImportPlugin.js")} */
get ImportPlugin(){ return require(webpackPath + "/lib/dependencies/ImportPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/LoaderPlugin.js")} */
get LoaderPlugin(){ return require(webpackPath + "/lib/dependencies/LoaderPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireContextDependencyParserPlugin.js")} */
get RequireContextDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/RequireContextDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireContextPlugin.js")} */
get RequireContextPlugin(){ return require(webpackPath + "/lib/dependencies/RequireContextPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireEnsureDependenciesBlockParserPlugin.js")} */
get RequireEnsureDependenciesBlockParserPlugin(){ return require(webpackPath + "/lib/dependencies/RequireEnsureDependenciesBlockParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireEnsurePlugin.js")} */
get RequireEnsurePlugin(){ return require(webpackPath + "/lib/dependencies/RequireEnsurePlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireIncludeDependencyParserPlugin.js")} */
get RequireIncludeDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/RequireIncludeDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireIncludePlugin.js")} */
get RequireIncludePlugin(){ return require(webpackPath + "/lib/dependencies/RequireIncludePlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/RequireResolveDependencyParserPlugin.js")} */
get RequireResolveDependencyParserPlugin(){ return require(webpackPath + "/lib/dependencies/RequireResolveDependencyParserPlugin.js"); },
/** @type {typeof import("webpack/lib/dependencies/SystemPlugin.js")} */
get SystemPlugin(){ return require(webpackPath + "/lib/dependencies/SystemPlugin.js"); },
},
node: {
/** @type {typeof import("webpack/lib/node/NodeChunkTemplatePlugin.js")} */
get NodeChunkTemplatePlugin(){ return require(webpackPath + "/lib/node/NodeChunkTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeEnvironmentPlugin.js")} */
get NodeEnvironmentPlugin(){ return require(webpackPath + "/lib/node/NodeEnvironmentPlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js")} */
get NodeHotUpdateChunkTemplatePlugin(){ return require(webpackPath + "/lib/node/NodeHotUpdateChunkTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeMainTemplatePlugin.js")} */
get NodeMainTemplatePlugin(){ return require(webpackPath + "/lib/node/NodeMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeSourcePlugin.js")} */
get NodeSourcePlugin(){ return require(webpackPath + "/lib/node/NodeSourcePlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeTargetPlugin.js")} */
get NodeTargetPlugin(){ return require(webpackPath + "/lib/node/NodeTargetPlugin.js"); },
/** @type {typeof import("webpack/lib/node/NodeTemplatePlugin.js")} */
get NodeTemplatePlugin(){ return require(webpackPath + "/lib/node/NodeTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/node/ReadFileCompileWasmTemplatePlugin.js")} */
get ReadFileCompileWasmTemplatePlugin(){ return require(webpackPath + "/lib/node/ReadFileCompileWasmTemplatePlugin.js"); },
},
optimize: {
/** @type {typeof import("webpack/lib/optimize/AggressiveMergingPlugin.js")} */
get AggressiveMergingPlugin(){ return require(webpackPath + "/lib/optimize/AggressiveMergingPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/AggressiveSplittingPlugin.js")} */
get AggressiveSplittingPlugin(){ return require(webpackPath + "/lib/optimize/AggressiveSplittingPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/ChunkModuleIdRangePlugin.js")} */
get ChunkModuleIdRangePlugin(){ return require(webpackPath + "/lib/optimize/ChunkModuleIdRangePlugin.js"); },
/** @deprecated https://webpack.js.org/plugins/commons-chunk-plugin/ */
get CommonsChunkPlugin(){ throw new Error("CommonsChunkPlugin has been deprecated. For more info visit: https://webpack.js.org/plugins/commons-chunk-plugin/"); },
/** @type {typeof import("webpack/lib/optimize/EnsureChunkConditionsPlugin.js")} */
get EnsureChunkConditionsPlugin(){ return require(webpackPath + "/lib/optimize/EnsureChunkConditionsPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/FlagIncludedChunksPlugin.js")} */
get FlagIncludedChunksPlugin(){ return require(webpackPath + "/lib/optimize/FlagIncludedChunksPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/LimitChunkCountPlugin.js")} */
get LimitChunkCountPlugin(){ return require(webpackPath + "/lib/optimize/LimitChunkCountPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/MergeDuplicateChunksPlugin.js")} */
get MergeDuplicateChunksPlugin(){ return require(webpackPath + "/lib/optimize/MergeDuplicateChunksPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/MinChunkSizePlugin.js")} */
get MinChunkSizePlugin(){ return require(webpackPath + "/lib/optimize/MinChunkSizePlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/ModuleConcatenationPlugin.js")} */
get ModuleConcatenationPlugin(){ return require(webpackPath + "/lib/optimize/ModuleConcatenationPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/NaturalChunkOrderPlugin.js")} */
get NaturalChunkOrderPlugin(){ return require(webpackPath + "/lib/optimize/NaturalChunkOrderPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/OccurrenceChunkOrderPlugin.js")} */
get OccurrenceChunkOrderPlugin(){ return require(webpackPath + "/lib/optimize/OccurrenceChunkOrderPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/OccurrenceModuleOrderPlugin.js")} */
get OccurrenceModuleOrderPlugin(){ return require(webpackPath + "/lib/optimize/OccurrenceModuleOrderPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/OccurrenceOrderPlugin.js")} */
get OccurrenceOrderPlugin(){ return require(webpackPath + "/lib/optimize/OccurrenceOrderPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/RemoveEmptyChunksPlugin.js")} */
get RemoveEmptyChunksPlugin(){ return require(webpackPath + "/lib/optimize/RemoveEmptyChunksPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/RemoveParentModulesPlugin.js")} */
get RemoveParentModulesPlugin(){ return require(webpackPath + "/lib/optimize/RemoveParentModulesPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/RuntimeChunkPlugin.js")} */
get RuntimeChunkPlugin(){ return require(webpackPath + "/lib/optimize/RuntimeChunkPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/SideEffectsFlagPlugin.js")} */
get SideEffectsFlagPlugin(){ return require(webpackPath + "/lib/optimize/SideEffectsFlagPlugin.js"); },
/** @type {typeof import("webpack/lib/optimize/SplitChunksPlugin.js")} */
get SplitChunksPlugin(){ return require(webpackPath + "/lib/optimize/SplitChunksPlugin.js"); },
/** @deprecated https://webpack.js.org/plugins/uglify-js-plugin/ */
get UglifyJsPlugin(){ throw new Error("UglifyJsPlugin has been deprecated. For more info visit: https://webpack.js.org/plugins/uglify-js-plugin/"); },
},
performance: {
/** @type {typeof import("webpack/lib/performance/SizeLimitsPlugin.js")} */
get SizeLimitsPlugin(){ return require(webpackPath + "/lib/performance/SizeLimitsPlugin.js"); },
},
wasm: {
/** @type {typeof import("webpack/lib/wasm/WasmFinalizeExportsPlugin.js")} */
get WasmFinalizeExportsPlugin(){ return require(webpackPath + "/lib/wasm/WasmFinalizeExportsPlugin.js"); },
/** @type {typeof import("webpack/lib/wasm/WasmMainTemplatePlugin.js")} */
get WasmMainTemplatePlugin(){ return require(webpackPath + "/lib/wasm/WasmMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/wasm/WebAssemblyModulesPlugin.js")} */
get WebAssemblyModulesPlugin(){ return require(webpackPath + "/lib/wasm/WebAssemblyModulesPlugin.js"); },
},
web: {
/** @type {typeof import("webpack/lib/web/FetchCompileWasmTemplatePlugin.js")} */
get FetchCompileWasmTemplatePlugin(){ return require(webpackPath + "/lib/web/FetchCompileWasmTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/web/JsonpChunkTemplatePlugin.js")} */
get JsonpChunkTemplatePlugin(){ return require(webpackPath + "/lib/web/JsonpChunkTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/web/JsonpExportMainTemplatePlugin.js")} */
get JsonpExportMainTemplatePlugin(){ return require(webpackPath + "/lib/web/JsonpExportMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/web/JsonpHotUpdateChunkTemplatePlugin.js")} */
get JsonpHotUpdateChunkTemplatePlugin(){ return require(webpackPath + "/lib/web/JsonpHotUpdateChunkTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/web/JsonpMainTemplatePlugin.js")} */
get JsonpMainTemplatePlugin(){ return require(webpackPath + "/lib/web/JsonpMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/web/JsonpTemplatePlugin.js")} */
get JsonpTemplatePlugin(){ return require(webpackPath + "/lib/web/JsonpTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/web/WebEnvironmentPlugin.js")} */
get WebEnvironmentPlugin(){ return require(webpackPath + "/lib/web/WebEnvironmentPlugin.js"); },
},
webworker: {
/** @type {typeof import("webpack/lib/webworker/WebWorkerChunkTemplatePlugin.js")} */
get WebWorkerChunkTemplatePlugin(){ return require(webpackPath + "/lib/webworker/WebWorkerChunkTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/webworker/WebWorkerHotUpdateChunkTemplatePlugin.js")} */
get WebWorkerHotUpdateChunkTemplatePlugin(){ return require(webpackPath + "/lib/webworker/WebWorkerHotUpdateChunkTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/webworker/WebWorkerMainTemplatePlugin.js")} */
get WebWorkerMainTemplatePlugin(){ return require(webpackPath + "/lib/webworker/WebWorkerMainTemplatePlugin.js"); },
/** @type {typeof import("webpack/lib/webworker/WebWorkerTemplatePlugin.js")} */
get WebWorkerTemplatePlugin(){ return require(webpackPath + "/lib/webworker/WebWorkerTemplatePlugin.js"); },
},

});
