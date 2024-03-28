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

function createConspiracy() {
    var format = JSON.parse(formats[Math.floor(Math.random() * formats.length)]);
    var text = format.format;
    for(var i = 0; i < format.peopleN; i++) {
        var rep = people[Math.floor(Math.random() * people.length)];
        text = text.replace("_Person_", rep);
    }
    for(var i = 0; i < format.groupN; i++) {
        var rep = groups[Math.floor(Math.random() * groups.length)];
        text = text.replace("_Group_", rep);
    }
    for(var i = 0; i < format.eventN; i++) {
        var rep = events[Math.floor(Math.random() * events.length)];
        text = text.replace("_Event_", rep);
    }
    for(var i = 0; i < format.thingN; i++) {
        var rep = things[Math.floor(Math.random() * things.length)];
        text = text.replace("_Thing_", rep);
    }
    document.getElementById("content").innerHTML = text;

}