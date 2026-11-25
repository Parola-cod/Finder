/* =========================
   API REST
========================= */

const apiAggregatore = [
    "Creazione spedizioni",
    "Stampa etichette",
    "Tracking"
];
const apiCompleta = [
    "Creazione spedizioni",
    "Stampa etichette",
    "Tracking",
    "Fermopoint",
    "PUDO",
    "ORM",
    "Notifiche",
    "Resi tramite API"
];
/* =========================
   AGGREGATORI
========================= */
const aggregatoriPartner = [
    "ShippyPro",
    "Qapla",
    "Sendcloud",
    "SpedizioniOnline",
    "iSendu",
    "Smarty",
    "Poleepo"
];
/* =========================
   PRODOTTI
========================= */
const products = {

    "EasySpedWeb": {

        desc:
        "Servizi disponibili :",

        features: [

            

            "Collection",
            "Fresh",

            "Fermopoint",
            "Direct2Shop",

            "Tracking",

            "Import ordini",
            "Generazione etichette"

        ]
    },

    "Plug&Ship": {

        desc:
        "Soluzione dedicata a CMS e marketplace non gestiti tramite EasySpedWeb.",

        features: [

            "Inserimento manuale",
            "Upload file",
            "Etichette",
            "Tracking",
            "Drop Shipping",
            "Report spedizioni"

        ]
    },

    "Return My Parcel": {

        desc:
        "Servizi Disponibili :",

        features: [

            "Portale Resi",
            "Etichetta di Reso",
            "Tracking Resi",
            "Dashboard",
            "Locker",
            "PUDO"

        ]
    }
};
/* =========================
   CMS COMPATIBILI
========================= */
const plugShipCMS = [

    {name:"Magento",logo:"img/logos/magento.png"},
    {name:"Magento v2",logo:"img/logos/magentov2.png"},
    {name:"WooCommerce",logo:"img/logos/woocommerce.png"},
    {name:"Prestashop",logo:"img/logos/prestashop.png"},
    {name:"Shopify",logo:"img/logos/shopify.png"},
	{name:"OpenCart",logo:"img/logos/opencart.png"},
    {name:"BigCommerce",logo:"img/logos/bigcommerce.png"},
    {name:"Shopware",logo:"img/logos/shopware.png"},
    {name:"Drupal Commerce",logo:"img/logos/drupalcommerce.png"},
    {name:"CS-Cart",logo:"img/logos/cscart.png"},
	{name:"Ecwid",logo:"img/logos/ecwid.png"},
    {name:"Odoo",logo:"img/logos/odoo.png"},
    {name:"Swell",logo:"img/logos/swell.png"},
    {name:"ePages",logo:"img/logos/epages.png"},
    {name:"Weebly",logo:"img/logos/weebly.png"},
    {name:"osCommerce",logo:"img/logos/oscommerce.png"},
    {name:"Big Cartel",logo:"img/logos/bigcartel.png"},
	{name:"WiziShop",logo:"img/logos/wizishop.png"},
	{name:"Oxatis",logo:"img/logos/oxatis.png"},
	{name:"PrestaShop",logo:"img/logos/prestashop.png"},
	{name:"Weebly",logo:"img/logos/weebly.png"},
	{name:"BigCommerce",logo:"img/logos/bigcommerce.png"},
	{name:"CS-Cart",logo:"img/logos/cscart.png"},
	{name:"Drupal Commerce",logo:"img/logos/drupalcommerce.png"},
	{name:"ePages",logo:"img/logos/epages.png"},
	{name:"Odoo",logo:"img/logos/odoo.png"},
	{name:"Swell",logo:"img/logos/swell.png"},
	{name:"Shopware",logo:"img/logos/shopware.png"},
	{name:"WooCommerce",logo:"img/logos/woocommerce.png"},
	{name:"Big Cartel",logo:"img/logos/bigcartel.png"},
];
/* =========================
   MARKETPLACE
========================= */
const plugShipMarketplace = [

    {name:"Amazon",logo:"img/logos/amazon.png"},
    {name:"eBay",logo:"img/logos/ebay.png"},
    {name:"Rakuten",logo:"img/logos/rakuten.png"},
    {name:"Temu",logo:"img/logos/temu.png"},
    {name:"TikTok Shop",logo:"img/logos/tiktokshop.png"},
    {name:"AliExpress",logo:"img/logos/aliexpress.png"},
    {name:"Etsy",logo:"img/logos/etsy.png"},
    {name:"Discogs",logo:"img/logos/discogs.png"},
    {name:"Octopia",logo:"img/logos/octopia.png"},
	{name:"3dCart",logo:"img/logos/3dcart.png"},
    {name:"BackMarket",logo:"img/logos/backmarket.png"},
    {name:"Fnac Darty",logo:"img/logos/fnacdarty.png"},
    {name:"Walmart",logo:"img/logos/walmart.png"},
    {name:"Kaufland",logo:"img/logos/kaufland.png"},
    {name:"Bol",logo:"img/logos/bol.png"},
    {name:"OnBuy",logo:"img/logos/onbuy.png"},

    {name:"ManoMano",logo:"img/logos/manomano.png"},
    {name:"Carrefour",logo:"img/logos/carrefour.png"},
    {name:"Auchan",logo:"img/logos/auchan.png"},
    {name:"Conforama",logo:"img/logos/conforama.png"},
    {name:"Worten",logo:"img/logos/worten.png"},

    {name:"Decathlon",logo:"img/logos/decathlon.png"},
    {name:"Leroy Merlin",logo:"img/logos/leroymerlin.png"},
    {name:"MediaMarkt",logo:"img/logos/mediamarkt.png"},

    {name:"Rue du Commerce",logo:"img/logos/rueducommerce.png"},
    {name:"Showroom Privé",logo:"img/logos/showroomprivee.png"},
    {name:"El Corte Inglés",logo:"img/logos/elcorteingles.png"},

    {name:"Lengow",logo:"img/logos/lengow.png"},
    {name:"BeezUP",logo:"img/logos/beezup.png"},
    {name:"ChannelAdvisor",logo:"img/logos/channeladvisor.png"},
    {name:"TradeGecko",logo:"img/logos/tradegecko.png"},
    {name:"Holded",logo:"img/logos/holded.png"},
    {name:"BindCommerce",logo:"img/logos/bindcommerce.png"},
    {name:"TeamSystem Commerce",logo:"img/logos/teamsystemcommerce.png"},
    {name:"ShipEdge",logo:"img/logos/shipedge.png"},
    {name:"IBS Marketplace",logo:"img/logos/ibs.png"},
    {name:"eDock",logo:"img/logos/edock.png"},
    {name:"Maxpho",logo:"img/logos/maxpho.png"},
	{name:"Back Market",logo:"img/logos/backmarket.png"},
	{name:"Bol",logo:"img/logos/bol.png"},
	{name:"Carrefour",logo:"img/logos/carrefour.png"},
	{name:"Conrad",logo:"img/logos/conradelectronic.png"},
	{name:"Cdiscount",logo:"img/logos/cdiscount.png"},
	{name:"Decathlon",logo:"img/logos/decathlon.png"},
	{name:"Discogs",logo:"img/logos/discogs.png"},
	{name:"Eprice",logo:"img/logos/eprice.png"},
	{name:"Etsy",logo:"img/logos/etsy.png"},
	{name:"Fnac Darty",logo:"img/logos/fnacdarty.png"},
	{name:"Groupon",logo:"img/logos/groupongoods.png"},
	{name:"IBS",logo:"img/logos/ibs.png"},
	{name:"Katana",logo:"img/logos/katana.png"},
	{name:"Kaufland",logo:"img/logos/kaufland.png"},
	{name:"Lecerc",logo:"img/logos/leclerc.png"},
	{name:"Leroy Merlin",logo:"img/logos/leroymerlin.png"},
	{name:"Maison du Monde",logo:"img/logos/maisonsdumonde.png"},
	{name:"ManoMano",logo:"img/logos/manomano.png"},
	{name:"MediaMarkt",logo:"img/logos/mediamarkt.png"},
	{name:"Newcart",logo:"img/logos/newcart.png"},
	{name:"Octopia",logo:"img/logos/octopia.png"},
	{name:"Pixmania",logo:"img/logos/pixmania.png"},
	{name:"PlentyMarkets",logo:"img/logos/plentymarkets.png"},
	{name:"Rakuten",logo:"img/logos/rakuten.png"},
	{name:"Realde",logo:"img/logos/realde.png"},
	{name:"Refurbed",logo:"img/logos/refurbed.png"},
	{name:"Rue du Commerce",logo:"img/logos/rueducommerce.png"},
	{name:"Secret Sales",logo:"img/logos/secretsales.png"},
	{name:"Showroom Privé",logo:"img/logos/showroomprivee.png"},
	{name:"Spartoo",logo:"img/logos/spartoo.png"},
	{name:"Sprinter",logo:"img/logos/sprinter.png"},
	{name:"Temu",logo:"img/logos/temu.png"},
	{name:"TikTok Shop",logo:"img/logos/tiktokshop.png"},
	{name:"TrendyFoods",logo:"img/logos/trendyfoods.png"},
	{name:"Ubaldi",logo:"img/logos/ubaldi.png"},
	{name:"Walmart",logo:"img/logos/walmart.png"},
	{name:"Worten",logo:"img/logos/worten.png"},
	{name:"Yoox",logo:"img/logos/yoox.png"},

];
/* =========================
   DOMANDE
========================= */
const questions = [

    {
        key:"agg",
        title:"Quale piattaforma software utilizza il cliente?",
        options:[
            "Nessuna",
            "ShippyPro",
            "Qapla",
            "Sendcloud",
            "SpedizioniOnline",
            "iSendu",
            "Smarty",
            "Poleepo",
            "Gestionale Proprietario"
        ]
    },

    {
    key:"cms",
    title:"Quale piattaforma utilizza il cliente? (CMS o Marketplace)",
    options:[

        "🛒 WooCommerce",
        "🛒 Shopify",
        "🛒 Magento",
        "🛒 Prestashop",

        "🏪 Amazon",
        "🏪 Ebay",

        "⚙️ CMS Proprietario",

        "❓ Altro CMS / Marketplace"

    ]
},

    {
        key:"resi",
        title:"Necessita gestione resi?",
        options:[
            "SI",
            "NO"
        ]
    }

];