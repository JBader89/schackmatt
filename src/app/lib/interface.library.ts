import { Board } from './board.library';
import { Square } from './square.library';

export interface Branch {
    definingMove: string;
    fen: string;
    classification: string;
    explanation: string;
    options: Branch[];
    // only bein used for tracking the number of checks
    ticks?: number;
}

export interface Move {
    src: Square;
    dest: Square;
    preMoveFEN: string;
    resultingBoard: Board;
    notation: string;
}

export interface GameEvent {
    type: string;
    content: string;
}

export interface GameDisplayOptions {
    showCoordinates: boolean;
    colorScheme: {
        light: string;
        dark: string;
    };
}

export interface CastlingRights {
    K: boolean;
    Q: boolean;
    k: boolean;
    q: boolean;
}
