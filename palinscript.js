function palin()
{
	
	var str = document.getElementById("str").value;
	var i = str.length;
	var rev="";
	var str2="";
	for(var j=i; j>=0; j--) 
	{
		rev = rev+str.charAt(j);
	}
	
	if(str == rev) 
	{
		str2=" String is Palindrome";
	} 
	else 
	{
		str2=" String is not a Palindrome";
	}
	document.getElementById('show').innerHTML = str2;
}