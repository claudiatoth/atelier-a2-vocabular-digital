// ============================================
// FLASHCARDS - Atelier A2: Vocabular digital (de bază)
// Claudia Toth · 32 carduri: substantive cu articol + verbe + fraze (set LIMITAT)
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Hardware (10) ===
    { de: "der Computer", ro: "calculatorul", audio: "audio/letters/n-computer.wav" },
    { de: "der Bildschirm", ro: "ecranul / monitorul", audio: "audio/letters/n-bildschirm.wav" },
    { de: "die Tastatur", ro: "tastatura", audio: "audio/letters/n-tastatur.wav" },
    { de: "die Maus", ro: "mouse-ul", audio: "audio/letters/n-maus.wav" },
    { de: "der Drucker", ro: "imprimanta", audio: "audio/letters/n-drucker.wav" },
    { de: "der Laptop", ro: "laptopul", audio: "audio/letters/n-laptop.wav" },
    { de: "das Handy", ro: "telefonul mobil", audio: "audio/letters/n-handy.wav" },
    { de: "das Tablet", ro: "tableta", audio: "audio/letters/n-tablet.wav" },
    { de: "der USB-Stick", ro: "stickul USB / memoria USB", audio: "audio/letters/n-usbstick.wav" },
    { de: "der Akku", ro: "bateria (acumulatorul)", audio: "audio/letters/n-akku.wav" },

    // === Pe ecran (8) ===
    { de: "das Programm", ro: "programul / aplicația", audio: "audio/letters/n-programm.wav" },
    { de: "die Datei", ro: "fișierul", audio: "audio/letters/n-datei.wav" },
    { de: "der Ordner", ro: "folderul / dosarul", audio: "audio/letters/n-ordner.wav" },
    { de: "das Symbol", ro: "pictograma / iconița", audio: "audio/letters/n-symbol.wav" },
    { de: "das Fenster", ro: "fereastra", audio: "audio/letters/n-fenster.wav" },
    { de: "die Webseite", ro: "pagina web / site-ul", audio: "audio/letters/n-webseite.wav" },
    { de: "das Internet", ro: "internetul", audio: "audio/letters/n-internet.wav" },
    { de: "das Passwort", ro: "parola", audio: "audio/letters/n-passwort.wav" },

    // === Online (4) ===
    { de: "die E-Mail", ro: "e-mailul", audio: "audio/letters/n-email.wav" },
    { de: "der Benutzername", ro: "numele de utilizator", audio: "audio/letters/n-benutzername.wav" },
    { de: "das WLAN", ro: "rețeaua wireless (WiFi)", audio: "audio/letters/n-wlan.wav" },
    { de: "der Browser", ro: "browserul (programul de internet)", audio: "audio/letters/n-browser.wav" },

    // === Verbe (4) ===
    { de: "klicken", ro: "a face click (auf + Akk)", audio: "audio/letters/v-klicken.wav" },
    { de: "speichern", ro: "a salva", audio: "audio/letters/v-speichern.wav" },
    { de: "öffnen", ro: "a deschide", audio: "audio/letters/v-oeffnen.wav" },
    { de: "löschen", ro: "a șterge", audio: "audio/letters/v-loeschen.wav" },

    // === Fraze model (6) ===
    { de: "Ich speichere die Datei.", ro: "Salvez fișierul.", audio: "audio/letters/s-speichern.wav" },
    { de: "Ich öffne das Programm.", ro: "Deschid programul.", audio: "audio/letters/s-oeffnen.wav" },
    { de: "Ich suche im Internet.", ro: "Caut pe internet.", audio: "audio/letters/s-suchen.wav" },
    { de: "Ich schreibe eine E-Mail.", ro: "Scriu un e-mail.", audio: "audio/letters/s-email.wav" },
    { de: "Wie ist das Passwort?", ro: "Care e parola?", audio: "audio/letters/s-passwort.wav" },
    { de: "Der Drucker funktioniert nicht.", ro: "Imprimanta nu funcționează.", audio: "audio/letters/s-drucker.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
