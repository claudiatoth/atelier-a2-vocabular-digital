// ============================================
// TEST FINAL - Atelier A2: Vocabular digital (de bază)
// Claudia Toth · 15 întrebări (articol der/die/das + vocabular + traducere)
// ============================================

const finalTestData = [
    // 🔤 Articol (5)
    { type: 'multiple', category: '🔤 Articol', question: 'Articolul pentru „Computer":', options: ['der', 'die', 'das', 'den'], correct: 'der', explanation: 'der Computer (masculin).' },
    { type: 'multiple', category: '🔤 Articol', question: 'Articolul pentru „Tastatur":', options: ['die', 'der', 'das', 'dem'], correct: 'die', explanation: 'die Tastatur (feminin).' },
    { type: 'multiple', category: '🔤 Articol', question: 'Articolul pentru „Passwort":', options: ['das', 'der', 'die', 'dem'], correct: 'das', explanation: 'das Passwort (neutru).' },
    { type: 'luckentext', category: '🔤 Articol', question: 'Completează articolul:', sentence: '<strong>______</strong> Maus ist kaputt.', translation: 'articolul pentru Maus', accept: ['die'], correct: 'die', explanation: 'die Maus (feminin).' },
    { type: 'luckentext', category: '🔤 Articol', question: 'Completează articolul:', sentence: '<strong>______</strong> Drucker funktioniert nicht.', translation: 'articolul pentru Drucker', accept: ['der'], correct: 'der', explanation: 'der Drucker (masculin).' },

    // 🖥️ Vocabular (5)
    { type: 'multiple', category: '🖥️ Vocabular', question: 'Cu ce dai click?', options: ['die Maus', 'die Tastatur', 'der Drucker', 'das WLAN'], correct: 'die Maus', explanation: 'die Maus = mouse-ul.' },
    { type: 'multiple', category: '🖥️ Vocabular', question: 'Pe ce vezi imaginea?', options: ['der Bildschirm', 'die Maus', 'der Ordner', 'das Passwort'], correct: 'der Bildschirm', explanation: 'der Bildschirm = ecranul.' },
    { type: 'multiple', category: '🖥️ Vocabular', question: 'Unde aduni mai multe fișiere?', options: ['der Ordner', 'die E-Mail', 'der Akku', 'das Symbol'], correct: 'der Ordner', explanation: 'der Ordner = folderul.' },
    { type: 'multiple', category: '🖥️ Vocabular', question: 'Un mesaj electronic se numește:', options: ['die E-Mail', 'das WLAN', 'der Browser', 'die Datei'], correct: 'die E-Mail', explanation: 'die E-Mail = e-mailul.' },
    { type: 'multiple', category: '🖥️ Vocabular', question: 'Ce tastezi ca să intri în cont?', options: ['das Passwort', 'der Drucker', 'das Fenster', 'die Maus'], correct: 'das Passwort', explanation: 'das Passwort = parola.' },

    // 🗣️ Traducere (5)
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți în germană:', ro: 'Salvez fișierul.', accept: ['ich speichere die datei'], correct: 'Ich speichere die Datei.', explanation: 'speichern + die Datei.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți în germană:', ro: 'Deschid programul.', accept: ['ich öffne das programm'], correct: 'Ich öffne das Programm.', explanation: 'öffnen + das Programm.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți în germană:', ro: 'Caut pe internet.', accept: ['ich suche im internet'], correct: 'Ich suche im Internet.', explanation: 'suchen + im Internet.' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți (cu articol):', ro: 'imprimanta', accept: ['der drucker'], correct: 'der Drucker', explanation: 'der Drucker (masculin).' },
    { type: 'translate', category: '🗣️ Traducere', question: 'Traduceți în germană:', ro: 'Scriu un e-mail.', accept: ['ich schreibe eine e-mail', 'ich schreibe eine email'], correct: 'Ich schreibe eine E-Mail.', explanation: 'schreiben + eine E-Mail.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre vocabularul digital de bază.</p>
            <ul class="test-info-list">
                <li>🔤 der/die/das (5) · 🖥️ Vocabular (5) · 🗣️ Traducere (5)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
