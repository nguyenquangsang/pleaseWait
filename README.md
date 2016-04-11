# pleaseWait
Module for displaying "Please Wait..." dialog using Bootstrap

# Using
You can install this module with bower `bower install bootstrap-pleasewait` and include the files pleasewait.js to your project.
In your javascript code write something like this:
```js
pleaseWait.show('I\'m waiting');
setTimeout(function () {
  pleaseWait.hide();
}, 1000);
```

See src/pleasewait.js for additional options.
