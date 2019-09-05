// let now = new Date()
// document.write(now) // shows current date/time

window.setTimeout("time()", 1);
 
	function time() {
		var time = new Date();
		setTimeout("time()", 1);
		document.getElementById("jam").innerHTML = time.getHours();
		document.getElementById("menit").innerHTML = time.getMinutes();
    document.getElementById("detik").innerHTML = time.getSeconds();
    // document.getElementById("mdetik").innerHTML = time.getMilliseconds();
  }
