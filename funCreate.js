'use strict';
const rp = require('request-promise');  
const $ = require('cheerio'); 
const url='https://www.embassy-worldwide.com/country/afghanistan/';
const ArrayOf_abroadCountries_InLocalCountries_By_html2=()=>{
rp(url)
.then((html2)=>{
    const ArrayOf_abroadCountries_InLocalCountries=[];
    const  RepresentationtLocCountry=$('#embassy-search-form',html2)
console.log(RepresentationtLocCountry)
    $('#posts-container>div:nth-child(3)>h2', html2).map((i, el) => {
       
       const RepresentationCountry=$(`#posts-container>div:nth-child(3)>h2`,html2)[i].children[0].data;
       $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i*2)+3})>li`, html2).map((k, e)=>{
        const x=$(`#posts-container>div:nth-child(3)>ul:nth-child(${(i*2)+3})>li>a`, html2)[k]
        const url=x.attribs.href;
        const title=x.attribs.title;
      const  Type_Name_LocCity=get_Type_Name_LocCity(title)
        console.log(Type_Name_LocCity);
       })

       // ArrayOf_abroadCountries_InLocalCountries.push({});
    })
//return ArrayOf_abroadCountries_InLocalCountries;
})
   
}
 ArrayOf_abroadCountries_InLocalCountries_By_html2();


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
