import color from 'sscolors'
import {argparse} from  '..'

import fs from 'fs'
// open package.json and decode it

// import icons
import logSymbols from '../icons'


// initialize icon variables
const success = logSymbols.success
const failed = logSymbols.error


const pack = fs.readFileSync('package.json')
const decoded = JSON.parse(Buffer.from(pack).toString('utf8'))

class actions {
    static help() {
        optionDefinitions.forEach((arg) => {
            if (arg) {
                if(arg.args) {
                    console.log(
                        color.bold(
                            
                            `${color.magenta(arg.name)}, ${color.green('takes arguments')}- ${color.cyan(arg.args)}`
                            
                        ),
                        color.underline(
                            ` ${arg.description}`
                        )
                    )
                } else {
                    console.log(
                        color.bold(
                            `${color.magenta(arg.name)}, ${color.red('takes no arguments')}`
                        ),
                        color.underline(
                            ` ${arg.description}`
                        )
                    )
                }
            
            }
        })

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

const optionDefinitions = 
[
    
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
        name: "method",
        aliases: [
            "-m", "--method"
        ],
        action: actions.method,
        description: "Display the method of Strap.",
        args: "test: string",
        type: "nf"
    },
    {
        name: "x",
        aliases: [
            "-x", "--x"
        ],
        action: actions.method,
        description: "Display the method of Strap.",
        args: "test: string",
        type: "nf"
    }
    
]


argparse(optionDefinitions)