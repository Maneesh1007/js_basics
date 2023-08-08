function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        let lastUserTimeActivity = new Date();
        console.log("LastUserTimeActivity:", lastUserTimeActivity);
        resolve();
    });
}

const posts = [];

async function createPost(post) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    posts.push(post);
    await updateLastUserActivityTime();
}

async function deletePost() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length) {
                posts.pop();
                resolve();
            } else {
                reject("ERROR");
            }
        }, 3000);
    });
    await updateLastUserActivityTime();
}

async function main() {
    try {
        await createPost("Blog1");
        await createPost("Blog2");
        await deletePost();
        await deletePost();
        await deletePost();
    } catch (error) {
        console.log(error);
    }
}

main();
