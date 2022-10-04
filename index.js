function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(whisper(string));
}
/*function sayHiToHeadphonedRoommate(string) {
    if (string === whisper(string)) {
        return ("I can't hear you!");
    }
    if (string === shout(string)) {
        return("YES INDEED!");
    }*/
function sayHiToHeadphonedRoommate(string) {
    switch(string) {
        case shout(string):
            return "YES INDEED!";
            break;
        case whisper(string):
            return "I can't hear you!";
            break;
        case "Let's have dinner together!":
            return "I would love to!";
            break;
    }
}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together"));