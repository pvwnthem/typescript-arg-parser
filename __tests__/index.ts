import color from 'sscolors'
import argparse from  '../index'

import fs from 'fs'
// open package.json and decode it

// import icons
import logSymbols from '../icons'


// initialize icon variables
const success = logSymbols.success
const failed = logSymbols.error


const pack = fs.readFileSync('../package.json')
const decoded = JSON.parse(Buffer.from(pack).toString('utf8'))

class actions {
    
    static version() {
        console.log(color.bold(color.blue(` Strap version ${color.italic(color.magenta(decoded.version))}`)))
        console.log(color.bold(color.blue(` Node version ${color.italic(color.magenta(process.version))}`)))
        if (JSON.stringify(process.versions).includes('bun')) {
            console.log(color.bold(color.blue(` Bun version ${color.italic(color.magenta(process.versions.bun))}`)))
        } else {
            console.log(color.bold(color.red(` Bun Not Installed 😔`)))
        }
    }
    static method(data: any) {
        console.log('thas tha method', data)
    }
}




const optionDefinitions = 
[
    
   
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
        wantsData: true,
        type: "nf"
    }
    
]


argparse(optionDefinitions, true)