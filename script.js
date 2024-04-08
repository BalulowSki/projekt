let pathname = window.location.pathname;
let ascensionBonus = 1;
let buyIndex = 1;

let clickCount = 0;
let comboActive = false;
const comboClickCount = 50;
const comboTimeout = 5000;
let comboTimer;
let buyAll = false;

const clicker = document.getElementById('clicker');
clicker.addEventListener('mousedown', startCombo);

function startCombo() {
    clickCount++;
    if (clickCount === comboClickCount) {
        game.clickValue *= 2;
        comboActive = true;
        clearTimeout(comboTimer);
        comboTimer = setTimeout(endCombo, comboTimeout);
    }
    updateClickerFunctionality();
}

function endCombo() {
    if (comboActive) {
        clickCount = 0;
        comboActive = false;
        game.clickValue = 1;
        updateClickerFunctionality();
    }
}

// function updateClickerFunctionality() {
//   if (comboActive == true) {
//     document.getElementById('div').style.color = '#008000'
//   } else {
//     //document.getElementById('div').style.color = '#000000'
//   }
// }

console.log(pathname)

let clickSound = document.getElementById('clickSound');

function playClickSound() { //click
    if (clickSound && !clickSound.paused) {
        clickSound.pause();
        clickSound.currentTime = 0;
    }
    clickSound.play();
}

let button = document.getElementById('clicker');
button.addEventListener('click', playClickSound);


let clickSound2 = document.getElementById('clickSound');

function playClickSound2() { //buildinsg
    if (clickSound2 && !clickSound2.paused) {
        clickSound2.pause();
        clickSound2.currentTime = 0;
    }
    clickSound2.play();
}

let clickSound3 = document.getElementById('clickSound');

function playClickSound3() { //upgrades
    if (clickSound3 && !clickSound3.paused) {
        clickSound3.pause();
        clickSound3.currentTime = 0;
    }
    clickSound3.play();
}

function buy10() {
    buyIndex = 2;
    console.log('Buy 10');
    updateBuyIndex();
}

function buy100() {
    buyIndex = 3;
    console.log('Buy 100');
    updateBuyIndex();
}

function updateBuyIndex() {
    if (buyIndex == 1) {
        document.getElementById('buy1').style.color = '#f5f5f5';
        document.getElementById('buy10').style.color = '#595959';
        document.getElementById('buy100').style.color = '#595959';
        let button10 = document.getElementById('buy1');
        button10.addEventListener('click', playClickSound2);
        console.log('afford')
    } else if (buyIndex == 2) {
        document.getElementById('buy10').style.color = '#f5f5f5';
        document.getElementById('buy100').style.color = '#595959';
        document.getElementById('buy1').style.color = '#595959';
        let button11 = document.getElementById('buy10');
        button11.addEventListener('click', playClickSound2);
    } else if (buyIndex == 3) {
        document.getElementById('buy100').style.color = '#f5f5f5';
        document.getElementById('buy1').style.color = '#595959';
        document.getElementById('buy10').style.color = '#595959';
        let button100 = document.getElementById('buy100');
        button100.addEventListener('click', playClickSound2);
    }
}

let game = {
    score: 0,
    totalScore: 0,
    totalClicks: 0,
    clickValue: 1,
    version: 0.4,
    achievementsEarned: 0,
    completionPercentage: 0,
    ascendInfo: 1,

    addToScore: function(amount) {
        this.score += amount;
        this.totalScore += amount;
        display.updateScore();
        console.log(game.score)
    },

    getScorePerSecond: function() {
        let scorePerSecond = 0;
        for (i = 0; i < building.name.length; i++) {
            scorePerSecond += building.income[i] * building.count[i] * ascensionBonus
        }
        return scorePerSecond * game.ascendInfo
    }
};

