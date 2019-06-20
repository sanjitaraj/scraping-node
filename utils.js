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


exports.AbroadCountries_InLocalCountries_By_html2 = async (html2, RepresentationtLocCountry) => {
    const ArrayOf_abroadCountries_InLocalCountries = [];

    let abroadCountries_InLocalCountries = {};


    $('#posts-container>div:nth-child(3)>h2', html2).map((i, el) => {

        const RepresentationCountry = $(`#posts-container>div:nth-child(3)>h2`, html2)[i].children[0].data;
        $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i * 2) + 3})>li`, html2).map((k, e) => {

            const x = $(`#posts-container>div:nth-child(3)>ul:nth-child(${(i * 2) + 3})>li>a`, html2)[k]
            const url = x.attribs.href;
            const title = x.attribs.title;

            const Type_Name_LocCity = get_Type_Name_LocCity(title)
            abroadCountries_InLocalCountries = Object.assign(
                {},
                Type_Name_LocCity,
                {
                    RepresentationtLocCountry: RepresentationtLocCountry,
                    RepresentationCountry: RepresentationCountry,
                    url: url,
                }
            );
            //console.log(abroadCountries_InLocalCountries)  
            ArrayOf_abroadCountries_InLocalCountries.push(abroadCountries_InLocalCountries);
        })


    })

    return ArrayOf_abroadCountries_InLocalCountries;
}



exports.LocalCountries_In_AbroadCountries__By_html2 = async (html2, RepresentationCountry) => {

    const ArrayOf_LocalCountries_In_AbroadCountries = [];

    let LocalCountries_In_AbroadCountries = {};


    $('#posts-container>div:nth-child(2)>h2', html2).map((i, el) => {

        const RepresentationLocCountry = $(`#posts-container>div:nth-child(2)>h2`, html2)[i].children[0].data;
        $(`#posts-container>div:nth-child(2)>ul:nth-child(${(i * 2) + 3})>li`, html2).map((k, e) => {

            const x = $(`#posts-container>div:nth-child(2)>ul:nth-child(${(i * 2) + 3})>li>a`, html2)[k]
            const url = x.attribs.href;
            const title = x.children[0].data

            const Type_Name_LocCity = get_Type_Name_LocCity(title)
            LocalCountries_In_AbroadCountries = Object.assign(
                {},
                Type_Name_LocCity,
                {
                    RepresentationtLocCountry: RepresentationLocCountry,
                    RepresentationCountry: RepresentationCountry,
                    url: url,
                }
            );
            // console.log(LocalCountries_In_AbroadCountries)  
            ArrayOf_LocalCountries_In_AbroadCountries.push(LocalCountries_In_AbroadCountries);
        })


    })
   // console.log(ArrayOf_LocalCountries_In_AbroadCountries)
    return ArrayOf_LocalCountries_In_AbroadCountries;

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


exports.removeDuplicates=(originalArray)=> {
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


exports.getList_Of_Embassy_Cosulate = (contactID,html3,dataOf_2ndPage) => {
    
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
       

}

const cfDecodeEmail = (encodedString) => {
    var email = "", r = parseInt(encodedString.substr(0, 2), 16), n, i;
    for (n = 2; encodedString.length - n; n += 2) {
        i = parseInt(encodedString.substr(n, 2), 16) ^ r;
        email += String.fromCharCode(i);
    }
    return email;
}