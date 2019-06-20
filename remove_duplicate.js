'use strict';
const rp = require('request-promise');
const utils = require('./utils');
var  _= require('lodash');
const url1 = 'https://www.embassy-worldwide.com/country/denmark/'
const country1='Denmark'
const url2='https://www.embassy-worldwide.com/country/albania/'
const country2='Albania'
const array1=[]
const fun=(async()=>{
  await  rp(url1)
    .then(async(html) => {
        const ArrayOf_abroadCountries_InLocalCountries = await utils.AbroadCountries_InLocalCountries_By_html2(html, country1);
        const ArrayOf_LocalCountries_In_AbroadCountries = await utils.LocalCountries_In_AbroadCountries__By_html2(html, country1);
        array1.push(...ArrayOf_abroadCountries_InLocalCountries );
        console.log('1 push'+array1.length);
        array1.push(...ArrayOf_LocalCountries_In_AbroadCountries  );
        console.log('2 push'+array1.length);
         })

       await  rp(url2)
         .then(async(html) => {
             const ArrayOf_abroadCountries_InLocalCountries = await utils.AbroadCountries_InLocalCountries_By_html2(html, country2);
             const ArrayOf_LocalCountries_In_AbroadCountries = await utils.LocalCountries_In_AbroadCountries__By_html2(html, country2);
             array1.push(...ArrayOf_abroadCountries_InLocalCountries );
             console.log('3 push'+array1.length);
             array1.push(...ArrayOf_LocalCountries_In_AbroadCountries  );
             console.log('4 push'+array1.length);
            })

await console.log('finally'+array1.length);
let url;
var uniqueArray = removeDuplicates(array1);
console.log(uniqueArray.length)


})
   fun();


  const  removeDuplicates=(originalArray)=> {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i].url] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}