function abbreviateNumber(number) {
    const abbreviations = ["", "k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "Ud", "Dd", "Td", "Qad", "Qid", "Sd", "Std", "Od", "Nvd", "Vg", "Uvg", "Dvg", "Tvg", "Qavg"];
    const decimals = 1;

    let index = 0;
    while (number >= 1000 && index < abbreviations.length - 1) {
        number /= 1000;
        index++;
    }

    const formattedNumber = number.toFixed(decimals);
    return formattedNumber + abbreviations[index];
}

let timeMachineBrought = false;

let building = {
    name: [
        'Cursor',
        'Noob Coders',
        'Theme Designers',
        'Solar Pannels',
        'Cycle Factory',
        'Cycle Singer',
        'Cycle Economy',
        'Planet Hopping Boots',
        'Matter Transformer',
        'HTML Console',
        //'test building'
    ],
    image: [
        'cursor.png',
        'noobCoder.png',
        'themeDesigners.png',
        'solarPannel.png',
        'factory.png',
        'singer.png',
        'stock.png',
        'planet.png',
        'matter.png',
        'console.png',
        //'matter.png'
    ],
    count: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //0
    ],
    income: [
        1,
        5,
        8,
        47,
        260,
        1400,
        7800,
        44000,
        260000,
        1600000,
        //100000000000000000000000000000000000000000000000000000000000000000000
    ],

    cost: [
        15,
        100,
        1100,
        12000,
        130000,
        1400000,
        20000000,
        330000000,
        5100000000,
        75000000000,
        //1
    ],

    description: [
        'Cursors to automatically click the Cycle once a second',
        'Noob Coders to code your projects, kind people will leave them tips',
        'Theme Designers to make Replit Themes, kind people will leave them tips',
        'Solar Pannels to turn energy into Cycles',
        'Cycle Facotrys to create artificial Cycles',
        'Cycle Singesr that produce cycles instead of sound',
        'Turn the economy into Cycles',
        'Hopp to diiferent planets to steal their cycles',
        'Turn matter into Cycles',
        'Generate Cycles from the very code this website runs off'
    ],

    purchase: function(index) {
        if (buyIndex == 1) {
            if (game.score >= this.cost[index]) {
                game.score -= this.cost[index];
                this.count[index] += 1;
                this.cost[index] = Math.ceil(this.cost[index] * 1.10);
            }
        } else if (buyIndex == 2) {
            if (game.score >= this.cost[index] * 1.10 ** 10) {
                game.score -= this.cost[index] * 1.10 ** 10;
                this.count[index] += 10;
                this.cost[index] = Math.ceil(this.cost[index] * 1.10 ** 10);
            }
        } else if (buyIndex == 3) {
            if (game.score >= this.cost[index] * 1.10 ** 100) {
                game.score -= this.cost[index] * 1.10 ** 100;
                this.count[index] += 100;
                this.cost[index] = Math.ceil(this.cost[index] * 1.10 ** 100);
            }
        }

        let button2 = document.getElementById('shopContanier');
        button2.addEventListener('click', playClickSound2);
        console.log('afford')

        display.updateScore();
        display.updateShop();
        display.updateUpgrades();
    }
};

let upgrade = {
    name: [
        'Touch Typing',
        'Double Jointed',
        'Custom Cursors',
        'New PC',
        'Hacker Plan',
        'RGB Lights',
        'ChatGPT',
        'Color Theroy',
        'Caffeine Pills',
        'Art School',
        'Co-Workers',
        'Nuclear Energy',
        'Solar Pannel Planet',
        'Star Generator',
        'Star Reactor',
        'Eco Friendly Factories',
        '2x Production Speed',
        'Sleepless Workers',
        'AI Workers',
        'Stone Mic',
        'Golden Mic',
        'Diamond Mic',
        'Ampilfied Speakers',
        'Investors',
        'Fake Stocks',
        'Banks',
        'Crypto Currency',
        'Jump Potions',
        'Rocket Boots',
        'Speed Potion',
        'Rocket Ships',
        'Matter Transformer Factory',
        'Faster Conveyor Belts',
        'Quantum Matter Condenser',
        'Eternal Matter Synthesizer',
        'Basic Markup Module',
        'Enhanced Console Interface',
        'Advanced Code Compiler',
        'Quantum HTML Processor',
        'Rapid Click Boost',
        'Enhanced Click Efficiency',
        'Pixel Precision Clicker',
        'Turbo Click Accelerator',
        'Infinity Click Engine'
    ],
    description: [
        'Cursors are now twice as efficient',
        'Cursors are now twice as efficient',
        'Clicking is twice as powerful',
        'Noob Coders are now Twice as efficient',
        'Noob Coders are now Twice as efficient',
        'Noob Coders are now Twice as efficient',
        'Noob Coders are now Twice as efficient',
        'Theme Designers are now twice as efficient',
        'Theme Designers are now twice as efficient',
        'Theme Designers are now twice as efficient',
        'Theme Designers are now twice as efficient',
        'Solar Pannels are now twice as efficient',
        'Solar Pannels are now twice as efficient',
        'Solar Pannels are now twice as efficient',
        'Solar Pannels are now twice as efficient',
        'Factories are twice as efficient',
        'Factories are twice as efficient',
        'Factories are twice as efficient',
        'Factories are twice as efficient',
        'Singers are twice as efficient',
        'Singers are twice as efficient',
        'Singers are twice as efficient',
        'Singers are twice as efficient',
        'Cycle Economys is twice as efficient',
        'Cycle Economys is twice as efficient',
        'Cycle Economys is twice as efficient',
        'Cycle Economys is twice as efficient',
        'Planet Hopping Boots are twice as efficient',
        'Planet Hopping Boots are twice as efficient',
        'Planet Hopping Boots are twice as efficient',
        'Planet Hopping Boots are twice as efficient',
        'Matter Transformers are twice as efficient',
        'Matter Transformers are twice as efficient',
        'Matter Transformers are twice as efficient',
        'Matter Transformers are twice as efficient',
        'HTML Consoles are twice as efficient',
        'HTML Consoles are twice as efficient',
        'HTML Consoles are twice as efficient',
        'HTML Consoles are twice as efficient',
        'Clicking is twice as powerful',
        'Clicking is twice as powerful',
        'Clicking is 4x as powerful',
        'Cursors are now twice as efficient',
        'Cursors are now twice as efficient'
    ],
    image: [
        'touchtyping.png',
        'djointa3.png',
        'mouse1.png',
        'coder1.png',
        'coder2.png',
        'coder3.png',
        'coder4.png',
        'theme1.png',
        'theme2.png',
        'theme3.png',
        'theme4.png',
        'solar1.png',
        'solar2.png',
        'solar3.png',
        'solar4.png',
        'factory1.png',
        'factory2.png',
        'factory3.png',
        'factory4.png',
        'singer1.png',
        'singer2.png',
        'singer3.png',
        'singer4.png',
        'money1.png',
        'money2.png',
        'money3.png',
        'money4.png',
        'planet1.png',
        'planet2.png',
        'planet3.png',
        'planet4.png',
        'matter1.png',
        'matter2.png',
        'matter3.png',
        'matter4.png',
        'html1.png',
        'html2.png',
        'html3.png',
        'html4.png',
        'mouse2.png',
        'mouse3.png',
        'mouse4.png',
        'cursor3.png',
        'cursor4.png'
    ],
    type: [
        'building',
        'building',
        'click',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'click',
        'click',
        'click',
        'building',
        'building'
    ],
    cost: [
        300,
        700,
        300,
        2700,
        10200,
        21099,
        35670,
        8790,
        17621,
        39000,
        55000,
        20000,
        51000,
        99999,
        170000,
        200000,
        350000,
        500000,
        800000,
        2500000,
        7000000,
        20000000,
        50000000,
        75000000,
        200000000,
        500000000,
        1000000000,
        750000000,
        1500000000,
        5000000000,
        1500000000,
        750000000,
        1500000000,
        3000000000,
        10000000000,
        150000000000,
        500000000000,
        1500000000000,
        5000000000000,
        1500,
        15000,
        75000,
        2000,
        10000
    ],
    buildingIndex: [
        0,
        0, -1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        7,
        8,
        8,
        8,
        8,
        9,
        9,
        9,
        9, -1, -1, -1,
        0,
        0
    ],
    requirement: [
        1,
        7,
        1,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        1,
        7,
        15,
        29,
        50,
        250,
        750,
        15,
        29
    ],
    bonus: [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        4,
        2,
        2
    ],
    purchased: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

    purchase: function(index) {
        if (!this.purchased[index] && game.score >= this.cost[index]) {
            if (this.type[index] == 'building' && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
                game.score -= this.cost[index];
                building.income[this.buildingIndex[index]] *= this.bonus[index];
                this.purchased[index] = true;

                let button2 = document.getElementById('upgradeContanier');
                button2.addEventListener('click', playClickSound);

                display.updateUpgrades();
                display.updateScore();
            } else if (this.type[index] == 'click' && game.totalClicks >= this.requirement[index]) {
                game.score -= this.cost[index];
                game.clickValue *= this.bonus[index];
                this.purchased[index] = true;

                display.updateUpgrades();
                display.updateScore();
            }
        }
    }
};

