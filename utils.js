const $ = require('cheerio');


exports.ArrayOf_Countries_Urls_By_html1 = (html1) => {
    const ArrayOf_Countries_Urls = [];
    $('.cat_col >li>a', html1).map((i, el) => {
        const url = el.attribs.href;
        const country = $('.cat_col>li>a', html1)[i].children[0].children[0].data
        ArrayOf_Countries_Urls.push({ url, country });
    })
    return ArrayOf_Countries_Urls;
}


exports.AbroadCountries_InLocalCountries_By_html2 = async(html2, RepresentationtLocCountry) => {
const ArrayOf_abroadCountries_InLocalCountries=[];

    let abroadCountries_InLocalCountries = {};
//const RepresentationtLocCountry =RepresentationtLocCountry;

    $('#posts-container>div:nth-child(3)>h2', html2).map((i, el) => {

      const RepresentationCountry = $(`#posts-container>div:nth-child(3)>h2`, html2)[i].children[0].data;
        $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i * 2) + 3})>li`, html2).map((k, e) => {
           
            const x = $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i * 2) + 3})>li>a`, html2)[k]
            const url = x.attribs.href;
            const title = x.attribs.title;
            
           const  Type_Name_LocCity =  get_Type_Name_LocCity(title)
          abroadCountries_InLocalCountries = Object.assign(
              {},
             Type_Name_LocCity,
             {
             RepresentationtLocCountry :RepresentationtLocCountry,
            RepresentationCountry:RepresentationCountry,
             url:url,
             }
             );
             //console.log(abroadCountries_InLocalCountries)  
             ArrayOf_abroadCountries_InLocalCountries.push(abroadCountries_InLocalCountries);
        })


    })
    
  return ArrayOf_abroadCountries_InLocalCountries; 
}



const get_Type_Name_LocCity = (title) => {

    if (title) {
        const Type_Name_LocCity = {}
        const breakWith = ' in '
        if (title.includes(breakWith)) {
            const data = title.split(breakWith);
            Type_Name_LocCity.RepresentationName = data[0];
            Type_Name_LocCity.RepresentationLocCity = data[1]

        }
        else {
            Type_Name_LocCity.RepresentationName = title;
        }


        if (title.includes('Embassy') || title.includes('embassy')) {
            Type_Name_LocCity.RepresentationType = 'Embassy';
        }
        else if (title.includes('Consulate') || title.includes('consulate')) {
            Type_Name_LocCity.RepresentationType = 'Consulate';
        }
        else {
            Type_Name_LocCity.RepresentationType = 'Other';
        };
      //console.log(Type_Name_LocCity);
      return (Type_Name_LocCity);
    }

}