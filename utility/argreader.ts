
// initialize argv
const argv = process.argv
// imports

import color from 'sscolors'

import fs from 'fs'
// open package.json and decode it
const pack = fs.readFileSync('package.json')
const decoded = JSON.parse(Buffer.from(pack).toString('utf8'))
// import icons
import logSymbols from './icons'


// initialize icon variables
const success = logSymbols.success
const failed = logSymbols.error


// setup action function class
class actions {
    static help() {
        console.log(color.green('help has arrived!'))
    }
    static version() {
        console.log(color.bold(color.blue(success + ` Strap version ${color.italic(color.magenta(decoded.version))}`)))
        console.log(color.bold(color.blue(success + ` Node version ${color.italic(color.magenta(process.version))}`)))
        if (JSON.stringify(process.versions).includes('bun')) {
            console.log(color.bold(color.blue(success + ` Bun version ${color.italic(color.magenta(process.versions.bun))}`)))
        } else {
            console.log(color.bold(color.blue(failed + ` Bun Not Installed 😔`)))
        }
    }
    static method() {

    }
}

// setup argument options
const optionDefinitions = 
[
    
   {
    // name of the option
    name: "help",
    // aliases for the option
        aliases: [
            "-h", "--help"
        ],
        // the action to execute when the option is present
        action: actions.help
        
    },
    {
        name: "version",
        aliases: [
            "-v", "--version"
        ], 
        action: actions.version
        
    },
    {
        name: "method",
        aliases: [
            "-m", "--method"
        ],
        action: actions.method,
        type: "nf"
    },
    {
        name: "x",
        aliases: [
            "-x", "--x"
        ],
        action: actions.method,
        type: "nf"
    }
    
]

//handleArg function
const handleArg = (arg: any, index:any) => {
    try{
        if(
            arg.type === "nf"
        ) {
            console.log(argc[argc.indexOf(arg.aliases[0]) + 1])
        }
        // attempt to execute action
        else {
            arg.action()
        }
        
    }
    catch(err) {
        // if the error is because the user hasnt specified an action then return that to them
        if (err.message === "arg.action is not a function. (In 'arg.action()', 'arg.action' is undefined)") {
                    console.log(color.red('No action function specified'))

        }
    }
    

}   

// take the list of argvs and remove the default node args, seperating only the user args
let argc = argv.splice(2, argv.length)
const commandLineArgs = () => {
    // if there is more than one argument
    if (argc.length > 1) {
        // for each args
        argc.forEach(arg => 
            {
                if(arg.startsWith('-')) {
                    // for each option defined
                optionDefinitions.forEach((definition: any, index:any) => {
                    if(definition) {
                        // if the option is found

                        // if the formatted aliases of the option include one of the user args, then handleArg and attempt to execute the action
                        if(definition.aliases.includes(String(arg).replace(/[\[\]']+/g,''))) {
                            handleArg(definition, index)
                        }
                    }
                    return  
            
                })
                }
                else {}
                

            })
    }
    else {
        //same but no forEach arg
        optionDefinitions.forEach((definition: any, index:any) => {
            if(definition) {
                
                if(definition.aliases.includes(String(argc).replace(/[\[\]']+/g,''))) {
                    handleArg(definition, index)
                }
            }
            return  
    
        })
    }
    


   


}




// execute the function
commandLineArgs()
