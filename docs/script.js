


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
		outputTextArea.select();
		console.log("Success.");
	} catch (e) {
		outputTextArea.value = "/* Error while parsing JSON! */"
		console.log("Error while parsing JSON!");
	}
}

function copyToClipboard (e) {
	let text = outputTextArea.value.trim();
	if (text) {
		navigator.clipboard.writeText(outputTextArea.value);
	}
}


