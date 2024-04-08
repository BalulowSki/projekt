let timeMachineBrought = false;
let pathname = window.location.pathname;

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

    ],
    count: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    income: [
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
        5,
        8,
        47,
        260,
        1400,
        7800,
        44000,
        260000,
        1600000,

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

    ],

    description: [
        'Kursory automatycznie klikają Cykl raz na sekundę',
        'Noob Coders do kodowania Twoich projektów, mili ludzie zostawią im wskazówki',
        'Projektanci motywów, którzy będą tworzyć repliki motywów, mili ludzie zostawią im wskazówki',
        'Panele słoneczne zamieniające energię w cykle',
        'Fabryki cykli do tworzenia sztucznych cykli',
        'Cycle Singesr, które zamiast dźwięku wytwarzają cykle',
        'Zamień gospodarkę w cykle',
        'Wskakuj na różne planety, aby ukraść ich cykle',
        'Zamień materię w cykle',
        'Generuj cykle na podstawie samego kodu uruchamianego przez tę witrynę'
    ],

    purchase: function(index) {
        if (game.score >= this.cost[index]) {
            game.score -= this.cost[index];
            this.count[index] += 1;
            this.cost[index] = Math.ceil(this.cost[index] * 1.10);
            display.updateScore();
            display.updateShop();
            display.updateUpgrades();
        }
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
        'Pixel Perfectionist',
        'Time Machine'
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
        'Buy 1000 HTML Consoles',
        'Unlock the power of time...'
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
        'htmla9.png',
        'timeMachine.png'
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
        1000,
        10
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
        9,
        8
    ],
    awarded: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

    earn: function(index) {
        if (!this.awarded[index]) {
            this.awarded[index] = true;
            game.achievementsEarned++;
            console.log(game.achievementsEarned)
            document.getElementById('achievementCounter').innerHTML = game.achievementsEarned
        }
    }
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
        achievementAwarded: achievement.awarded
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
    element.textContent = '+' + game.clickValue;
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
        if (game.completionPercentage >= 75) {
            document.getElementById('modernImg').style.filter = 'greyscale(0%)'
        }
    }
}

function updateIcons() {
    console.log(game.completionPercentage)
}

function returnModern() {
    window.location.href = 'index.html';
}

function goStoneage() {
    console.log(game.completionPercentage)
    if (game.completionPercentage >= 75) {

        console.log('fail')
    } else {
        console.log('pass')
    }
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

}, 1000)

setInterval(function() {

}, 10000);

setInterval(function() {
    saveGame();
}, 30000);

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'y' && e.ctrlKey) {
        alert('Successfully Saved Game')
        saveGame()
    }
});

window.onload = function() {
    loadGame();
    console.log(game.completionPercentage)

}