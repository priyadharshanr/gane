class Game{
    constructor(){
    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
      start() {
        player = new Player();
        playerCount = player.getCount();
        coin1 = Bodies.circle(500,300,20);
        World.add(world, coin1);
    
        form = new Form();
        form.display();
    
       
      }
      display(){
        image(redCoinImg,coin1.body.position.x, coin1.body.position.y, 30,30);
      }
    

}