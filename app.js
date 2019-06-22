new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        handleAttack: function() {
            var playerDamage = Math.floor(Math.random() * 100); // damage dealt TO player
            var monsterDamage = Math.floor(Math.random() * 100); // damage dealt TO monster
            this.playerHealth = playerDamage <= this.playerHealth ? this.playerHealth - playerDamage: 0;
            this.monsterHealth = monsterDamage <= this.monsterHealth ? this.monsterHealth - monsterDamage : 0;

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
            if (this.playerWin) {
                this.gameIsRunning = false;
                alert('You won');
            } else if (this.monsterWin) {
                this.gameIsRunning = false;
                alert('You lose');
            } else if (this.draw) {
                this.gameIsRunning = false;
                alert('Draw');
            }
        }
    },
    computed: {
        playerWin: function() {
            return this.monsterHealth == 0 && this.playerHealth > 0;
        },
        monsterWin: function() {
            return this.playerHealth == 0 && this.monsterHealth > 0;
        },
        draw: function() {
            return this.playerHealth == 0 && this.monsterHealth == 0;
        }
    }
});