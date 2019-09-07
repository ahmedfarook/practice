function namereverse(name) {
    count = name.length
    var reverse = "";
    for (i=0; i < name.length; i++){
        reverse += (name[count -= 1])
     }
     return reverse
}
console.log(namereverse("Argument goes here"))
