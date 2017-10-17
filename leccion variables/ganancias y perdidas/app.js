var income = promt("¿cuanto es tu ingreso?");
var costs = promt("¿Cual es tu costo?");
var taxPercent = promt("¿cuanto es el porcentaje (%) de tus impuestos");
var grosProfit = income - costs;
var tax = grosProfit*taxPercent/100;
var netIncome = grosProfit - tax;
document.write("Tu ganancia neta es $" + netIncome);
