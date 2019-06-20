'use strict';
const rp = require('request-promise');
const utils = require('./utils');
//const Promise = require('bluebird');

//const otcsv = require('objects-to-csv');  
//const $ = require('cheerio'); 
const url = 'https://www.embassy-worldwide.com/'
let ArrayOf_Countries_Urls_Data = [];

const LoopRun = async (a, b) => {
  if (ArrayOf_Countries_Urls_Data) {
    const allReq = [];
    for (let i = a; i <= b; i++) {
      const obj = ArrayOf_Countries_Urls_Data[i]
      await allReq.push(rp(obj.url))
    }
    return await Promise.all(allReq);
  }

}



const getList = async () => {
  await rp(url)
    .then(html1 => {

      if (html1) {
        const ArrayOf_Countries_Urls = utils.ArrayOf_Countries_Urls_By_html1(html1);
        return ArrayOf_Countries_Urls;
      }
    })
    .then(async (ArrayOf_Countries_Urls) => {
      const array_of_html2 = [];
      ArrayOf_Countries_Urls_Data = ArrayOf_Countries_Urls;
      console.log(ArrayOf_Countries_Urls.length)

      // if (ArrayOf_Countries_Urls) {
      //   const allReq = [];
      //   for (let i = 0; i <= 50; i++) {
      //     const obj = ArrayOf_Countries_Urls[i]
      //     await allReq.push(rp(obj.url))
      //   }
      //   return await Promise.all(allReq);
      // }
      let a = 0, b = 25;
      for (let k = 1; k <= 9; k++) {
     console.log(k)
        if (k == 9) {
          const d1 = await LoopRun(a = 201, b = 211);
          array_of_html2.push(...d1)
        }
        else {
          const d1 = await LoopRun(a, b);
          array_of_html2.push(...d1)
          a = b + 1;
          b = b + 25;
        }

      }
      return array_of_html2;
    })
    .then(async (html2_pages_Array) => {
     
      console.log(html2_pages_Array[5])
      console.log(html2_pages_Array.length)
      if (html2_pages_Array && Array.isArray(html2_pages_Array)) {
        let All_ArrayOf_abroadCountries_InLocalCountries = [];
        let All_ArrayOf_LocalCountries_In_AbroadCountries = [];
        for (let a = 0; a < html2_pages_Array.length; a++) {
          const country = ArrayOf_Countries_Urls_Data[a].country
          console.log(country)
          const ArrayOf_abroadCountries_InLocalCountries = await utils.AbroadCountries_InLocalCountries_By_html2(html2_pages_Array[a], country);
          console.log(ArrayOf_abroadCountries_InLocalCountries.length);
          All_ArrayOf_abroadCountries_InLocalCountries.push(...ArrayOf_abroadCountries_InLocalCountries);

          const ArrayOf_LocalCountries_In_AbroadCountries = await utils.LocalCountries_In_AbroadCountries__By_html2(html2_pages_Array[a], country);
          console.log(ArrayOf_LocalCountries_In_AbroadCountries.length);
          All_ArrayOf_LocalCountries_In_AbroadCountries.push(...ArrayOf_LocalCountries_In_AbroadCountries);
        }
        console.log(All_ArrayOf_abroadCountries_InLocalCountries.length);
        console.log(All_ArrayOf_LocalCountries_In_AbroadCountries.length);
      }
    })
    .then(() => {
      console.log('successful');
    })
    .catch(err => {
      console.log(err)
    });

}

getList();