let achievement = {
    name: [
        'On-Time Tapper',
        'Clicking Apprentice',
        'Finger Dynamo',
        'Master of the Tap',
        'Rapid Click Maestro',
        'Tapping Virtuoso',
        'Cycle Collector',
        'Wealthy Beginnings',
        'Cycle Tycoon',
        'Gold Rush',
        'Midas Touch',
        'Cycle Accumulator',
        'Platinum Pioneer',
        'Cycle Connoisseur',
        'Fortune Forger',
        'Cursor Novice',
        'Cursor Enthusiast',
        'Cursor Conducter',
        'Cursor Commander',
        'Cursor Craze',
        'Cursor Master',
        'Cursor Domination',
        'Cursor Guru',
        'Cursor Grandmaster',
        'Initiate Programmer',
        'Scripting Apprentice',
        'Coding Cadet',
        'Syntax Success',
        'Foundational Developer',
        'Digital Artisan',
        'Cybernetic Visionary',
        'Binary Archmage',
        'AI Overlord',
        'Theme Apprentice',
        'Aspiring Designer',
        'Creative Craftsman',
        'Design Journeyman',
        'Adept Aesthete',
        'Mastery of Design',
        'Master of Aesthetics',
        'Ultimate Creator',
        'Eternal Artistry',
        'Rays of Light',
        'Sunny Acres',
        'Eco-Engineer',
        'Radiant Revolution',
        'Mega-Watt Master',
        'Cosmic Conductor',
        'Supernova Sustainer',
        'Eclipsing Records',
        'Photon Philanthropis',
        'Industrial Initiate',
        'Factory Founder',
        'Manufacturing Maven',
        'Production Prodigy',
        'Automated Assembler',
        'Efficiency Expert',
        'Mass Production Master',
        'Industrial Empire',
        'Manufacturing Monarch',
        'Harmonious Harmony',
        'Pitch-Perfect Pursuit',
        'Singer Sensation',
        'Songbird Supreme',
        'Melodic Maestro',
        'Operatic Overlord',
        'Singer Symphony',
        'Choir Conductor',
        'Factory Frenzy',
        'Economic Explorer',
        'Monetary Momentum',
        'Economic Expansionist',
        'Cashflow Captain',
        'Market Maven',
        'Wealth Wizard',
        'Money Magnate',
        'Capitalist Kingpin',
        'Economic Legend',
        'Cosmic Steps',
        'Lunar Leaper',
        'Mars Trekker',
        'Venus Voyager',
        'Asteroid Adventurer',
        'Neptune Navigator',
        'Saturn Sojourner',
        'Black Hole Bouncer',
        'Multiverse Master',
        'Matter Manipulator',
        'Particle Rearranger',
        'Molecular Wizard',
        'Quantum Alchemist',
        'Fusion Sorcerer',
        'Nuclear Magician',
        'Plasma Alchemist',
        'Stellar Matter Shaper',
        'Galactic Matter Master',
        'Web Explorer',
        'Script Savvy',
        'HTML Hacker',
        'Digital Architect',
        'Webmaster',
        'Scripting Sorcerer',
        'Code Champion',
        'Digital Overlord',
        'Pixel Perfectionist'
    ],
    description: [
        'Click the Cycle 1 time',
        'Click the Cycle 50 times',
        'Click the Cycle 200 times',
        'Click the Cycle 500 times',
        'Click the Cycle 1000 times',
        'Click the Cycle 5000 times',
        'Gather 1 Cycle',
        'Gather 100 Cycles',
        'Gather 1000 Cycles',
        'Ganter 10000 Cycles',
        'Gather 100000 Cycles',
        'Gather 1000000 Cycles',
        'Gather 10000000 Cycles',
        'Gather 100000000 Cycles',
        'Gather 1000000000 Cycles',
        'Buy 1 Cursor',
        'Buy 5 Cursors',
        'Buy 10 Cursors',
        'Buy 50 Cursors',
        'Buy 100 Cursors',
        'Buy 250 Cursors',
        'Buy 500 Cursors',
        'Buy 750 Cycles',
        'Buy 1000 Cycles',
        'Buy 1 Nobo Coder',
        'Buy 5 Noob Coders',
        'Buy 10 Noob Coders',
        'Buy 50 Noob Coders',
        'Buy 100 Noob Coders',
        'Buy 250 Noob Coders',
        'Buy 500 Noob Coders',
        'Buy 750 Noob Coders',
        'Buy 1000 Nobo Coders',
        'Buy 1 Theme Designer',
        'Buy 5 Theme Designers',
        'Buy 10 Theme Designers',
        'Buy 50 Theme Designers',
        'Buy 100 Theme Designers',
        'Buy 250 Theme Designers',
        'Buy 500 Theme Designers',
        'Buy 750 Theme Designers',
        'Buy 1000 Theme Designers',
        'Buy 1 Solar Pannel',
        'Buy 5 Solar Pannels',
        'Buy 10 Solar Pannels',
        'Buy 50 Solar Pannels',
        'Buy 100 Solar Pannels',
        'Buy 250 Solar Pannels',
        'Buy 500 Solar Pannels',
        'Buy 750 Solar Pannels',
        'Buy 1000 Solar Pannels',
        'Buy 1 Factory',
        'Buy 5 Factorys',
        'Buy 10 Factorys',
        'Buy 50 Factorys',
        'Buy 100 Factorys',
        'Buy 250 Factorys',
        'Buy 500 Factorys',
        'Buy 750 Factorys',
        'Buy 1000 Factorys',
        'Buy 1 Singer',
        'Buy 5 Singers',
        'Buy 10 Singers',
        'Buy 50 Singers',
        'Buy 100 Singers',
        'Buy 250 Singers',
        'Buy 500 Singers',
        'Buy 750 Singers',
        'Buy 1000 Singers',
        'Buy 1 Cycle Economy',
        'Buy 5 Cycle Economies',
        'Buy 10 Cycle Economies',
        'Buy 50 Cycle Economies',
        'Buy 100 Cycle Economies',
        'Buy 250 Cycle Economies',
        'Buy 500 Cycle Economies',
        'Buy 750 Cycle Economies',
        'Buy 1000 Cycle Economies',
        'Buy 1 Planet Hopping Boot',
        'Buy 5 Planet Hopping Boots',
        'Buy 10 Planet Hopping Boots',
        'Buy 50 Planet Hopping Boots',
        'Buy 100 Planet Hopping Boots',
        'Buy 250 Planet Hopping Boots',
        'Buy 500 Planet Hopping Boots',
        'Buy 750 Planet Hopping Boots',
        'Buy 1000 Planet Hopping Boots',
        'Buy 1 Matter Transformer',
        'Buy 5 Matter Transformers',
        'Buy 10 Matter Transformers',
        'Buy 50 Matter Transformers',
        'Buy 100 Matter Transformers',
        'Buy 250 Matter Transformers',
        'Buy 500 Matter Transformers',
        'Buy 750 Matter Transformers',
        'Buy 1000 Matter Transformers',
        'Buy 1 HTML Console',
        'Buy 5 HTML Consoles',
        'Buy 10 HTML Consoles',
        'Buy 50 HTML Consoles',
        'Buy 100 HTML Consoles',
        'Buy 250 HTML Consoles',
        'Buy 500 HTML Consoles',
        'Buy 750 HTML Consoles',
        'Buy 1000 HTML Consoles'
    ],
    image: [
        'timeTapper.png',
        'apprentice.png',
        'dynamo.png',
        'masterTap.png',
        'rapidTap.png',
        'virtuosoTap.png',
        'collector.png',
        '100cycles.png',
        'cycleTycoon.png',
        'goldRush.png',
        'midasTouch.png',
        'accumulator.png',
        'pioneer.png',
        'connoisseur.png',
        'forger.png',
        'cursorNovicea.png',
        'enthusiast.png',
        'cursorCraze.png',
        'conducter.png',
        'commander.png',
        'cursorMaster.png',
        'cursorDomination.png',
        'cursorGuru.png',
        'cursorGrandmaster.png',
        'initateProgrammer.png',
        'scriptingApprentice.png',
        'codingCadet.png',
        'syntaxSucsess.png',
        'fdev.png',
        'digitalArtisan.png',
        'cVision.png',
        'binaryArchmage.png',
        'aiOverlord.png',
        'themeApp.png',
        'designerApp.png',
        'creativeCraft.png',
        'desginJourney.png',
        'astheitc.png',
        'desginMaster.png',
        'aestheticMaster.png',
        'ultimateCreator.png',
        'eternalArt.png',
        'raysoflight.png',
        'sunnyAce.png',
        'ecoengineer.png',
        'radiantrev.png',
        'wattMaster.png',
        'cosmiccon.png',
        'supernovasus.png',
        'erecords.png',
        'photonP.png',
        'facotry1.png',
        'facotry2.png',
        'facotry3.png',
        'facotry4.png',
        'factory5.png',
        'facotry6.png',
        'facotry7.png',
        'factory8.png',
        'factory9a.png',
        'harmony.png',
        'singera2.png',
        'singera3.png',
        'singera4.png',
        'singera5.png',
        'singera6.png',
        'singera7.png',
        'singera8.png',
        'singera9.png',
        'bank1.png',
        'bank2.png',
        'bank3.png',
        'bank4.png',
        'bank5.png',
        'bank6.png',
        'bank7.png',
        'bank8.png',
        'bank9.png',
        'boots1.png',
        'boots2.png',
        'boots3.png',
        'boots4.png',
        'boots5.png',
        'boots6.png',
        'boots7.png',
        'boots8.png',
        'boots9.png',
        'mattera1.png',
        'mattera2.png',
        'mattera3.png',
        'mattera4.png',
        'mattera5.png',
        'mattera6.png',
        'mattera7.png',
        'mattera8.png',
        'mattera9.png',
        'htmla1.png',
        'htmla2.png',
        'htmla3.png',
        'htmla4.png',
        'htmla5.png',
        'htmla6.png',
        'htmla7.png',
        'htmla8.png',
        'htmla9.png'
    ],
    type: [
        'click',
        'click',
        'click',
        'click',
        'click',
        'click',
        'score',
        'score',
        'score',
        'score',
        'score',
        'score',
        'score',
        'score',
        'score',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building'
    ],
    requirement: [
        1,
        50,
        200,
        500,
        1000,
        5000,
        1,
        100,
        1000,
        10000,
        100000,
        1000000,
        10000000,
        100000000,
        1000000000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000,
        1,
        5,
        10,
        50,
        100,
        250,
        500,
        750,
        1000
    ],
    objectIndex: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9
    ],
    awarded: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

    earn: function(index) {
        if (!this.awarded[index]) {
            this.awarded[index] = true;
            game.achievementsEarned++;
            console.log(game.achievementsEarned)
            document.getElementById('achievementCounter').innerHTML = game.achievementsEarned
        }
    }
};

