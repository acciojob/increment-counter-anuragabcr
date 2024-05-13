//your JS code here. If required.
function btnClick() {
	val = document.getElementById("counter")
	alert(val.innerHTML)
	val.innerHTML = parseInt(val.innerHTML)+1
}