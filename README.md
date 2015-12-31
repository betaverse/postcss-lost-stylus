# postcss-lost-stylus
This is a [node.js](https://nodejs.org/en/) front-end toolchain that uses [gulp](https://www.npmjs.com/package/gulp) as a build system. It speeds up the development of responsive layouts. This early version leverages the benefits of these npm packages:


#### [gulp](https://www.npmjs.com/package/gulp)
The streaming build system.

#### [gulp-postcss](https://www.npmjs.com/package/gulp-postcss)
[PostCSS](https://www.npmjs.com/package/postcss) gulp plugin to pipe CSS through several processors, but parse CSS only once.

#### [autoprefixer](https://www.npmjs.com/package/autoprefixer)
PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter, and Taobao.

#### [lost](https://www.npmjs.com/package/lost)
PostCSS fractional grid system built with calc() by [Cory Simmons](https://github.com/corysimmons) (who also built Jeet). Supports masonry, vertical, and waffle grids.

#### [gulp-connect](https://www.npmjs.com/package/gulp-connect)
Gulp plugin to run a webserver (with LiveReload)

#### [gulp-stylus](https://www.npmjs.com/package/gulp-stylus)
Compile [Stylus](http://stylus-lang.com/) with gulp. Stylus is a dynamic stylesheet language that renders CSS.

#### [poststylus](https://www.npmjs.com/package/poststylus)
PostStylus is a PostCSS adapter for Stylus. With it you can use any PostCSS plugin as a transparent Stylus plugin, and do custom post-processing of Stylus output.

#### [boy](https://www.npmjs.com/package/boy)
A lightweight, up-to-date version of HTML5 Boilerplate with conditionally loaded polyfills and a nice general reset for amazing CSS3 support back to IE6.

# usage
* [download](https://github.com/betaverse/postcss-lost-stylus/archive/master.zip) or clone this repo
* download and install [node.js](https://nodejs.org/en/)
* open your command line and install the dependencies
`npm install --save-dev gulp gulp-postcss autoprefixer lost gulp-connect gulp-stylus poststylus`
* run the default task
`gulp`
* open your browser to localhost:8080
* edit and save `postcss-lost-stylus\src\css\styles.styl`
    * your browser will refresh automatically with your changes


