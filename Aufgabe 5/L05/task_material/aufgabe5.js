//Emmissionswerte für Europa 
var emEU08 = 4965.70;
var emEU09 = 4616.4;
var emEU10 = 4705.8;
var emEU11 = 4615.2;
var emEU12 = 4541.5;
var emEU13 = 4436.9;
var emEU14 = 4202;
var emEU15 = 4191.6;
var emEU16 = 4247.3;
var emEU17 = 4278.7;
var emEU18 = 4209.3;
//Emmissionswerte für Asien
var emAS08 = 12954.7;
var emAS09 = 13246.6;
var emAS10 = 13986.8;
var emAS11 = 14860.1;
var emAS12 = 15308.8;
var emAS13 = 15660.2;
var emAS14 = 15787.7;
var emAS15 = 15877;
var emAS16 = 15984;
var emAS17 = 16274.3;
var emAS18 = 16274.1;
//Emmissionswerte für Australien
var emAU08 = 1993;
var emAU09 = 1875.7;
var emAU10 = 1939.1;
var emAU11 = 2035.2;
var emAU12 = 2063.2;
var emAU13 = 2014.7;
var emAU14 = 2027.6;
var emAU15 = 1986.8;
var emAU16 = 1997.4;
var emAU17 = 2001.3;
var emAU18 = 2100.5;
//Emmissionswerte für Afrika
var emAF08 = 1028;
var emAF09 = 1041.9;
var emAF10 = 1072.1;
var emAF11 = 1073.7;
var emAF12 = 1107.1;
var emAF13 = 1134.4;
var emAF14 = 1167.4;
var emAF15 = 1174.5;
var emAF16 = 1192.1;
var emAF17 = 1207;
var emAF18 = 1235.5;
//Emmissionswerte für Nordamerika
var emNA08 = 6600.4;
var emNA09 = 6139.9;
var emNA10 = 6375.8;
var emNA11 = 6262.8;
var emNA12 = 5998.9;
var emNA13 = 6167;
var emNA14 = 6268.9;
var emNA15 = 6048.7;
var emNA16 = 5938.3;
var emNA17 = 5920.5;
var emNA18 = 6035.6;
//Emmissionswerte für Südamerika
var emSA08 = 1132.6;
var emSA09 = 1093.1;
var emSA10 = 1164.2;
var emSA11 = 1215.5;
var emSA12 = 1262;
var emSA13 = 1308.9;
var emSA14 = 1331.3;
var emSA15 = 1321.7;
var emSA16 = 1294.7;
var emSA17 = 1279.2;
var emSA18 = 1261.5;
//Textbausteine
var textEU = "Die aktuelle Emission von Europa ist: ";
var textAS = "Die aktuelle Emission von Asien ist: ";
var textAU = "Die aktuelle Emission von Australien ist: ";
var textNA = "Die aktuelle Emission von Nordamerika ist: ";
var textSA = "Die aktuelle Emission von Südamerika ist: ";
var textAF = "Die aktuelle Emission von Afrika ist: ";
var textend = " kg CO2.";
var relWEU = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var relWAS = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var relWAU = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var relWNA = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ";
var relWSA = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var relWAF = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var aendEU = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var aendAS = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var aendAU = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var aendNA = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var aendSA = "Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var aendAF = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var aendEND = " % verändert.";
var verg = "2018 im Vergleich zu 2008 sind das ";
//Gesamtemission Welt 
var welt = (emEU18 + emAS18 + emAU18 + emAF18 + emNA18 + emSA18);
//Europa
console.log(textEU + emEU18 + textend);
console.log(relWEU + Math.round(((emEU18 / welt) * 100)) + " %.");
console.log(aendEU + Math.abs(Math.round(((1 - (emEU18 / emEU08)) * 100))) + aendEND);
console.log(verg + Math.round((emEU18 - emEU08)) + textend);
//Asien
console.log(textAS + emAS18 + textend);
console.log(relWAS + Math.round(((emAS18 / welt) * 100)) + " %.");
console.log(aendEU + Math.abs(Math.round(((1 - (emAS18 / emAS08)) * 100))) + aendEND);
console.log(verg + Math.round((emAS18 - emAS08)) + textend);
//Australien
console.log(textAU + emAU18 + textend);
console.log(relWAU + Math.round(((emAU18 / welt) * 100)) + " %.");
console.log(aendAU + Math.abs(Math.round(((1 - (emAU18 / emAU08)) * 100))) + aendEND);
console.log(verg + Math.round((emAU18 - emAU08)) + textend);
//Afrika
console.log(textAF + emAF18 + textend);
console.log(relWAF + Math.round(((emAF18 / welt) * 100)) + " %.");
console.log(aendAF + Math.abs(Math.round(((1 - (emAF18 / emAF08)) * 100))) + aendEND);
console.log(verg + Math.round((emAF18 - emAF08)) + textend);
//Nordamerika
console.log(textNA + emNA18 + textend);
console.log(relWNA + Math.round(((emNA18 / welt) * 100)) + " %.");
console.log(aendNA + Math.abs(Math.round(((1 - (emNA18 / emNA08)) * 100))) + aendEND);
console.log(verg + Math.round((emNA18 - emNA08)) + textend);
//SÜdamerika
console.log(textSA + emSA18 + textend);
console.log(relWSA + Math.round(((emSA18 / welt) * 100)) + " %.");
console.log(aendSA + Math.abs(Math.round(((1 - (emSA18 / emSA08)) * 100))) + aendEND);
console.log(verg + Math.round((emSA18 - emSA08)) + textend);
//# sourceMappingURL=aufgabe5.js.map