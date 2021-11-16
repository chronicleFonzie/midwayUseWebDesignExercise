

function ConvertTimeToWords(hour, minute){

  const hours = hour.value;
  const minutes = minute.value;

  let timeToWords = "";
    if (checkTime(hours, minutes)) {
      document.getElementById("results").innerHTML = "Incorrect Time"
      return;
    }


    if (minutes <= 30) {
      timeToWords = getTimeToWordPast(hours, minutes)
    }else {
      timeToWords = getTimeToWordTo(hours, minutes)
    }

    console.log("hour, minute: ", timeToWords);
    document.getElementById("results").innerHTML = timeToWords;
}


function checkTime(hours, minutes){
  if ((Number(hours) <= 24 && Number(hours) >= 1) && (Number(minutes) <= 59 && Number(minutes) >= 0)) {
    return false;
  }
  return true;
}

function getTimeToWordPast(hours, minutes) {
  const hourToWords = numberToWords.toWords(Number(hours));
  const minutesToWords = numberToWords.toWords(Number(minutes));
  switch (Number(minutes)) {
    case 0:{
      return `${hourToWords} o'clock`;}
    case 5:{
      return `it's five past ${hourToWords}`;}
    case 10:{
      return `It's ten past ${hourToWords}`;}
    case 15:{
      return `It's a quarter past ${hourToWords}`;}
    case 20:{
      return `It's a twenty past ${hourToWords}`;}
    case 25:{
      return `It's a twenty-five past ${hourToWords}`;}
    case 30:{
      return `It's a half past ${hourToWords}`;}
    default:{
    return `It's ${minutesToWords}-minute(s) past ${hourToWords}`}

  }
}

function getTimeToWordTo(hours, minutes) {
  const hourToWords = numberToWords.toWords(Number(hours));
  const minutesToWords = numberToWords.toWords(Number(minutes));
  switch (Number(minutes)) {
    case 55:{
      return `it's five to ${hourToWords}`;}
    case 50:{
      return `It's ten to ${hourToWords}`;}
    case 45:{
      return `It's a quarter to ${hourToWords}`;}
    case 40:{
      return `It's a twenty to ${hourToWords}`;}
    case 35:{
      return `It's a twenty-five to ${hourToWords}`;}
    default:{
      return `It's ${minutesToWords}-minute(s) past ${hourToWords}`}
  }
}
