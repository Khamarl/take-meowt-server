// TODO For each form input, give each animal a match if its characteristics meets the criteria for that input

// TODO Then sort the list of animals from the most number of matches to the least number of matches

// TODO Then filter the sorted list by the user's pet preferences (breed, size, temperament, etc...)

// TODO Return the filtered and sorted list

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

    return score
}

testDog = {
    good_with_elderly: false,
    good_with_strangers: true,
    health_status: "Healthy"
}

testUser = {
    birthDate: "1940-10-04",
    location: "city"
}

let finalScore = petMatchingAlgorithm(testDog, testUser)

console.log(finalScore)
