
    var temperature = document.querySelector('#temp');
    var windSpeed = document.querySelector('#speed');
    var chill = Math.round(35.74 + 0.6215 * temperature - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));

    document.getElementById("windchill").innerHTML = chill;