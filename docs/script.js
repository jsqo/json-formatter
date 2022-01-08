


function formatJSON (prettify=false) {
	const inputTextArea = document.querySelector("textarea[name='inputJSON']");
	const outputTextArea = document.querySelector("textarea[name='outputJSON']");
	try {
		const jsonText = JSON.parse(inputTextArea.value);
		if (prettify) {
			outputTextArea.value = JSON.stringify(jsonText, null, 4);
		} else {
			outputTextArea.value = JSON.stringify(jsonText);
		}

		if (document.activeElement != inputTextArea) {
			outputTextArea.select();
		}
		console.log("Success.");
	} catch (e) {
		outputTextArea.value = "/* Error while parsing JSON! */"
		console.log("Error while parsing JSON!");
	}
}

function copyToClipboard (e) {
	const outputTextArea = document.querySelector("textarea[name='outputJSON']");
	let text = outputTextArea.value.trim();
	if (text) {
		navigator.clipboard.writeText(outputTextArea.value);
	}
}

function downloadJsonAsFile (e) {
	const outputTextArea = document.querySelector("textarea[name='outputJSON']");
	let text = outputTextArea.value.trim();
	var textFileAsBlob = new Blob([text], {type:'text/plain'});
	var textToSaveAsURL = window.URL.createObjectURL(textFileAsBlob);
	window.open(textToSaveAsURL);
}


