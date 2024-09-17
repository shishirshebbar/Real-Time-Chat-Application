export function time(currentdate){
    const date= new Date(currentdate);
    const hours = addleadingzeroes(date.getHours());
    const minutes= addleadingzeroes(date.getMinutes());
    return `${hours}:${minutes}`;
}

function addleadingzeroes(number){
    return number.toString().padStart(2,"0");//Pads the string with leading zeros until it reaches a length of 2 character
}