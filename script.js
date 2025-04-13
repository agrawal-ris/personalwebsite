function convertText() {
    const input = document.getElementById("inputText").value.trim();
    const output = document.getElementById("outputText");
    const output2 = document.getElementById("outputText2");
  
    // Clear previous content
    output.textContent = "";
    output2.textContent = "";
  
    // Only update if input is not empty
    if (input) {
      output.textContent = input;
      output2.textContent = input;
    }
  }
  