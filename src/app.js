// const { Game, readGameSaving, writeGameSaving } = require("./game");

requirejs(["game"], function ({ Game }) {
    
    const game = new Game();
    game.start();
})