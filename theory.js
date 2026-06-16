// ============================================
// TEORIE - Atelier A2: Vocabular digital (de bază)
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// Cuvintele de bază ale computerului (cu articol) + acțiuni simple
// Aprofundează A2 Lecția 12 — set LIMITAT de vocabular esențial
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>💻 1. Cuvintele de bază ale computerului</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Învață cuvintele 💻</span></div>
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Îl ajută 🇷🇴</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Un set mic, dar esențial</h4>
                <p>La cursul de computer, Acar a învățat cuvintele de bază. Aici le strângem pe cele mai folosite — <strong>cu articolul lor</strong> (der/die/das), pentru că în germană substantivul se învață mereu împreună cu genul.</p>
                <div class="example-box">
                    <p class="de"><strong>der</strong> Computer · <strong>die</strong> Maus · <strong>das</strong> Passwort</p>
                    <p class="ro">calculatorul · mouse-ul · parola</p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🗺️ Ce vezi în atelier</h4>
                <ul>
                    <li><strong>2.</strong> Aparatura (Hardware): der Computer/Bildschirm/Drucker, die Tastatur/Maus, das Handy…</li>
                    <li><strong>3.</strong> Pe ecran & online: die Datei, der Ordner, das Programm, die Webseite, das Passwort…</li>
                    <li><strong>4.</strong> Acțiuni de bază: klicken, öffnen, speichern, suchen, drucken, löschen</li>
                    <li><strong>5.</strong> Recap + dialog (Acar descrie ce vede pe ecran)</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Sfatul meu: nu învăța „Maus", ci „<strong>die</strong> Maus". Articolul face jumătate din treabă! Am pus culori în minte: der = albastru, die = roșu, das = verde. 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Descrie ce ai pe birou/pe ecran, folosind cel puțin <strong>8 cuvinte digitale cu articol</strong> (der Computer, die Tastatur, das Passwort…) și 2-3 acțiuni (ich klicke, ich speichere…). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/YrwJacUzceouZUaT6" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Hardware -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🖥️ 2. Aparatura (Hardware)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-hardware.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Germană (cu articol)</th><th>Plural</th><th>Română</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>der Computer</strong></td><td>die Computer</td><td><em>calculatorul</em></td></tr>
                    <tr><td><strong>der Bildschirm</strong></td><td>die Bildschirme</td><td><em>ecranul / monitorul</em></td></tr>
                    <tr><td><strong>die Tastatur</strong></td><td>die Tastaturen</td><td><em>tastatura</em></td></tr>
                    <tr><td><strong>die Maus</strong></td><td>die Mäuse</td><td><em>mouse-ul</em></td></tr>
                    <tr><td><strong>der Drucker</strong></td><td>die Drucker</td><td><em>imprimanta</em></td></tr>
                    <tr><td><strong>der Laptop</strong></td><td>die Laptops</td><td><em>laptopul</em></td></tr>
                    <tr><td><strong>das Handy</strong></td><td>die Handys</td><td><em>telefonul mobil</em></td></tr>
                    <tr><td><strong>der USB-Stick</strong></td><td>die USB-Sticks</td><td><em>stickul USB</em></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Multe cuvinte tehnice sunt împrumutate din engleză și fac pluralul cu <strong>-s</strong>: die Laptop<strong>s</strong>, die Handy<strong>s</strong>, die USB-Stick<strong>s</strong>. Ușor! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Pe ecran & online -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🗂️ 3. Pe ecran & online</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-screen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Germană (cu articol)</th><th>Română</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>das Programm</strong></td><td><em>programul / aplicația</em></td></tr>
                    <tr><td><strong>die Datei</strong></td><td><em>fișierul</em></td></tr>
                    <tr><td><strong>der Ordner</strong></td><td><em>folderul / dosarul</em></td></tr>
                    <tr><td><strong>das Symbol</strong></td><td><em>pictograma / iconița</em></td></tr>
                    <tr><td><strong>das Fenster</strong></td><td><em>fereastra</em></td></tr>
                    <tr><td><strong>die Webseite</strong></td><td><em>pagina web</em></td></tr>
                    <tr><td><strong>das Internet</strong></td><td><em>internetul</em></td></tr>
                    <tr><td><strong>die E-Mail</strong></td><td><em>e-mailul</em></td></tr>
                    <tr><td><strong>das Passwort</strong></td><td><em>parola</em></td></tr>
                    <tr><td><strong>das WLAN</strong></td><td><em>rețeaua wireless (WiFi)</em></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Multe cuvinte „de pe ecran" sunt <strong>das</strong>: das Programm, das Symbol, das Fenster, das Passwort, das Internet. Iar das WLAN se citește „ve-lan". 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Acțiuni de bază -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🖱️ 4. Acțiuni de bază (verbe scurte)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-aktionen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb</th><th>Română</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>klicken</strong> (auf)</td><td>a face click (pe)</td><td>Ich klicke auf das Symbol.</td></tr>
                    <tr><td><strong>öffnen</strong></td><td>a deschide</td><td>Ich öffne das Programm.</td></tr>
                    <tr><td><strong>speichern</strong></td><td>a salva</td><td>Ich speichere die Datei.</td></tr>
                    <tr><td><strong>suchen</strong></td><td>a căuta</td><td>Ich suche im Internet.</td></tr>
                    <tr><td><strong>schreiben</strong></td><td>a scrie / a tasta</td><td>Ich schreibe eine E-Mail.</td></tr>
                    <tr><td><strong>drucken</strong></td><td>a tipări</td><td>Ich drucke das Dokument.</td></tr>
                    <tr><td><strong>löschen</strong></td><td>a șterge</td><td>Ich lösche die alte Datei.</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 Verbe simple, fără prefix</h4>
                <p style="margin:0;">Aceste verbe de bază <strong>nu se desfac</strong> (spre deosebire de herunterladen/ausdrucken din Lecția 12). Sunt regulate: ich klicke, du klickst, er klickt. Doar <strong>schreiben</strong> e tare la trecut (schrieb, geschrieben).</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Cu aceste 7 verbe + cuvintele cu articol poți descrie aproape orice faci la computer. Combină-le: „Ich öffne <strong>das Programm</strong> und speichere <strong>die Datei</strong>." 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Recap + dialog (Acar la ecran)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li><strong>Hardware:</strong> der Computer/Bildschirm/Drucker/Laptop, die Tastatur/Maus, das Handy.</li>
                    <li><strong>Pe ecran:</strong> die Datei, der Ordner, das Programm/Symbol/Fenster, die Webseite, das Passwort.</li>
                    <li><strong>Acțiuni:</strong> klicken, öffnen, speichern, suchen, schreiben, drucken, löschen.</li>
                    <li>Învață substantivul <strong>cu articol</strong> (der/die/das)!</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Acar descrie ecranul</h4>
                <p><strong style="color:#065f46;">Annette:</strong> Acar, was sehen Sie auf dem <strong>Bildschirm</strong>?<br><span class="ro-translation">Acar, ce vedeți pe ecran?</span></p>
                <p><strong style="color:#065f46;">Acar:</strong> Ich sehe ein <strong>Programm</strong> und viele <strong>Symbole</strong>. Hier ist auch ein <strong>Ordner</strong>.<br><span class="ro-translation">Văd un program și multe iconițe. Aici e și un folder.</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Gut! <strong>Öffnen</strong> Sie den Ordner und <strong>speichern</strong> Sie die <strong>Datei</strong>.<br><span class="ro-translation">Bine! Deschideți folderul și salvați fișierul.</span></p>
                <p><strong style="color:#065f46;">Acar:</strong> Und das <strong>Passwort</strong> für das <strong>WLAN</strong>?<br><span class="ro-translation">Și parola pentru WiFi?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Steht auf einem Zettel neben dem <strong>Computer</strong>, Acar! 😄<br><span class="ro-translation">E pe un bilețel lângă calculator, Acar!</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vezi cât de departe ajungi cu un vocabular mic? Bildschirm, Programm, Symbol, Ordner, Datei, Passwort, WLAN + öffnen/speichern. Asta e baza! Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
