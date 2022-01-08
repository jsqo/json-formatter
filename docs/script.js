


function formatJSON (e) {
	const inputTextArea = document.querySelector("textarea[name='inputJSON']");
	const outputTextArea = document.querySelector("textarea[name='outputJSON']");

	try {
		const jsonText = JSON.parse(inputTextArea.value);
		outputTextArea.value = JSON.stringify(jsonText, null, 4);
		console.log("Success.");
	} catch (e) {
		outputTextArea.value = "/* Error while parsing JSON! */"
		console.log("Error while parsing JSON!");
	}
}


