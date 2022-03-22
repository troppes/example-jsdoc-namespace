# Example for JSDOC Generation

In this example I want to show you how to generate seperate pages for the source code in JSDoc without modifying the generated files. The result will be something like this:

![finished home](https://github.com/troppes/example-jsdoc-namespace/blob/main/images/home.jpg?raw=true)

And if a namespace is selected you can see all the methods of that file:

![finished jsdoc](https://github.com/troppes/example-jsdoc-namespace/blob/main/images/specific_file.jpg?raw=true)

## Adding namespaces

To add the namespaces simply use the folling jsdoc commands:

In the head of the file use: `@namespace desired-namespace` and afterwards in every function you want to include: `@memberof desired-namespace`. 

Examples for this can be found in the jutge folder in this repository.

## .jsdoc.conf.json

You can see  that the source code, as well as the test are in the jutge folder. But we only want to generate JSDoc files for the source code and not the tests. To make this happen we can configure this behaviour in the `.jsdoc.conf.json`.

In that file we can define the behaviour of JSDoc, for example which files are included or excluded:
```
	"source": {
	  "include": ["jutge"],
	  "includePattern": ".+\\.js(doc|x)?$",
	  "excludePattern": "(node_modules|tests)"
	},
```

You can play around with this file to modify your results.

## Calling jsdoc

To generate the docs easily you can add this script to your package.json:

```
  "scripts": {
    "jsdoc": "jsdoc -c ./.jsdoc.conf.json"
  },
```

To generate the files you can now simply run `npm run jsdoc`, which calls: `jsdoc -c ./.jsdoc.conf.json`. 

This generates the docs in the docs folder, that is defined in the `.jsdoc.conf.json` file.

## Create a webserver to show the files

To now browse the files I use the [Live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
With this you only need to click the small button, that says: `Go live` on the bottom right corner and a browser window will open to navigate.

![finished home](https://github.com/troppes/example-jsdoc-namespace/blob/main/images/liveserver.jpg?raw=true)