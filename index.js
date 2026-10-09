/* Load Functions */
window.onload = function() {
    checkQuery();
    setCurrentPage();
    randomQuoteValue();
    randomShimejiValue();
}
/* ========= */

/* Navigation */
let navValue = "home";
let oldNavValue = "home";

function checkQuery() {
    const query = window.location.hash.slice(1);
    const navID = document.getElementById(query);

    if (navID) {
        setCurrentNav(query);
    } else {
        console.warn("WARNING (checkQuery):\nThere's no element with the id " + '"' + query + '".');
    }
}

function setCurrentNav(nav) {
    oldNavValue = navValue;
    navValue = nav;

    const navID = document.getElementById(nav);
    const oldNavID = document.getElementById(oldNavValue);
    const headerID = document.getElementById("page-header");
    const tabTitleID = document.getElementById("tab-title");
        
    navID.classList.add('nav-select');

    if (oldNavValue != navValue) {
        oldNavID.classList.remove('nav-select');
        headerID.textContent = navID.textContent;
        tabTitleID.textContent = navID.textContent + "| Beani's Website";
        window.location.hash = navValue;
        setCurrentPage(nav);
        randomQuoteValue();
    }
}

function setCurrentPage() {
    const pageArticle = document.getElementById('page-article');
    const filePath = '/pages/' + navValue + '.md';

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.text();
        }) .then(htmlContent => {
            pageArticle.innerHTML = htmlContent;
        }) .catch(error => {
            console.error('ERROR (setCurrentPage):\nFailed to load HTML content: ' + '"' + error + '".');
            pageArticle.innerHTML = '<h2 class="text-error">Failed to load page content...</h2><p>Either something went wrong, or the page doesn&apos;t exist.</p>';
    });
}
/* ========= */

/* Random Quote */
let hintChance = 0;
let hintValue = 0;
let quoteValue = 0;

const randomHint = [
    'Continue looking where nothing can be found... <span class="important-text">until you find something.</span>'
];

const quoteSource = [
    'Go Go Kitchen',
    'DON&apos;T CUT',
    'Sotsuomeshiki',
    'Saitama 2000',
    'mint tears',
    'Angel Dream',
    'Mitsusegawa Ranbu',
    'Ne~e Oshiete',
    'void setup',
    'Karamari no Hana',
    'Senbonzakura',
    'Brain Fluid Explosion Girl',
    'Young Girl A',
    'Liar Dancer',
    'Lagtrain',
    'Static',
    'Spoken For',
    'BUTCHER VANITY',
    'weathergirl',
    'It was all just a dream!'
];

const randomQuote = [
    '"Everybody will be a star! (If you always eat greedily.)"', // Go Go Kitchen
    '"Don&apos;t cut the rhythm of the heart!"', // DON'T CUT
    '"Speaking of &apos;spreading wings into a shining future&apos; even still..."', // Sotsuomeshiki
    '"Today&apos;s lunch is..."', // Saitama 2000
    '"I sit and think, under the distant sky..."', // mint tears
    '"I wish I can fly in the sky, angels call you very kindly."', // Angel Dream
    '"The fleeting seasons lingers... Glossing the tears too."', // Mitsusegawa Ranbu
    '"You say I&apos;m strange? What are you joking about!"', // Ne~e Oshiete
    '"// Let the world begin."', // void setup
    '"Screaming deep scarlet into this entangled heart..."', // Karamari no Hana
    '"Thousands of cherry trees dissolve into the night."', // Senbonzakura
    '"Crimson flowers are blooming everywhere."', // Brain Fluid Explosion Girl
    '"Collecting the dreams I threw away..."', // Young Girl A
    '"Now, am I happy? I&apos;m not really sure if I am or not."', // Liar Dancer
    '"I&apos;ll set off on a journey, taking a ride on the local train."', // Lagtrain
    '"Don&apos;t you find it all romantic, the way things used to be?"', // Static
    '"BABY, MAKE ME SOMETHING &apos;FORE I GET THAT CALL &apos;CAUSE-"', // Spoken For
    '"Still praying, hopeless and in vain."', // BUTCHER VANITY
    '"The weather forecast&apos;s calling for another cloudy day."', // weathergirl
    '"Man, I hope I&apos;ll have better luck the next time I wake up..."' // It was all just a dream!
];

function randomQuoteValue() {
    hintChance = Math.floor(Math.random() * 10);
    hintValue = Math.floor(Math.random() * randomHint.length);
    quoteValue = Math.floor(Math.random() * randomQuote.length);

    const quoteID = document.getElementById("quote");
    const quoteSourceID = document.getElementById("quote-source");

    if (hintChance == 0) {
        quoteID.innerHTML = randomHint[hintValue];
        quoteSourceID.innerHTML = "(Hint...)";
    } else if (hintChance !== 0) {
        quoteID.innerHTML = randomQuote[quoteValue];
        quoteSourceID.innerHTML = '(Quote from: <span class="important-text">' + quoteSource[quoteValue] + '</span>)';
    }
    
    console.log(
        "=============================" +
        "\nRandom Quote Info" + 
        "\n=============================" +
        "\nQuote Value: " + quoteValue +
        "\nQuote: " + randomQuote[quoteValue] +
        "\nQuote Source: " + quoteSource[quoteValue] +
        "\n-----------------------------" +
        "\nHint Chance: " + hintChance + " (0 = Hint)" +
        "\nHint Value: " + hintValue +
        "\nHint: " + randomHint[hintValue] +
        "\n============================="
    );
}

/* ========= */

/* Random Shimeji */
let shimejiValue = 0;

function randomShimejiValue() {
    shimejiValue = Math.floor(Math.random() * 3);
    
    document.getElementById("shimeji").innerHTML = '<img src="/images/shimeji/shimeji' + shimejiValue + '.gif" alt="404">';

    console.log(
        "=============================" +
        "\nRandom Shimeji Info" + 
        "\n=============================" +
        "\nShimeji Value: " + shimejiValue +
        "\n============================="
    );
}
/* ========= */