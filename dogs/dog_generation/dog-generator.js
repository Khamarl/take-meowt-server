// Write a function to generate dogs with random values for each property (Optional: Restrict property values based on each other)

const path = require("path");

const {randomIndex, randomElement, randomInteger, randomBoolean, randomIndices, randomFileLine } = require("../../helper-functions")

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
    "confident",
    "intelligent",
    "playful",
    "docile",
    "obedience",
    "friendly",
    "protective",
    "energetic",
    "aggressive"
]

//"energetic", "docile (Curious)", "friendly", "intelligent", "playful", "protective", "confident (Active)", "aggressive (Lively)", "obedience (Loyal)"



const healthConditions = ["Healthy", "Diabetic", "Gingivitis"]

const weeklyExerciseHours = ["[0, 3.5)", "[3.5, 7)", "[7, 10.5)", "[10.5, 14)"];

const sizes = ["small", "medium", "large"];

function generateRandomDog() {
    const dog = {};
    dog.type = "dog";
    dog.breed = randomElement(breedList);
    dog.gender = randomBoolean() ? "female" : "male";
    dog.name = (dog.gender === "male") ? randomFileLine(path.resolve(__dirname, "male_dog_names.txt")) : randomFileLine(path.resolve(__dirname, "female_dog_names.txt"));
    dog.age = randomInteger(1, 20);
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
