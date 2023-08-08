function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        let lastUserTimeActivity = new Date();
        console.log("LastUserTimeActivity  :",lastUserTimeActivity);
        resolve();
    })
}
const posts =[];
function createPost(post){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            posts.push(post);
            updateLastUserActivityTime();
            resolve();
        },2000);
    })


}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.length){
                posts.pop();
                updateLastUserActivityTime();
                resolve();
            } else {
                reject("ERROR");
            }
        },3000)
    })
}


createPost("Blog1")
 .then(()=> createPost("Blog2"))
 .then(()=> deletePost())
 .then(()=> deletePost())
 .then(()=> deletePost())
 .catch(error => console.log(error))


