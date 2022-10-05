// Write a function to generate dogs with random values for each property (Optional: Restrict property values based on each other)

const {randomIndex, randomInteger, randomBoolean} = require("./helper-functions")

const breedList = [
    "cocker spaniel",
    "jack russell terrier",
    "labrador",
    "doberman",
    "chihuahua",
    "great dane",
    "yorkshire terrier",
    "pomeranian",
    "maltese terrier",
    "pug"
]

const traits = [
    "Active",
    "Intelligent",
    "Playful",
    "Curious",
    "Loyal",
    "Friendly",
    "Sociable",
    "Affectionate",
    "Energetic",
    "Lively"
]

const healthConditions = ["Healthy", "Diabetic", "Gingivitis"]

function generateRandomDog() {
    const breed = breedList(randomIndex(breedList));
    const age = randomInteger(0, 20);
    const good_with_cats = randomBoolean();
    const good_with_dogs = randomBoolean();
    const temperament = [];
    // Generate 4 random traits and add to temperament
    for (index of randomIndices(traits, 4)) {
        temperament.push(traits[index]);
    }
    const good_with_kids = randomBoolean();
    const good_with_elderly = randomBoolean();
    const good_with_strangers = randomBoolean();
    const independent = randomBoolean();
    const hypoallergenic = randomBoolean();
    const health_status = healthConditions[randomIndex(healthConditions)];

    return {
        breed,
        age,
        good_with_cats,
        good_with_dogs,
        temperament,
        good_with_kids,
        good_with_elderly,
        good_with_strangers,
        independent,
        hypoallergenic,
        health_status
    }
}

module.exports = {
    generateRandomDog
}
