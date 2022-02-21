
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
        this.board.inputEnabled = true;
        this.board.events.onInputDown.add(this.clickedOnHole, this);
        this.isCoinBlue = true;

        this.arr = []

        this.k  = 0;
        for(let i = 0; i <= 5; i++) {
            for(let j = 0; j <= 6; j++) {
                this.k++
                this.arr.push([i, j, {coin: null}]);   
            }
        }

        var k = 0;
        for(let i=0; i<7; i++) {
            var graphics = game.add.graphics(0, 0);
            graphics.beginFill(0xFF0000, 0);
            // graphics.drawRect(140, 166.5, 85, 667);
            graphics.drawRect(140 + 106 * i, 166.5, 85, 667);
            graphics.endFill();
            graphics.inputEnabled = true;
            graphics.events.onInputDown.add(this.clickedOnColumn, this);
            graphics.id = k;
            k++;
        }
    }

    clickedOnColumn(graphic) {
        // console.log(this.arr);
        // console.log(graphic.id);
        for(let i = 5; i >= 0; i--){
                if(this.arr[0, 1, 2] == i, graphic.id, {coin: null}) {
                    if(this.isCoinBlue){ 
                        this.blueCoin = this.game.add.sprite(this.w + this.d + this.d1 * graphic.id, this.h + this.d + this.d1 * i, "blue-coin");
                        this.blueCoin.anchor.setTo(0.5, 0.5);
                        this.isCoinBlue = false;
                        break;
                    } else if(!this.isCoinBlue) {
                        this.blueCoin = this.game.add.sprite(this.w + this.d + this.d1 * graphic.id, this.h + this.d + this.d1 * i, "red-coin");
                        this.blueCoin.anchor.setTo(0.5, 0.5);
                        this.isCoinBlue = true;
                        break;
                    }
                }
            }
            console.log(this.isCoinBlue);



        // for(let i = 5; i >= 0; i--){
        //     for(let j = 0; j < this.arr.length; j++) {
        //         if(this.arr[j][0] == i && this.arr[j][1] == graphic.id && this.arr[j][2].coin == null) {
        //             console.log(this.arr[j]);
        //             this.blueCoin = this.game.add.sprite(this.w + this.d + this.d1 * graphic.id, this.h + this.d + this.d1 * i, "blue-coin");
        //             this.blueCoin.anchor.setTo(0.5, 0.5);
        //             break;
        //         }
        //         break;
        //     }
        //     break;
        // }
    }

    clickedOnHole(board) {
        
    }

    update() {

    }
}