var number_of_conditions = 4;

function input_starts_with(string){

	var user_input = $('#question').val();
	
	var first_word = user_input.split(' ')[0];

	if ( first_word.toLowerCase() == string.toLowerCase()) {

		return true;

	} else {

		return false;


	}


};

function show_answer(option){
 
	var answer;

	// write conditions here

if (input_starts_with('should')) {
		answer = "yes"
 } else if ( input_starts_with('can')) {
		answer = "no"
 } else if(option === 3) {
		answer = "easy goes it and you will get there"
 } else if (option === 4) {
		answer = "retreat"
	} else if ( option === 2) {

			answer = "no no no"

	}


	else {
		answer = "easy goes it"
};

	display_answer(answer);
}



// yes, no, maybe , ask again


// if the user inputs with the word "should" then the output should be yes or no