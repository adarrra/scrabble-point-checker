jQuery(document).ready(function	(){
/////////////

	$('.for-result').hide();

	$('#word-form').submit(function(e){

		var points = {};


		function addPropertiesInObject (string,value){
			string = string.toLowerCase();
			var stringArray = string.split(", ");

			stringArray.forEach(function(letter){
				points[letter] = value;
			});
		}
		addPropertiesInObject ("A, E, I, O, U, L, N, R, S, T", 1);
		addPropertiesInObject ("D, G",2);
		addPropertiesInObject ("B, C, M, P", 3);
		addPropertiesInObject ("F, H, V, W, Y",4);
		addPropertiesInObject ("K", 5);
		addPropertiesInObject ("J, X",8);
		addPropertiesInObject ("Q, Z",10);

		var letterArray  = [];
		var word = $("#word").val();
		word = word.toLowerCase();


		function arrayFromWord(word) {
			for (var i = 0; i < word.length; i++) {
				letterArray.push(word[i])
			}

			var sumArray = [];

			for (var key in points) {
				letterArray.forEach(function (letter) {
					if (key == letter) {
						sumArray.push(points[key])
					}
				})
			}

			return sumArray;
		}

		function sumArr(sumArray){
			var sum = 0;
			for(i=0; i < sumArray.length; i++){
				sum += sumArray[i];
			}
			return sum;
		}


		$('.for-result').show();

		var sumArray = arrayFromWord(word);


		$(".sum").empty().append(sumArr(sumArray));



		e.preventDefault();
	});






//////////////
});


/*A, E, I, O, U, L, N, R, S, T       1
 D, G                               2
 B, C, M, P                         3
 F, H, V, W, Y                      4
 K                                  5
 J, X                               8
 Q, Z                               10*/

