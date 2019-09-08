function LetterChanges(str) {
    var str = str.toLowerCase()    
    strchar = ""
    for (i= (0) ; i <= str.length -1 ; i++ ) {
        var strcode =str.charCodeAt(i)
        //strcode === 122 ? strcode = 96 : {}
        if (strcode >=97 && strcode <= 122) {
            strcode === 122 ? strcode = 96 : {}
            if(
                String.fromCharCode(strcode +1) === "a" ||
                String.fromCharCode(strcode +1) === "e" ||
                String.fromCharCode(strcode +1) === "i" ||
                String.fromCharCode(strcode +1) === "o" ||
                String.fromCharCode(strcode +1) === "u"
              )
                {strchar += (String.fromCharCode((strcode +1)-32 ))}
            else {strchar += String.fromCharCode(strcode +1)}
            
        }
        else {
            strchar += String.fromCharCode(strcode)
        }
    }
return strchar

}
console.log(LetterChanges("Fun times!"))
