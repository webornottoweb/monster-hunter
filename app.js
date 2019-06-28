new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        handleAttack: function() {
            var playerDamage = this.getDamage(); // damage dealt TO player
            var monsterDamage = this.getDamage(); // damage dealt TO monster
            this.playerHealth = this.updateHealth(playerDamage, this.playerHealth);
            this.monsterHealth = this.updateHealth(monsterDamage, this.monsterHealth);

            this.checkResult();
        },
        handleSpecialAttack: function() {
            
        },
        handleHeal: function() {

        },
        handleGiveUp: function() {

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
        },
        getDamage: function() {
            return Math.floor(Math.random() * 100);
        },
        updateHealth: function(damage, health) {
            return damage <= health ? health - damage: 0;
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