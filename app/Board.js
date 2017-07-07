"uses strict"

export const MODE_VERTEX = 0;
export const MODE_EDGE = 1;
const DEFAULT_MODE = MODE_VERTEX;

export class Board {
    constructor(paper) {
        this.paper = paper;

        this.mode = DEFAULT_MODE;
    }

    /**
     * Changes mode.
     * There are two modes: vertex and edge.
     * @param newMode new value for mode.
     */
    changeMode(newMode) {
        if (newMode === MODE_VERTEX || newMode === MODE_EDGE) {
            this.mode = newMode;
        }
    }
}