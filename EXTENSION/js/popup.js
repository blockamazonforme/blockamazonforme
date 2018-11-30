

// Does things based on switch states
function toggleButtonFunc() {
	chrome.storage.sync.get('state', function(data) {
		  if (data.state === false) {
			chrome.browserAction.setIcon({path:"iconoff128.png"});
			document.getElementById("myonoffswitch").checked = false;
			chrome.runtime.sendMessage({greeting: "STOP"});
		
		  } 
		  else {
			chrome.browserAction.setIcon({path:"icon128.png"});
			document.getElementById("myonoffswitch").checked = true;
			chrome.runtime.sendMessage({greeting: "GO"});
		   }
	});
};

// Runs switch function on load
toggleButtonFunc();
//SwitchFunction();

// Listens to On off switch
document.getElementById("myonoffswitch").addEventListener("click", mySwitchFunction);



// Function for on off switch 
function mySwitchFunction() {
	var stateVal = document.getElementById("myonoffswitch").checked;
	chrome.storage.sync.set({state: stateVal});
	toggleButtonFunc();
}


