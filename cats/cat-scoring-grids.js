
const temperamentAccomScoreGrid = {
    "Active": {
        "house-garden": 0.6,
        "house-no-garden": 0.6,
        "apartment": 0.5,
        "studio": 0.45
    }, 
    "Intelligent": {
        "house-garden": 0.5,
        "house-no-garden": 0.5,
        "apartment": 0.5,
        "studio": 0.5
    },
    "Playful": {
        "house-garden": 0.65,
        "house-no-garden": 0.65,
        "apartment": 0.6,
        "studio": 0.6
    }, 
    "Curious" : {
        "house-garden": 0.6,
        "house-no-garden": 0.6,
        "apartment": 0.55,
        "studio": 0.55
    },
    "Loyal" : {
        "house-garden": 0.5,
        "house-no-garden": 0.65,
        "apartment": 0.5,
        "studio": 0.5
    }, 
    "Friendly" : {
        "house-garden": 0.6,
        "house-no-garden": 0.6,
        "apartment": 0.5,
        "studio": 0.45
    }, 
    "Sociable" : {
        "house-garden": 0.55,
        "house-no-garden": 0.55,
        "apartment": 0.6,
        "studio": 0.6
    }, 
    "Affectionate" : {
        "house-garden": 0.6,
        "house-no-garden": 0.6,
        "apartment": 0.6,
        "studio": 0.6
    }, 
    "Energetic" : {
        "house-garden": 0.6,
        "house-no-garden": 0.55,
        "apartment": 0.5,
        "studio": 0.45
    },
    "Lively" :  {
        "house-garden": 0.6,
        "house-no-garden": 0.55,
        "apartment": 0.45,
        "studio": 0.45
    }

}

const temperamentHouseMatesScoreGrid = {
    "Active": {
        "<4": 0.4,
        ">=4": 0.6,
    },
    "Intelligent": {
       "<4": 0.5,
        ">=4": 0.5,
    },
    "Playful": {
        "<4": 0.3,
        ">= 4": 0.7,
    },
    "Curious": {
        "<4": 0.5,
        ">=4": 0.5,
    },
    "Loyal": {
       "<4": 0.5,
        ">=4": 0.5,
    },
    "Friendly": {
       "<4": 0.5,
        ">=4": 0.6,
    },
    "Sociable": {
        "<4": 0.4,
        ">= 4": 0.7,
    },
    "Affectionate": {
       "<4": 0.4,
        ">= 4": 0.7,
    },
    "Energetic": {
        "<4": 0.4,
        ">= 4": 0.6,
    },
    "Lively": {
        "<4": 0.4,
        ">= 4": 0.6,
    }
}

const temperamentChildrenScoreGrid = {
    "Active": {
        "=0": 0.6,
        ">0": 0.3
    },
    "Intelligent": {
        "=0": 0.5,
        ">0": 0.5
    },
    "Playful": {
        "=0": 0.5,
        ">0": 0.8
    },
    "Curious": {
        "=0": 0.5,
        ">0": 0.5
    },
    "Loyal": {
        "=0": 0.5,
        ">0": 0.6
    },
    "Friendly": {
        "=0": 0.5,
        ">0": 0.8
    },
    "Sociable": {
        "=0": 0.5,
        ">0": 0.7
    },
    "Affectionate": {
        "=0": 0.5,
        ">0": 0.8
    },
    "Energetic": {
        "=0": 0.6,
        ">0": 0.4
    },
    "Lively": {
        "=0": 0.6,
        ">0": 0.4
    }
}

const temperamentWFHScoreGrid = {
    "Active": {
        "Yes": 0.6,
        "No": 0.3
    },
    "Intelligent": {
        "Yes": 0.5,
        "No": 0.5
    },
    "Playful": {
        "Yes": 0.6,
        "No": 0.3
    },
    "Curious": {
        "Yes": 0.6,
        "No": 0.5
    },
    "Loyal": {
        "Yes": 0.6,
        "No": 0.3
    },
    "Friendly": {
        "Yes": 0.5,
        "No": 0.5
    },
    "Sociable": {
        "Yes": 0.6,
        "No": 0.4
    },
    "Affectionate": {
        "Yes": 0.6,
        "No": 0.3
    },
    "Energetic": {
        "Yes": 0.5,
        "No": 0.4
    },
    "Lively": {
        "Yes": 0.5,
        "No": 0.3
    }
}

const temperamentExpScoreGrid = {
    "Active": {
        "Yes": 0.6,
        "No": 0.3
    },
    "Intelligent": {
        "Yes": 0.5,
        "No": 0.6
    },
    "Playful": {
        "Yes": 0.6,
        "No": 0.4
    },
    "Curious": {
        "Yes": 0.6,
        "No": 0.5
    },
    "Loyal": {
        "Yes": 0.5,
        "No": 0.7
    },
    "Friendly": {
        "Yes": 0.5,
        "No": 0.8
    },
    "Sociable": {
        "Yes": 0.5,
        "No": 0.8
    },
    "Affectionate": {
        "Yes": 0.5,
        "No": 0.8
    },
    "Energetic": {
        "Yes": 0.7,
        "No": 0.4
    },
    "Lively": {
        "Yes": 0.7,
        "No": 0.4
    }
}

const temperamentPetNumScoreGrid = {
    "Active": {
        "=0": 0.45,
        ">0": 0.6
    },
    "Intelligent": {
        "=0": 0.5,
        ">0": 0.55
    },
    "Playful": {
        "=0": 0.4,
        ">0": 0.6
    },
    "Curious": {
        "=0": 0.5,
        ">0": 0.6
    },
    "Loyal": {
        "=0": 0.6,
        ">0": 0.5
    },
    "Friendly": {
        "=0": 0.5,
        ">0": 0.8
    },
    "Sociable": {
        "=0": 0.3,
        ">0": 0.7
    },
    "Affectionate": {
        "=0": 0.6,
        ">0": 0.4
    },
    "Energetic": {
        "=0": 0.4,
        ">0": 0.7
    },
    "Lively": {
        "=0": 0.5,
        ">0": 0.6
    }
}



module.exports = { temperamentAccomScoreGrid, temperamentHouseMatesScoreGrid, temperamentChildrenScoreGrid, temperamentExpScoreGrid, temperamentWFHScoreGrid, temperamentPetNumScoreGrid}
