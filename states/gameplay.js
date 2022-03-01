export default class GameplayState extends Phaser.State {
    init() {

    }

    preload() {

    }

    create() {
        this.w = 113.5;
        this.h = 166.5;
        this.d = 66.8
        this.d1 = 106.5;
        this.board = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "board");
        this.board.anchor.setTo(0.5, 0.5);
        this.isCoinBlue = true;

        this.arr = [];
        this.k = 0;
        for (let i = 0; i <= 5; i++) {
            this.arr.push([]);
            for (let j = 0; j <= 6; j++) {
                this.arr[i].push({ row: i, column: j, coin: null });
            }
        }
        console.log(this.arr);

        for(let i=0; i<7; i++) {
            var graphics = game.add.graphics(0, 0);
            graphics.beginFill(0x34abeb, 0);
            graphics.drawRect(140 + 106 * i, 166.5, 85, 667);
            graphics.endFill();
            graphics.inputEnabled = true;
            graphics.events.onInputDown.add(this.clickedOnColumn, this);
            graphics.id = this.k;
            
            this.k++;
        }
    }

    clickedOnColumn(g) {
        for(let i = 5; i >= 0; i--){
            if(this.arr[i][g.id].coin == null) {
                if(this.isCoinBlue) {
                    this.arr[i][g.id].coin = "blue";
                    this.colorCoin = this.game.add.sprite(this.w + this.d + this.d1 * g.id, this.h + this.d + this.d1 * i, "blue-coin");
                    this.colorCoin.anchor.setTo(0.5, 0.5);
                    this.isCoinBlue = false;
                    break;
                } else if(!this.isCoinBlue) {
                    this.arr[i][g.id].coin = "red";
                    this.colorCoin = this.game.add.sprite(this.w + this.d + this.d1 * g.id, this.h + this.d + this.d1 * i, "red-coin");
                    this.colorCoin.anchor.setTo(0.5, 0.5);
                    this.isCoinBlue = true;
                    break;
                }
            }
        }
        this.checkForWinner();
    }

    checkForWinner() {
        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 6; j++) {
                if(this.arr[i][j].coin === "blue" && this.arr[i][j+1].coin === "blue" && this.arr[i][j+2].coin === "blue" && this.arr[i][j+3].coin === "blue" ) {
                    alert("Blue Wins!")
                }

                if(this.arr[i][j].coin === "red" && this.arr[i][j+1].coin === "red" && this.arr[i][j+2].coin === "red" && this.arr[i][j+3].coin === "red" ) {
                    alert("red Wins!")
                }

                if(this.arr[i][j].coin === "blue" && this.arr[i][j-1].coin === "blue" && this.arr[i][j-2].coin === "blue" && this.arr[i][j-3].coin === "blue" ) {
                    alert("Blue Wins!")
                }

                if(this.arr[i][j].coin === "red" && this.arr[i][j-1].coin === "red" && this.arr[i][j-2].coin === "red" && this.arr[i][j-3].coin === "red" ) {
                    alert("red Wins!")
                }

                if(this.arr[i][j].coin === "blue" && this.arr[i+1][j].coin === "blue" && this.arr[i+2][j].coin === "blue" && this.arr[i+3][j].coin === "blue" ) {
                    alert("Blue Wins!")
                }

                if(this.arr[i][j].coin === "red" && this.arr[i+1][j].coin === "red" && this.arr[i+2][j].coin === "red" && this.arr[i+3][j].coin === "red" ) {
                    alert("red Wins!")
                }

                if(this.arr[i][j].coin === "blue" && this.arr[i-1][j].coin === "blue" && this.arr[i-2][j].coin === "blue" && this.arr[i-3][j].coin === "blue" ) {
                    alert("Blue Wins!")
                }

                if(this.arr[i][j].coin === "red" && this.arr[i-1][j].coin === "red" && this.arr[i-2][j].coin === "red" && this.arr[i-3][j].coin === "red" ) {
                    alert("red Wins!")
                }
            }
        }
    }

    update() {

    }
}