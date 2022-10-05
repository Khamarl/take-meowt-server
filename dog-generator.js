// Write a function to generate dogs with random values for each property (Optional: Restrict property values based on each other)

const {randomIndex, randomInteger, randomBoolean} = require("./helper-functions")

const breedList = [affenpinscher,
    afghan_hound,
    african_hunting_dog,
    airedale,
    american_staffordshire_terrier,
    appenzeller,
    australian_terrier,
    basenji,
    basset,
    beagle,
    bedlington_terrier,
    bernese_mountain_dog,
    black-and-tan_coonhound,
    blenheim_spaniel,
    bloodhound,
    bluetick,
    border_collie,
    border_terrier,
    borzoi,
    boston_bull,
    bouvier_des_flandres,
    boxer,
    brabancon_griffon,
    briard,
    brittany_spaniel,
    bull_mastiff,
    cairn,
    cardigan,
    chesapeake_bay_retriever,
    chihuahua,
    chow,
    clumber,
    cocker_spaniel,
    collie,
    curly-coated_retriever,
    dandie_dinmont,
    dhole,
    dingo,
    doberman,
    english_foxhound,
    english_setter,
    english_springer,
    entlebucher,
    eskimo_dog,
    flat-coated_retriever,
    french_bulldog,
    german_shepherd,
    german_short-haired_pointer,
    giant_schnauzer,
    golden_retriever,
    gordon_setter,
    great_dane,
    great_pyrenees,
    greater_swiss_mountain_dog,
    groenendael,
    ibizan_hound,
    irish_setter,
    irish_terrier,
    irish_water_spaniel,
    irish_wolfhound,
    italian_greyhound,
    japanese_spaniel,
    keeshond,
    kelpie,
    kerry_blue_terrier,
    komondor,
    kuvasz,
    labrador_retriever,
    lakeland_terrier,
    leonberg,
    lhasa,
    malamute,
    malinois,
    maltese_dog,
    mexican_hairless,
    miniature_pinscher,
    miniature_poodle,
    miniature_schnauzer,
    newfoundland,
    norfolk_terrier,
    norwegian_elkhound,
    norwich_terrier,
    old_english_sheepdog,
    otterhound,
    papillon,
    pekinese,
    pembroke,
    pomeranian,
    pug,
    redbone,
    rhodesian_ridgeback,
    rottweiler,
    saint_bernard,
    saluki,
    samoyed,
    schipperke,
    scotch_terrier,
    scottish_deerhound,
    sealyham_terrier,
    shetland_sheepdog,
    shih-tzu,
    siberian_husky,
    silky_terrier,
    soft-coated_wheaten_terrier,
    staffordshire_bullterrier,
    standard_poodle,
    standard_schnauzer,
    sussex_spaniel,
    tibetan_mastiff,
    tibetan_terrier,
    toy_poodle,
    toy_terrier,
    vizsla,
    walker_hound,
    weimaraner,
    welsh_springer_spaniel,
    west_highland_white_terrier,
    whippet,
    wire-haired_fox_terrier,
    yorkshire_terrier]

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

function generateRandomDog() {
    const breed = breedList(randomIndex(breedList));
    const age = randomInteger(0, 20);
    const good_with_cats = randomBoolean();
    const good_with_dogs = randomBoolean();
    const temperament = [];
    // Generate 4 random traits and add to temperament
    for (index of randomIndices(traits, 4)) {
        temperament.push(traits[index]);
    }
    const good_with_kids = randomBoolean();
    const good_with_elderly = randomBoolean();
    const good_with_strangers = randomBoolean();
    const independent = randomBoolean();
    const hypoallergenic = randomBoolean();
    const health_status = healthConditions[randomIndex(healthConditions)];

    return {
        breed,
        age,
        good_with_cats,
        good_with_dogs,
        temperament,
        good_with_kids,
        good_with_elderly,
        good_with_strangers,
        independent,
        hypoallergenic,
        health_status
    }
}

module.exports = { generateRandomDog }
