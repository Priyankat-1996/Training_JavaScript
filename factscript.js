function factorial()
{
	var no = Number(document.getElementById("fact").value);
	var factorial = 1;

	  for (var i = 1; i <= no; i++) {  
	    
	    factorial = factorial * i;
	  }

	  document.getElementById('show').innerHTML = factorial;
}