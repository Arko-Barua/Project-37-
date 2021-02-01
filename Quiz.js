class Quiz {
    constructor (x,y,width,height) {
    
    }
    getState() {
    var gameState = database.ref('gameState');
    }
    update () {
    databse.ref('/').update ({
    gameState: Count
    })
    }
    async start () {
    if (gameState===0) {
    contestant = new contestant();
    var contestantCountRef = await database.ref('constestantCount').once("value");
    if (contestantCountRef.exists()) {
    contestantCount = contestantCountRef.val();
    contestant.getCount();
    }
    }
    }
    }