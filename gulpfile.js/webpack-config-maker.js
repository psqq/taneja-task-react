const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

function makeWebpackConfig({ dev = true, cordova = false }) {
    const config = {
        entry: cordova ?
            './src/index.cordova.ts'
            : './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                // {
                //     enforce: "pre",
                //     test: /\.js$/,
                //     loader: "source-map-loader"
                // }
            ]
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(
                    __dirname,
                    cordova ?
                        '../src/assets/index.cordova.html'
                        : '../src/assets/index.html'
                )
            })
        ]
    };
    if (dev) {
        config.mode = 'development';
        config.devtool = "inline-source-map";
        // config.optimization = {
        //     minimize: true,
        //     minimizer: [new TerserPlugin()],
        // };
    } else {
        config.mode = 'production';
    }
    return config;
}

module.exports = function (configName) {
    return ({
        devbuild: makeWebpackConfig({
            dev: true, cordova: false,
        }),
        prodbuild: makeWebpackConfig({
            dev: false, cordova: false,
        }),
        devbuild_for_cordova: makeWebpackConfig({
            dev: true, cordova: true,
        }),
        prodbuild_for_cordova: makeWebpackConfig({
            dev: false, cordova: true,
        }),
        webpack_dev_server: makeWebpackConfig({
            dev: true, cordova: false,
        }),
    })[configName];
};
