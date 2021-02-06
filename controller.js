
const Axios = require('axios')
async function a(data,cb){
    await cb(data)
}

a('https://jsonplaceholder.typicode.com/posts/1',async url=>{
    try{
    let res =await Axios(url)
    let data = await res.data
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
})