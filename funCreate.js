'use strict';
const rp = require('request-promise');
const $ = require('cheerio');
// // //const url='https://www.embassy-worldwide.com/country/afghanistan/';
// // const ArrayOf_abroadCountries_InLocalCountries_By_html2=(html2,RepresentationtLocCountry)=>{
// // //rp(url)
// // //.then((html2,RepresentationtLocCountry)=>{
// //     const abroadCountries_InLocalCountries={};
// //     abroadCountries_InLocalCountries.RepresentationtLocCountry=RepresentationtLocCountry;

// //     $('#posts-container>div:nth-child(3)>h2', html2).map((i, el) => {

// //         abroadCountries_InLocalCountries.RepresentationCountry=$(`#posts-container>div:nth-child(3)>h2`,html2)[i].children[0].data;
// //        $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i*2)+3})>li`, html2).map((k, e)=>{
// //         const x=$(`#posts-container>div:nth-child(3)>ul:nth-child(${(i*2)+3})>li>a`, html2)[k]
// //         abroadCountries_InLocalCountries.url=x.attribs.href;
// //         const title=x.attribs.title;
// //       const  Type_Name_LocCity=get_Type_Name_LocCity(title)
// //       abroadCountries_InLocalCountries=Object.assign(
// //         {},
// //         Type_Name_LocCity);

// //        })


// //     })
// //     console.log(abroadCountries_InLocalCountries)
// // //return abroadCountries_InLocalCountries;
// // //})

// // }
// //  //ArrayOf_abroadCountries_InLocalCountries_By_html2();


// const url='https://www.embassy-worldwide.com/country/afghanistan/';

// const LocalCountries_In_AbroadCountries__By_html2 = async() => {
//     const RepresentationCountry='Afghanistan'
// rp(url)
// .then(html2=>{
//     const ArrayOf_LocalCountries_In_AbroadCountries=[];

//     let LocalCountries_In_AbroadCountries = {};


//     $('#posts-container>div:nth-child(2)>h2', html2).map((i, el) => {

//       const RepresentationLocCountry = $(`#posts-container>div:nth-child(2)>h2`, html2)[i].children[0].data;
//         $(`#posts-container>div:nth-child(2)>ul:nth-child(${(i * 2) + 3})>li`, html2).map((k, e) => {

//             const x = $(`#posts-container>div:nth-child(2)>ul:nth-child(${(i * 2) + 3})>li>a`, html2)[k]
//             const url = x.attribs.href;
//             const title = x.children[0].data

//            const  Type_Name_LocCity =  get_Type_Name_LocCity(title)
//            LocalCountries_In_AbroadCountries = Object.assign(
//               {},
//              Type_Name_LocCity,
//              {
//              RepresentationtLocCountry :RepresentationLocCountry,
//             RepresentationCountry:RepresentationCountry,
//              url:url,
//              }
//              );
//            // console.log(LocalCountries_In_AbroadCountries)  
//              ArrayOf_LocalCountries_In_AbroadCountries.push(LocalCountries_In_AbroadCountries);
//         })


//     })
//     console.log(ArrayOf_LocalCountries_In_AbroadCountries[0])
//   //return ArrayOf_LocalCountries_In_AbroadCountries; 
// })

//     }

//     LocalCountries_In_AbroadCountries__By_html2();

//  const get_Type_Name_LocCity=(title)=>{

// if(title){
//     const Type_Name_LocCity={} 
//     const breakWith=' in '
//     if(title.includes(breakWith)){
//         const data= title.split(breakWith);
//         Type_Name_LocCity.RepresentationName=data[0];
//         Type_Name_LocCity.RepresentationLocCity=data[1]

//     }
//     else {
//         Type_Name_LocCity.RepresentationName=title;
//     }


//     if(title.includes('Embassy')  || title.includes('embassy')){
//         Type_Name_LocCity.RepresentationType='Embassy';
//     }
//     else  if(title.includes('Consulate')  || title.includes('consulate')){
//         Type_Name_LocCity.RepresentationType='Consulate';
//     }
//     else {
//         Type_Name_LocCity.RepresentationType='Other';
//     }
//     return Type_Name_LocCity;
// }

