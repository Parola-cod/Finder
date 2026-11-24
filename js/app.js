/* =========================
   STATO APPLICAZIONE
========================= */

let current = 0;
let answers = {};

/* =========================
   CARICAMENTO DOMANDA
========================= */

function loadQuestion() {

    document.getElementById("step").innerText =
        `Step ${current + 1} di ${questions.length}`;

    document.getElementById("bar").style.width =
        ((current / questions.length) * 100) + "%";

    document.getElementById("q").innerText =
        questions[current].title;

    document.getElementById("answers").innerHTML =
        questions[current].options.map(opt =>

            `<button
                class="option-btn"
                onclick="choose('${opt}')">

                ${opt}

            </button>`

        ).join("");
}

/* =========================
   GESTIONE RISPOSTA
========================= */

function choose(value) {

    answers[questions[current].key] = value;

    // Aggregatore selezionato
    if (current === 0 && value !== "Nessuno") {

        answers.cms = "N/A";

        current = 2;

        loadQuestion();

        return;
    }

    // CMS Proprietario o Altro CMS
    if (
        current === 1 &&
        (
            value === "CMS Proprietario" ||
            value === "Altro CMS"
        )
    ) {

        current = 2;

        loadQuestion();

        return;
    }

    // Ultima domanda
    if (current === questions.length - 1) {

        calculate();

        return;
    }

    current++;

    loadQuestion();
}

/* =========================
   HELPERS
========================= */

function createList(items) {

    return `
        <ul>
            ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
}

function createLogoGrid(items) {

    return `
        <div class="partner-grid">

            ${items.map(item => `

                <div class="partner-card">

                    <img
                        src="${item.logo}"
                        alt="${item.name}">

                    <span>${item.name}</span>

                </div>

            `).join("")}

        </div>
    `;
}

/* =========================
   CALCOLO RISULTATO
========================= */

function calculate() {

    let solution = "";
    let reason = "";

    let apiFeatures = apiCompleta;
    let apiNote = "";

    // Aggregatori esterni
    if (aggregatoriPartner.includes(answers.agg)) {

        apiFeatures = apiAggregatore;

        apiNote =
            "Per verificare la disponibilità di servizi aggiuntivi come Fermopoint, PUDO, Collection, Fresh, Direct2Shop, Return My Parcel e altri servizi avanzati è necessario contattare il supporto dell'aggregatore utilizzato.";
    }

    /* =========================
       DECISIONE
    ========================= */

    if (
        answers.agg &&
        answers.agg !== "Nessuno"
    ) {

        solution = "API REST BRT";

        reason =
            "Cliente dotato di aggregatore o gestionale.";

    }

    else if (
        answers.cms === "CMS Proprietario"
    ) {

        solution = "API REST BRT";

        reason =
            "CMS Proprietario.";

    }

    else if (
        [
            "WooCommerce",
            "Shopify",
            "Magento",
            "Prestashop",
            "Ebay"
        ].includes(answers.cms)
    ) {

        solution = "EasySpedWeb";

        reason =
            "CMS supportato.";

    }

    else {

        solution = "Plug&Ship";

        reason =
            "CMS non supportato da EasySpedWeb.";
    }

    /* =========================
       HTML RISULTATO
    ========================= */

    let html = `

        <div class="product-header">

    <span class="product-badge">
        SOLUZIONE CONSIGLIATA
    </span>

    

</div>

        <div class="grid">

            <div>

                <div class="prod">
<h2 class="solution-title">
        ${solution}
    </h2>
                    
    `;

    /* =========================
       API REST
    ========================= */

    if (solution === "API REST BRT") {

        html += `

            <p>
                Servizi Disponibili con  API BRT :
            </p>

            ${createList(apiFeatures)}

        `;

        if (apiNote) {

            html += `

                <div class="alert-note">

                    <strong>Nota</strong><br>

                    ${apiNote}

                </div>

            `;
        }
    }

    /* =========================
       EASYSPEDWEB / PLUG&SHIP
    ========================= */

    else {

        html += `

            <p>
                ${products[solution].desc}
            </p>

            ${createList(
                products[solution].features
            )}

        `;
    }

    html += `
                </div>
    `;

    /* =========================
       RETURN MY PARCEL
    ========================= */

    if (
        answers.resi === "SI" &&
        solution !== "API REST BRT"
    ) {

        html += `

            <div class="prod">

                <h3>Return My Parcel</h3>

                <p>
                    ${products["Return My Parcel"].desc}
                </p>

                ${createList(
                    products["Return My Parcel"].features
                )}

            </div>

        `;
    }

    html += `
            </div>

           <div>

    <div class="client-toolbar">

        <button
            class="btn btn-small"
            onclick="location.reload()">

            Nuova Analisi

        </button>

    </div>

    <h3>Scheda Cliente</h3>

    <ul>
        <li>Aggregatore: ${answers.agg || "-"}</li>
        <li>CMS: ${answers.cms || "-"}</li>
        <li>Resi: ${answers.resi || "NO"}</li>
    </ul>

</div>
            </div>

        </div>
    `;

    /* =========================
       GALLERY PLUG&SHIP
    ========================= */

    if (solution === "Plug&Ship") {

        html += `

            <div class="partner-section">

                <h3 class="partner-title">
                    CMS Compatibili
                </h3>

                ${createLogoGrid(
                    plugShipCMS
                )}

                <h3 class="partner-title">
                    Marketplace Compatibili
                </h3>

                ${createLogoGrid(
                    plugShipMarketplace
                )}

            </div>

        `;
    }

    /* =========================
       NUOVA ANALISI
    ========================= */

    

    document.getElementById("answers").style.display =
        "none";

    document.getElementById("q").innerText = "";

    document.getElementById("bar").style.width =
        "100%";

    document.getElementById("res").innerHTML =
        html;

    document.getElementById("res")
        .classList.remove("hidden");
}

/* =========================
   AVVIO
========================= */

loadQuestion();