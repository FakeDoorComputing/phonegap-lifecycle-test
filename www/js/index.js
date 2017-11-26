var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// event listener for device ready created here
// when the device reports 'ready' the onDeviceReady function is called which runs the program
document.addEventListener("deviceready", onDeviceReady, false);


function updateDisplay() {

document.getElementById("launched").innerText="Application Launched: "+launched_count;
document.getElementById("paused").innerText="Application Paused: "+paused_count;
document.getElementById("resumed").innerText="Application Resumed: "+resumed_count;

	/* Original code uses jQuery and is used to change the text on the screen
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
	*/
}


// device APIs are available
//
    function onDeviceReady() {

// two lifecycle events captured here, onResume and onPause

	// event listener for resume created here.  This listens for when the app is brought back to the foreground (focus)
	// this then sends to function onResume which counts the number of times the app is resumed
	document.addEventListener("resume", onResume, false);
	// event listener for pause created here.  This listens for when the app is sent to the background (no focus)
	// this then sends to function onPause which counts the number of times the app is paused
	document.addEventListener("pause", onPause, false);

	launched_count++;
	updateDisplay();

	alert("device ready");
    }


    function onPause() {

	paused_count++;
	updateDisplay();

	alert("pause");
    }


    function onResume() {

	resumed_count++;
	updateDisplay();

	alert("resume");
    }
