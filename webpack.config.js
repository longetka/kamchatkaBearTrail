const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [];
plugins.push(new CleanWebpackPlugin());
plugins.push(
    new HtmlWebpackPlugin(
        {
            title: 'Туры по Камчатке | Главная',
            filename: 'index.html',
            template: './src/templates/index.pug',
        },
      ),
    new HtmlWebpackPlugin(
        {
            title: 'Туры по Камчатке | Однодневные туры',
            filename: 'one-day-tours.html',
            template: './src/templates/one-day-tours.pug',
        },
    ),
    new HtmlWebpackPlugin(
        {
            title: 'Туры по Камчатке | Многодневные туры',
            filename: 'multi-day-tours.html',
            template: './src/templates/multi-day-tours.pug',
        },
    ),
    new HtmlWebpackPlugin(
        {
            title: 'Туры по Камчатке | Карточка тура',
            filename: 'tour-card.html',
            template: './src/templates/tour-cards/tour-card.pug',
        },
    ),
    new HtmlWebpackPlugin(
        {
            title: 'Туры по Камчатке | Контакты и отзывы',
            filename: 'contacts.html',
            template: './src/templates/contacts.pug',
        },
    ),
    new CopyWebpackPlugin({
        patterns: [
            { from: './src/images', to: 'assets/images' },
        ]
    }),
    new MiniCssExtractPlugin(),
    );
if (!devMode) {
    // enable in production only
    plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins,
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: 'pug-loader',
                
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                },
            },
            {
                test: /\.mp4$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts'
                },
            },
        ]
    }
};