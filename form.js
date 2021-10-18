class Form{
    constructor(){
        this.input = createInput("TYPE YOUR NAME");
        this.button = createButton('Play');
        this.index = null;
        this.title = createElement("h2");
        this.greeting = createElement("h4");
    }
    setElementsPosition() {
        this.title.position(120, 50);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.button.position(width / 2 - 90, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
      }
      hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }
      handleMousePressed() {
        this.button.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>you can play when everyone joins...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          player.getDistance();
        });
      }
    
      display() {
        this.setElementsPosition();
        this.handleMousePressed();
      }
}