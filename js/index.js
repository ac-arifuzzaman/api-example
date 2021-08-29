const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}

const displayQuotes = (quotes) => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quotes.quote;
}

