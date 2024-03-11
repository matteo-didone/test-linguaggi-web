// Dichiaro un array con che conterrà tutti gli elementi con classe "item_text"
let navElements = document.getElementsByClassName("item_text");

// Incollo il codice dell'elenco:
let programmingLanguages = {
    "description": "Popular programming languages 2019, scraped from Github",
    "programming_languages_popular": [
        "Assembly",
        "Batchfile",
        "C",
        "C#",
        "C++",
        "Clojure",
        "CoffeeScript",
        "Dart",
        "Elixir",
        "Emacs Lisp",
        "Go",
        "Haskell",
        "Java",
        "JavaScript",
        "Julia",
        "Kotlin",
        "Lua",
        "Makefile",
        "OCaml",
        "Objective-C",
        "Objective-C++",
        "PHP",
        "Perl",
        "Python",
        "Rascal",
        "Ruby",
        "Rust",
        "Scala",
        "Shell",
        "Swift",
        "TeX",
        "TypeScript",
        "Vim script"
    ]
};

// Salvo in una variabile l'URL di base per la pagina wikipedia 
let wikipediaUrlBase = "https://it.wikipedia.org/wiki/";

// Faccio un ciclo for che andrà a sostituire il testo di ogni elemento con l'elemento con lo stesso indice dell'array programming_languages_popular
for (let i = 0; i < navElements.length; i++) {
    // Creo una variabile chiamata link, che andrà a creare nel DOM per ciascun elemento un tag "a"
    let link = document.createElement("a");
    // Sfruttando la variabile link che mi sono appena creato, ci inserisco all'interno l'elemento iesimo dell'array programming_languages_popular
    link.textContent = programmingLanguages.programming_languages_popular[i];
    // Assegna all'attributo href del link l'URL completo per il linguaggio di programmazione che stiamo iterando
    // Uso encodeURIComponent per assicurarmi che l'URL sia valido e non contenga caratteri che potrebbero interromperne il parsing.
    link.href = wikipediaUrlBase + encodeURIComponent(programmingLanguages.programming_languages_popular[i]);
    // Apro il link in una nuova finestra / tab
    link.target = "_blank";
    // Rimuovo contenuti precedenti
    navElements[i].innerHTML = '';
    // Aggiunge il link creato come figlio dell'elemento corrente nell'array navElements.
    navElements[i].appendChild(link);
}

// Seleziono tutti gli elementi con la classe "second"
let secondElements = document.querySelectorAll('.second');

// Itero su ciascun elemento che ha la classe "second"
secondElements.forEach(function (secondElement) {
    // Rimuovo la classe "second" dall'elemento corrente
    secondElement.classList.remove('second');

    // Seleziono tutti i tag "a" all'interno dell'elemento sul quale stiamo iterando, e li rimuovo
    let linkElements = secondElement.querySelectorAll('a');
    linkElements.forEach(function (linkElements) {
        linkElements.remove();
    });
});

//Per sostituire l'immagine, innanzitutto la salvo in una variabile
let logoNormal = document.getElementsByClassName("eltdf-normal-logo")[0];
// Cambio il contenuto testuale della variaible
logoNormal.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png';
