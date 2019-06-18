const $ = require('cheerio'); 


exports.ArrayOf_Countries_Urls_By_html1=(html1)=>{
    const ArrayOf_Countries_Urls=[];
    $('.cat_col >li>a', html1).map((i, el) => {
        const url = el.attribs.href;
        const country= $('.cat_col>li>a', html1)[i].children[0].children[0].data
        ArrayOf_Countries_Urls.push({url,country});
    })
return ArrayOf_Countries_Urls;
}