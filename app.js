new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        handleAttack: function() {
            this.playerHealth -= Math.floor(Math.random() * 100);
            this.monsterHealth -= Math.floor(Math.random() * 100);

            this.checkResult();
        },
        handleStart: function() {
            this.reset();
        },
        reset: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
        },
        checkResult: function() {
            debugger;
            if (this.playerWin) {
                alert('You won');
            } else if (this.monsterWin) {
                alert('You lose');
            } else if (this.draw) {
                alert('Draw');
            }
        }
    },
    computed: {
        playerWin: function() {
            debugger;
            return this.playerHealth == 0 && this.monsterHealth > 0;
        },
        monsterWin: function() {
            return this.monsterHealth == 0 && this.playerHealth > 0;
        },
        draw: function() {
            return this.playerHealth == 0 && this.monsterHealth == 0;
        }
    },
    watch: {
        playerHealth: function() {
            debugger;
            if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.gameIsRunning = false;
            }
        },
        monsterHealth: function() {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.gameIsRunning = false;
            }
        }
    },
});