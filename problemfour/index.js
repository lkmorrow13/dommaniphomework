var form = document.getElementById('theform');

var stopSubmit = false;

document.addEventListener('submit', function(e) {
	e.preventDefault();
	if (document.getElementById('password').value === '12345678' && document.getElementById('username').value.length < 14) {
		document.getElementById('killit').innerHTML = "Congrats you know your username and password!"
	} 
	else  {
		alert('Incorrect Username or Password')
		return false;
	}
}) 
