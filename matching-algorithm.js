// TODO For each form input, give each animal a match if its characteristics meets the criteria for that input

// TODO Then sort the list of animals from the most number of matches to the least number of matches

// TODO Then filter the sorted list by the user's pet preferences (breed, size, temperament, etc...)

// TODO Return the filtered and sorted list

const temperamentScoreGrid = {
    "Active": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.25,
        "studio": 0.25
    },
    "Intelligent": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "Playful": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.5,
        "studio": 0.5
    },
    "Curious": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.5,
        "studio": 0.5
    },
    "Loyal": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "Friendly": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "Sociable": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "Affectionate": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "Energetic": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.25,
        "studio": 0.25
    },
    "Lively": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.25,
        "studio": 0.25
    }
}

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
    animal.temperament.forEach(trait => score += temperamentScoreGrid[trait][userAccomodation]);

    const userHouseOccupancy = formData.housemates;
    if (userHouseOccupancy < 4){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.65 : 0.35
        } else {
            score += animal.independent ? 0.55 : 0.45
        }
    } else {
        score += 0.5
    }

    const userChildren = formData.children;
    if (userChildren > 0){
        score += animal.good_with_kids ? 0.7 : 0.1
    } else {
        score += 0.5
    }

    const userTravel = formData.travel;
    if (userTravel === 'Every month' || userTravel === 'Multiple times a month'){
        if (animal.health_status === 'Healthy'){
            score += animal.independent ? 0.7 : 0.1;
        }
    } else {
       score += 0.5
    }


    return score
}

testDog = {
    good_with_elderly: false,
    good_with_strangers: true,
    health_status: "Healthy",
    size: "Large",
    temperament: ["Active", "Playful", "Curious", "Loyal"],
    independent: true,
    good_with_kids: true,
    children: 2
}

testUser = {
    birthDate: "1940-10-04",
    location: "city",
    accomodation: "house-no-garden", 
    housemates: 3, 
    travel: 'Every month'
}

let finalScore = petMatchingAlgorithm(testDog, testUser)

console.log(finalScore)
