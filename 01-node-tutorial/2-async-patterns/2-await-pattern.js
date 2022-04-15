// const {readFile,writeFile} =require('fs')
const {readFile,writeFile} =require('fs').promises
const util =require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try{
        const first = await readFile('../../content/first.txt','utf8')
        const second = await readFile('../../content/second.txt','utf8')
        // const first = await readFilePromises('../../content/first.txt','utf8')
        // const second = await readFilePromises('../../content/second.txt','utf8')
        await writeFilePromise('../../content/result-mind-grenade.txt',`This is Aswome ${first} ${second}`)
        console.log(first,second);
        }catch(error){
            console.log(error);
        }
    }
start()

// const getTest = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//         }
//         })
//     })
// }
// ==> approach 2 async
// const start =async () => {
// try{
//     const first = await getTest('../../content/first.txt')
//     const second = await getTest('../../content/second.txt')
//     console.log(first,second);
// }catch(error){
//     console.log(error);
// }

// }

// ==> approach 1 sync
// getTest('../../content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
