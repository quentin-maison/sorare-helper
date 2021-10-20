/*LEAGUES*/

export const leagueRules = {

    globalAllStar: {
        authorizedZones: ['champion-europe', 'challenger-europe', 'champion-america', 'champion-asia']
    },

    championEurope: {
        authorizedZones: ['champion-europe']
    },

    challengerEurope: {
        authorizedZones: ['challenger-europe']
    },

    championAmerica: {
        authorizedZones: ['champion-america']
    },

    championAsia: {
        authorizedZones: ['champion-asia']
    },

}




/*DIVISION*/


export const divisionRules = {

    division5: {
        authorizedScarcity: ['limited'],
        minByScarcity: {
            common: 0,
            limited: 5,
            rare: 0,
            superRare: 0,
            unique: 0,
        },
        maxByScarcity: {
            common: 0,
            limited: 5,
            rare: 0,
            superRare: 0,
            unique: 0,
        },
    },

    division4: {
        authorizedScarcity: ['common', 'rare'],
        minByScarcity: {
            common: 0,
            limited: 0,
            rare: 4,
            superRare: 0,
            unique: 0,
        },
        maxByScarcity: {
            common: 1,
            limited: 0,
            rare: 5,
            superRare: 0,
            unique: 0,
        },
    },
    
    division3: {
        authorizedScarcity: ['rare', 'super-rare'],
        minByScarcity: {
            common: 0,
            limited: 0,
            rare: 3,
            superRare: 0,
            unique: 0,
        },
        maxByScarcity: {
            common: 0,
            limited: 0,
            rare: 5,
            superRare: 2,
            unique: 0,
        },
    },

    division2: {
        authorizedScarcity: ['rare', 'super-rare', 'unique'],
        minByScarcity: {
            common: 0,
            limited: 0,
            rare: 0,
            superRare: 3,
            unique: 0,
        },
        maxByScarcity: {
            common: 0,
            limited: 0,
            rare: 1,
            superRare: 5,
            unique: 1,
        },
    },

    division1: {
        authorizedScarcity: ['super-rare', 'unique'],
        minByScarcity: {
            common: 0,
            limited: 0,
            rare: 0,
            superRare: 0,
            unique: 3,
        },
        maxByScarcity: {
            common: 0,
            limited: 0,
            rare: 0,
            superRare: 2,
            unique: 3,
        },
    }
}


