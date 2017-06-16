const path = require('path');
const fs = require('fs');

// Options passed to node-sass
const sassIncludePaths =  [
  path.resolve(__dirname, 'src/styles'),
];

// These files will be imported in every sass file
const sassResourcesPaths = [
  path.resolve(__dirname, 'src/styles/abstracts/_variables.sass'),
  path.resolve(__dirname, 'src/styles/abstracts/_mixins.sass'),
];


module.exports = [
  //  ==============
  //  = SourceMaps =
  //  ==============
  // Get source maps from external node packages
  {
    test: /\.js?$/,
    include: [
      // path.resolve doesn't work: https://github.com/webpack-contrib/source-map-loader/issues/40
      fs.realpathSync('./node_modules/mobx-router5'),
      fs.realpathSync('./node_modules/react-mobx-router5')
    ],
    // exclude: /react-hot-loader/,
    loader: "source-map-loader",
    enforce: "pre"  // This means this is a Prealoader (comes before)
  },

  //  =========
  //  = Babel =
  //  =========
  // Load jsx extensions with babel (so we can use 'import' instead of 'require' and es6 syntax)
  {
    test: /\.jsx?$/,
    include: path.resolve(__dirname, 'src'),
    use: ["babel-loader"]
  },

  //  =========
  //  = Fonts =
  //  =========
  //  =========
  //  = Fonts =
  //  =========
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: ["file-loader"]
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          prefix: "font",
          limit: 5000
        }
      }
    ]
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          prefix: "font",
          limit: 10000,
          mimetype: "application/octet-stream"
        }
      }
    ]
  },

  //  ==========
  //  = Images =
  //  ==========
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/svg+xml"
        }
      }
    ]
  },
  {
    test: /\.gif/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/gif"
        }
      }
    ]
  },
  {
    test: /\.jpg/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/jpg"
        }
      }
    ]
  },
  {
    test: /\.png/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/png",
          name: "[path][name].[ext]"
        }
      }
    ]
  },

  //  ==========
  //  = Styles =
  //  ==========
  //  NB:
  //  - css-loader takes a CSS file and reads off all its dependencies
  //  - style-loader will embed those styles directly into the markup(not when using dev-server)

  // Global CSS (from node_modules)
  // ==============================
  {
    test: /\.css/,
    include: path.resolve(__dirname, "node_modules"),
    // Loaders can be chained by passing multiple loaders, which will be applied from right to left (last to first configured):
    //    - css-loader takes a CSS file and reads off all its dependencies
    //    - style-loader will embed those styles directly into the markup (not when using dev-server)
    // TODO: for prod ==> loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: 'css-loader',
      }
    ]
  },

  // Global ('locals') sass imports.
  // ===============================
  // Do not modularize these imports (leave them as global css styles)
  {
    test: /\.(sass|scss)$/,
    include: path.resolve(__dirname, 'src/styles/base'),
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          camelCase: "dashes",
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: "inline",
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
          outputStyle: "expanded",
          indentedSyntax: "sass",
          includePaths: sassIncludePaths
        }
      },
      {
        loader: "sass-resources-loader",
        options: {
          resources: sassResourcesPaths
        },
      }
    ]
  },

  // Local SASS modules
  // ===================
  {
    test: /\.(sass|scss)$/,
    exclude: path.resolve(__dirname, 'src/styles/base'),
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          camelCase: "dashes",
          importLoaders: 1,
          modules: true,
          localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: "inline",
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
          outputStyle: "expanded",
          indentedSyntax: "sass",
          includePaths: sassIncludePaths
        }
      },
      {
        loader: "sass-resources-loader",
        options: {
          resources: sassResourcesPaths
        },
      }
    ]
  }
];

