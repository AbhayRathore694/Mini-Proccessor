// Apply formatting command
function execCmd(command, value = null) {
    const editor = document.getElementById("editor");
    editor.focus();
    document.execCommand(command, false, value);
}

// Change text color
function changeColor(color) {
    execCmd("foreColor", color);
}

// Update word and character count
function updateCounts() {
    const text = document.getElementById("editor").innerText;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById("wordCount").innerText = words.length;
    document.getElementById("charCount").innerText = text.replace(/\s/g, "").length;
}

// Set interval or use event to update word count live
document.getElementById("editor").addEventListener("input", updateCounts);