// }



// const url='https://www.embassy-worldwide.com/embassy/consulate-of-india-in-kandhar-afghanistan/';
// //const url = 'https://www.embassy-worldwide.com/embassy/embassy-of-afghanistan-in-canberra-australia/'
// //"ContactID (S)","RepresentationAddress (S)","RepresentationCountry (S)","RepresentationEmail (S)","RepresentationFax (S)","RepresentationLocCity (S)","RepresentationName (S)","RepresentationPhone (S)","RepresentationType (S)","RepresentationWebsite (S)","RepresentationtLocCountry (S)"
// const getList_Of_Embassy_Cosulate = () => {
//     rp(url)
//         .then(html3 => {
//             const dataOf_2ndPage =
//             { RepresentationName: 'Consulate of India',
//             RepresentationLocCity: 'Kandhar',
//             RepresentationType: 'Consulate',
//             RepresentationtLocCountry: 'Afghanistan',
//             RepresentationCountry: 'India',
//             url:
//              'https://www.embassy-worldwide.com/embassy/consulate-of-india-in-kandhar-afghanistan/' };

//             let RepresentationAddress, RepresentationEmail,RepresentationCountry, RepresentationtLocCountry, RepresentationName,RepresentationFax,RepresentationType, RepresentationPhone, RepresentationLocCity, RepresentationWebsite
//             if ($('.post-content>ul:nth-child(4)>li', html3).is('#address')) {
//                  RepresentationAddress = $('.post-content>ul:nth-child(4)>#address', html3)[0].children[1].data;
//             }
//             if ($('.post-content>ul:nth-child(4)>li', html3).is('#email')) {
//                 const emailCode = $('.post-content>ul:nth-child(4)>#email', html3)[0].children[1].attribs['data-cfemail']
//                 RepresentationEmail = cfDecodeEmail(emailCode)
//             }
           
//             if ($('.post-content>ul:nth-child(4)>li', html3).is('#fax')) {
//                 RepresentationFax = $('.post-content>ul:nth-child(4)>#fax', html3)[0].children[1].data;
//             }
       
//             if ($('.post-content>ul:nth-child(4)>li', html3).is('#phone')) {
//                 RepresentationPhone = $('.post-content>ul:nth-child(4)>#phone', html3)[0].children[1].data;
//             }
    
//             if ($('.post-content>ul:nth-child(4)>li', html3).is('#city')) {
//                const locCity= $('.post-content>ul:nth-child(4)>#city', html3)[0].children[1].data;
//                 if(locCity){
//                     RepresentationLocCity=locCity;
//                 }
//                 else if(dataOf_2ndPage.RepresentationLocCity){
//                     RepresentationLocCity=dataOf_2ndPage.RepresentationLocCity;
//                 }
//             }
     
//             if ($('.post-content>ul:nth-child(4)>li', html3).is('#website')) {
//                 RepresentationWebsite = $('.post-content>ul:nth-child(4)>#website', html3)[0].children[1].data;
//             }

//             RepresentationName= dataOf_2ndPage.RepresentationName,
//             RepresentationType= dataOf_2ndPage. RepresentationType,
//             RepresentationtLocCountry= dataOf_2ndPage. RepresentationtLocCountry,
//             RepresentationCountry=dataOf_2ndPage.RepresentationCountry,
        
//             console.log({ RepresentationAddress, RepresentationEmail,RepresentationCountry, RepresentationtLocCountry, RepresentationName,RepresentationFax,RepresentationType, RepresentationPhone, RepresentationLocCity, RepresentationWebsite})
//         })

// }
// getList_Of_Embassy_Cosulate();

// const cfDecodeEmail = (encodedString) => {
//     var email = "", r = parseInt(encodedString.substr(0, 2), 16), n, i;
//     for (n = 2; encodedString.length - n; n += 2) {
//         i = parseInt(encodedString.substr(n, 2), 16) ^ r;
//         email += String.fromCharCode(i);
//     }
//     return email;
// }


