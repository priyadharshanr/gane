class Player{
    constructor(){
        this.name = null;
        this.index = null;
    }
    addPlayer() {
        var playerIndex = "players/player" + this.index;
    }
    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
      }
      updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
      }
    
}