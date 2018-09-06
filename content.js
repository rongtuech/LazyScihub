function getSelectionText() {
    var text = "";
    if (window.getSelection) {
    	node = window.getSelection().focusNode
        // text = window.getSelection().toString();
        text = node.textContent

    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
console.log("lazy scihub");


if (window == top) {
	window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

trigger_key = 32; // key
function doKeyPress(e){
	if (e.ctrlKey && e.keyCode == trigger_key){ // if e.shiftKey is not provided then script will run at all instances of typing "G"
		//get highligh text 
		text = getSelectionText().replace("https://doi.org/", "").replace("http://doi.org/", "");
		//send message to background code
		chrome.runtime.sendMessage({"message": "open_new_tab", "url": text});
	}
}
