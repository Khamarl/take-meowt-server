// Write a function to generate cats with random values for each property (Optional: Restrict property values based on each other)

const path = require("path");

const {
    randomIndex,
    randomElement,
    randomInteger,
    randomBoolean,
    randomIndices,
    randomFileLine
} = require("../../helper-functions")

const breedList = [
    "Ragdoll",
    "Devon Rex",
    "Sphynx",
    "Scottish Fold",
    "Main Coon",
    "Persian",
    "Burmese",
    "Cymric",
    "Colorpoint Shorthair",
    "Bombay",
    "Norwegian Forest Cat"

]

const traits = [
    "energetic",
    "docile",
    "friendly",
    "intelligent",
    "playful",
    "protective",
    "confident",
    "aggressive",
    "obedience"
]

const healthConditions = ["Healthy", "Diabetic", "Gingivitis"]

function generateRandomCat() {
    const cat = {};
    cat.type = "cat";
    cat.breed = randomElement(breedList);
    cat.gender = randomBoolean() ? "female" : "male";
    cat.name = (cat.gender === "male") ? randomFileLine(path.resolve(__dirname, "male_cat_names.txt")) : randomFileLine(path.resolve(__dirname, "female_cat_names.txt"));
    cat.age = randomInteger(0, 20);
    cat.good_with_cats = randomBoolean();
    cat.good_with_dogs = randomBoolean();
    cat.temperament = [];
    // Get 4 random traits and add to temperament
    for (index of randomIndices(traits, 4)) {
        cat.temperament.push(traits[index]);
    }
    cat.good_with_kids = randomBoolean();
    cat.good_with_elderly = randomBoolean();
    cat.good_with_strangers = randomBoolean();
    cat.independent = randomBoolean();
    cat.hypoallergenic = randomBoolean();
    cat.health_status = randomElement(healthConditions);
    cat.house_cat = randomBoolean();

    return cat
}

// console.log(generateRandomCat())

module.exports = {
    generateRandomCat
}
