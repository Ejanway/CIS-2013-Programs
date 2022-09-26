var floatMiles
var floatGallons
var floatMpg
floatMiles = prompt("Enter miles driven");
floatMiles = parseFloat(floatMiles);
floatGallons = prompt("Enter gallons of gas used");
floatGallons = parseFloat(floatGallons);
floatMpg = (floatMiles/floatGallons).toFixed(2);
alert("Miles per gallon = " + floatMpg); 