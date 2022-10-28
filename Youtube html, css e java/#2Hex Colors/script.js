function changeColor(){
    var hex_numbers = ["0", "1", "2", "3", "4"];

    var hexcode = '';

    var i = 0;
    while(i < 6)
    {
       var random_index = Math.floor(Math.random() * hex_numbers.length);
       
       hexcode += hex_numbers[random_index];
       i++;
    }
    //console.log(Math.random() * hex_numbers.length)
    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}