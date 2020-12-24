let f =[]
let databrl=""
let arabunicode = ""
let checkBox = document.getElementById("sixkey");

let texarea = document.getElementById("brl")
let printtext = document.getElementById("awas")
let unicode = document.getElementById("unicode")
checkBox.addEventListener("click",setcheck)
//brlarea.addEventListener("keydown",keydown)

// texarea.addEventListener("keydown",ambilkey)
// texarea.addEventListener("keyup",sixKey)


texarea.addEventListener("keydown", keydown)
texarea.addEventListener("keyup",keyup)
texarea.addEventListener("keypress",press)

function press(e){
texarea.prevenDefault
}

function keydown(e){
if(checkBox.checked == true){  
    //console.log(e)
    ambilkey(e) 
} else{ 
    databrl = (e.key == "Backspace") ? databrl.slice(0,-1) : databrl+e.key
    arabunicode = (e.key == "Backspace") ? arabunicode.slice(0,-1) : arabunicode+brlToUtf(e.key)
}

}

function keyup(e){
    if(checkBox.checked == true){ 
        sixKey(e)
    }
    //printtext.value = databrl
    printtext.value = texarea.value
    unicode.value = arabunicode

}


//===========================**Start Fucntion=====================


function setcheck(e){
    let label = document.getElementsByTagName("label")[0]
    label.innerText = (checkBox.checked == true) ? "Braille SIXKEY Mode" : "Braille QWERTY Mode"
    texarea.focus()
}

// function keydown(e){
//     if (checkBox.checked){
//         console.log("six key aktive")
//     }else{
//         console.log("Non Aktif")
//     }
// }

function ambilkey(e){ 
    console.log(e)
    //e.prevenDefault()
    if(e.key == "Backspace"){
        f.length = 0
        databrl=databrl.slice(0,-1)
        //console.log(databrl)
        arabunicode=arabunicode.slice(0,-1)
        return
    }else if(e.key == "ArrowLeft" || e.key == "ArrowRight"){
        console.log(e)
    }else {
        f.push(e.key) 
    }
}

function sixKey(e) {
    //e.prevenDefault()
    //console.log(f.length)

    if (f.length >0){
        let mtex=""
        f.forEach((x) => mtex += x.toString())
        //let mtex += f.toString
        let tex =  document.getElementById("brl")
        let bbin = raiseTobin(mtex)
        let ansibralle = getBrailleFromBin(bbin)
        //console.log(ansibralle)
        databrl+=ansibralle
        arabunicode += brlToUtf(ansibralle)
        //console.log(arabunicode)
        tex.value = databrl
    }
    //console.log(f)
    f.length = 0
}

function raiseTobin(params) {
    let  sixbraille = ['s','d','f','j','k','l']
    let biner=""
     sixbraille.map( (x) => { 
            if(params.match(RegExp(x)) != null){
                biner=biner+"1"
            } else{
                biner=biner+"0"
            }
        })
    return biner
    }


//ASCII Hex; Braille Dots; ASCII Glyph; Braille Meaning"],
//Bersumber dari : https://en.wikipedia.org/wiki/Braille_ASCII


function getBrailleFromBin(params) {
    if(params == " "){return " "}
let Asciihex = {
"000000":" ",
"000110":"~",
"110101":"!", 
"000100":"@",   
"100111":"#",
"011101":"$",
"001101":"%",
"000110":'^', 
"111101":"&", 
"001001":"*",
"111011":"(", 
"110111":")", 
"000111":"_",
"100101":"+",
"010000":"1", 
"110000":"2",
"010010":"3",
"010011":"4",
"010001":"5",
"110010":"6",
"110011":"7", 
"110001":"8",
"100010":"9",
"001011":"0",
"100001":"-",
"111111":"=",
"010101":"[", 
"011011":"\\",
"011111":"]",
"001011":":", 
"000011":";",
"000010":'"', 
"100000":"'", 
"000001":",", 
"000101":".",
"100100":"/",        
"110001":"<", 
"100110":">",
"001111":"?", 
"001000":"A",
"011000":"B", 
"001100":"C",
"001110":"D",
"001010":"E",
"011100":"F",
"011110":"G",
"011010":"H", 
"010100":"I", 
"010110":"J", 
"101000":"K", 
"111000":"L", 
"101100":"M",
"101110":"N",
"101010":"O",
"111100":"P", 
"111110":"Q",
"111010":"R", 
"110100":"S",
"110110":"T",
"101001":"U",
"111001":"V",
"010111":"W", 
"101101":"X", 
"101111":"Y",
"101011":"Z", 
} 
return Asciihex[params] }


function brlToUtf(params) {

    let Arcode = {
        ' ':' ',
        'A':"0627",
        'B':'0628',
        'T':'062A',
        '?':'062B',
        'J':'062C',
        ':':'062D',
        'X':'062E',
        'D':'062F',
        '!':'0630',
        'R':'0631',
        'Z':'0632',
        'S':'0633',
        '%':'0634',
        '&':'0635',
        '$':'0636',
        ')':'0637',
        '=':'0638',
        '(':'0639',
        '<':'063A',
        'F':'0641',
        'Q':'0642',
        'K':'0643',
        'L':'0644',
        'M':'0645',
        'N':'0646',
        'W':'0648',
        'H':'0647',
        "'":'0621',
        'I':'064A',
        '1':'064E',
        'E':'0650',
        'U':'064F',
        '2':'064B',
        '9':'064D',
        '5':'064C',
        '@':'0670',
        '^':'0656',
        '+':'0657',
        ',':'0651',
        '3':'0652',
        '[':'0653',
        '/':'0623',
        '\\':'0624',
        'Y':'0626',
        '>':'0622',      
        '*':'0629',
        'O':'064A', 
        '7': '06DD', 
        '-':' ', 
        '.':'.'
    }
    let baseUnicode = Arcode[params.toUpperCase()]
    return String.fromCharCode("0x"+baseUnicode)
    }

