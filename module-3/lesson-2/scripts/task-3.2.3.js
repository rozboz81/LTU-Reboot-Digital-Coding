function getFullName(firstName,lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

var fName = 'Phil';
var lName = 'Barlow';

var fName2 = 'Roy';
var lName2 = 'Barrow';

var fullName1 = getFullName(fName,lName);
console.log(fullName1);
var fullName2 = getFullName(fName2,lName2);
console.log(fullName2);
