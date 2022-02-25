
const fs = require("fs")
const path = require("path")

//fs.mkdirSync(path.resolve(__dirname ,"dir")) 

/*
fs.rmdir(path.resolve(__dirname ,"dir"),(err) => {
    if(err){
        console.log(err)
    }
})
*/

//asenkron yazar (0213)

/*
fs.writeFile(path.resolve(__dirname,"dir.txt"), "0",(err) =>{
    if(err){
        console.log(err)
    }
})

fs.appendFile(path.resolve(__dirname,"dir.txt"), "1", (err) => {
    if(err){
        console.log(err)
    }
})
fs.appendFile(path.resolve(__dirname,"dir.txt"), "2", (err) => {
    if(err){
        console.log(err)
    }
})
fs.appendFile(path.resolve(__dirname,"dir.txt"), "3", (err) => {
    if(err){
        console.log(err)
    }
})
*/

//callback HELL (0123)
/*
fs.writeFile(path.resolve(__dirname,"dir.txt"), "0",(err) =>{
    if(err){
        console.log(err)
    }
    fs.appendFile(path.resolve(__dirname,"dir.txt"), "1", (err) => {
        if(err){
            console.log(err)
        }
        fs.appendFile(path.resolve(__dirname,"dir.txt"), "2", (err) => {
            if(err){
                console.log(err)
            }
            fs.appendFile(path.resolve(__dirname,"dir.txt"), "3", (err) => {
                if(err){
                    console.log(err)
                }
            })
        })
        
    })
  
})
*/

//Promise

const writeFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.writeFile(path,data),(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    })
}
const appendFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.writeFile(path,data),(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    })
}
writeFileAsync(path.resolve(__dirname,"dir.txt"), 'data')
    .then(() => appendFileAsync(path.resolve(_dirname,"dir.txt"),"merhaba"))
    .catch(err => console.log(err))


