// const cats = [
//     {
//         id: 0,
//         type: "cat",
//         gender: "male",
//         name: "Sebastian",
//         breed: "Ragdoll",
//         age: 5,
//         good_with_cats: true,
//         good_with_dogs: true,
//         temperament: [
//             "Intelligent", "Friendly", "Affectionate", "Curious"
//     ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: true,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         house_cat: true
//     }, {
//         id: 1,
//         type: "cat",
//         gender: "male",
//         name: "Rocky",
//         breed: "Devon Rex",
//         age: 6,
//         good_with_cats: false,
//         good_with_dogs: false,
//         temperament: [
//             "Sociable", "Affectionate", "Energetic", "Lively"
//         ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: false,
//         independent: false,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         house_cat: false
//     }, {
//         id: 2,
//         type: "cat",
//         gender: "female",
//         name: "Sarah",
//         breed: "Sphynx",
//         age: 3,
//         good_with_cats: true,
//         good_with_dogs: false,
//         temperament: [
//             "Intelligent", "Sociable", "Energetic", "Lively"
//         ],
//         good_with_kids: false,
//         good_with_elderly: false,
//         good_with_strangers: false,
//         independent: true,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         house_cat: false
//     }, {
//         id: 3,
//         type: "cat",
//         gender: "male",
//         name: "Simon",
//         breed: "Scottish Fold",
//         age: 10,
//         good_with_cats: true,
//         good_with_dogs: false,
//         temperament: [
//             "Intelligent", "Curious", "Sociable", "Affectionate"
//         ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: false,
//         hypoallergenic: false,
//         health_status: "Healthy",
//         house_cat: true
//     }, {
//         id: 4,
//         type: "cat",
//         gender: "male",
//         name: "Dartagnan",
//         breed: "Main Coon",
//         age: 8,
//         good_with_cats: false,
//         good_with_dogs: true,
//         temperament: [
//             "Active", "Curious", "Lively"
//         ],
//         good_with_kids: false,
//         good_with_elderly: true,
//         good_with_strangers: false,
//         independent: true,
//         hypoallergenic: false,
//         health_status: "Healthy",
//         house_cat: false
//     }, {
//         id: 5,
//         type: "cat",
//         gender: "female",
//         name: "Lola",
//         breed: "Persian",
//         age: 7,
//         good_with_cats: true,
//         good_with_dogs: true,
//         temperament: [
//             "Loyal", "Affectionate"
//         ],
//         good_with_kids: false,
//         good_with_elderly: false,
//         good_with_strangers: false,
//         independent: true,
//         hypoallergenic: false,
//         health_status: "Diabetic",
//         house_cat: true
//     }, {
//         id: 6,
//         type: "cat",
//         gender: "female",
//         name: "Mitsy",
//         breed: "Burmese",
//         age: 12,
//         good_with_cats: true,
//         good_with_dogs: false,
//         temperament: [
//             "Active", "Curious", "Lively"
//         ],
//         good_with_kids: true,
//         good_with_elderly: false,
//         good_with_strangers: false,
//         independent: true,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         house_cat: false
//     }, {
//         id: 7,
//         type: "cat",
//         gender: "female",
//         name: "Stella",
//         breed: "Cymric",
//         age: 6,
//         good_with_cats: false,
//         good_with_dogs: false,
//         temperament: [
//             "Playful", "Loyal", "Friendly", "Affectionate"
//         ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: false,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         house_cat: true
//     }, {
//         id: 8,
//         type: "cat",
//         gender: "male",
//         name: "Loki",
//         breed: "Colorpoint Shorthair",
//         age: 13,
//         good_with_cats: false,
//         good_with_dogs: false,
//         temperament: [
//             "Sociable", "Affectionate", "Intelligent", "Playful"
//         ],
//         good_with_kids: false,
//         good_with_elderly: false,
//         good_with_strangers: false,
//         independent: true,
//         hypoallergenic: true,
//         health_status: "Healthy",
//         house_cat: false
//     }, {
//         id: 9,
//         type: "cat",
//         gender: "female",
//         name: "Daisy",
//         breed: "Bombay",
//         age: 9,
//         good_with_cats: true,
//         good_with_dogs: false,
//         temperament: [
//             "Active", "Intelligent", "Playful", "Curious"
//         ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: false,
//         hypoallergenic: false,
//         health_status: "Healthy",
//         house_cat: true
//     }, {
//         id: 10,
//         type: "cat",
//         gender: "male",
//         name: "Braut",
//         breed: "Norwegian Forest Cat",
//         age: 12,
//         good_with_cats: true,
//         good_with_dogs: true,
//         temperament: [
//             "Active", "Intelligent", "Playful", "Curious"
//         ],
//         good_with_kids: true,
//         good_with_elderly: true,
//         good_with_strangers: true,
//         independent: false,
//         hypoallergenic: false,
//         health_status: "Gingivitis",
//         house_cat: true
//     }
   
// ]

const { generateRandomCat } = require("./cat-generator");
const fs = require("fs");
const path = require("path");

const cats = []
for (let i = 0; i<50; i++) {
    const newCat = generateRandomCat();
    newCat.id = i;
    cats.push(newCat);
}

const catData = JSON.stringify(cats);

fs.writeFileSync(path.resolve(__dirname, "../cat-data.txt"), catData);

module.exports = cats;

// console.log(cats)

