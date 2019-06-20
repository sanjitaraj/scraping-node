'use strict';
const rp = require('request-promise');
const utils = require('./utils');
const url = 'https://www.embassy-worldwide.com/'
let  ArrayOf_Countries_Urls_Data=[];
const getList = () => {
    rp(url)
        .then(html1 => {

            if (html1) {
                const ArrayOf_Countries_Urls = utils.ArrayOf_Countries_Urls_By_html1(html1);
                return ArrayOf_Countries_Urls;
            }
        })
        .then((ArrayOf_Countries_Urls) => {
            const array_of_html2 = [];
            ArrayOf_Countries_Urls_Data = ArrayOf_Countries_Urls;
            //console.log(ArrayOf_Countries_Urls.length)

            if (ArrayOf_Countries_Urls) {

               for (let i = 0; i <= 212; i++) {
                  const url = ArrayOf_Countries_Urls[i].url
                   const html= rp(url)
                   console.log(html)

                }

            }

         return array_of_html2;
        })
        .then(()=>{
           console.log('successful');
        })
        .catch(err =>{
            console.log('error: ' +err)
        })
}
getList();

