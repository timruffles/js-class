

const UNPLACED = [];


class Piece {
    constructor(name, shape) {
       this.name = name;
       this.shape = shape;
       this.position = UNPLACED;
    }

    static pizza() {
        return new Piece('pizza', [
            [0,0,'🍕'],
            [0,1,'🍕'],
            [1,0,'🍕'],
        ])
    }

    static fruitSalad() {
        return new Piece('fruitSalad', [
            [0,0,'🍎'],
            [0,1,'🍊'],
            [1,0,'🍏'],
            [1,1,'🍌'],
        ])
    }

    static isUnplaced(piece) {
        return piece.position === UNPLACED
    }
}

class Player {
    constructor(id) {
        this.id = id;
    }
}

class Guess {
    constructor(byPlayerId, position) {
        this.byPlayerId = byPlayerId;
        this.position = position;
    }
}

export const STATES = {
    OVER: 'OVER',
    PLACING: 'PLACING',
    PLAYING: 'PLAYING',
}

export class Game {

    constructor() {
        const toPlace = [
            Piece.pizza(),
            Piece.fruitSalad(),
        ];

        const players = [
            new Player(1),
            new Player(2),
        ];

        const [one, two] = players

        this.nextPlayerId = one.id;

        this.players = new Map([
            [[one.id], one],
            [[two.id], two],
        ])

        this.pieces = new Map([
            [[one.id], [...toPlace]],
            [[two.id], [...toPlace]],
        ]);


        this.guessesOnBoard = new Map([
            [[one.id], []],
            [[two.id], []],
        ])

        this.winner = null;

    }

    get state() {
        if(this.winner) return STATES.OVER;

        const unplaced = [...this.pieces.values()].some(Piece.isUnplaced)
        if(unplaced) return STATES.PLACING;

        return STATES.PLAYING;
    }

    place(playerId, position) {
        const toPlace = this.toPlaceFor(playerId);
        toPlace.position = position;
    }

    toPlaceFor(playerId) {
        return this.pieces.get(playerId).find(Piece.isUnplaced);
    }

    guess(playerId, vsPlayer, position) {
        this.guessesOnBoard.get(vsPlayer).push(new Guess(playerId, position));

        const wasBeaten = checkIfBeaten(this.guessesOnBoard.get(vsPlayer), this.pieces.get(vsPlayer))

        this.winner = this.players.get(playerId);

        this.nextPlayerId = nextPlayerId(this.players.keys(), playerId);
    }

}

class Position {
    static create(x,y) {
        return [x,y]
    }

    static toId([x,y]) {
        return `${x},${y}`;
    }

    static add([x1,y1], [x2,y2]) {
       return [x1+x2,y1+y2]
    }
}

function nextPlayerId(playerIds, id) {
   const index = playerIds.indexOf(id);
   return playerIds[index + 1 % playerIds.length];
}

function checkIfBeaten(guesses, pieces) {
    const positionsGuessed = new Set(guesses.map(({position}) => Position.toId(position)));

    return pieces.every(piece => {
        return piece.shape.every((component) => {
            return positionsGuessed.has(Position.toId(Position.add(component, piece.position)))
        })
    });
}
