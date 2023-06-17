export { getRandomCategories, getRandomCategory, getRandomLetter };

const categories = [
    ['vowels', ['a','e','i','o','u']],
    ['vowels with y', ['a','e','i','o','u','y']],
    ['wheel of fortune given', ['r','s','t','l','n','e']],
    ['rainbow', ['r','o','y','g','b','i','v']],
    ['compass', ['n','s','e','w']],
    ['homerow', ['a','s','d','f','j','k','l']],
    ['common keyboard', ['q','w','e','r','t','y']],
    ['alt keyboard', ['d','v','o','r','a','k']],
    ['clothes sizes', ['x','s','m','l']],
    ['grades', ['a','b','c','d','f']],
    ['scrabble uncommon', ['k','j','x','q','z']],
    ['temperature scales', ['c','f','k']],
    ['priorities', ['h','m','l']],
    ['game controller', ['a','b','x','y']],
    ['pc gaming', ['w','a','s','d']],
    ['karate belts', ['w','y','o','g','p','b']],
    ['college degrees', ['a','b','m','d']],
    ['dna bases', ['a','c','g','t']],
    ['rna bases', ['a','c','g','u']],
    ['hogwarts houses', ['g','h','r','s']],
    ['zodiac signs', ['a','t','g','c','l','v','s','p']],
    ['usa time zones', ['e','c','m','p','a','h']],
    ['movie ratings', ['g','p','r','n']],
    ['game ratings', ['e','t','m','a']],
    ['dallas sports teams', ['c','m','s','r']],
    ['new orleans sports teams', ['s','p']],
    ['houston sports teams', ['t','r','a']],
    ['phoenix sports teams', ['c','s','d']],
    ['denver sports teams', ['b','n','a','r']],
    ['kansas city sports teams', ['c','r']],
    ['indianapolis sports teams', ['c','p']],
    ['cincinnati sports teams', ['b','r']],
    ['minneapolis sports teams', ['v','t','w']],
    ['detroit sports teams', ['l','p','r','t']],
    ['cleveland sports teams', ['b','c','g']],
    ['atlanta sports teams', ['f','h','b']],
    ['olympic rings', ['b','y','g','r']],
    ['m&m colors', ['r','o','g','b','y']],
    ['skittles colors', ['p','y','g','o','r']],
    ['froot loops colors', ['r','o','y','g','b','p']],
    
];

function getCategoryNames(){
    return [...categories.keys()];
}

function getRandomCategories(){
    const chosen = new Set()
    for(let i = 0; i<10; i++){
        chosen.add(categories[Math.floor(Math.random()*categories.length)]);
    }
    
    return Array.from(chosen);
}

function getRandomCategory(categories){
    return categories[Math.floor(Math.random()*categories.length)];
}

function getRandomLetter(values){
    return values[Math.floor(Math.random()*values.length)];
}