var path = require('path');

// Modularized sass files
const sassLoaders = [
  'css-loader?sourceMap&camelCase=dashes&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  'postcss-loader?sourceMap=inline',
  'sass-loader?sourceMap&outputStyle=expanded&indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src/styles'),
  'sass-resources' // NB: the config for sass-resources is in the the webpack config file
];

// Not modularize sass files (globals)
const sassLoadersGloabals = [
  'css-loader?sourceMap&camelCase=dashes&importLoaders=1',
  'postcss-loader?sourceMap=inline',
  'sass-loader?sourceMap&outputStyle=expanded&indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src/styles'),
  'sass-resources' // NB: the config for sass-resources is in the the webpack config file
];


module.exports = [
  //  =========
  //  = Babel =
  //  =========
  // Load these exts with babel (so we can use 'import' instead of 'require' and es6 syntax)
  {
    test: /\.jsx?$/,
    include: __dirname + '/src/',
    loader: "babel"
  },
  //  =========
  //  = Fonts =
  //  =========
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules)/,
    loader: "file"
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules)/,
    loader: "url?prefix=font/&limit=5000"
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules)/,
    loader: "url?limit=10000&mimetype=application/octet-stream"
  },
  //  ==========
  //  = Images =
  //  ==========
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules)/,
    loader: "url?limit=10000&mimetype=image/svg+xml"
  },
  {
    test: /\.gif/,
    exclude: /(node_modules)/,
    loader: "url-loader?limit=10000&mimetype=image/gif"
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules)/,
    loader: "url-loader?limit=10000&mimetype=image/jpg"
  },
  {
    test: /\.png/,
    exclude: /(node_modules)/,
    loader: "url-loader?limit=10000&mimetype=image/png&name=[path][name].[ext]"
  },
  //  ==========
  //  = Styles =
  //  ==========
  //  NB:
  //  - css-loader takes a CSS file and reads off all its dependencies
  //  - style-loader will embed those styles directly into the markup(not when using dev-server)

  // Global CSS (from node_modules)
  {
    test: /\.css$/,
    include: __dirname + '/node_modules',
    loader: 'style-loader!css-loader'
  },
  // Global ('locals') sass imports. Do not modularize these imports (leave them as global css styles)
  {
    test: /\.(sass|scss)$/,
    include: __dirname + '/src/styles/base',
    loader: 'style-loader!' + sassLoadersGloabals.join('!')
  },
  // Local SASS modules
  {
    test: /\.(sass|scss)$/,
    exclude: __dirname + '/src/styles/base',
    loader: 'style-loader!' + sassLoaders.join('!')
  },
];

