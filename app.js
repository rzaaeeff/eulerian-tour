import {
    Board,
    MODE_VERTEX,
    MODE_EDGE
} from "./app/Board.js";

let board = new Board(Raphael("div_board", 1280, 800));

$(document).ready(function() {
    $("#button_modeVertex").click(function(event) {
        board.changeMode(MODE_VERTEX);
    });

    $("#button_modeEdge").click(function(event) {
        board.changeMode(MODE_EDGE);
    });

    $("#div_board").click(function(event) {
        board.onClicked(event);
    });
});