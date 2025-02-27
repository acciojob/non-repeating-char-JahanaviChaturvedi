function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	for(let i=0;i<str.length;i++){
		if char = str[i];
		if(obj[str[char]]===undefined){
			obj[str[char]]=1;
		}
		else{
			obj[str[char]]++;
		}
	}
	for(let i=0; i<str.length; i++){
		let char = str[i];
		if(obj[char === 1]){
			return char;
		}
}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
