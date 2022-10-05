// TODO For each form input, give each animal a match if its characteristics meets the criteria for that input

// TODO Then sort the list of animals from the most number of matches to the least number of matches

// TODO Then filter the sorted list by the user's pet preferences (breed, size, temperament, etc...)

// TODO Return the filtered and sorted list

const {temperamentAccomScoreGrid, temperamentHouseMatesScoreGrid, temperamentChildrenScoreGrid, temperamentWFHScoreGrid, temperamentExpScoreGrid, temperamentPetNumScoreGrid, exerciseScoreGrid} = require('./scoring-grids');

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

    const userAccomodation = formData.accomodation;
    if (animal.size === "Large") {
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
    animal.temperament.forEach(trait => score += temperamentAccomScoreGrid[trait][userAccomodation]);

    const userHouseOccupancy = formData.housemates;
    
    if (userHouseOccupancy < 4){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.65 : 0.35
        } else {
            score += animal.independent ? 0.55 : 0.45
        }
        animal.temperament.forEach(trait => score += temperamentHouseMatesScoreGrid[trait]["<4"]);
    } else {
        score += 0.5
        animal.temperament.forEach(trait => score += temperamentHouseMatesScoreGrid[trait][">=4"]);
    }


    const userChildren = formData.children;
    
    if (userChildren > 0){
        score += animal.good_with_kids ? 0.7 : 0.1
        animal.temperament.forEach(trait => score += temperamentChildrenScoreGrid[trait][">0"]);
    } else {
        score += 0.5
        animal.temperament.forEach(trait => score += temperamentChildrenScoreGrid[trait]["=0"]);
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

    score += exerciseScoreGrid[animal.weekly_exercise_needed][userExercise];

    const userCanDoLongWalks = formData.walks;

    if (userCanDoLongWalks) {
        score += (animal.weekly_exercise_needed === "[7, 10.5)" 
        || animal.weekly_exercise_needed === "[10.5, 14)") ? 0.7 : 0.5;
    } else {
        score += (animal.weekly_exercise_needed === "[7, 10.5)" 
        || animal.weekly_exercise_needed === "[10.5, 14)") ? 0.2 : 0.6;
    }

    // console.log("After 1st exercise question: ", score);

    const userWork = formData.work_home;
    
    if (userWork === 'yes'){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.3 : 0.6;
        } else {
            score += animal.independent ? 0.5 : 0.7;
        }
        animal.temperament.forEach(trait => score += temperamentWFHScoreGrid[trait]["Yes"]);
    } else {
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.7 : 0.5;
        } else {
            score += animal.independent ? 0.6 : 0.3;
        }
        animal.temperament.forEach(trait => score += temperamentWFHScoreGrid[trait]["No"]);
    }

    // console.log("After both exercise questions: ", score);

    const userPrevExperience = formData.dog_experience;
   
    if (userPrevExperience === 'yes'){
        score += (animal.health_status === 'Healthy') ? 0.5 : 0.8;
        animal.temperament.forEach(trait => score += temperamentExpScoreGrid[trait]["Yes"]);
    } else {
        score += (animal.health_status === 'Healthy') ? 0.7 : 0.4;
        animal.temperament.forEach(trait => score += temperamentExpScoreGrid[trait]["No"])
    }

    const userCurrentPets = formData.number_of_pets;
    
    if (userCurrentPets > 0){
        score += animal.good_with_cats ? 0.6 : 0.3;
        score += animal.good_with_dogs ? 0.6 : 0.3;
        animal.temperament.forEach(trait => score += temperamentPetNumScoreGrid[trait][">0"]);
    } else {
        score += 0.5;
        animal.temperament.forEach(trait => score += temperamentPetNumScoreGrid[trait]["=0"]);
    }

    const userAllergy = formData.dog_allergy;
    if (userAllergy === 'yes'){
        score += animal.hypoallergenic ? 0.7 : 0.1;
    } else {
        score += 0.5;
    }

    const userDogMedication = formData.data_allergy;
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
    animalsCopy.sort((a, b) => b - a);

    return animalsCopy;
}

const dogs = require("./dogs");

testUser = {
    birthDate: "1940-10-04",
    location: "city",
    accomodation: "house-no-garden",
    housemates: 3, 
    travel: 'Every month', 
    exercise: 'few-times-month',
    walks: 'yes',
    work_home: 'no',
    dog_experience: 'yes', 
    number_of_pets: 0,
    dog_allergy: 'yes'
}

console.log(sortAnimals(dogs, testUser));


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
