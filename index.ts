
// initialize argv
const argv = process.argv
// imports

import color from 'sscolors'

import fs from 'fs'
// open package.json and decode it

// import icons
import logSymbols from './icons'


// initialize icon variables
const success = logSymbols.success
const failed = logSymbols.error


// setup action function class


// setup argument options


//handleArg function
const handleArg = (arg: any, index: number) => {
    try{
        
        if(
            arg.type === "nf"
        ) {
            if (arg.wantsData) {
                arg.action(argc[argc.indexOf(arg.aliases[0]) + 1])
            }
            else {
                arg.action()
            }
            
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
export default function (optionDefinitions: any){
    // if there is more than one argument
    if (argc.length > 1) {
        // for each args
        argc.forEach(arg => 
            {
                if(arg.startsWith('-')) {
                    // for each option defined
                optionDefinitions.forEach((definition: any, index:number) => {
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
        optionDefinitions.forEach((definition: any, index:number) => {
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
