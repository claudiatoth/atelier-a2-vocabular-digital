// ============================================
// EXERCIȚII - Atelier A2: Vocabular digital (de bază)
// Claudia Toth · 5 exerciții cu rezolvări complete
// articol der/die/das · vocabular · substantiv în propoziție · verbe · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Articolul corect (der/die/das) (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: '____ Computer', hint: 'masculin', correct: 'der', accept: ['der'] },
    { id: 'b', prompt: '____ Tastatur', hint: 'feminin', correct: 'die', accept: ['die'] },
    { id: 'c', prompt: '____ Programm', hint: 'neutru', correct: 'das', accept: ['das'] },
    { id: 'd', prompt: '____ Maus', hint: 'feminin', correct: 'die', accept: ['die'] },
    { id: 'e', prompt: '____ Drucker', hint: 'masculin (ca der Computer)', correct: 'der', accept: ['der'] },
    { id: 'f', prompt: '____ Passwort', hint: 'neutru', correct: 'das', accept: ['das'] },
    { id: 'g', prompt: '____ Datei', hint: 'feminin', correct: 'die', accept: ['die'] },
    { id: 'h', prompt: '____ Ordner', hint: 'masculin', correct: 'der', accept: ['der'] },
    { id: 'i', prompt: '____ Internet', hint: 'neutru', correct: 'das', accept: ['das'] },
    { id: 'j', prompt: '____ Bildschirm', hint: 'masculin', correct: 'der', accept: ['der'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Pune articolul corect: der / die / das.</strong><br>
        Învață mereu substantivul cu articolul lui. Indiciul îți spune genul.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="der / die / das">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct} ${it.prompt.replace('____ ', '')}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Ce cuvânt? (descriere → cuvânt) (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Pe ce apeși ca să scrii litere?', a: 'die Tastatur', b: 'die Maus', correct: 'die Tastatur', expl: 'die Tastatur = tastatura.' },
    { id: 'b', text: 'Cu ce dai click?', a: 'die Maus', b: 'der Drucker', correct: 'die Maus', expl: 'die Maus = mouse-ul.' },
    { id: 'c', text: 'Unde aduni mai multe fișiere?', a: 'der Ordner', b: 'das Passwort', correct: 'der Ordner', expl: 'der Ordner = folderul.' },
    { id: 'd', text: 'Ce tastezi ca să intri în cont?', a: 'das Passwort', b: 'der Bildschirm', correct: 'das Passwort', expl: 'das Passwort = parola.' },
    { id: 'e', text: 'Ce aparat scoate documente pe hârtie?', a: 'der Drucker', b: 'die Tastatur', correct: 'der Drucker', expl: 'der Drucker = imprimanta.' },
    { id: 'f', text: 'Pe ce vezi imaginea?', a: 'der Bildschirm', b: 'die Maus', correct: 'der Bildschirm', expl: 'der Bildschirm = ecranul.' },
    { id: 'g', text: 'Un mesaj electronic se numește:', a: 'die E-Mail', b: 'der Ordner', correct: 'die E-Mail', expl: 'die E-Mail = e-mailul.' },
    { id: 'h', text: 'Rețeaua fără fir (WiFi):', a: 'das WLAN', b: 'die Datei', correct: 'das WLAN', expl: 'das WLAN = rețeaua wireless.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🖥️ Ce cuvânt se potrivește descrierii?</strong>
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Completează cuvântul digital în propoziție (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich klicke mit der ____.', hint: 'cu ce dai click', correct: 'Maus', accept: ['maus'] },
    { id: 'b', prompt: 'Ich tippe auf der ____.', hint: 'aparatul cu litere', correct: 'Tastatur', accept: ['tastatur'] },
    { id: 'c', prompt: 'Ich speichere die ____.', hint: 'ce salvezi', correct: 'Datei', accept: ['datei'] },
    { id: 'd', prompt: 'Ich gebe das ____ ein.', hint: 'ca să intri în cont', correct: 'Passwort', accept: ['passwort'] },
    { id: 'e', prompt: 'Ich drucke mit dem ____.', hint: 'aparatul cu hârtie', correct: 'Drucker', accept: ['drucker'] },
    { id: 'f', prompt: 'Ich suche im ____.', hint: 'online', correct: 'Internet', accept: ['internet'] },
    { id: 'g', prompt: 'Ich sehe das Bild auf dem ____.', hint: 'ecranul', correct: 'Bildschirm', accept: ['bildschirm'] },
    { id: 'h', prompt: 'Ich öffne den ____ und surfe.', hint: 'programul de internet', correct: 'Browser', accept: ['browser'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Completează cuvântul digital potrivit.</strong>
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="cuvântul...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Verbul digital potrivit (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich ____ die Datei.', hint: 'a salva (forma ich)', correct: 'speichere', accept: ['speichere'] },
    { id: 'b', prompt: 'Ich ____ das Programm.', hint: 'a deschide (forma ich)', correct: 'öffne', accept: ['öffne'] },
    { id: 'c', prompt: 'Ich ____ im Internet.', hint: 'a căuta (forma ich)', correct: 'suche', accept: ['suche'] },
    { id: 'd', prompt: 'Ich ____ auf das Symbol.', hint: 'a face click (forma ich)', correct: 'klicke', accept: ['klicke'] },
    { id: 'e', prompt: 'Ich ____ eine E-Mail.', hint: 'a scrie (forma ich)', correct: 'schreibe', accept: ['schreibe'] },
    { id: 'f', prompt: 'Ich ____ das Dokument.', hint: 'a tipări (forma ich)', correct: 'drucke', accept: ['drucke'] },
    { id: 'g', prompt: 'Ich ____ die alte Datei.', hint: 'a șterge (forma ich)', correct: 'lösche', accept: ['lösche'] },
    { id: 'h', prompt: 'Ich ____ eine Nachricht.', hint: 'a trimite (schicken, forma ich)', correct: 'schicke', accept: ['schicke'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🖱️ Completează verbul digital la forma „ich".</strong><br>
        Verbe simple, regulate: klicken, öffnen, speichern, suchen, schreiben, drucken, löschen, schicken.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="verb (forma ich)...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Salvez fișierul.', correct: 'Ich speichere die Datei.', accept: ['ich speichere die datei'] },
    { id: 'b', ro: 'Deschid programul.', correct: 'Ich öffne das Programm.', accept: ['ich öffne das programm'] },
    { id: 'c', ro: 'Caut pe internet.', correct: 'Ich suche im Internet.', accept: ['ich suche im internet'] },
    { id: 'd', ro: 'Scriu un e-mail.', correct: 'Ich schreibe eine E-Mail.', accept: ['ich schreibe eine e-mail', 'ich schreibe eine email'] },
    { id: 'e', ro: 'calculatorul (cu articol)', correct: 'der Computer', accept: ['der computer'] },
    { id: 'f', ro: 'tastatura (cu articol)', correct: 'die Tastatur', accept: ['die tastatur'] },
    { id: 'g', ro: 'Care e parola?', correct: 'Wie ist das Passwort?', accept: ['wie ist das passwort', 'was ist das passwort'] },
    { id: 'h', ro: 'Imprimanta nu funcționează.', correct: 'Der Drucker funktioniert nicht.', accept: ['der drucker funktioniert nicht'] },
    { id: 'i', ro: 'Dau click cu mouse-ul.', correct: 'Ich klicke mit der Maus.', accept: ['ich klicke mit der maus'] },
    { id: 'j', ro: 'Șterg fișierul vechi.', correct: 'Ich lösche die alte Datei.', accept: ['ich lösche die alte datei'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> Nu uita articolul (der/die/das) la substantive!
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