let display = {
    updateScore: function() {
        let abbreviatedScore = abbreviateNumber(game.score);
        let abbreviatedCPS = abbreviateNumber(game.getScorePerSecond());

        document.getElementById('score').innerHTML = abbreviatedScore;
        document.getElementById('scorepersecond').innerHTML = abbreviatedCPS;
        document.title = abbreviatedScore + ' Cyklonow - Cyklonizator 3000';
    },

    updateShop: function() {
        document.getElementById('shopContanier').innerHTML = "";
        for (i = 0; i < building.name.length; i++) {
            let abbreviatedCost = abbreviateNumber(building.cost[i])
            document.getElementById('shopContanier').innerHTML += "<table class='shopButton' title='" + building.name[i] + " &#10" + building.description[i] + "' onclick='building.purchase(" + i + ")'><tr><td id='image'><img src='images/" + building.image[i] + "'></td><td id='nameAndCost'><p>" + building.name[i] + "</p><p><span>🌀 " + abbreviatedCost + "</span> Cycles</p></td><td id='amount'><span>" + building.count[i] + "</span></td></tr></table>"

        }
    },

    updateUpgrades: function() {
        document.getElementById('upgradeContanier').innerHTML = '';
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == 'building' && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
                    document.getElementById('upgradeContanier').innerHTML += '<img src="images/' + upgrade.image[i] + '" title="' + upgrade.name[i] + ' &#10; ' + upgrade.description[i] + ' &#10; (' + upgrade.cost[i] + ' Cycles)" onclick="upgrade.purchase(' + i + ')">';
                } else if (upgrade.type[i] == 'click' && game.totalClicks >= upgrade.requirement[i]) {

                    document.getElementById('upgradeContanier').innerHTML += '<img src="images/' + upgrade.image[i] + '" title="' + upgrade.name[i] + ' &#10; ' + upgrade.description[i] + ' &#10; (' + upgrade.cost[i] + ' Cycles)" onclick="upgrade.purchase(' + i + ')">';
                }
            }
        }
    },

    updateAchievements: function() {
        document.getElementById('achievementContanier').innerHTML = "";
        for (i = 0; i < achievement.name.length; i++) {
            if (achievement.awarded[i]) {
                document.getElementById('achievementContanier').innerHTML += '<img src="images/' + achievement.image[i] + '" title="' + achievement.name[i] + ' &#10; ' + achievement.description[i] + '">'
                    // if (achievement.name[i] == 'Time Machine' && achievement.awarded[i] == true) {
                    //   document.getElementById('civIcon').style.filter = 'brightness(100%)'
                    //   document.getElementById('civIcon').title = 'Unlocked'
                    //   console.log('good')
                    //   timeMachineBrought = true;
                    // }
            }
        }
    },

    updateAchievementContanier: function() {
        document.getElementById('achievementCounter').innerHTML = game.achievementsEarned;
    },

    updateAchievementPercentage: function() {
        game.completionPercentage = game.achievementsEarned / 105 * 100;
        game.completionPercentage = Math.round(game.completionPercentage);
        document.getElementById('completionPercentage').innerHTML = game.completionPercentage;
        console.log(game.completionPercentage + '%')
    }
};

