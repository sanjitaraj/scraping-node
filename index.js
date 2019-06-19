'use strict';
const rp = require('request-promise');  
const utils = require('./utils');
//const Promise = require('bluebird');

//const otcsv = require('objects-to-csv');  
//const $ = require('cheerio'); 
const url='https://www.embassy-worldwide.com/'
let  ArrayOf_Countries_Urls_Data=[];

const getList = async()=>{
   await rp(url)
 .then(html1 =>{
 
if(html1){
  const ArrayOf_Countries_Urls=  utils.ArrayOf_Countries_Urls_By_html1(html1);
return ArrayOf_Countries_Urls;
}
 })
 .then(async(ArrayOf_Countries_Urls) => {
  ArrayOf_Countries_Urls_Data = ArrayOf_Countries_Urls;
console.log(ArrayOf_Countries_Urls.length)
  if (ArrayOf_Countries_Urls) {
      const allReq = [];
    for (let i = 0; i < 1; i++) {
          const obj =  ArrayOf_Countries_Urls[i]
         await  allReq.push(rp(obj.url))
      }
      return await Promise.all(allReq);
  }
})
 .then(async(html2_pages_Array)=>{

if(html2_pages_Array && Array.isArray(html2_pages_Array)){
  for(let a=0;a<html2_pages_Array.length;a++){
  const country= ArrayOf_Countries_Urls_Data[a].country
  const ArrayOf_abroadCountries_InLocalCountries = await utils.AbroadCountries_InLocalCountries_By_html2(html2_pages_Array[a],country);
    // console.log(html2_pages_Array[a])
    // console.log(html2_pages_Array.length,country);
    console.log(ArrayOf_abroadCountries_InLocalCountries);

  }
}
})
.then(()=>{
  console.log('successful');
})
.catch(err=>{
  console.log(err)
});

}

getList();
