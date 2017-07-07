const DEFAULT_RADIUS = 20;

import {BaseModel} from "./BaseModel.js";

/**
 * Model representing vertex in graph.
 */
export class Vertex extends BaseModel {

    constructor(board, position) {
        super(board);

        this.edges = [];
        this.position = position;

        this.draw();
    }

    draw() {
        this.element = this.paper.circle(
            this.position.x,
            this.position.y,
            DEFAULT_RADIUS
        );

        this.shapes.push(this.element);
    }
}