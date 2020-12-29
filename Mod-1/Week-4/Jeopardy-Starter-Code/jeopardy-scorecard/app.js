class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        //assign jquery element to each Team instance
        // assume that $el is a div that needs to be populated
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
        // make sure $el has score-card class
        this.$el.addClass('score-card');
        // add team name to display
        const nameField = $('<span class="team-name">');
        nameField.text(this.name);
        this.$el.append(nameField);
        // add score to display
        const score = $('<h2 class="score">');
        score.text(this.score);
        this.$el.append(score);

        // add buttons to display
        const buttonWrapper = $('<div class="score-button-wrapper">');
        buttonWrapper.append($('<button class="increment">').text("+"));
        buttonWrapper.append($('<button class="decrement">').text("-"));
        this.$el.append(buttonWrapper);

        this.$el.find(".increment").on('click', () => {
            //the pt value should be imported from another class
            this.increaseScore(100)

        })
        this.$el.find(".decrement").on('click', () => {
            this.decreaseScore(100)
            
        })
        return this;
    }

}
$(()=>{
    // const pointValue = 100;
    const team1 = new Team('Team 1', $('#team1'));
    const team2 = new Team('Team 2', $('#team2'));
    const team3 = new Team('Team 3', $('#team3'));
})
