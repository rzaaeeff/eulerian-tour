export class BaseModel {

    constructor(board) {
        this.board = board;
        this.paper = board.paper;
        this.shapes = [];
        this.draw();
    }

    /**
     * This method should be overridden in subclass.
     */
    draw() {
        // Empty
    }

    /**
     * This method should be overridden in subclass.
     */
    init() {
        // Empty
    }
}