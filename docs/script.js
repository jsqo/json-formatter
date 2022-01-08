


function formatJSON (prettify=false) {
	const inputTextArea = document.querySelector("textarea[name='inputJSON']");
	const outputTextArea = document.querySelector("textarea[name='outputJSON']");

	const indentationSelect = document.querySelector("select[name='indentation']");
	const indentation = parseInt(indentationSelect.value);

	try {
		const jsonText = JSON.parse(inputTextArea.value);
		if (prettify) {
			if (indentation === 0) {
				outputTextArea.value = JSON.stringify(jsonText, null, "\t");
			} else {
				outputTextArea.value = JSON.stringify(jsonText, null, indentation);
			}
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
	var d = new Date();
	var json_filename = "jsqo_on_" + ("0" + d.getDate()).slice(-2)
		+ "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear()
		+ "_at_" + ("0" + d.getHours()).slice(-2) + "-" + ("0" + d.getMinutes()).slice(-2)
		+ "-" + ("0" + d.getSeconds()).slice(-2) + ".json";

	const outputTextArea = document.querySelector("textarea[name='outputJSON']");
	let text = outputTextArea.value.trim();
	var textFileAsBlob = new Blob([text], {type:'text/plain'});

	var downloadLink = document.createElement("a");
	downloadLink.download = json_filename;
	downloadLink.innerHTML = "Download Output";
	if (window.webkitURL != null)
	{
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	} else {
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement (event)
{
	document.body.removeChild(event.target);
}


