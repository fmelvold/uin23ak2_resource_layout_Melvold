const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

document.getElementById("html").innerHTML = resources[0].category;
document.getElementById("css").innerHTML = resources[1].category;
document.getElementById("javascript").innerHTML = resources[2].category;
document.getElementById("react").innerHTML = resources[3].category;
document.getElementById("sanity").innerHTML = resources[4].category;
//Henter de ulike resources fra const, legger til hvilket nr dem er satt opp i nav og legger til category som skal bli den synlige teksten
//Kilde: https://www.educba.com/javascript-innerhtml/
//

function printNav(index) {
    document.getElementById("overskrift").innerHTML = resources[index].category;
    document.getElementById("tekst").innerHTML = resources[index].text;
//Kjører en funksjon og tar inn index som parameter. Brukes til å ta imot oppdateringer fra ressources. Oppdateringene inneholder category og text fra const. Så blir den printet ut via idene i html
    var list = document.getElementById("kategoriliste"); //Printer ut ul punktene fra html som er fra const 
    list.innerHTML = ""; //For å unngå at tekstene bygger på hverandre etter hver gang man bytter tab

    resources[index].sources.forEach(function(source) {
        const item = document.createElement("li");
        const link = document.createElement("a");  //Går igjennom alle elementene i sources og oppretter li og a elementer ved hjelp av createElement 
        link.innerHTML = source.title; //Setter innerHTML av a elementene fra title
        link.href = source.url; //Setter href av li elementene fra url
        item.appendChild(link); //Legger link elementet inni item
        list.appendChild(item); //Legger item elementet inni list
    }); //Dette vil få fram title og url fra sources
    //Kilde:https://codepen.io/helb/pen/GWppqx
    //https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
    
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    
    const activeNavLink = navLinks[index];
    activeNavLink.classList.add("active"); 
}  //Velger alle elementene i nav og legger dem til i navLinks og bruker forEach til å gå igjennom elementene og fjerner active fra classList. Med dette lager jeg en activeNavLink som legger til active når den er spesifisert.
   //Kilde: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList