// main javascript file

var main = function(){

}

var calcFibEvenNum = function(){
	
	var first = 1;
	var second = 2;
	var array = [];

	for(i = 0; i < 4000000; i++){
		if(first % 2 == 0){
			array.push(first);
		}
		
		$("#evenFibNumbers").text(array);
		i++;

		sum = first + second;

		first = second;
		second = sum;

		if(sum >= 4000000){
			i = 4000001;
		}
	}
}

var calcFibAllNum = function(){
	
	var first = 1;
	var second = 2;
	var array = [];

	for(i = 0; i < 4000000; i++){
		array.push(first);
		$("#allFibNumbers").text(array);
		i++;

		sum = first + second;

		first = second;
		second = sum;

		if(sum >= 4000000){
			i = 4000001;
		}
	}
}

var calcSumFibEvenNum = function(){
	var first = 1;
	var second = 2;
	var array = [];
	var sum_all_even_nums = 0;

	for(i = 0; i < 4000000; i++){
		if(first % 2 == 0){
			array.push(first);
			sum_all_even_nums = sum_all_even_nums + first;
		}

		i++;
		sum = first + second;
		first = second;
		second = sum;

		if(sum >= 4000000){
			i = 4000001;
		}
	}
	$("#SumEvenFibNumbers").text(sum_all_even_nums);
}

$(document).ready(main);



