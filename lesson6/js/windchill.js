
var t = 46;
var s = 13;
var a = Math.pow(s,0.16)
var chill = 35.74 + 0.6215 * t - (35.75 * a) + (0.4275 * t * a);
var chill= Math.round(chill);
document.getElementById("windchill").innerHTML = chill;
