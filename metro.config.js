const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  transformer: {
    // Ensures that SVGs are transformed correctly
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Removes 'svg' from assetExts to allow it as a source extension
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    
    // Adds 'svg' to sourceExts so it can be imported as a React component
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

// Merges default and custom Metro configurations
module.exports = mergeConfig(defaultConfig, customConfig);
