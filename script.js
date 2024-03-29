var people;
var events;
var groups;
var things;
var formats;

function loadPresets() {
    fetch("./resources/people.txt").then((res) => res.text()).then((text) => {
        people = text.split('\n');
    }).catch((e) => console.error(e));
    fetch("./resources/events.txt").then((res) => res.text()).then((text) => {
            events = text.split('\n');
        }).catch((e) => console.error(e));
    fetch("./resources/groups.txt").then((res) => res.text()).then((text) => {
            groups = text.split('\n');
        }).catch((e) => console.error(e));
    fetch("./resources/things.txt").then((res) => res.text()).then((text) => {
            things = text.split('\n');
        }).catch((e) => console.error(e));
    fetch("./resources/formats.txt").then((res) => res.text()).then((text) => {
        formats = text.split('\n');
    }).catch((e) => console.error(e));
}
var currSpin = 0;
function createConspiracy() {
    currSpin+= 360000

    document.getElementById("content").style.transform = "rotateX(" + currSpin + "deg)";
    var text = formats[6]
    var peopleN = 0;
    var amtPeople = text.match(/_Person_/g);
    if(amtPeople != null) peopleN = amtPeople.length;
    var groupN = 0;
    var amtGroup = text.match(/_Group_/g);
    if(amtGroup != null) groupN = amtGroup.length;
    var eventN = 0;
    var amtEvent = text.match(/_Event_/g);
    if(amtEvent != null) eventN = amtEvent.length;
    var thingN = 0;
    var amtThing = text.match(/_Thing_/g);
    if(amtThing != null) thingN = amtThing.length;

    for(var i = 0; i < peopleN; i++) {
        var rep = people[Math.floor(Math.random() * people.length)];
        text = text.replace("_Person_", rep);
    }
    for(var i = 0; i < groupN; i++) {
        var rep = groups[Math.floor(Math.random() * groups.length)];
        text = text.replace("_Group_", rep);
    }
    for(var i = 0; i < eventN; i++) {
        var num = Math.floor(Math.random() * events.length);
        console.log(num);
        var rep = events[num];
        text = text.replace("_Event_", rep);
    }
    for(var i = 0; i < thingN; i++) {
        var rep = things[Math.floor(Math.random() * things.length)];
        text = text.replace("_Thing_", rep);
    }

    document.getElementById("content").innerHTML = text;

}