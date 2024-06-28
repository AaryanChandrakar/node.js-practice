const EventEmmiter = require(`events`);
const event = new EventEmmiter;

event.on("checkPage", (sc, msg)=>{
    console.log(`ststus code is ${sc} and the page is ${msg}`);
});

event.emit(`checkPage`, 200, "OK");