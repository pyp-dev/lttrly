export { getRandomCategories, getRandomCategory, getRandomValue };

const categories = [
    ['Vowels', ['A','E','I','O','U']],
    ['Vowels Incl. Y', ['A','E','I','O','U','Y']],
    ['Wheel of Fortune Given', ['R','S','T','L','N','E']],
    ['Rainbow', ['Red','Orange','Yellow','Green','Blue','Indigo','Violet']],
    ['Compass', ['North','South','East','West']],
    ['Homerow Keyboard', ['A','S','D','F','J','K','L']],
    ['Common Keyboard Layout', ['Q','W','E','R','T','Y']],
    ['Alt Keyboard Layout', ['D','V','O','R','A','K']],
    ['Clothes Sizes', ['Small','Medium','Large','X-Large']],
    ['Grades', ['A','B','C','D','F']],
    ['Scrabble Uncommon', ['K','J','X','Q','Z']],
    ['Temperature Scales', ['Celsius','Fahrenheit','Kelvin']],
    ['Xbox Controller Buttons', ['A','B','X','Y']],
    ['PC Movement', ['W','A','S','D']],
    ['College Degree Levels', ['Associate','Bachelor','Master','Doctoral']],
    ['DNA Bases', ['Adenine','Cytosine','Guanine','Thymine']],
    ['RNA Bases', ['Adenine','Cytosine','Guanine','Uracil']],
    ['Hogwarts Houses', ['Gryffindor','Hufflepuff','Ravenclaw','Slytherin']],
    ['Zodiac Signs', ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']],
    ['U.S. Time Zones', ['Eastern','Central','Mountain','Pacific','Alaskan','Hawaiian']],
    ['Movie Ratings', ['G','PG','PG-13','R','NC-17']],
    ['Game Ratings', ['Everyone','Teen','Mature','Adults Only']],
    ['Dallas Sports Teams', ['Cowboys','Mavericks','Stars','Rangers']],
    ['New Orleans Sports Teams', ['Saints','Pelicans']],
    ['Houston Sports Teams', ['Texans','Rockets','Astros']],
    ['Phoenix Sports Teams', ['Cardinals','Suns','Coyotes','Diamondbacks']],
    ['Denver Sports Teams', ['Broncos','Nuggets','Avalanche','Rockies']],
    ['Kansas City Sports Teams', ['Chiefs','Royals']],
    ['Indianapolis Sports Teams', ['Colts','Pacers']],
    ['Cincinnati Sports Teams', ['Bengals','Reds']],
    ['Minneapolis Sports Teams', ['Vikings','Timberwolves','Wild','Twins']],
    ['Detroit Sports Teams', ['Lions','Pistons','Red Wings','Tigers']],
    ['Cleveland Sports Teams', ['Browns','Cavaliers','Guardians']],
    ['Atlanta Sports Teams', ['Falcons','Hawks','Braves']],
    ['Olympic Rings', ['Blue','Yellow','Black','Green','Red']],
    ['M&M\'s Colors', ['Red','Orange','Green','Blue','Brown','Yellow']],
    ['Skittles Colors', ['Purple','Yellow','Green','Orange','Red']],
    ['Froot Loops Colors', ['Red','Orange','Yellow','Green','Blue','Purple']],
    ['Roulette Colors', ['Red','Black','Green']],
    ['Seasons', ['Spring','Summer','Winter','Fall']],
    ['Great Lakes', ['Superior','Michigan','Huron','Erie','Ontario']],
    ['Oceans', ['Pacific','Atlantic','Indian','Southern','Arctic']],
    ['Continents', ['Asia','Africa','North America','South America','Antarctica','Europe','Austrlia']],
    ['Card Suits', ['Clubs','Spades','Hearts','Diamonds']],
    ['U.S. Coins', ['Penny','Nickel','Dime','Quarter','Half Dollar','Dollar']],
    ['U.S. Paper Money', ['One','Two','Five','Ten','Twenty','Fifty','One Hundred']],
    ['Four Corner States', ['Utah','Colorado','New Mexico','Arizona']],
    ['Lucky\'s Charms', ['Heart','Star','Horseshoe','Clover','Blue Moon','Unicorn','Rainbow','Red Balloon']],
    ['Countries of North America', ['Canada','United States','Mexico']],
    ['Automatic Car Gears', ['Park','Reverse','Drive','Neutral']],
    ['Chess Pieces', ['King','Queen','Bishop','Knight','Rook','Pawn']],
    ['U.S. Flag Colors', ['Red','White','Blue']],
    ['Tic-Tac-Toe Symbols', ['X','O']],
    ['Seattle Sports Teams', ['Seahawks','Kraken','Mariners']],
    ['Original Monopoly Pieces', ['Battleship','Boot','Cannon','Thimble','Top Hat','Iron']]
];

function getCategoryNames(){
    return [...categories.keys()];
}

function getRandomCategories(){
    const chosen = new Set()
    for(let i = 0; i<9; i++){
        chosen.add(categories[Math.floor(Math.random()*categories.length)]);
    }
    
    return Array.from(chosen);
}

function getRandomCategory(categories){
    return categories[Math.floor(Math.random()*categories.length)];
}

function getRandomValue(values){
    return values[Math.floor(Math.random()*values.length)];
}
