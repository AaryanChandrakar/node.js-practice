const EventEmmiter = require(`events`);
const event = new EventEmmiter;

event.on("PoliticalParty", ()=>{
    console.log("BJP");
});
event.on("PoliticalParty", ()=>{
    console.log("Congress");
});
event.on("PoliticalParty", ()=>{
    console.log("AAP");
});
event.on("PoliticalParty", ()=>{
    console.log("Samajvadi Party");
});

event.emit("PoliticalParty");