declare var SystemJS: any;
SystemJS.config({
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "bootstrap":"./node_modules/bootstrap/dist/js/bootstrap.min.js"
        
    },
    meta: {
    '*.css': { loader: 'css' }
  },
    packages: {
        "./": {
            defaultExtension: "js"
        }
    }
});
