jQuery(document).ready(function	(){
/////////////

	$('.for-result').hide();

	$('#word-form').submit(function(e){

		var p = {};
		p.a = p.e = p.i = p.o = p.u = p.l = p.n = p.r = p.s = p.t = 1;
		p.d = p.g = 2;
		p.b = p.c = p.m = p.p = 3;
		p.f = p.h = p.w = p.w = p.y =4;
		p.k = 5;
		p.j = p.x = 8;
		p.x = p.z = 10;

		var letterArray  = [];
		var word = $("#word").val();
		var word = word.toLowerCase();


//почему если запихнуть в функцию, то перестает работать? (sumArray is not defined)
		for (var i = 0; i < word.length; i++) {
			letterArray.push(word[i])
		}

		var sumArray = [];

		for (var key in p) {
			letterArray.forEach(function (letter) {
				if (key == letter) {
					sumArray.push(p[key])
				}
			})
		}

		function sumArr(){
			var sum = 0;
			for(i=0; i<sumArray.length; i++){
				sum += sumArray[i];
			}
			return sum;
		}


		$('.for-result').show();


		$(".sum").empty().append(sumArr());



		e.preventDefault();
	});






//////////////
});



/*
интересно, почему так нельзя сделать?
 var points = {};
var string ="A, E, I, O, U, L, N, R, S, T";
string = string.toLowerCase();
var stringArray = string.split(", ");

stringArray.forEach(function(letter){
	points[letter] = 1;
});
*/

