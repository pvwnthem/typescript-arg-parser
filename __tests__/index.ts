import color from 'sscolors'
import argparse from  '../index'
// open package.json and decode it

// import icons




class actions {
    
   
    static method(data: any) {
        console.log('thas tha method', data)
    }
}




const optionDefinitions = 
[
    
   
    
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