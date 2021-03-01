# Front End Developer / Module 5 - Tools / Notes

[:arrow_backward: Front End Developer / Module 5 - Tools](./README.md)

---

## Bundling your assets

Popular bundlers (in alphabetical order):
- Browserify
- Brunch
- FuseBox
- Parcel
- Rollup
- [Webpack](#webpack)

### Webpack

The webpack official website can be found [here](https://webpack.js.org/).

Webpack is a static module bundler. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. The dependency graph is built by following `require` / `import` and `module.exports` / `export` statements used in modules.

Since version 4.0.0. webpack does not require a configuration file as it comes packaged with a sensible default configuration. However, webpack supports the use of a configuration script - commonly named `webpack.config.js` - which specifies the files that are entering the bundling process and the output that we want to build.

Webpack is highly configurable through use of loaders and plugins. For more information follow the [official documentation](https://webpack.js.org/concepts/).

Webpack can be installed from NPM. For more information follow the [official installation instructions](https://webpack.js.org/guides/installation/).

To get started with webpack, install it as a development dependency of your project:

```
npm install --save-dev webpack webpack-cli
```

Create a `webpack.config.js` file in your project root. This will configure webpack to bundle specific files and to output the result to a specific directory.

The `webpack.config.js` file is read and executed by Node. We can use the Node API, as well as CommonJS and ES6 (for Node 14 and onward) module syntax (`require`, `module.exports`, `import`, `export`) inside our webpack configuration file.

At its most basic, the `webpack.config.js` defines one entry point and one output point for the bundle process.

```js
// webpack.config.js
// Require the Node `path` API to resolve relative paths to folders.
const path = require('path');

// The webpack configuration is usually an object, but other types exist too.
module.exports = {
    // Begin bundling from `main.js`, relative to the config file directory.
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        // Save the bundle to a `bundle.js` file.
        filename: 'bundle.js',
        // Save the file to the `build` directory, relative to the config file.
        path: path.resolve(__dirname, 'build'),
    },
}
```

To run webpack and begin the bundling process, add a `build` script to your project's `package.json`.

```jsonc
// package.json
{
    // ...
    "scripts": {
        // Run webpack using the webpack.config.js configuration.
        "build": "webpack --config webpack.config.js"
    },
    // ...
}
```

You can now build your application with webpack using the `build` script.

```
npm run build
```

> :point_up: **Note!**
>
>  Webpack is primarily used to bundle JavaScript modules and assets they depend on. While there are cases where it can also be used to bundle SCSS and similar assets, this is not webpack's primary function and you may find other tools to be better suited for the job.

## Running automated tasks

Popular task runners (in alphabetical order):
- Grunt
- [Gulp](#gulp)
- Node scripts

### Gulp

The gulp official website can be found [here](https://gulpjs.com/).

Gulp is a task runner and automation tool. With gulp you can specify tasks and process pipelines in JavaScript and run them when necessary to handle asset bundling, optimisation, and more.

Gulp can be installed from NPM. For more information follow the [official installation instructions](https://gulpjs.com/docs/en/getting-started/quick-start).

To get started with gulp, install it as a development dependency of your project:

```
npm install --save-dev gulp
```

Create a `gulpfile.js` file in your project root. This will configure gulp with tasks it can recognise and run.

#### Bundling scripts

To bundle JavaScript source code with gulp we will install Babel and uglify plugins. Babel will help us transpile modern ES6+ syntax to the more commonly supported ES5 syntax. Uglify will optimise our bundle for production through minification and uglification of source code.

```
npm i -D gulp-uglify gulp-babel @babel/core @babel/preset-env
```

> :point_up: **Note!**
>
> We need to install additional Babel packages for the Babel gulp plugin to work. The gulp plugin is a helper utility that manages Babel for us. We still need Babel as a separate dependency for gulp to have something to work with.

After installing the necessary plugins we can create a `js` gulp task to bundle our JavaScript assets.

```js
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src('./main.js')
        .pipe(babel({ presets: [ '@babel/preset-env' ] }))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});
```

Now we can add a script for the task to our `package.json`.

```jsonc
{
    // ...
    "scripts": {
        "js": "gulp js"
    }
    // ...
}
```

To run our gulp task simply run the new script.

```
npm run js
```

> :point_up: **Note!**
>
> Gulp does not bundle our scripts like webpack does. It only cares about taking the input and applying plugins to it. If you want gulp to bundle your assets as well as run it through its plugins, you need to configure it to use bundling plugin like webpack-stream.

#### Bundling styles

To bundle stylesheets written in Sass with gulp we will install Sass and cssnano plugins. The Sass plugin will ensure our Sass stylesheets are compiled down to CSS, while the cssnano plugin will optimize our stylesheet for production using minification techniques.

```
npm i -D gulp-sass gulp-cssnano
```

After installing the necessary plugins we can create a `sass` gulp task to bundle our stylesheets.

```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

gulp.task('sass', function () {
    return gulp.src('./style.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('build'));
});
```

Now we can add a script for the task to our `package.json`.

```jsonc
{
    // ...
    "scripts": {
        "sass": "gulp sass"
    }
    // ...
}
```

To run our gulp task simply run the new script.

```
npm run sass
```

#### Watching for changes

Gulp can watch our files for changes and trigger tasks when a change occurs. This way we can listen to changes made to our source files and trigger rebuilds when necessary.

Gulp does not require a plugin to watch source files. All it requires is one or more files or file paths to watch, and tasks to run in series when a change happens to any of the watched files.

We can add a `watch` gulp task without any additional steps.

```js
gulp.task('watch', function () {
    gulp.watch([ 'main.js', 'src/**/*.js' ], gulp.series('js'));
    gulp.watch('style.scss', gulp.series('sass'));
});
```

Now we can add a script for the task to our `package.json`.

```jsonc
{
    // ...
    "scripts": {
        "watch": "gulp watch"
    }
    // ...
}
```

To run our gulp task simply run the new script.

```
npm run watch
```

#### Creating a default task

Gulp can be conigured with a default task that is run whenever gulp is called without a task argument.

We can create a default task that will first bundle our JS, then our Sass, and finally begin watching our files. This is a common way to setup a development environment with gulp.

```js
gulp.task('default', gulp.series('js', 'sass', 'watch'));
```

Now we can add a script for the task to our `package.json`.

```jsonc
{
    // ...
    "scripts": {
        "dev": "gulp"
    }
    // ...
}
```

To run our gulp task simply run the new script.

```
npm run dev
```

## Deploying your application

We can deploy our web application on a dedicated server or cloud service provider. There are many options to choose from, most of which have free tiers or pricing plans with reasonable restrictions.

Popular platforms (in alphabetical order):
- [GitHub Pages](https://pages.github.com/)
- [Heroku](https://www.heroku.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Popular cloud service providers (in alphabetical order):
- [Amazon Web Services (AWS)](https://aws.amazon.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Google Cloud](https://cloud.google.com/)
- [IBM Cloud](https://www.ibm.com/cloud)
- [Microsoft Azure](#microsoft-azure)

### Microsoft Azure

The Microsoft Azure official website can be found [here](https://azure.microsoft.com/en-us/).

It is necessary to provide valid payment information (credit or debit card) to register an account.

After registration the account receives credit that can be spent on select Microsoft Azure services, making it possible to use Azure for free within the credit limit.

To deploy a front-end web application on Microsoft Azure follow these steps:
1. Create a Microsoft Azure account [here](https://azure.microsoft.com/en-us/free/) or use an existing account.
2. Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest).
3. Open a terminal and sign into Azure CLI.

```
az login
```

4. Create a resource group for your web application. Replace `<group-name>` with your desired group name.

```
az group create --name <group-name> --location "East US"
```

5. Create a payment plan for your web application. We will use the free plan. Replace `<plan-name>` with your desired group name.

```
az appservice plan create --name <plan-name> --resource-group <group-name> --sku FREE
```

6. Create an Azure Web Application for the previously created resource group and payment plan. Replace `<app-name>` with your desired group name.

```
az webapp create --resource-group <group-name> --plan <plan-name> --name <app-name>
```

> :point_up: **Note!**
>
>  If the Azure Web Application was created successfully, a JSON output should be visible in your terminal. Take note of the `defaultHostName` attribute value. The URL assigned to it (e.g. `<my-app-name>.azurewebsites.net`) is the URL of your web application. At this point you can open the link in your browser and begin working on hosting your web application!

7. Set up the Azure Web Application to use a Node.js environment.

```
az webapp config appsettings set --resource-group <group-name> --name <app-name> --settings WEBSITE_NODE_DEFAULT_VERSION=12
```

> :point_up: **Note!**
>
>  The LTS version of Node may have changed since these notes were last updated. Make sure to set the `WEBSITE_NODE_DEFAULT_VERSION` setting to your desired Node version or the Node version the application was developed with.

8. Open your Azure Web Application's Zip Deploy UI page.

```
https://<my-app-name>.scm.azurewebsites.net/ZipDeployUI
```

> :point_up: **Note!**
>
>  The Zip Deploy UI is a simple user interface for uploading the latest build of your web application to Azure in the form of a Zip archive. It's similar to using FTP or the File Manager utility used by cPanel and Plex web hosting platforms. Read more the Zip Deploy UI [here](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs#create-a-project-zip-file).

9. Create a Zip archive of your web application's build folder and upload it through the Zip Deploy UI by dragging and dropping the Zip archive onto the UI.

> :point_up: **Note!**
>
> Make sure the build assets are not stored in a directory. The files to be deployed to Azure must be in the root of the Zip archive, otherwise the files will be hosted from the folder they're stored inside the archive (e.g. `build/index.html` instead of `index.html`).

10.   Once the deployment completes successfully, open the `defaultHostName` URL from step 6 again. If everything went right, you should see your website in the browser. Congratulations!

If you do not need your web application anymore, you can delete all allocated Azure resources by deleting the resource group:

```
az group delete --name <group-name>
```

> :point_up: **Note!**
>
> When using cloud service providers with free plans or free credit systems, make sure to shut down any and all services used when you don't need need them or before the free period expires. Otherwise you may be charged a fee for using the services beyond the free period!

> :pencil: **Homework!**
> 
> Try deploying the solution to one of the exercies from previous modules to one or more platforms or cloud service providers.