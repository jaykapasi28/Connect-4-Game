
export default class PreloadState extends Phaser.State {
    preload() {
        this.load.baseURL = "./assets/";

        this.load.image("board", 'board.png');
        this.load.image("blue-coin", "filled-blue-coin.png");
        this.load.image("red-coin", "filled-red-coin.png");
    }

    create() {
        this.game.state.start("Gameplay");
    }
}