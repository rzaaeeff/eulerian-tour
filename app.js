import {Board} from "./app/Board.js";

let board = new Board(Raphael("div_board", 1280, 800));

$(document).ready(function() {
    alert("Testing");
    board.paper.circle(50, 50, 10);
    board.paper.circle(65, 50, 10);
    board.paper.circle(80, 50, 10);
    board.paper.circle(95, 50, 10);
});