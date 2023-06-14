// complete the given function

function palindrome(str){

	var s = str.toLowerCase();

	for(let i=0, j=str.length-1; i<j; i++,j--){
		if(s[i] != s[j])
			return false;
	}

	return true;

}
module.exports = palindrome
