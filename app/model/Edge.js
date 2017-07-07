import {BaseModel} from "./BaseModel.js"

/**
 * Model representing edge in graph.
 */
export class Edge extends BaseModel {

    constructor(board, startVertex, endVertex) {
        super(board);

        this.startVertex = startVertex;
        this.endVertex = endVertex;
    }

    draw() {
        this.element = this.paper.path(
            "M" + this.startVertex.position.x + "," + this.endVertex.position.y +
            "L" + this.endVertex.position.x + "," + this.endVertex.position.y
        );
        this.element.attr("stroke-width", 2);

        this.shapes.push(this.element);
    }
}