let acsendCost = 2000000000

function acsend() {
    let acsendPoss = game.score / acsendCost;
    acsendPoss = Math.round(acsendPoss)
    abbreviateAscend = abbreviateNumber(acsendPoss);
    abbreviatedInfo = abbreviateNumber(game.ascendInfo);
    document.getElementById('acsend').innerHTML = abbreviateAscend;
    console.log(game.ascendInfo + ' Ascend Info')
    document.getElementById('ascend').title = `Current Ascension Bonus: ${abbreviatedInfo} \n Click now to Ascend`;
}

function ascendButton() {
    let ascendConfirm = game.score / acsendCost;
    ascendConfirm = Math.round(ascendConfirm);
    console.log(ascendConfirm + 'x CPS booster');

    let ascendResult = confirm('Are you sure you want to ascend? Ascending will reset your progress, but you will receive a permanent profit boost. If you ascend now, you will be granted a permanent ' + ascendConfirm + 'x CPS booster.');

    if (ascendResult) {
        game.ascendInfo += ascendConfirm;

        game.score = 0;
        game.clickValue = 1;

        building.count[0] = 0;
        building.count[1] = 0;
        building.count[2] = 0;
        building.count[3] = 0;
        building.count[4] = 0;
        building.count[5] = 0;
        building.count[6] = 0;
        building.count[7] = 0;
        building.count[8] = 0;
        building.count[9] = 0;

        building.cost[0] = 15;
        building.cost[1] = 100;
        building.cost[2] = 1100;
        building.cost[3] = 12000;
        building.cost[4] = 130000;
        building.cost[5] = 1400000;
        building.cost[6] = 20000000;
        building.cost[7] = 330000000;
        building.cost[8] = 5100000000;
        building.cost[9] = 75000000000;

        upgrade.purchased = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

        console.log(building.name[1] + ' Noob Coders?')

        console.log(building.count[0] + 'Buildings')
        console.log(building.name[1] + ' Name 2')

        display.updateShop();

        saveGame();
        loadGame();
        console.log(building.name[0] + ' Building Name')
        console.log(game.score + ' Score After')
    }
}

