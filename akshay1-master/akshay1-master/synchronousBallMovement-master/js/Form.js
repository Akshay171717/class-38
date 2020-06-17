class Form{
    constructor(){
        this.input=createInput();
        this.button=createButton("play");
        this.greeting=createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-15,0);

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

       
        this.button.position(displayWidth/2+30,displayHeight/2);

        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Welcome "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }
}