function myFirstExercice(){
    var n = document.getElementById("number").value;
    
    var result_p = document.getElementById("results");
    result_p.innerHTML = "";

    for(var i = 0;i<=n;i+=2) {
        result_p.innerHTML += i + " ";
    }
 
}

var second_exercice_numbers = [];
function mySecondExercice(){
    var mse_sum = 0;
    for(var i = 0;i < second_exercice_numbers.length;i++) {
        mse_sum += parseFloat(second_exercice_numbers[i]);
    }

    document.getElementById("results_2").innerText = mse_sum;

}

function mySecondSecondFunction(){ 
var nrnr = "";
for(var i = 0;i < second_exercice_numbers.length;i++) {
 
    nrnr += second_exercice_numbers[i] + " ";
}

document.getElementById("my_numbers").innerText = nrnr;
}






var third_exercice_numbers = [];
function myThirdExercice(){

  var xo = "";
        for (var i = (third_exercice_numbers.length - 1); i >= 0;i--) {      
            xo += third_exercice_numbers[i] + " ";
    
    }    
    document.getElementById("results_3").innerText = xo;
}

function myThirdThirdFunction(){
    var my_array = "";
    for(var i = 0;i < third_exercice_numbers.length;i++) {
     
        my_array += third_exercice_numbers[i] + " ";
    }
    
    document.getElementById("my_numbers_2").innerText = my_array;
    }






var my_string; var vowels_array = ["a", "e", "i", "o", "u"];
function myFourthExercice(){

    my_string = document.getElementById("text_input_4").value;

var vowelsCount = 0;
for (var i=0; i < my_string.length;i++) {
    if(vowels_array.includes(my_string[i].toLowerCase())) {vowelsCount +=1;}
}

document.getElementById("results_4").innerText = vowelsCount;
}