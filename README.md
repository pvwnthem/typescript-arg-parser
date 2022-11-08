# ts-argparser


Cli argument parser for typescript

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


```javascript
    {
    // name of the option
    name: "help",
    // aliases for the option
        aliases: [
            "-h", "--help"
        ],
        // description of the option
        description: "Display this help message.",
        // the action to execute when the option is present
        action: actions.help
        
    }
```

## Example
```javascript
    //define the arguments for the parser to look for and thier coorosponding actions

    const optionDefinitions = [
    
   {
    // name of the option
    name: "help",
    // aliases for the option
        aliases: [
            "-h", "--help"
        ],
        // description of the option
        description: "Display this help message.",
        // the action to execute when the option is present
        action: actions.help
        
    },
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
        type: "nf"
    }
    
]
```