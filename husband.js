console.log("person1 shows Ticket");
console.log("person2 shows Ticket");

const preMovie = async ()=>{
    const gettingWifeTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ticket");
        },3000)
    }) 

    const gettingPopcorn = new Promise((resolve,reject)=> resolve("popcorn"))

    const gettingButter = new Promise((resolve,reject)=> resolve("butter"))

    const getColddrinks = new Promise((resolve,reject)=> resolve("Cold Drinks"))
    
    let ticket = await gettingWifeTickets;

    
    console.log(`wife : i have the ${ticket}`);
    console.log("husband : we should go in");
    console.log("wife : no i am hungry");

    let popp = await gettingPopcorn;

    console.log(`husband : i got some ${popp}`);
    console.log("husband : we should go in");
    console.log("wife : i want butter on it");

    let butte = await gettingButter;

    console.log(`husband : i got ${butte} on it`);
    console.log("husband : we should go in");
    console.log("wife : i want colddrinks")

    let cool = await getColddrinks;

    console.log(`husband : i got ${cool}`);
    console.log("wife : we are getting late");
    console.log("thank for your remainder");

    






    return ticket
       
}

   

    




    


preMovie().then((t)=> console.log("person3 shows",t))


console.log("perosn4 shows Ticket");
console.log("person5 shows Ticket");