const url='https://www.embassy-worldwide.com/embassy/consulate-of-india-in-kandhar-afghanistan/';
//const url = 'https://www.embassy-worldwide.com/embassy/embassy-of-afghanistan-in-canberra-australia/'
//"ContactID (S)","RepresentationAddress (S)","RepresentationCountry (S)","RepresentationEmail (S)","RepresentationFax (S)","RepresentationLocCity (S)","RepresentationName (S)","RepresentationPhone (S)","RepresentationType (S)","RepresentationWebsite (S)","RepresentationtLocCountry (S)"
const getList_Of_Embassy_Cosulate = (contactID) => {
    rp(url)
        .then(html3 => {
            const dataOf_2ndPage =
            { RepresentationName: 'Consulate of India',
            RepresentationLocCity: 'Kandhar',
            RepresentationType: 'Consulate',
            RepresentationtLocCountry: 'Afghanistan',
            RepresentationCountry: 'India',
            url:
             'https://www.embassy-worldwide.com/embassy/consulate-of-india-in-kandhar-afghanistan/' };

           let ContactID, RepresentationAddress, RepresentationEmail,RepresentationCountry, RepresentationtLocCountry, RepresentationName,RepresentationFax,RepresentationType, RepresentationPhone, RepresentationLocCity, RepresentationWebsite
            
           ContactID=contactID;
           if ($('.post-content>ul:nth-child(4)>li', html3).is('#address')) {
              RepresentationAddress = $('.post-content>ul:nth-child(4)>#address', html3)[0].children[1].data;
            }
            if ($('.post-content>ul:nth-child(4)>li', html3).is('#email')) {
                const emailCode = $('.post-content>ul:nth-child(4)>#email', html3)[0].children[1].attribs['data-cfemail']
                RepresentationEmail = cfDecodeEmail(emailCode)
            }
           
            if ($('.post-content>ul:nth-child(4)>li', html3).is('#fax')) {
                RepresentationFax = $('.post-content>ul:nth-child(4)>#fax', html3)[0].children[1].data;
            }
       
            if ($('.post-content>ul:nth-child(4)>li', html3).is('#phone')) {
                RepresentationPhone = $('.post-content>ul:nth-child(4)>#phone', html3)[0].children[1].data;
            }
    
            if ($('.post-content>ul:nth-child(4)>li', html3).is('#city')) {
               const locCity= $('.post-content>ul:nth-child(4)>#city', html3)[0].children[1].data;
                if(locCity){
                    RepresentationLocCity=locCity;
                }
                else if(dataOf_2ndPage.RepresentationLocCity){
                    RepresentationLocCity=dataOf_2ndPage.RepresentationLocCity;
                }
            }
     
            if ($('.post-content>ul:nth-child(4)>li', html3).is('#website')) {
                RepresentationWebsite = $('.post-content>ul:nth-child(4)>#website', html3)[0].children[1].data;
            }

            RepresentationName= dataOf_2ndPage.RepresentationName,
            RepresentationType= dataOf_2ndPage. RepresentationType,
            RepresentationtLocCountry= dataOf_2ndPage. RepresentationtLocCountry,
            RepresentationCountry=dataOf_2ndPage.RepresentationCountry;
           
           return ({ContactID, RepresentationAddress, RepresentationCountry,RepresentationEmail,RepresentationFax,  RepresentationLocCity, RepresentationName, RepresentationPhone,RepresentationType, RepresentationWebsite,RepresentationtLocCountry})
            //console.log({ RepresentationAddress, RepresentationEmail,RepresentationCountry, RepresentationtLocCountry, RepresentationName,RepresentationFax,RepresentationType, RepresentationPhone, RepresentationLocCity, RepresentationWebsite})
        })
        .then(obj=>{
            console.log(obj)
        })

}
const ContactID=1
getList_Of_Embassy_Cosulate(ContactID);

const cfDecodeEmail = (encodedString) => {
    var email = "", r = parseInt(encodedString.substr(0, 2), 16), n, i;
    for (n = 2; encodedString.length - n; n += 2) {
        i = parseInt(encodedString.substr(n, 2), 16) ^ r;
        email += String.fromCharCode(i);
    }
    return email;
}