function name() {
    let name = prompt("What would you like to change you Business's name to?");
    document.getElementById('yourName').innerHTML = name
}

function saveGame() {
    let gameSave = {
        score: game.score,
        totalScore: game.totalScore,
        totalClicks: game.totalClicks,
        clickValue: game.clickValue,
        version: game.version,
        achievementsEarned: game.achievementsEarned,
        completionPercentage: game.completionPercentage,
        buildingCount: building.count,
        buildingIncome: building.income,
        buildingCost: building.cost,
        upgradePurchased: upgrade.purchased,
        achievementAwarded: achievement.awarded,
        ascendInfo: game.ascendInfo,
        name: document.getElementById('yourName').innerHTML
    };
    localStorage.setItem('gameSave', JSON.stringify(gameSave));
}

function loadGame() {
    let savedGame = JSON.parse(localStorage.getItem('gameSave'))
    if (localStorage.getItem('gameSave') != null) {
        if (typeof savedGame.score !== 'undefined') game.score = savedGame.score;
        if (typeof savedGame.totalScore !== 'undefined') game.totalScore = savedGame.totalScore;
        if (typeof savedGame.totalClicks !== 'undefined') game.totalClicks = savedGame.totalClicks;
        if (typeof savedGame.achievementsEarned !== 'undefined') game.achievementsEarned = savedGame.achievementsEarned;
        if (typeof savedGame.completionPercentage !== 'undefined') game.completionPercentag = savedGame.completionPercentag;
        if (typeof savedGame.clickValue !== 'undefined') game.clickValue = savedGame.clickValue;
        if (typeof savedGame.ascendInfo !== 'undefined') game.ascendInfo = savedGame.ascendInfo;
        if (typeof savedGame.buildingCount !== 'undefined') {
            for (i = 0; i < savedGame.buildingCount.length; i++) {
                building.count[i] = savedGame.buildingCount[i]
            }
        }
        if (typeof savedGame.buildingCount !== 'undefined') {
            for (i = 0; i < savedGame.buildingCount.length; i++) {
                building.count[i] = savedGame.buildingCount[i]
            }
        }
        if (typeof savedGame.buildingIncome !== 'undefined') {
            for (i = 0; i < savedGame.buildingIncome.length; i++) {
                building.income[i] = savedGame.buildingIncome[i]
            }
        }
        if (typeof savedGame.buildingCost !== 'undefined') {
            for (i = 0; i < savedGame.buildingCost.length; i++) {
                building.cost[i] = savedGame.buildingCost[i]
            }
        }
        if (typeof savedGame.upgradePurchased !== 'undefined') {
            for (i = 0; i < savedGame.upgradePurchased.length; i++) {
                upgrade.purchased[i] = savedGame.upgradePurchased[i];
            }
        }
        if (typeof savedGame.achievementAwarded !== 'undefined') {
            for (i = 0; i < savedGame.achievementAwarded.length; i++) {
                achievement.awarded[i] = savedGame.achievementAwarded[i];
            }
        }
        document.getElementById('yourName').innerHTML = savedGame.name || '';
    }
}

