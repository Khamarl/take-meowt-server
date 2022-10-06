// {
//     id: 2,
//     breed: "",
//     age: ,
//     good_with_cats: "",
//     good_with_dogs: "",
//     temperament: "",
//     good_with_kids: "",
//     good_with_elderly: "",
//     good_with_strangers: "",
//     independent: "",
//     hypoallergenic: ,
//     health_status: "",
//     weekly_exercise_needed: "[0, 3.5)", "[3.5, 7)", "[7, 10.5)", "[10.5, 14)"
// }

// TODO Define all the dog properties and their possible values

// TODO Call dog generator function and save the results to file

// TODO "Active", "Intelligent", "Playful", "Curious", "Loyal", "Friendly", "Sociable", "Affectionate", "Energetic", "Lively"

const {generateRandomDog} = require("./dog-generator")
const fs = require("fs")

// const dogs = [
//     {
//         id: 0,
//         type: "dog",
//         breed: "cocker spaniel",
//         gender: "female",
//         name: "Roxy",
//         age: 4,
//         good_with_cats: true,
//         good_with_dogs: true,
//         temperament: [
//             "Active", "Playful", "Curious", "Loyal"
//         ],
//         good_with_kids: false,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: true,
//         hypoallergenic: false,
//         health_status: "Healthy",
//         weekly_exercise_needed: "[0, 3.5)"
//     }, {
//         id: 1,
//         type: "dog",
//         breed: "jack russell terrier",
//         gender: "female",
//         name: "Heather",
//         age: 2,
//         good_with_cats: false,
//         good_with_dogs: true,
//         temperament: [
//             "Sociable", "Affectionate", "Energetic", "Curious"
//         ],
//         good_with_kids: false,
//         good_with_elderly: true,
//         good_with_strangers: false,
//         independent: false,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         weekly_exercise_needed: "[3.5, 7)"
//     }, {
//         id: 2,
//         type: "dog",
//         breed: "labrador",
//         gender: "male",
//         name: "Mr. Peanutbutter",
//         age: 5,
//         good_with_cats: true,
//         good_with_dogs: false,
//         temperament: [
//             "Sociable", "Affectionate", "Energetic", "Curious"
//         ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: true,
//         hypoallergenic: false,
//         health_status: "Diabetic",
//         weekly_exercise_needed: "[7, 10.5)"
//     }
// ]

const dogs = []
for (let i = 0; i<50; i++) {
    const newDog = generateRandomDog();
    newDog.id = i;
    dogs.push(newDog);
}

const dogData = JSON.stringify(dogs);

fs.writeFileSync("dog-data.txt", dogData);

module.exports = dogs;
