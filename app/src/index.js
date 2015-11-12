// Import some regular CSS...
require("./style.css");

// Now, some more dynamic CSS...
require("./style-x.less");

// And now comes our app code. Its super heavy!
(function(){
    this.meaningOfEverything = 42;
    console.log("Life:", this.meaningOfEverything);
}).call(module.exports);
