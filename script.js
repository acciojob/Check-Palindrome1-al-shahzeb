// complete the given function

function palindrome(str){

	for(let i=0, j=str.length-1; i<j; i++,j--){
		if(str[i] != str[j])
			return false;
	}

	return true;

}
module.exports = palindrome
