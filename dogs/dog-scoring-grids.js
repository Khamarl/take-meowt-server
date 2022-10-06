//"energetic", "docile (Curious)", "friendly", "intelligent", "playful", "protective", "confident (Active)", "aggressive (Lively)", "obedience (Loyal)"



const dogTemperamentAccomScoreGrid = {
    "confident": {
        "house-garden": 0.75,
        "house-no-garden": 0.65,
        "apartment": 0.4,
        "studio": 0.4
    },
    "intelligent": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "playful": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.5,
        "studio": 0.5
    },
    "docile": {
        "house-garden": 0.6,
        "house-no-garden": 0.6,
        "apartment": 0.6,
        "studio": 0.6
    },
    "obedience": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "friendly": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "protective": {
        "house-garden": 0.75,
        "house-no-garden": 0.75,
        "apartment": 0.75,
        "studio": 0.75
    },
    "energetic": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.25,
        "studio": 0.25
    },
    "aggressive": {
        "house-garden": 0.75,
        "house-no-garden": 0.5,
        "apartment": 0.25,
        "studio": 0.25
    }
}

const dogTemperamentHouseMatesScoreGrid = {
    "confident": {
        "<4": 0.4,
        ">=4": 0.6,
    },
    "intelligent": {
       "<4": 0.5,
        ">=4": 0.5,
    },
    "playful": {
        "<4": 0.3,
        ">= 4": 0.7,
    },
    "docile": {
        "<4": 0.5,
        ">=4": 0.5,
    },
    "obedience": {
       "<4": 0.5,
        ">=4": 0.5,
    },
    "friendly": {
       "<4": 0.5,
        ">=4": 0.6,
    },
    "protective": {
       "<4": 0.6,
        ">= 4": 0.6,
    },
    "energetic": {
        "<4": 0.4,
        ">= 4": 0.6,
    },
    "aggressive": {
        "<4": 0.55,
        ">= 4": 0.35,
    }
}

const dogTemperamentChildrenScoreGrid = {
    "confident": {
        "=0": 0.4,
        ">0": 0.6
    },
    "intelligent": {
        "=0": 0.5,
        ">0": 0.5
    },
    "playful": {
        "=0": 0.5,
        ">0": 0.8
    },
    "docile": {
        "=0": 0.5,
        ">0": 0.7
    },
    "obedience": {
        "=0": 0.4,
        ">0": 0.7
    },
    "friendly": {
        "=0": 0.5,
        ">0": 0.8
    },
    "protective": {
        "=0": 0.5,
        ">0": 0.8
    },
    "energetic": {
        "=0": 0.4,
        ">0": 0.55
    },
    "aggressive": {
        "=0": 0.65,
        ">0": 0.4
    }
}

const dogTemperamentWFHScoreGrid = {
    "confident": {
        "yes": 0.55,
        "no": 0.6
    },
    "intelligent": {
        "yes": 0.5,
        "no": 0.5
    },
    "playful": {
        "yes": 0.6,
        "no": 0.3
    },
    "docile": {
        "yes": 0.6,
        "no": 0.5
    },
    "obedience": {
        "yes": 0.6,
        "no": 0.5
    },
    "friendly": {
        "yes": 0.6,
        "no": 0.5
    },
    "protective": {
        "yes": 0.6,
        "no": 0.3
    },
    "energetic": {
        "yes": 0.5,
        "no": 0.4
    },
    "aggressive": {
        "yes": 0.4,
        "no": 0.55
    }
}

const dogTemperamentExpScoreGrid = {
    "confident": {
        "yes": 0.6,
        "no": 0.3
    },
    "intelligent": {
        "yes": 0.5,
        "no": 0.6
    },
    "playful": {
        "yes": 0.6,
        "no": 0.65
    },
    "docile": {
        "yes": 0.5,
        "no": 0.6
    },
    "obedience": {
        "yes": 0.5,
        "no": 0.7
    },
    "friendly": {
        "yes": 0.5,
        "no": 0.8
    },
    "protective": {
        "yes": 0.6,
        "no": 0.7
    },
    "energetic": {
        "yes": 0.7,
        "no": 0.4
    },
    "aggressive": {
        "yes": 0.7,
        "no": 0.4
    }
}

const dogTemperamentPetNumScoreGrid = {
    "confident": {
        "=0": 0.45,
        ">0": 0.6
    },
    "intelligent": {
        "=0": 0.5,
        ">0": 0.55
    },
    "playful": {
        "=0": 0.4,
        ">0": 0.6
    },
    "docile": {
        "=0": 0.5,
        ">0": 0.6
    },
    "obedience": {
        "=0": 0.5,
        ">0": 0.6
    },
    "friendly": {
        "=0": 0.5,
        ">0": 0.8
    },
    "protective": {
        "=0": 0.6,
        ">0": 0.4
    },
    "energetic": {
        "=0": 0.4,
        ">0": 0.7
    },
    "aggressive": {
        "=0": 0.7,
        ">0": 0.3
    }
}

const dogExerciseScoreGrid = {
    "[0, 3.5)": {
        "rarely": 0.7,
        "once-per-month": 0.7,
        "few-times-month": 0.5,
        "once-per-week": 0.5,
        "many-per-week": 0.5,
        "every-day": 0.5
    },
    "[3.5, 7)": {
        "rarely": 0.55,
        "once-per-month": 0.55,
        "few-times-month": 0.65,
        "once-per-week": 0.65,
        "many-per-week": 0.5,
        "every-day": 0.5
    },
    "[7, 10.5)": {
        "rarely": 0.3,
        "once-per-month": 0.3,
        "few-times-month": 0.4,
        "once-per-week": 0.45,
        "many-per-week": 0.5,
        "every-day": 0.5
    },
    "[10.5, 14)": {
        "rarely": 0.2,
        "once-per-month": 0.2,
        "few-times-month": 0.3,
        "once-per-week": 0.4,
        "many-per-week": 0.7,
        "every-day": 0.7
    }
}


module.exports = { dogTemperamentAccomScoreGrid, dogTemperamentHouseMatesScoreGrid, dogTemperamentChildrenScoreGrid, dogTemperamentWFHScoreGrid, dogTemperamentExpScoreGrid, dogTemperamentPetNumScoreGrid, dogExerciseScoreGrid }
