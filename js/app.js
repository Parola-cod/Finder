let current = 0;
let answers = {};

const optionIcons = {

    "ShippyPro":"🚚",
    "Qapla":"🚚",
    "Sendcloud":"🚚",
    "SpedisciOnline":"🚚",
    "iSendu":"🚚",
    "Smarty":"🚚",
    "Poleepo":"🚚",

    "Altro Aggregatore":"🚚",

    "Gestionale Proprietario":"⚙️",

    "Nessuna delle precedenti":"❓",

    "WooCommerce":"🛒",
    "Shopify":"🛍️",
    "Magento":"🏬",
    "Prestashop":"🛍️",

    "eBay":"🏪",
    "Amazon":"📦",

    "Altro CMS":"⚙️",
    "Altro Marketplace":"🌐"

};

/* =========================
   RETURN MY PARCEL
========================= */

function toggleReturns(){

    const container =
        document.getElementById("returnsContainer");

    const checked =
        document.getElementById("resiCheck").checked;

    if(!checked){

        container.innerHTML = "";

        return;
    }

    container.innerHTML = `

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

/* =========================
   DOMANDE
========================= */

function loadQuestion(){

    document.getElementById("step").innerText =
        `Step ${current + 1} di ${questions.length}`;

    document.getElementById("bar").style.width =
        ((current / questions.length) * 100) + "%";

    document.getElementById("q").innerText =
        questions[current].title;

    if(current > 0){

        document.getElementById("navigation").innerHTML =

            `<button
                class="back-btn"
                onclick="goBack()">

                ← Indietro

            </button>`;

    }
    else{

        document.getElementById("navigation").innerHTML = "";
    }

    const options =
        questions[current].options;

    document.getElementById("answers").innerHTML =

       options.map(opt => {

    const icon = optionIcons[opt] || "";

    return `

        <button
            class="option-btn"
            onclick="choose('${opt}')">

            ${icon ? `
                <div class="option-icon">
                    ${icon}
                </div>
            ` : ""}

            <div class="option-text">
                ${opt}
            </div>

        </button>

    `;

}).join("");

}

/* =========================
   RISPOSTA
========================= */

function choose(value){

    const key = questions[current].key;

    answers[key] = value;

    /* Prima domanda */

    if(current === 0){

        if(
            value === "Nessuna delle precedenti"
        ){

            current++;

            loadQuestion();

            return;
        }

        calculate();

        return;
    }

    /* Seconda domanda */

    calculate();
}

/* =========================
   INDIETRO
========================= */

function goBack(){

    if(current === 0){
        return;
    }

    current--;

    loadQuestion();
}

/* =========================
   HELPERS
========================= */

function createList(items){

    return `

        <ul>

            ${items.map(item =>

                `<li>${item}</li>`

            ).join("")}

        </ul>

    `;
}

function createLogoGrid(items){

    return `

        <div class="partner-grid">

            ${items.map(item => `

                <div class="partner-card">

                    <img
                        src="${item.logo}"
                        alt="${item.name}">

                    <span>
                        ${item.name}
                    </span>

                </div>

            `).join("")}

        </div>

    `;
}

/* =========================
   RISULTATO
========================= */

function calculate(){

    let solution = "";

    let features = [];

    let note = "";

    const scelta =
        answers.solution;

    /* AGGREGATORI */

    if(
        aggregatoriPartner.includes(scelta)
    ){

        solution = "API REST BRT";

        features =
            apiAggregatore;

        note =
            "Per verificare la disponibilità di servizi aggiuntivi è necessario contattare il supporto dell’aggregatore utilizzato.";
    }

    /* GESTIONALE */

    else if(
        scelta === "Gestionale Proprietario"
    ){

        solution = "API REST BRT";

        features =
            apiCompleta;
    }

    /* NESSUN SOFTWARE */

    else{

        switch(answers.platform){

            case "WooCommerce":
            case "Shopify":
            case "Magento":
            case "Prestashop":
            case "eBay":

                solution = "EasySpedWeb";

                features =
                    products["EasySpedWeb"].features;

                break;

            default:

                solution = "Plug&Ship";

                features =
                    products["Plug&Ship"].features;
        }
    }

    let html = `

        <div class="grid">

            <div>

                <div class="prod">

                    <h2>${solution}</h2>

                    <p>

                        ${
                            solution === "API REST BRT"
                            ? "Integrazione tramite API BRT."
                            : products[solution].desc
                        }

                    </p>

                    ${createList(features)}

                    ${
                        solution !== "API REST BRT"
                        ?
                        `
                        <div class="addon-section">

                            <h3>
                                Servizi opzionali
                            </h3>

                            <label
                                class="checkbox-container">

                                <input
                                    type="checkbox"
                                    id="resiCheck"
                                    onchange="toggleReturns()">

                                Gestione Resi
                                (Return My Parcel)

                            </label>

                        </div>

                        <div id="returnsContainer">
                        </div>
                        `
                        :
                        ""
                    }

                    ${
                        note
                        ?
                        `
                        <div class="alert-note">

                            ${note}

                        </div>
                        `
                        :
                        ""
                    }

                </div>

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

                    <li>

                        <strong>
                            Soluzione attuale:
                        </strong>

                        ${answers.solution}

                    </li>

                    ${
                        answers.platform
                        ?
                        `
                        <li>

                            <strong>
                                Piattaforma:
                            </strong>

                            ${answers.platform}

                        </li>
                        `
                        :
                        ""
                    }

                </ul>

            </div>

        </div>

    `;

    /* PLUG&SHIP */

    if(solution === "Plug&Ship"){

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

    document.getElementById("answers")
        .style.display = "none";

    document.getElementById("navigation")
        .style.display = "none";

    document.getElementById("q")
        .style.display = "none";

    document.getElementById("step")
        .style.display = "none";

    document.getElementById("bar")
        .style.width = "100%";

    document.getElementById("res")
        .innerHTML = html;

    document.getElementById("res")
        .classList.remove("hidden");
}

/* =========================
   AVVIO
========================= */

loadQuestion();