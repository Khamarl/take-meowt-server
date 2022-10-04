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
// }

// TODO Define all the dog properties and their possible values

// TODO Call dog generator function and save the results to file

// TODO "Active", "Intelligent", "Playful", "Curious", "Loyal", "Friendly", "Sociable", "Affectionate", "Energetic", "Lively"


const dogs = [
    {
        id: 0,
        breed: "cocker spaniel",
        age: 4,
        good_with_cats: true,
        good_with_dogs: true,
        temperament: [
            "Active", "Playful", "Curious", "Loyal"
        ],
        good_with_kids: false,
        good_with_elderly: true,
        good_with_strangers: true,
        independent: true,
        hypoallergenic: false,
        health_status: "Healthy"
    }, {
        id: 1,
        breed: "jack russell terrier",
        age: 2,
        good_with_cats: false,
        good_with_dogs: true,
        temperament: [
            "Sociable", "Affectionate", "Energetic", "Curious"
        ],
        good_with_kids: false,
        good_with_elderly: true,
        good_with_strangers: false,
        independent: false,
        hypoallergenic: true,
        health_status: "Healthy"
    }, {
        id: 2,
        breed: "labrador",
        age: 5,
        good_with_cats: true,
        good_with_dogs: false,
        temperament: [
            "Sociable", "Affectionate", "Energetic", "Curious"
        ],
        good_with_kids: true,
        good_with_elderly: true,
        good_with_strangers: true,
        independent: true,
        hypoallergenic: false,
        health_status: "Diabetic"
    }
]

module.exports = { dogs }
