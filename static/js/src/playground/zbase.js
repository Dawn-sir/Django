class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div class="ac-game-playground"></div>`);

        this.hide();

        this.root.$ac_game.append(this.$playground);

        this.start();
    }

    get_random_color() {
        let colors = ["blue", "red", "pink", "green", "purple"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    start() {
        let outer = this;
        $(window).resize(function() {
            outer.resize();
        });
    }

    resize() {
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        let unit = Math.min(this.width / 16, this.height / 9);
        this.width = unit * 16;
        this.height = unit * 9;
        this.scale = this.height;

        if (this.game_map) this.game_map.resize();

    }

    show() {
        this.$playground.show();

        this.height = this.$playground.height();
        this.width = this.$playground.width();
        this.game_map = new GameMap(this);
        this.resize();

        this.players = [];
        this.players.push(new Player(this, this.width/2/this.scale, this.height/2/this.scale, this.height*0.05/this.scale, "white", this.height*0.15/this.scale, true));

        for (let i = 0; i < 5; i ++ ) {
            this.players.push(new Player(this, this.width/2/this.scale, this.height/2/this.scale, this.height*0.05/this.scale, this.get_random_color(), this.height*0.15/this.scale, false));
        }

    }

    hide() {
        this.$playground.hide();
    }
}
