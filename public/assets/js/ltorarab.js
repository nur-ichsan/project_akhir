function eArabic(x){
    return x.toLocaleString('ar-EG');
  }

var verb = "كتب";
let texarab = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
//console.log(verb.split("").reverse().join(""));
//console.log(texarab.revserse())
//var isArabic = /^([\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\ufdf0-\ufdfd]|[ ])*$/g; 
// console.log('\u062a\u0645 \u0627\u0639\u062f\u0627\u062f \u0630\u0644\u0643')
// console.log("\u202b[بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ]");
console.log(eArabic(texarab))