$(document).ready(function() {
	var x = parseInt(prompt("Enter a Value", "0"), 10);
	while (isNaN(x)) 
  {
    alert("Must input numbers");
    var x = parseInt(prompt("Enter a Value", "0"), 10);
  }
	for (counter=1; counter <= x; counter++) {
		if ((counter % 3) == 0)
		{
			if ((counter % 5) == 0){
				document.write("fizz" + " buzz" + "<br>")
				continue;
			}
			document.write("fizz" + "<br>")
			continue;
		}
		if ((counter % 5) == 0){
			document.write("buzz" + "<br>")
			continue;
		}
		else{
document.write(counter + "<br>");
}
}
});