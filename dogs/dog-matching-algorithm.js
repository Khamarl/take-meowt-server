// TODO For each form input, give each animal a match if its characteristics meets the criteria for that input

// TODO Then sort the list of animals from the most number of matches to the least number of matches

// TODO Then filter the sorted list by the user's pet preferences (breed, size, temperament, etc...)

// TODO Return the filtered and sorted list

const { temperamentAccomScoreGrid } = require('../cats/cat-scoring-grids');
const {dogTemperamentAccomScoreGrid, dogTemperamentHouseMatesScoreGrid, dogTemperamentChildrenScoreGrid, dogTemperamentWFHScoreGrid, dogTemperamentExpScoreGrid, dogTemperamentPetNumScoreGrid, dogExerciseScoreGrid} = require('./dog-scoring-grids');

function petMatchingAlgorithm(animal, formData) {
    let score = 0;
    const userBirthday = new Date(formData.birthDate);
    const userAge = Math.trunc((new Date() - userBirthday) / (1000 * 60 * 60 * 24 * 365)); // convert age to years

    if (userAge >= 60) {
        score += animal.good_with_elderly ? 0.7 : 0.1;
    } else {
        score += 0.5;
    }
    
    const userLocation = formData.location;
    if (userLocation === "city") {
        score += animal.good_with_strangers ? 0.6 : 0.4;
        score += (animal.health_status === "Healthy") ? 0.5 : 0.7
    } else if (userLocation === "town") {
        score += animal.good_with_strangers ? 0.55 : 0.45;
        score += (animal.health_status === "Healthy") ? 0.5 : 0.6
    } else if (userLocation === "countryside") {
        score += 0.5
        score += (animal.health_status === "Healthy") ? 0.6 : 0.4
    }

    
    const userAccomodation = formData.accommodation;
    if (animal.size === "large") {
        if (userAccomodation === "house-garden" || userAccomodation === "house-no-garden") {
            score += 0.8;
        } else if (userAccomodation === "apartment") {
            score += 0.5;
        } else {
            score += 0.2
        }
    } else {
        if (userAccomodation === "house-garden" || userAccomodation === "house-no-garden") {
            score += 0.7;
        } else if (userAccomodation === "apartment") {
            score += 0.6;
        } else {
            score += 0.5
        }
    }
    console.log(animal.id + "before animal temp " + score)

    animal.temperament.forEach(trait => {
        try {
            score += dogTemperamentAccomScoreGrid[trait][userAccomodation]
            if (Number.isNaN(score)){
                throw new Error("error message")
            }
        }
        catch(err){
            console.log(trait, userAccomodation)
        }
    });
    

    console.log(animal.id + "after animal score " + score)

    const userHouseOccupancy = formData.housemates;
    
    if (userHouseOccupancy < 4){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.65 : 0.35
        } else {
            score += animal.independent ? 0.55 : 0.45
        }
        animal.temperament.forEach(trait => score += dogTemperamentHouseMatesScoreGrid[trait]["<4"]);
    } else {
        score += 0.5
        animal.temperament.forEach(trait => score += dogTemperamentHouseMatesScoreGrid[trait][">=4"]);
    }


    const userChildren = formData.children;
    
    if (userChildren > 0){
        score += animal.good_with_kids ? 0.7 : 0.1
        animal.temperament.forEach(trait => score += dogTemperamentChildrenScoreGrid[trait][">0"]);
    } else {
        score += 0.5
        animal.temperament.forEach(trait => score += dogTemperamentChildrenScoreGrid[trait]["=0"]);
    }

    const userTravel = formData.travel;
    if (userTravel === 'Every month' || userTravel === 'Multiple times a month'){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.7 : 0.1;
        }
    } else {
       score += 0.5
    }



    // console.log("Before exercise questions: ", score);

    const userExercise = formData.exercise;

    score += dogExerciseScoreGrid[animal.weekly_exercise_needed][userExercise];

    const userCanDoLongWalks = formData.walks;

    if (userCanDoLongWalks) {
        score += (animal.weekly_exercise_needed === "[7, 10.5)" 
        || animal.weekly_exercise_needed === "[10.5, 14)") ? 0.7 : 0.5;
    } else {
        score += (animal.weekly_exercise_needed === "[7, 10.5)" 
        || animal.weekly_exercise_needed === "[10.5, 14)") ? 0.2 : 0.6;
    }

    // console.log("After 1st exercise question: ", score);

    const userWork = formData.workHome;
    
    if (userWork === 'yes'){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.3 : 0.6;
        } else {
            score += animal.independent ? 0.5 : 0.7;
        }
        animal.temperament.forEach(trait => score += dogTemperamentWFHScoreGrid[trait]["yes"]);
    } else {
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.7 : 0.5;
        } else {
            score += animal.independent ? 0.6 : 0.3;
        }
        animal.temperament.forEach(trait => score += dogTemperamentWFHScoreGrid[trait]["no"]);
    }

    // console.log("After both exercise questions: ", score);

    const userPrevExperience = formData.dogExperience;
   
    if (userPrevExperience === 'yes'){
        score += (animal.health_status === 'Healthy') ? 0.5 : 0.8;
        animal.temperament.forEach(trait => score += dogTemperamentExpScoreGrid[trait]["yes"]);
    } else {
        score += (animal.health_status === 'Healthy') ? 0.7 : 0.4;
        animal.temperament.forEach(trait => score += dogTemperamentExpScoreGrid[trait]["no"])
    }

    const userCurrentPets = formData.numberOfPets;
    
    if (userCurrentPets > 0){
        score += animal.good_with_cats ? 0.6 : 0.3;
        score += animal.good_with_dogs ? 0.6 : 0.3;
        animal.temperament.forEach(trait => score += dogTemperamentPetNumScoreGrid[trait][">0"]);
    } else {
        score += 0.5;
        animal.temperament.forEach(trait => score += dogTemperamentPetNumScoreGrid[trait]["=0"]);
    }

    const userAllergy = formData.dogAllergy;
    if (userAllergy === 'yes'){
        score += animal.hypoallergenic ? 0.7 : 0.1;
    } else {
        score += 0.5;
    }

    const userDogMedication = formData.dogMeds;
    if (userDogMedication === 'yes'){
        score += (animal.health_status === 'Healthy') ? 0.5 : 0.7
    } else {
        score += (animal.health_status === 'Healthy') ? 0.7 : 0.3
    }

    return score
}

