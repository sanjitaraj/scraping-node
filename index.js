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
   console.log('then 1')
if(html1){
  const ArrayOf_Countries_Urls=  utils.ArrayOf_Countries_Urls_By_html1(html1);
return ArrayOf_Countries_Urls;
}
 })
 .then(ArrayOf_Countries_Urls => {
  ArrayOf_Countries_Urls_Data = ArrayOf_Countries_Urls;

  if (ArrayOf_Countries_Urls) {
      const allReq = [];
      for (let i = 0; i < 10; i++) {
          const obj =  ArrayOf_Countries_Urls[i]
          allReq.push(rp(obj.url))
      }
      return Promise.all(allReq);
  }
})
 .then(html2_pages_Array=>{

if(html2_pages_Array && Array.isArray(html2_pages_Array)){
  for(let a=0;a<html2_pages_Array.length;a++){
  const country= ArrayOf_Countries_Urls_Data[a].country
    
    console.log(html2_pages_Array[5])
    console.log(html2_pages_Array.length,country);

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