function fadeOut(element, duration, finalOpacity, callback) {
    opacity = 1;

    let elementFadingInterval = window.setInterval(function() {
        opacity -= 50 / duration;

        if (opacity <= finalOpacity) {
            clearInterval(elementFadingInterval);
            callback();
        }

        element.style.opacity = opacity
    }, 50)
}

function createNumberOnClicker(event) {
    let clicker = document.getElementById('clicker');

    let clickerOffset = clicker.getBoundingClientRect();
    let position = {
        x: event.pageX - clickerOffset.left,
        y: event.pageY - clickerOffset.top
    }

    let element = document.createElement('div');
    let finalClickValue = game.clickValue * game.ascendInfo;

    let abbreviatedFinalClickValue = abbreviateNumber(finalClickValue);
    element.textContent = '+' + abbreviatedFinalClickValue;
    element.classList.add('number', 'unselectable', 'click-number');
    element.classList.add('number', 'unselectable');
    element.style.left = position.x + 'px';
    element.style.top = position.y + 'px';
    clicker.appendChild(element);

    let opacity = 1;

    function animateFadeAndMove() {
        opacity -= 0.01;
        element.style.opacity = opacity;

        position.y -= 1;
        element.style.top = position.y + 'px';

        if (opacity <= 0) {
            element.remove();
        } else {
            requestAnimationFrame(animateFadeAndMove);
        }
    }

    requestAnimationFrame(animateFadeAndMove);
}


function civInfo() {
    if (timeMachineBrought == true) {
        window.location.href = 'civInfo.html';
        saveGame();
        // if (game.completionPercentage >= 75) {
        document.getElementById('modernImg').style.filter = 'greyscale(0%)'
            //}
    }
}

function buy1() {
    buyIndex = 1;
    console.log('By 1');
    updateBuyIndex();
}

setInterval(function() {
        for (i = 0; i < achievement.name.length; i++) {
            if (achievement.type[i] == 'score' && game.totalScore >= achievement.requirement[i]) {
                achievement.earn(i);
            } else if (achievement.type[i] == 'click' && game.totalClicks >= achievement.requirement[i]) {
                achievement.earn(i);
            } else if (achievement.type[i] == 'building' && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) {
                achievement.earn(i);
            }
        }

        game.score += game.getScorePerSecond();
        game.totalScore += game.getScorePerSecond();
        display.updateScore()
        display.updateAchievements();
        display.updateAchievementPercentage();
    }, 1000) //1000 ms = 1 second

setInterval(function() {
    display.updateScore();
    display.updateUpgrades();
}, 10000); //10000m s= 10 seconds

setInterval(function() {
    saveGame();
}, 30000); //30000ms = 30 seconds

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'y' && e.ctrlKey) {
        alert('Udało się zapisać grę!')
        saveGame()
    }
}); //ctrl y to save game

window.onload = function() {
    //loadGame();

    display.updateScore();
    display.updateUpgrades();
    display.updateAchievements();
    display.updateShop();
    display.updateAchievementContanier();
    display.updateAchievementPercentage();
    updateBuyIndex();
}

