
//const utfbrl = require('./ArabArray.js')
//import { utfbrl } from './ArabArray.js';
/*------------------------------------------------------------------
Fungsi ransToUtf(string)
Funsi ini merubah text arab menjadi menjadi string braille arab
berdasarkan dari tabel array yang berada pada file ArabArray
--------------------------------------------------------------------*/
function TransToUtf(arabtext){
    utfbrl.forEach(myfunc)
    function myfunc(item, index) {
        arabtext = arabtext.replace(item[0],item[1].toUpperCase())
    }
return arabtext
}

/*------------------------------------------------------------------
Fungsi moveItem(array,from,to)
Fungsi ini memindahkan posisi item array dari dan ke
contoh :  [1,2,3,4] angka ke empat dipindahkan ke posisi 1
moveItem(array,3,1)
--------------------------------------------------------------------*/

function moveItem(arr,from,to) { 
    /* ---------------*****---------------
       remove `from` item and store it
        var f = data.splice(from, 1)[0];
         insert stored item into position `to`
    */
         arr.splice(to,0,arr.splice(from, 1)[0])
         return arr
      }
    
    
/* ----------------------------------------------------------
funsi finTasdid(array[])
mencari dan meletakkan posisi tasdid pada array index sehingga 
dapat digunakan oleh fungsi moveItem
------------------------------------------------------------*/
const finTasdid = (mkata) => {
    let  postasdid = []
    let tasindex=0
    let pos = 0
    mkata.map(x => x == ',' ?  postasdid[tasindex++] = pos++ :pos++ )
         return postasdid
    }
    
/*------------------------------------------------*?
 *   Function Tasdid(array[])
    Merubah Posisi tasdid dari belakang ke depan huruf 
     contoh ALR,1:EIM menjadi AL,R1:EIM
     huruf R menggunakan tasdid(,) dibelakangnya kemudian
     dengan fungsi ini dipindah ke depan
     fungsi ini membutuhkan fungsi finTasdid untuk mendapatkan posisi
     tasdid dan moveItem untuk memindahkannhya
 *  */  
function Tasdid(kata) {
        finTasdid(kata).map(x => moveItem(kata,x,x-1))
        return kata
    }


    
function TransArtoBraille(arab) {
   //const proses1 = TransToUtf(arab)
  // const proses2 = Tasdid(proses1.split("")).join("") 
  const proses2 = Tasdid(TransToUtf(arab).split("")).join("") 
   return proses2 //+"\n"+ proses2
   //return arab
}

// let data2 = "ab;cde;fghj"
// let data =['a','b',';','c','d',';','e','g',';','@']
//let texarab = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
//let texarab = "إِنَّ اللَّهَ لا يَستَحيي أَن يَضرِبَ مَثَلًا ما بَعوضَةً فَما فَوقَها ۚ فَأَمَّا الَّذينَ آمَنوا فَيَعلَمونَ أَنَّهُ الحَقُّ مِن رَبِّهِم ۖ وَأَمَّا الَّذينَ كَفَروا فَيَقولونَ ماذا أَرادَ اللَّهُ بِهٰذا مَثَلًا ۘ يُضِلُّ بِهِ كَثيرًا وَيَهدي بِهِ كَثيرًا ۚ وَما يُضِلُّ بِهِ إِلَّا الفاسِقينَ"
let texarab ="الَّذينَ يَنقُضونَ عَهدَ اللَّهِ مِن بَعدِ ميثاقِهِ وَيَقطَعونَ ما أَمَرَ اللَّهُ بِهِ أَن يوصَلَ وَيُفسِدونَ فِي الأَرضِ ۚ أُولٰئِكَ هُمُ الخاسِرونَ"

//console.log(texarab)
//console.log(TransArtoBraille(texarab))
//console.log(Tasdid(data2))
//  console.log(arabword(texarab))
//  console.log(TransToUtf(texarab))
//  console.log(Tasdid(data))