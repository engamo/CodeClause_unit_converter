function convert() {
	var inputValue = parseFloat(document.getElementById("inputValue").value);
	var inputUnit = document.getElementById("inputUnit").value;
	var outputUnit = document.getElementById("outputUnit").value;
        
	var outputValue;
        
	if (inputUnit === outputUnit) {
	  outputValue = inputValue;
	} else if (inputUnit === "meter") {
	  if (outputUnit === "kilometer") {
	    outputValue = inputValue * 0.001;
	  } else if (outputUnit === "mile") {
	    outputValue = inputValue * 0.000621371;
	  }
	} else if (inputUnit === "kilometer") {
	  if (outputUnit === "meter") {
	    outputValue = inputValue * 1000;
	  } else if (outputUnit === "mile") {
	    outputValue = inputValue * 0.621371;
	  }
	} else if (inputUnit === "mile") {
	  if (outputUnit === "meter") {
	    outputValue = inputValue * 1609.34;
	  } else if (outputUnit === "kilometer") {
	    outputValue = inputValue * 1.60934;
	  }
	}
        
	document.getElementById("outputValue").value = outputValue.toFixed(2);
        }
        