


var arrayWithDuplicates = [
    {"type":"LICENSE", "licenseNum": "12345", state:"NV"},
    {"type":"LICENSE", "licenseNum": "A7846", state:"CA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"OR"},
    {"type":"LICENSE", "licenseNum": "10849", state:"CA"},
    {"type":"LICENSE", "licenseNum": "B7037", state:"WA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"NM"}
];

function removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
 }

var uniqueArray = removeDuplicates(arrayWithDuplicates, "licenseNum");
//console.log("uniqueArray is: " + JSON.stringify(uniqueArray));
console.log(uniqueArray);