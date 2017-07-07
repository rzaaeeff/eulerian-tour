"uses strict"

export const MODE_VERTEX = 0;
export const MODE_EDGE = 1;
const DEFAULT_MODE = MODE_VERTEX;

import {Vertex} from "./model/Vertex.js";

export class Board {
    constructor(paper) {
        this.paper = paper;

        this.mode = DEFAULT_MODE;
        this.vertices = [];
        this.edges = [];
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

    onClicked(event) {
        switch (this.mode) {
            case MODE_VERTEX:
                let canvasPosition = this.paper.canvas.getBoundingClientRect();
                let relativePosition = {
                    x: event.clientX - canvasPosition.left,
                    y: event.clientY - canvasPosition.top
                };
                let vertex = new Vertex(this, relativePosition);

                this.vertices.push(vertex);
                break;
            case MODE_EDGE:
                break;
        }
    }
}