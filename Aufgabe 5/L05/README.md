## **05 _#_** TypeScript

### Einführung Skriptsprachen
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_01_Einfuehrung_Scriptsprachen.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_01_Einfuehrung_Scriptsprachen.mp4">Zum Video</a>
</video>

Programmierung bedeutet, Anweisungen an Maschinen zu übergeben, um Aufgaben zu erledigen — Programmierfragmente sind also Anweisungsblöcke, die in unserem Fall den Computer oder Browser dazu bringen, bestimmte Dinge zu tun. 

Wir brauchen eine Skriptsprache (z.B. Javascript oder Typescript), um beispielsweise dem Nutzer eine bessere Interaktion mit der Anwendung zu ermöglichen oder den DOM und den Style zur Laufzeit zu manipulieren.


### JavaScript
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_02_JavaScript.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_02_JavaScript.mp4">Zum Video</a>
</video>

JavaScript, eine der am häufigsten genutzten Skriptsprachen, ist keine Spezifikation, sondern eine Implementierung der ECMAScript-Spezifikation.
Es gibt verschiedene Möglichkeiten, um JavaScript nutzen zu können:
* über Inline-JavaScript direkt im Tag (nicht empfohlen, da Inhalt und Funktionalität vermischt werden),
* per Script-Tag im Head, in den Codeblöcke hineingeschrieben werden können oder
* als externe Script-Datei, die im Head über ein script-Tag eingebunden wird.

### TypeScript
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_03_TypeScript.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_03_TypeScript.mp4">Zum Video</a>
</video>

In diesem Kurs werden wir uns mit TypeScript, einem typisierten JavaScript, beschäftigen. TypeScript erweitert JavaScript und schließt Lücken in dessen Programmierkonzept.
Für die Ausführung im Browser muss die TypeScript-Datei zu regulärem JS kompiliert (quasi umgestrickt) werden. Dazu müssen wir uns einen Compiler installieren, eine Anleitung dafür finden Sie weiter unten.


### Variablen
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_04_Variablen.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_04_Variablen.mp4">Zum Video</a>
</video>

Variablen sind die Basis, um Inhalte bereitzustellen, Werte zu speichern, zu berechnen, etc. Die Deklaration einer Variable setzt sich folgendermaßen zusammen:
*  Einleitung der Deklaration über das Schlüsselwort **var**,
* die **Bezeichnung** der Variable (frei auszuwählen, Regeln müssen berücksichtigt werden)
* den Zuordnungsoperator „**:**“
* und dem **Typ**, z.B. string (Zeichenkette), number, boolean…<br>

Über die Typisierung der Variablen wird dem Browser sofort mitgeteilt, um welchen Datentyp es sich bei der Variable handelt, wodurch die Performance verbessert und die Arbeitslast verringert werden.

### Wertezuweisungen
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_05_Wertezuweisungen.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_05_Wertezuweisungen.mp4">Zum Video</a>
</video>

Um einer Variable einen Wert zuzuweisen, ergänzen wir:
* den Zuweisungsoperator **=**,
* den gültigen, dem Typ entsprechendem **Wert** 
* und zum Abschluss ein Semicolon **;**.


### Primitive Datentypen
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_06_Datentypen.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_06_Datentypen.mp4">Zum Video</a>
</video>

Es gibt unzählige Datentypen. Im ersten Semester sind für Sie aber erstmal nur folgende Datentypen relevant:
* **string:** Zeichenkette, wird immer in Anführungszeichen angegeben
* **number:** Zahlenwert, ganzzahlig bzw. Fließkommawert
* **boolean:** Bool’sche Aussagenlogik, kann true oder false sein
* **any:** keine feste Zuordnung eines Datentyps


### Operatoren
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_07_Operatoren.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_07_Operatoren.mp4">Zum Video</a>
</video>

Mit Operatoren kann man Daten miteinander verarbeiten, zum Beispiel verketten oder verrechnen. 
* Mit dem **Zeichenkettenoperator "+"** können Zeichenketten untereinander oder Zeichenketten mit Zahlenwerten aneinandergekettet werden.
* Mit den **mathematischen Operatoren** können sie Zahlenwerte miteinander verrechnen, Modulorechnung durchführen und Zahlen In- und Dekrementieren.
* Die **Zuweisungsoperatoren** brauchen Sie später, um Bedingungen zu formulieren.

### Hands-On TypeScript
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_08_Hands_On_TypeScript.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_08_Hands_On_TypeScript.mp4">Zum Video</a>
</video>

Wenn wir mit einer Skriptdatei arbeiten, erstellen wir eine .ts Datei. 

Um diese TypeScript-Datei in unser HTML-Dokument einzubinden, muss sie zuerst in eine JavaScript-Datei transpiliert werden. Dafür speichern wir in unserem Ordner die „tsconfig.json“-Datei ab und starten über **Terminal > Run Build Task > watch** die Transpilierung. 

Dabei wird uns automatisch eine JavaScript-Datei erstellt, die beim Speichern von Änderungen in unserer TypeScript-Datei ständig aktualisiert wird. Diese kann dann im HTML-Dokument verlinkt zu werden.

### Take Aways
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_09_Take_Aways.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_09_Take_Aways.mp4">Zum Video</a>
</video>


* **ECMAScript** ist eine Spezifikation, die durch JavaScript im Browser abgebildet wird.
* Trennen Sie am besten Inhalt und Funktion, indem sie JavaScript **als externe Datei** einbinden.
* Wir verwenden **TypeScript**, eine typisierte Abstraktion von JavaScript, zur Nutzung im Browser muss dieses allerdings wieder in eine JS-Datei transpiriert werden.
* Über die Deklaration von **Variablen** und deren Wertzuweisungen können Inhalte bereitgestellt werden.
* Über **Operatoren** lassen sich Daten miteinander verarbeiten.


---

### Einrichtung Typescript 
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_10_Einrichtung_Typescript.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L05/L05_10_Einrichtung_Typescript.mp4">Zum Video</a>
</video>

Denken Sie daran: immer wenn Sie Ihren VSCode Editor öffnen, den BuildTask zu starten. Wenn Sie es automatisieren möchten, schauen sie eigenverantwortlich [hier](https://code.visualstudio.com/docs/editor/tasks) oder [hier](https://marketplace.visualstudio.com/search?term=Typescript%20Auto%20Compiler&target=VSCode&category=All%20categories&sortBy=Relevance).


`Strg + Shift + B` für die Build Tasks oder über `Terminal > Buildaufgabe ausführen`. Wählen sie "watch/Überwachen" um bis Sie VSCode schließen die js Dateien immer übersetzt zu bekommen oder "make/Erstellen" um einmal das gesamte Projekt zu übersetzen.

_Laden Sie die .js.map Dateien und selbstverständlich auch die .ts Dateien mit hoch._

**Links im Video**

- <a href="https://nodejs.org/">NodeJS</a>  
- [TSLint Erweiterung](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- [Konfigurations Dateien (tsconfig & tslint)](https://github.com/hs-furtwangen/GIS-SoSe-2020/tree/master/config_files)

**Terminal Befehle**
- `npm -v`
- `npm i -g typescript`
- `npm i -g tslint`
- `tsc --version`
  - falls es dabei in Powershell Probleme gibt, Powershell als Administrator ausführen, den folgenden Befehl ausführen und mit J/Y bestätigen.  
  `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`




## **A _---_** Aufgabe #05
### Interaktive Infografik I

Als Vorbereitung für eine interaktive Infografik sollten Sie Emissionswerte berechnen. Die Berechnung erfolgt auf Skriptebene mit TypeSkript.

Folgende Anforderungen an die Aufgabe:

1. Die Emissionswerte von jeder Region soll als Text in der Browser-Konsole (console.log()) ausgegeben werden.

2. Die Textausgabe soll die folgt formuliert sein:
   "Die Emission von Europa ist: XXXXX kg CO2"
   "Relativ zur Gesamtemission der Welt verursacht Europa damit XX%"
   "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert"
   "2018 im Vergleich zu 2008 sind das XXXX kg CO2"

3. Die Ausgabe soll aus Variablen generiert sein, nicht aus statischem Text. Die Ausgaben-Werte sollen also durch Berechnungen mit Variablen erzeugt werden.

4. Bitte erstellen Sie eine Ausgabe in der Konsole für alle Regionen: also für Europa, Asia usw. soll nacheinander in der Konsole der Text ausgegeben werden.

```javascript
console.log('Das ist eine Konsolenausgabe');
console.log('Hier wird eine Variable ausgegeben: ' + testVariable);
```

Für diese Aufgabe finden Sie im Github Repo folgendes Material:

[Daten zu Emissionswerten](https://github.com/gabriel-rausch/EIA1-SoSe20/tree/master/L05/task_material/assets/Datengrundlage.png)

[Grundgerüst HTML und CSS](https://github.com/gabriel-rausch/EIA1-SoSe20/tree/master/L05/task_material)


Beachten Sie bitte: das Grundgerüst bietet zwar schon erste Design-Aspekte (CSS, Grafiken usw.), es geht aber in dieser Aufgabe NUR um die Berechnung der Emissionswerte auf Skriptebene. Die berechneten Werte sollten NUR per Konsole ausgegeben werden (falls Sie ambitioniert sind, dann dürfen Sie natürlich auch schon versuchen, die Werte in HTML dynamisch zu übertragen und darzustellen).


## Abgabe bis Sonntag 31. Mai, 18:00 Uhr
__Nach Abgabe und Feedback sind Korrekturmöglichkeiten bis 02. Juni möglich__


---


## **?! _<small>Q&A</small>_** Fragen und Antworten
(die Publikation der Zusammenfassung erfolgt nach dem Q&A Termin)


### Erste Frage?
Lorem labore cillum mollit pariatur reprehenderit dolor laboris reprehenderit dolor sit officia ea non. Lorem reprehenderit exercitation labore eiusmod aute do nostrud officia aute proident sunt. Labore non tempor aliqua voluptate. Exercitation culpa officia ut aliqua nostrud laborum irure est. Minim eu sunt culpa adipisicing laborum consectetur aliqua quis.

### Zweite Frage?
Mollit aliquip veniam sit eiusmod tempor anim ipsum tempor. Aliqua sunt voluptate ea dolor. Nulla est mollit consectetur cupidatat ut cillum ipsum minim. Est ex et nulla laborum fugiat dolore. Aliquip laboris sint exercitation commodo dolor sint mollit qui sunt ipsum fugiat occaecat id enim.
