# Example for JSDOC Generation

In this example I want to show you how to generate seperate Pages for the source code in JSDoc without modifying the generated files. At the end it will look like this:

![finished home](https://github.com/troppes/example-jsdoc-namespace/blob/main/images/home.jpg?raw=true)
![finished jsdoc](https://github.com/troppes/example-jsdoc-namespace/blob/main/images/specific_file.jpg?raw=true)

## Adding namespaces

To add the namespaced simply use the folling jsdoc commands:

In the head of the file use: `@namespace desired-namespace` and afterwards in every function you want to include: `@memberof desired-namespace`

## .jsdoc.conf.json

You can see in that the source code, as well as the test are in the jutge folder. We want to generate JSDoc files for the files, but not the tests. To make this happen we can configure this behaviour in the `.jsdoc.conf.json`.

There we defined for example which files are included or excluded:
```
	"source": {
	  "include": ["jutge"],
	  "includePattern": ".+\\.js(doc|x)?$",
	  "excludePattern": "(node_modules|tests)"
	},
```

You can play around with this file to modify your results.

## Calling jsdoc

To now generate the files you can simply run npm run jsdoc, which calls: `jsdoc -c ./.jsdoc.conf.json`. Then the docs get generated in the docs folder.