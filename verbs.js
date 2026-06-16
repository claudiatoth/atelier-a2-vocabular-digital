// ============================================
// VERB-KONJUGATION - Atelier A2: Vocabular digital (de bază)
// 6 verbe simple: klicken · speichern · öffnen · suchen · schreiben · drucken
// ============================================

const verbsData = [
    {
        inf: 'klicken', ro: 'a face click', typ: 'regulat', aux: 'haben', part: 'geklickt',
        praes: [
            ['ich','klicke','fac click'],['du','klickst','faci click'],['er/sie/es','klickt','face click'],
            ['wir','klicken','facem click'],['ihr','klickt','faceți click'],['sie/Sie','klicken','fac click / faceți click']
        ],
        praet: [
            ['ich','klickte','făceam click'],['du','klicktest','făceai click'],['er/sie/es','klickte','făcea click'],
            ['wir','klickten','făceam click'],['ihr','klicktet','făceați click'],['sie/Sie','klickten','făceau click']
        ],
        perf: [
            ['ich','habe geklickt','am făcut click'],['du','hast geklickt','ai făcut click'],['er/sie/es','hat geklickt','a făcut click'],
            ['wir','haben geklickt','am făcut click'],['ihr','habt geklickt','ați făcut click'],['sie/Sie','haben geklickt','au făcut click']
        ],
        note: '🖱️ Regulat. Cere auf + Akk: Ich klicke auf das Symbol.'
    },
    {
        inf: 'speichern', ro: 'a salva', typ: 'regulat', aux: 'haben', part: 'gespeichert',
        praes: [
            ['ich','speichere','salvez'],['du','speicherst','salvezi'],['er/sie/es','speichert','salvează'],
            ['wir','speichern','salvăm'],['ihr','speichert','salvați'],['sie/Sie','speichern','salvează / salvați']
        ],
        praet: [
            ['ich','speicherte','salvam'],['du','speichertest','salvai'],['er/sie/es','speicherte','salva'],
            ['wir','speicherten','salvam'],['ihr','speichertet','salvați'],['sie/Sie','speicherten','salvau']
        ],
        perf: [
            ['ich','habe gespeichert','am salvat'],['du','hast gespeichert','ai salvat'],['er/sie/es','hat gespeichert','a salvat'],
            ['wir','haben gespeichert','am salvat'],['ihr','habt gespeichert','ați salvat'],['sie/Sie','haben gespeichert','au salvat']
        ],
        note: '💾 Regulat (tulpină în -er: ich speichere). „abspeichern" (separabil, din Lecția 12) e sinonim.'
    },
    {
        inf: 'öffnen', ro: 'a deschide', typ: 'regulat', aux: 'haben', part: 'geöffnet',
        praes: [
            ['ich','öffne','deschid'],['du','öffnest','deschizi'],['er/sie/es','öffnet','deschide'],
            ['wir','öffnen','deschidem'],['ihr','öffnet','deschideți'],['sie/Sie','öffnen','deschid / deschideți']
        ],
        praet: [
            ['ich','öffnete','deschideam'],['du','öffnetest','deschideai'],['er/sie/es','öffnete','deschidea'],
            ['wir','öffneten','deschideam'],['ihr','öffnetet','deschideați'],['sie/Sie','öffneten','deschideau']
        ],
        perf: [
            ['ich','habe geöffnet','am deschis'],['du','hast geöffnet','ai deschis'],['er/sie/es','hat geöffnet','a deschis'],
            ['wir','haben geöffnet','am deschis'],['ihr','habt geöffnet','ați deschis'],['sie/Sie','haben geöffnet','au deschis']
        ],
        note: '📂 Regulat (tulpină în -n → du öffnest, er öffnet). Opus: schließen (a închide).'
    },
    {
        inf: 'suchen', ro: 'a căuta', typ: 'regulat', aux: 'haben', part: 'gesucht',
        praes: [
            ['ich','suche','caut'],['du','suchst','cauți'],['er/sie/es','sucht','caută'],
            ['wir','suchen','căutăm'],['ihr','sucht','căutați'],['sie/Sie','suchen','caută / căutați']
        ],
        praet: [
            ['ich','suchte','căutam'],['du','suchtest','căutai'],['er/sie/es','suchte','căuta'],
            ['wir','suchten','căutam'],['ihr','suchtet','căutați'],['sie/Sie','suchten','căutau']
        ],
        perf: [
            ['ich','habe gesucht','am căutat'],['du','hast gesucht','ai căutat'],['er/sie/es','hat gesucht','a căutat'],
            ['wir','haben gesucht','am căutat'],['ihr','habt gesucht','ați căutat'],['sie/Sie','haben gesucht','au căutat']
        ],
        note: '🔍 Regulat. „im Internet suchen" = a căuta pe internet.'
    },
    {
        inf: 'schreiben', ro: 'a scrie / a tasta', typ: 'tare (neregulat)', aux: 'haben', part: 'geschrieben',
        praes: [
            ['ich','schreibe','scriu'],['du','schreibst','scrii'],['er/sie/es','schreibt','scrie'],
            ['wir','schreiben','scriem'],['ihr','schreibt','scrieți'],['sie/Sie','schreiben','scriu / scrieți']
        ],
        praet: [
            ['ich','schrieb','scriam'],['du','schriebst','scriai'],['er/sie/es','schrieb','scria'],
            ['wir','schrieben','scriam'],['ihr','schriebt','scriați'],['sie/Sie','schrieben','scriau']
        ],
        perf: [
            ['ich','habe geschrieben','am scris'],['du','hast geschrieben','ai scris'],['er/sie/es','hat geschrieben','a scris'],
            ['wir','haben geschrieben','am scris'],['ihr','habt geschrieben','ați scris'],['sie/Sie','haben geschrieben','au scris']
        ],
        note: '🚨 TARE (ei→ie: schrieb → geschrieben). Cere Dativ + Akk: Ich schreibe dir eine E-Mail.'
    },
    {
        inf: 'drucken', ro: 'a tipări / a printa', typ: 'regulat', aux: 'haben', part: 'gedruckt',
        praes: [
            ['ich','drucke','tipăresc'],['du','druckst','tipărești'],['er/sie/es','druckt','tipărește'],
            ['wir','drucken','tipărim'],['ihr','druckt','tipăriți'],['sie/Sie','drucken','tipăresc / tipăriți']
        ],
        praet: [
            ['ich','druckte','tipăream'],['du','drucktest','tipăreai'],['er/sie/es','druckte','tipărea'],
            ['wir','druckten','tipăream'],['ihr','drucktet','tipăreați'],['sie/Sie','druckten','tipăreau']
        ],
        perf: [
            ['ich','habe gedruckt','am tipărit'],['du','hast gedruckt','ai tipărit'],['er/sie/es','hat gedruckt','a tipărit'],
            ['wir','haben gedruckt','am tipărit'],['ihr','habt gedruckt','ați tipărit'],['sie/Sie','haben gedruckt','au tipărit']
        ],
        note: '🖨️ Regulat. NU confunda: drucken = a tipări/a apăsa; „ausdrucken" (separabil, din Lecția 12) = a scoate la imprimantă.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe digitale simple</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb. Sunt verbe <strong>fără prefix</strong> (nu se desfac); doar <strong>schreiben</strong> e tare.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cu klicken, öffnen, speichern, suchen, schreiben, drucken descrii aproape orice la computer. 5 sunt regulate; <strong>schreiben</strong> e tare: schrieb → geschrieben. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
