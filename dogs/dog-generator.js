// Write a function to generate dogs with random values for each property (Optional: Restrict property values based on each other)

const {randomIndex, randomElement, randomInteger, randomBoolean, randomIndices, randomFileLine } = require("./helper-functions")

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

const weeklyExerciseHours = ["[0, 3.5)", "[3.5, 7)", "[7, 10.5)", "[10.5, 14)"];

const sizes = ["Small", "Medium", "Large"];

function generateRandomDog() {
    const dog = {};
    dog.type = "dog";
    dog.breed = randomElement(breedList);
    dog.gender = randomBoolean() ? "female" : "male";
    dog.name = (dog.gender === "male") ? randomFileLine("male_dog_names.txt") : randomFileLine("female_dog_names.txt");
    dog.age = randomInteger(0, 20);
    dog.good_with_cats = randomBoolean();
    dog.good_with_dogs = randomBoolean();
    dog.temperament = [];
    // Get 4 random traits and add to temperament
    for (index of randomIndices(traits, 4)) {
        dog.temperament.push(traits[index]);
    }
    dog.good_with_kids = randomBoolean();
    dog.good_with_elderly = randomBoolean();
    dog.good_with_strangers = randomBoolean();
    dog.independent = randomBoolean();
    dog.hypoallergenic = randomBoolean();
    dog.health_status = randomElement(healthConditions);
    dog.weekly_exercise_needed = randomElement(weeklyExerciseHours);
    dog.size = randomElement(sizes);

    return dog
}

// console.log(generateRandomDog())

module.exports = {
    generateRandomDog
}