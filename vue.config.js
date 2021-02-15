const fs = require('fs');

process.env.VUE_APP_HEADER = fs.readFileSync('./src/html/head.html');
process.env.VUE_APP_FOOTER = fs.readFileSync('./src/html/footer.html');
process.env.VUE_APP_HERO = fs.readFileSync('./src/html/hero.html');
process.env.VUE_APP_NAVBAR_SOLID = fs.readFileSync('./src/html/navbar_solid.html');
process.env.VUE_APP_NAVBAR_TRANS = fs.readFileSync('./src/html/navbar_trans.html');
process.env.VUE_APP_ICON_SECTION = fs.readFileSync('./src/html/icon-section.html');
process.env.VUE_APP_MINI_ICON_SECTION = fs.readFileSync('./src/html/mini-icon-section.html');
process.env.VUE_APP_IMAGE_LEFT = fs.readFileSync('./src/html/image-left.html');
process.env.VUE_APP_IMAGE_RIGHT = fs.readFileSync('./src/html/image-right.html');
process.env.VUE_APP_PRODUCTS = fs.readFileSync('./src/html/products.html');
process.env.VUE_APP_VIDEO = fs.readFileSync('./src/html/video.html');
process.env.VUE_APP_BANNER_STRIP = fs.readFileSync('./src/html/banner-strip.html');
process.env.VUE_APP_COOKIE = fs.readFileSync('./src/html/cookie.html');
process.env.VUE_APP_SIDE_BAR = fs.readFileSync('./src/html/side-bar.html');

module.exports = {
    configureWebpack: {
        resolve: {
            //allow for @ or @src alias for src
            alias: require('./aliases.config').webpack
        }
    },
    chainWebpack: config => {
        //turn off elint for webpack transpile
        config.module.rules.delete('eslint');
    },
    runtimeCompiler: true,
    css: {
        sourceMap: true
    },
    outputDir: process.env.NODE_ENV === 'production' ?
        '../../Amplify.Web' : './dist/',
    assetsDir: 'assets',
    filenameHashing: false,
    pages: {
        'index': {
            entry: './src/main.js',
            template: 'public/home/index.html',
            title: 'Home'
        },
        'contact': {
            entry: './src/main.js',
            template: 'public/contact/index.html',
            title: 'Contact'
        },
        'features': {
            entry: './src/main.js',
            template: 'public/features/index.html',
            title: 'Features'
        },
        'products': {
            entry: './src/main.js',
            template: 'public/products/index.html',
            title: 'Products'
        },
        'product': {
            entry: './src/main.js',
            template: 'public/product/index.html',
            title: 'Product'
        },
        'search': {
            entry: './src/main.js',
            template: 'public/search/index.html',
            title: 'Search'
        },
        'team': {
            entry: './src/main.js',
            template: 'public/team/index.html',
            title: 'Team'
        },
        'profile': {
            entry: './src/main.js',
            template: 'public/profile/index.html',
            title: 'Profile'
        },
        'articles': {
            entry: './src/main.js',
            template: 'public/articles/index.html',
            title: 'Articles'
        },
        'article': {
            entry: './src/main.js',
            template: 'public/article/index.html',
            title: 'Article'
        },
        'sitemap': {
            entry: './src/main.js',
            template: 'public/sitemap/index.html',
            title: 'Sitemap'
        },
        'content-blocks': {
            entry: './src/main.js',
            template: 'public/content-blocks/index.html',
            title: 'Content Blocks'
        },
        'accordion': {
            entry: './src/main.js',
            template: 'public/accordion/index.html',
            title: 'Accordion'
        },
        'banner-strip': {
            entry: './src/main.js',
            template: 'public/banner-strip/index.html',
            title: 'Banner Strip'
        },
        'code': {
            entry: './src/main.js',
            template: 'public/code/index.html',
            title: 'Code'
        },
        'gallery': {
            entry: './src/main.js',
            template: 'public/gallery/index.html',
            title: 'Gallery'
        },
        'images': {
            entry: './src/main.js',
            template: 'public/images/index.html',
            title: 'Images'
        },
        'quote': {
            entry: './src/main.js',
            template: 'public/quote/index.html',
            title: 'Quote'
        },
        'share-links': {
            entry: './src/main.js',
            template: 'public/share-links/index.html',
            title: 'Share Links'
        },
        'slider': {
            entry: './src/main.js',
            template: 'public/slider/index.html',
            title: 'Slider'
        },
        'tabs': {
            entry: './src/main.js',
            template: 'public/tabs/index.html',
            title: 'Tabs'
        },
        'forms': {
            entry: './src/main.js',
            template: 'public/forms/index.html',
            title: 'Forms'
        },
        'video': {
            entry: './src/main.js',
            template: 'public/video/index.html',
            title: 'Video'
        }
    }
}