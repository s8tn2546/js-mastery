//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (str, num) => {
  let position;
  if (num != 11 && num % 10 == 1){
    position = String(num) + "st";
  } else if (num != 12 && num != 112 && num % 10 == 2){
    position = String(num) + "nd";
  } else if (num != 13 && num % 10 == 3){
    position = String(num) + "rd";
  } else {
    position = String(num) + "th";
  }
  return str + ", you are the " + position + " customer we serve today. Thank you!";
};
