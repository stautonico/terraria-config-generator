const uncss = require('uncss');
const fs = require('fs');


let options = {
    banner: false,
    htmlroot: './',
    // Add exceptions for classes that are added through javascript
    ignore: ['#added_at_runtime', /test\-[0-9]+/, ".is-active", ".input", ".select", ".checkbox", ".is-size-3", ".table", ".is-bordered", ".is-fullwidth"],
    report: true,
    strictSSL: true,
    timeout: 1000,
}

uncss(['index.html'], options, (error, output) => {
    // console.log(error);
    if (output) {
        // Open the file and write the output
        fs.writeFile('css/main.css', output, (err) => {
            if (err) throw err;
            console.log('File written!');
        });
    }
    // console.log(output);
});
