function transformString(inputString) {
    const length = inputString.length;
    let details = `Original: "${inputString}"\n`;

    if (length % 15 === 0) {
      // Length is divisible by both 3 and 5 (eg: 15)
      const reversedString = inputString.split("").reverse().join("");
      details += `First: "${reversedString}"\n`;
      const asciiTransformed = reversedString
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
      details += `Then,ASCII code: "${asciiTransformed}"\n`;
      return { result: asciiTransformed, details };
    } else if (length % 3 === 0) {
      // Length is divisible by 3
      const reversedString = inputString.split("").reverse().join("");
      details += `First: "${reversedString}"\n`;
      return { result: reversedString, details };
    } else if (length % 5 === 0) {
      // Length is divisible by 5
      const asciiTransformed = inputString
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
      details += `ASCII code: "${asciiTransformed}"\n`;
      return { result: asciiTransformed, details };
    } else {
      // Length is neither divisible by 3 nor 5
      details += `String is not divisible by 3 or 5.\n`;
      return { result: inputString, details };
    }
  }

  function transformAndDisplay() {
    const inputString = document.getElementById("inputString").value;
    const length = inputString.length;
    const { result, details } = transformString(inputString);
    const message = `"${inputString}", is ${length} characters: transformed to: ${result}`;
    document.getElementById("result").innerText = message;
    document.getElementById("details").innerText = details;
  }