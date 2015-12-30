# postcss-lost-stylus
This is a [node.js](https://nodejs.org/en/) frontend toolchain that uses [gulp](https://www.npmjs.com/package/gulp) as a build system. I find that it helps accelerate the development of responsive website layouts. This early version leverages the benefits of these npm packages:


### [gulp](https://www.npmjs.com/package/gulp)
The streaming build system.

### [gulp-postcss](https://www.npmjs.com/package/gulp-postcss)
[PostCSS](https://www.npmjs.com/package/postcss) gulp plugin to pipe CSS through several processors, but parse CSS only once.

### [autoprefixer](https://www.npmjs.com/package/autoprefixer)
PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter, and Taobao.

### [lost](https://www.npmjs.com/package/lost)
PostCSS fractional grid system built with calc() by [Cory Simmons](https://github.com/corysimmons) (who also built Jeet). Supports masonry, vertical, and waffle grids.

### [gulp-connect](https://www.npmjs.com/package/gulp-connect)
Gulp plugin to run a webserver (with LiveReload)

### [gulp-stylus](https://www.npmjs.com/package/gulp-stylus)
Compile [Stylus](http://stylus-lang.com/) with gulp. Stylus is a dynamic stylesheet language that renders CSS.

### [poststylus](https://www.npmjs.com/package/poststylus)
PostStylus is a PostCSS adapter for Stylus. With it you can use any PostCSS plugin as a transparent Stylus plugin, and do custom post-processing of Stylus output.

