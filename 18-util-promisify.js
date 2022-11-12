const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);



const start = async() =>{
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        console.log(first, second);
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`)
    } catch (error) {
        console.log(error)
    }
    
}

start()

// const getText = (path) =>{
//     return new Promise ((resolve,reject )=>{
//         readFile(path, 'utf8', (err,data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }