## **07 _#_** Programmiergrundlagen II

### Einführung
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_01_Einfuehrung.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_01_Einfuehrung.mp4">Zum Video</a>
</video>

### Farbwerte
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_02_Farbwerte.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_02_Farbwerte.mp4">Zum Video</a>
</video>

Die farbliche Gestaltung ist essenziell bei der Gestaltung interaktiver Anwendungen. Für die Ausgabe über den Bildschirm ist die additive Farbmischung viel besser geeignet als die Subtraktive, da nach demselben Prinzip die technische Umsetzung erfolgt. 

Farbwerte von Elementen können auf unterschiedliche Weisen sowohl im CSS als auch per TypeScript angegeben werden. Empfohlen sind die **RGB / RGBA-Form** (mit Zahlen von 0 - 255 für die Farben und von 0 bis 1 für den Alpha-Kanal) sowie die **Hexadezimalschreibweise** (in der Form #RRGGBB).


### Zahlensysteme - Binär und Hexadezimal
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_03_Zahlensysteme.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_03_Zahlensysteme.mp4">Zum Video</a>
</video>

Während beim gängigen Dezimalsystem jedes Zeichen einen von 10 Werten besitzen kann (0 – 9) nutzt das Binärsystem lediglich Nullen und Einsen um Informationen darzustellen. Mit der 2 als Basis wird es deshalb als Grundlage zur Speicherung von Daten in jedem Computer genutzt.

Beim **Hexadezimalsystem** hingegen stehen durch die Nutzung der Zeichen **0 – 9** und **a – f** also 16 mögliche Werte pro Zeichen zur Verfügung. Letztendlich sind mit RGB- und HEX-Farbwerten gleich viele Farbenwerte möglich, nämlich 16,7 Millionen.


### Einfache und assoziative Arrays
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_04_Arrays.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_04_Arrays.mp4">Zum Video</a>
</video>

Statt viele Variablen zu erzeugen, um mehrere typgleiche Informationen zu speichern, kann **ein Array** dafür genutzt werden. Bei der Deklaration weisen eckige Klammern `[]` nach dem Typ darauf hin, dass es sich um ein Array handelt. 

```typescript
let mySubjects: string [] = [ 'EIA1', 'Mediengestaltung', 'Medienpsychologie', 'AV-Technik', 'BWL' ]
```

Bei einfach Arrays werden **Indizes** genutzt, um auf einzelne Elemente eines Arrays zu verweisen. Das erste Elemente hat dabei immer den Index 0, das zweite den Index 1 usw. Bei assoziativen Arrays werde statt Indizes Schlüssel genutzt.

Arrays bieten außerdem **Methoden**, um unter anderem Elemente **hinzuzufügen, zu entfernen** oder die Länge des Arrays auszugeben. Das letzte Element eines Arrays hat als Index immer den Wert der Länge -1.

### Take Aways
<video controls width="100%"> 
    <source src="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_05_Take_Aways.mp4" type="video/mp4"> 
    <a href="https://lehre.gabriel-rausch.de/HFU/EIA1_SoSe20/L07/L07_05_Take_Aways.mp4">Zum Video</a>
</video>

-	Verschiedene Farbwert-Formate wurden erklärt, empfohlen wird die Nutzung von RGB und HEX-Werten
-	Das Binärsystem ist grundlegend für Computer, das Hexadezimalsystem findet bspw. bei Farbwerten Anwendung
-	Arrays können zur Speicherung mehrerer Elemente genutzt werden


## **A _---_** Aufgabe #07
### Drum Pad

Mit dem Grundlagenwissen zu Events, Funktionen, Operatoren, der DOM-Manipulation und Arrays sind Sie in der Lage ein interaktives Drum Pad zu entwickeln. Ein Drum Pad ist ein elektronisches Schlaginstrument, das neben einem Schlagzeug-Sound auch sämtliche andere Klänge (Samples) anspielen kann.

Die Aufgabe besteht aus zwei Teilanforderungen:

### Aufgabe 7.1 - Drum Pad

Ein Drum Pad mit neun Pads/Buttons soll Klänge/Samples abspielen. Wenn der Nutzer auf ein Pad tippt/klick, dann soll das entsprechende Sample abgespielt werden.

Anforderungen:

1. Das Abspielen der Sound-Dateien wird in TypeScript realisiert. Verwenden Sie __kein__ HTML-Audio-Tag. Folgende Anweisung wird Ihnen hilfreich sein:
```typescript
var sound:HTMLAudioElement = new Audio('sample.mp3');
sound.play();
```

2. Das Abspielen aller Sound-Dateien soll über **eine zentrale Funktion** gesteuert werden. Diese **eine** Funktion wird den Namen **playSample** bekommen. Alle Abspiel-Aufrufe werden über diese Funktion geführt, d.h. Sie sollten _nicht_ für jeden einzelnen Button die Anweisungen zum Abspielen einer Sound-Datei mehrfach progammmieren. Stattdessen wird jeder Button bzw. jeder Funtkionsaufruf eines Event-Listeners diese zentrale Funktion **playSample** triggern/aufrufen (Stichwort: Funktionsparameter bzw. Argumente).

3. Zeichnen Sie zunächst ein Flow-Chart, dass den Prozess der Anwendung abbildet. Ausgangspunkt ist die Eingabe des Nutzers.

4. Die Darstellung des Drum Pads gemäß Designvorlage. Ein Button hat die Größe 150 x 150px. Das Drum Pad wird horizontal zentriert im Browser-Viewport dargestellt. Farbdefinitionen bitte als Hex-Wert setzen.

### Aufgabe 7.2 - Drum Machine

Mit dem zweiten Teil der Aufgabe soll das Abspielen eines fest definierten Beats realisiert werden.

1. Bei Klick auf den Play Button soll ein Beat (bestehend aus Kick, Snare und HiHat) abgespielt werden.

2. Eine Stop- / Pause- / Replay-Funktion ist erst einmal nicht vorgesehen.

3. Der Beat bzw. die Reihenfolge der abzuspielenden Samples sollte in einem Array gespeichert werden.

4. Hilftestellung: damit die Drum Machine ein Sample nach dem anderen abspielt, benötigen Sie ein Konstrukt, dass kontinuierlich innerhalb einer definierten Zeitspanne eine Anweisung ausführt. Das kontinuierliche Ausführen einer Anweisung kann mit folgendem primitiven Fragment realisiert werden:
```typescript
setInterval(function() {
    // Anweisungen
}, 500);
```
Mehr dazu hier https://www.w3schools.com/jsref/met_win_setinterval.asp

Das Materialpaket für diese Aufgabe finden Sie [hier](https://github.com/gabriel-rausch/EIA1-SoSe20/tree/master/L07/task_material)

Bearbeitung wie gehabt: als Unterordner in Ihrem Git Repository (/Aufgabe_7); das fertige Arbeitspaket wieder auf Github pushen und auf Ihrem Kursseiten-Steckbrief verlinken.

## Abgabe bis 14. Juni um 18:00 Uhr
__Nach Abgabe und Feedback sind Korrekturmöglichkeiten bis 16. Juni, 18:00 Uhr möglich__


---


## **?! _<small>Q&A</small>_** Fragen und Antworten
(die Publikation der Zusammenfassung erfolgt nach dem Q&A Termin)


### Erste Frage?
Lorem labore cillum mollit pariatur reprehenderit dolor laboris reprehenderit dolor sit officia ea non. Lorem reprehenderit exercitation labore eiusmod aute do nostrud officia aute proident sunt. Labore non tempor aliqua voluptate. Exercitation culpa officia ut aliqua nostrud laborum irure est. Minim eu sunt culpa adipisicing laborum consectetur aliqua quis.

### Zweite Frage?
Mollit aliquip veniam sit eiusmod tempor anim ipsum tempor. Aliqua sunt voluptate ea dolor. Nulla est mollit consectetur cupidatat ut cillum ipsum minim. Est ex et nulla laborum fugiat dolore. Aliquip laboris sint exercitation commodo dolor sint mollit qui sunt ipsum fugiat occaecat id enim.
