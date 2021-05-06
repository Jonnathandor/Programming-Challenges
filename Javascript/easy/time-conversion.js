// Given a time in -hour AM/PM format,
// convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const converTime = (s) => {
    let time = s.split(':');
    let seconds = time[2];
    let isPM = seconds.endsWith('PM');
    seconds = seconds.substring(0,2);
    time.pop()
    time.push(seconds);
    
    let hours = Number(time[0]) // 07
    hours = hours % 12; // 07 % 12 = 7 ... 08 % 12 = 8 etc
    if(isPM){
        hours = hours + 12
    }
    time.shift();
    time.unshift(hours.toString());
    let militaryFormat = time.join(':');
    
    // When the modulus operation for hour was done
    // the initial zero was removed so 07 converts to 7
    // the military format expects 07 if the hour
    // represents 7 am -> 07 
    return militaryFormat.padStart(8,'0');
}