let news = {
    newsInfo: [
        'Wiadomości: "Cykloniizator 2000" Biją Rekordy z Milionami Kliknięć, Naukowcy Zdumieni!',
        'Wiadomości: Nowy Power-Up Ujawniony - Przycisk, Który Klika za Ciebie (Bo Kto Potrzebuje Palców?)',
        'Wiadomości: Entuzjaści Kolarstwa Dominują na Listach Liderów, Rozpoczynają Petycję o Zmianę Nazwy Ziemi na "Clicktopia."',
        'Wiadomości: Najnowsza Aktualizacja Wprowadza Oszałamiające Tła, Natychmiast Ignorowane Przez Graczy Przeklikujących!',
        'Wiadomości: Wydarzenie Clickathon Przyciąga Graczy z Całego Świata, Przeklikując Swoją Drogę do Zamieszania!',
        'Wiadomości: Frenzy Klikania: Gracze Osiągają Niespotykane Prędkości, Miejscowy Czas Ulega Ich Woli!',
        'Wiadomości: Społeczność "Cycle Clicker" Osiąga 1 Milion Członków, Natychmiast Zamawia 1 Milion Pizz!',
        'Wiadomości: Ogłoszono Wyłączne Mistrzostwa Clickerów, Zawodnicy Ostrzeżeni, By Przynieść Dodatkowe Przyciski Myszki!',
        'Wiadomości: Wzmocnij Swoje Kliknięcia z Turbo Wzmacniaczami, Miejscowe Sieci Energetyczne Walczą, By Dotrzymać Kroku!',
        'Wiadomości: Rywalizuj w Globalnym Turnieju Klikania, Przygotuj Się na Starcie z Australijskimi Kangurami Klikającymi!',
        'Wiadomości: Klikaj Swoją Drogę do Zwycięstwa z Nowymi Ulepszeniami, Naukowcy Opracowują Klikające Mięśnie ze Stali!',
        'Wiadomości: Produkty "Cycle Clicker" Dostępne Teraz, Fani Wymagają Pijam z Motywem Clickera!',
        'Wiadomości: Tryb Wyzwań Uwolniony - Przetestuj Swoje Umiejętności, Clickerzy na Całym Świecie Udają Niebywale Zainteresowanych!',
        'Wiadomości: Demony Prędkości Dominują na Tygodniowych Listach Liderów, Plotki Krążą o Klawiaturach Z Nadtlenkiem Azotu!',
        'Wiadomości: Mega-Klik Wydarzenie: Weekend Podwójnych Punków, Naukowcy Obawiają Się Ogromnego Braku Myszek!',
        'Wiadomości: Mania Ulepszeń: Odblokuj Ostatecznego Clickera, Kodziarze z Okolicy Wymagają Wyższej Płacy za Pracę związaną z Klikaniem!',
        'Wiadomości: Rywalizacja w Klikaniu: Tygodniowe Turnieje Rozgrzewają Atmosferę, Lokalne Fabryki Klikania Doświadczają Braków Kadrowych!',
        'Wiadomości: Gorączka Klikania: Gracze Osiągają Obłą Liczbę Kliknięć, Miejscowe Kawiarnie Ogłaszają Stan Wyjątkowego Braku Ziaren Kawy!',
        'Wiadomości: Finały Mistrzostw: Kto Będzie Królem Clickera? Plotki Krążą o Klikających Monarchach!',
        'Wiadomości: Gracze Przebijają Bariery 100 Miliardów Kliknięć, Wymyślają Nową Jednostkę Miary: "Clickle"!',
        'Wiadomości: Kliknij dla Celu: Aktualizacja Charytatywna Już Dostępna, Clickerzy na Całym Świecie Tworzą "Clickerzy Bez Granic"!',
        'Wiadomości: Legendy Klikania: Poznaj Najlepszych Graczy, Clicker z Największą Liczbą Kliknięć Ogłoszony Oficjalnym Clickerem Clickdomu!',
        'Wiadomości: Olimpiada Klikania: Kto zdobędzie Złoto? Wydarzenie Obejmuje Maraton Klikania Myszką i Synchronizowane Stukanie Spacji na Klawiaturze!',
        'Wiadomości: Kliknij Szybciej z Nowymi Sterownikami Przyjaznymi dla Palców, Clickerzy Wymagają Patentu na Nowe Ćwiczenia dla Palców!',
        'Wiadomości: Wzrost Mistrzów Clickera - Jesteś w Tym? Superbohaterowie Clickerów Tworzą "Ligę Clickerów"!',
        'Wiadomości: Doroczny Festiwal Clickerów Rozpoczyna Się z Hukiem, Karmiwoje wystrzałowe Prowadzą do Frenzy Klikania!',
        "Czy chciałbyś, żeby Twoje cytaty pojawiły się tutaj? Wystarczy, że będziesz darczyńcą."
    ]
}

let randomIndex = Math.floor(Math.random() * news.newsInfo.length);

let randomItem = news.newsInfo[randomIndex];
document.getElementById("news").innerHTML = randomItem;

setInterval(function() {
    let randomIndex = Math.floor(Math.random() * news.newsInfo.length);

    let randomItem = news.newsInfo[randomIndex];
    document.getElementById("news").innerHTML = randomItem;
}, 10000)

function returnModern() {
    window.location.href = 'index.html';
}

function goStoneage() {
    console.log(game.completionPercentage)
    if (game.completionPercentage >= 75) {
        window.location.href = 'stoneage.html';
        console.log('fail')
    } else {
        console.log('pass')
    }
}

if (pathname == '/civInfo.html') {
    console.log('step 1')
    if (game.completionPercentage >= 75) {
        console.log('step 2')
        document.getElementById('stoneageImg').style.filter = 'brightness(100%)'
    }
}

if (pathname != '/civInfo.html') {
    document.getElementById('clicker').addEventListener('click', function() {
        game.totalClicks++;
        game.addToScore(game.clickValue * game.ascendInfo)

        createNumberOnClicker(event)
    }, false);
}

setInterval(function() {
    acsend();
}, 1000)