export interface ManagerInfos {
    slug: string | null;
    nickname: string | null;
    createdAt: string | null;
    cardCounts: {
      common: number | null;
      limited: number | null;
      rare: number | null;
      superRare: number | null;
      unique: number | null;
      total: number | null;
    };
    profile: {
      clubShield: null | {
        pictureUrl: string | null;
      }
    }
}

export interface Card {
    age: number | null;
    averageScore: number | null;
    name: string | null;
    displayName: string | null;
    domesticCompetition: string | null;
    pictureUrl: string | null;
    position: string | null;
    power: string | null;
    rarity: string | null;

    u23Eligible: boolean;
    challengerEurope: boolean;
    championAmerica: boolean;
    championAsia: boolean;
    championEurope: boolean;

    isCaptain: null | boolean;

    currentTeam: null | Club;

    lastScores: null | ScoreAndGW[];

    nextOpponent: null | {
        date: null | string | Date;
        name: null | string;
        pictureUrl: null | string;
    }
        
    player: null | Player;

    expectedScore: number ;
    id: number | null;
}

export interface ScoreAndGW {
    score: number | null;
    gameWeek: number | null;
}

export interface Player {
    displayName: string | null;
    activeClub: null | ActiveClub;
    gameStats: GameStat[];
}

export interface ActiveClub {
    name: null | string;
    slug: null | string;
    pictureUrl: null | string;
    domesticLeague: null | DomesticLeague;
    upcomingGames: null | UpcomingGame[];
}

export interface Club {
    name: null | string;
    slug: null | string;
    pictureUrl: null | string;
}

export interface DomesticLeague {
    slug: null | string;
}

export interface UpcomingGame {
    awayTeam: null | Club;
    homeTeam: null | Club;
    date: null | string | Date;
}

export interface GameStat {
    so5Score: null | {
        score: null | number;
    }
    game: null | {
        so5Fixture: null | {
            gameWeek: null | number;
        }
    }
}

export interface GWInfos {
    gameWeek: number;
    gameWeekSlug: string;
    endDate: string;
    startDate: string;
}