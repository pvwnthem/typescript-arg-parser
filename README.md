# ts-argparser

![alt text](https://img.shields.io/npm/v/ts-argparser)
Cli argument parser for typescript

## Installing and Importing

```javascript
    npm i ts-argparser
            OR
    bun i ts-argparse
```

```javascript
    import argparse from 'ts-argparser'
    import color from 'sscolors'
```

### option definitions should contain a list of objects, each of which represents a flag for the parser

#### Option structure

name: String
this is the name of the option

aliases: [String]
this is an array of any command line argument you want to activate this option

description: String 
this is the description of the option(will be displayed in the help command)

action: function 
this is the function that will be called when the option is activated 


#### Type !!!IMPORTANT!!!
type    (optional): string
if you want the flag to take in data typed after it (EX: --host {data} ) you should specify the type as "nf" stating that this option will take in data

args: string
if you want the flag to take in data, you should specify what data it takes in here and the type of the data (will be displayed in the help command)
EX: "host: number"


### wantsData !!!IMPORTANT!!!
if you want the data after the flag to be passed into your option as a parameter, you should specify wantsData as true
##### you should also allow the action function to take in a parameter with a type of any to be able to acsess this data, not doing so may result in an error

```javascript
    {
        name: "test",
        aliases: [
            "-test", "--test"
        ],
        action: actions.method,
        description: "test",
        args: "test: string",
        wantsData: true,
        type: "nf"
    }
```

## Example
```javascript
    //define the arguments for the parser to look for and thier coorosponding actions

    const optionDefinitions = [
    
   
    {
        name: "version",
        aliases: [
            "-v", "--version"
        ], 
        description: "Display the version of Strap.",
        action: actions.version
        
    },
    
    {
        name: "test",
        aliases: [
            "-test", "--test"
        ],
        action: actions.method,
        description: "test",
        args: "test: string",
        wantsData: true,
        type: "nf"
    }
    
]
```

## Actions

#### Actions should be setup as a class with functions newsted inside, below is an example

```javascript
    class actions {
    
    static version() {
        console.log(color.bold(color.blue(` Strap version ${color.italic(color.magenta(decoded.version))}`)))
        console.log(color.bold(color.blue(` Node version ${color.italic(color.magenta(process.version))}`)))
        if (JSON.stringify(process.versions).includes('bun')) {
            console.log(color.bold(color.blue(` Bun version ${color.italic(color.magenta(process.versions.bun))}`)))
        } else {
            console.log(color.bold(color.red(` Bun Not Installed ????`)))
        }
    }
    static method(data: any) {
        console.log('thas tha method', data)
    }
}
```


Functions inside can be used with actions.{function}

# Help commands are built into the parser but are optional


You can specify if you want a help command or not with the optional help argument in the argparse function




# Finally,






## Version command

```
    add `"resolveJsonModule": true,` to the tsconfig.json
```


```javascript
    import * as pj from './package.json';



```



Add the function below your options and actions and call the function

```javascript
    argparse(optionDefinitions, true, pj)
```




# arg structure of main function

```
    argparse(yourOptions, help command(true or false), your package.json if you want a version command)
```






# if you don't want a help command
```javascript
    argparse(optionDefinitions, false , pj)
```
