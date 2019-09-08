function LongestWord(longest) {
    var long=longest.split(" ") //first splitting the words in array
    var compare =[""] // creating an array to push the data
    
// creating the loop so to compare the size of the array first object and if its lesser than the elements in the long array.
// once its lesser it will push the data to compare array now next time compare will have the element which was in long array 
// so it will compare one by one and add the longest in to the compare array
// sound tough but yaa it is.

for (i=0; i < long.length ;i++) {
       var longmod = long[i].replace(/[^a-zA-Z0-9 ]/g, "") // this will remove special characteres while excluding the( /[^a-zA-Z0-9]/g, "") 
       if (compare[0].length < longmod.length){ 
           compare[0] = (longmod)
        }
    }
    return compare
}
console.log(LongestWord( 'Ahmed is one of the bestest coder&&^  sealed1 in the world'))