function sortAnimals(animals, formData) {
    // Deep copy the animal list
    const animalsCopy = [...animals];
    // For each animal, assign a score
    animalsCopy.forEach(animal => animal.score = petMatchingAlgorithm(animal, formData));
    // Sort by score, highest to lowest
    animalsCopy.sort((a, b) => b.score - a.score);

    return animalsCopy;
}

const dogs = require("./dogs");

testUser = {
    birthDate: "1940-10-04",
    location: "city",
    accommodation: "house-no-garden",
    housemates: 3,
    children: 2, 
    travel: 'Every month', 
    exercise: 'few-times-month',
    walks: 'yes',
    workHome: 'no',
    dogExperience: 'yes', 
    numberOfPets: 0,
    dogAllergy: 'no', 
    dogMeds: 'yes'
}

//console.log(sortAnimals(dogs, testUser));

module.exports = sortAnimals;

// testDog = {
//     good_with_elderly: false,
//     good_with_strangers: true,
//     health_status: "Healthy",
//     size: "Large",
//     temperament: ["Active", "Playful", "Curious", "Loyal"],
//     independent: true,
//     good_with_kids: true,
//     children: 2, 
//     hypoallergenic: true,
//     weekly_exercise_needed: "[7, 10.5)"
// }

// let finalScore = petMatchingAlgorithm(testDog, testUser)

// console.log(finalScore)
