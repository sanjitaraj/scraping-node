'use strict';
const rp = require('request-promise');  
const $ = require('cheerio'); 
//const url='https://www.embassy-worldwide.com/country/afghanistan/';
const ArrayOf_abroadCountries_InLocalCountries_By_html2=(html2,RepresentationtLocCountry)=>{
//rp(url)
//.then((html2,RepresentationtLocCountry)=>{
    const abroadCountries_InLocalCountries={};
    abroadCountries_InLocalCountries.RepresentationtLocCountry=RepresentationtLocCountry;

    $('#posts-container>div:nth-child(3)>h2', html2).map((i, el) => {
       
        abroadCountries_InLocalCountries.RepresentationCountry=$(`#posts-container>div:nth-child(3)>h2`,html2)[i].children[0].data;
       $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i*2)+3})>li`, html2).map((k, e)=>{
        const x=$(`#posts-container>div:nth-child(3)>ul:nth-child(${(i*2)+3})>li>a`, html2)[k]
        abroadCountries_InLocalCountries.url=x.attribs.href;
        const title=x.attribs.title;
      const  Type_Name_LocCity=get_Type_Name_LocCity(title)
      abroadCountries_InLocalCountries=Object.assign(
        {},
        Type_Name_LocCity);
       
       })

      
    })
    console.log(abroadCountries_InLocalCountries)
//return abroadCountries_InLocalCountries;
//})
   
}
 //ArrayOf_abroadCountries_InLocalCountries_By_html2();


 const get_Type_Name_LocCity=(title)=>{
    
if(title){
    const Type_Name_LocCity={} 
    const breakWith=' in '
    if(title.includes(breakWith)){
        const data= title.split(breakWith);
        Type_Name_LocCity.RepresentationName=data[0];
        Type_Name_LocCity.RepresentationLocCity=data[1]

    }
    else {
        Type_Name_LocCity.RepresentationName=title;
    }

    
    if(title.includes('Embassy')  || title.includes('embassy')){
        Type_Name_LocCity.RepresentationType='Embassy';
    }
    else  if(title.includes('Consulate')  || title.includes('consulate')){
        Type_Name_LocCity.RepresentationType='Consulate';
    }
    else {
        Type_Name_LocCity.RepresentationType='Other';
    }
    console.log(Type_Name_LocCity);
}

}
