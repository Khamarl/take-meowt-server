const { temperamentPetNumScoreGrid, temperamentAccomScoreGrid, temperamentHouseMatesScoreGrid, temperamentChildrenScoreGrid, temperamentWFHScoreGrid, temperamentExpScoreGrid } = require("./cat-scoring-grids");


function catMatchingAlgorithm(animal, formData) {
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
    
    const userAccom = formData.accommodation;
    const userPets = formData.numberOfPets;
    if(userAccom === "house-garden" || userAccom === "house-no-garden"){
        if (userPets > 0){
            score += animal.good_with_cats ? 0.6 : 0.4;
            score += animal.good_with_dogs ? 0.6 : 0.4;
            animal.temperament.forEach(trait => score += temperamentPetNumScoreGrid[trait][">0"]);
        } else {
            score += 0.4;
            animal.temperament.forEach(trait => score += temperamentPetNumScoreGrid[trait]["=0"]);
        }
    } else {
        if (userPets > 0){
            score += animal.good_with_cats ? 0.5 : 0.3;
            score += animal.good_with_dogs ? 0.5 : 0.3;
            animal.temperament.forEach(trait => score += temperamentPetNumScoreGrid[trait][">0"]);
        } else {
            score += 0.6
            animal.temperament.forEach(trait => score += temperamentPetNumScoreGrid[trait]["=0"]);
        }
    }
   
    animal.temperament.forEach(trait => score += temperamentAccomScoreGrid[trait][userAccom]);
 
    const userHouseOccupancy = formData.housemates;

    if (userHouseOccupancy < 4){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.75 : 0.35
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
        score += animal.good_with_kids ? 0.3 : 0.6
        animal.temperament.forEach(trait => score += temperamentChildrenScoreGrid[trait]["=0"]);
    }

    const userTravel = formData.travel;
    if (userTravel === 'Every month' || userTravel === 'Multiple times a month'){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.6 : 0.3;
        }
    } else {
       score += 0.5
    }


    const userWork = formData.workHome;
    
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

    // // console.log("After both exercise questions: ", score);

    const userPrevExperience = formData.catExperience;
   
    if (userPrevExperience === 'yes'){
        score += (animal.health_status === 'Healthy') ? 0.5 : 0.8;
        animal.temperament.forEach(trait => score += temperamentExpScoreGrid[trait]["Yes"]);
    } else {
        score += (animal.health_status === 'Healthy') ? 0.7 : 0.4;
        animal.temperament.forEach(trait => score += temperamentExpScoreGrid[trait]["No"])
    }


    const userAllergy = formData.catAllergy;
    if (userAllergy === 'yes'){
        score += animal.hypoallergenic ? 0.7 : 0.1;
    } else {
        score += 0.5;
    }

    const userCatMedication = formData.catMeds;
    if (userCatMedication === 'yes'){
        score += (animal.health_status === 'Healthy') ? 0.5 : 0.7
    } else {
        score += (animal.health_status === 'Healthy') ? 0.7 : 0.3
    }


    const userPreference = formData.houseCat;
    if (userPreference === 'yes'){
        score += animal.house_cat ? 0.7 : 0.3
    } else {
        score += animal.house_cat ? 0.3 : 0.7
    }

    return score

}


function sortedAnimals(animals, formData) {
    // Deep copy the animal list
    const animalsCopy = [...animals];
    // For each animal, assign a score
    animalsCopy.forEach(animal => animal.score = catMatchingAlgorithm(animal, formData));
    // Sort by score, highest to lowest
    animalsCopy.sort((a, b) => b.score - a.score);

    return animalsCopy;
}


const cats = require('./cats');

testUser = {
    birthDate: "1940-10-04",
    location: "city",
    accommodation: "house-no-garden",
    housemates: 3, 
    travel: 'Every month', 
    work_home: 'no',
    cat_experience: 'yes', 
    number_of_pets: 0,
    cat_allergy: 'yes', 
    medication: 'yes',
    preference: 'yes'
}

//console.log(sortedAnimals(cats, testUser));

module.exports = sortedAnimals;
