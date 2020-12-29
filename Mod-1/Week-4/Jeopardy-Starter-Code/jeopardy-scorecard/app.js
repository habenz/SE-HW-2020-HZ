class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        //assign jquery element to each Team instance
        // assume that $el is a div with class score-card that needs to be populated
        this.$el = $el;
        this.setup();
    }
    //what does the score board do?
    //it increases the score based on pointvalue
    increaseScore(pointValue){
     this.score += pointValue;
     //this will now allow us to grab the 1st element and input the score as the text
     //what is eq? it stands for equals and selects children in arry
     // the first child is the h1
     this.$el.children(".score").text(this.score);
    }

    decreaseScore(pointValue){
        this.score -= pointValue;
        this.$el.children(".score").text(this.score);
    }
    setup(){
        this.$el.find(".increment").on('click', () => {
            //the pt value should be imported from another class
            this.increaseScore(100)

        })
        this.$el.find(".decrement").on('click', () => {
            this.decreaseScore(100)
            
        })
        //remember to call these methods when you instantiate the class
        return this;
    }

}
$(()=>{
    // const pointValue = 100;
    const team1 = new Team('team1', $('#team1'));
    const team2 = new Team('team2', $('#team2')).setup();
    const team3 = new Team('team3', $('#team3')).setup();
})
