import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        //the two lines of code with a question mark makes it possible for one to ghost ask
        author: this.get('author') ? this.get('author') : "Anonymous",
        answered: this.get('answered') ? this.get('answered') : "Oops, no answer",
        //end of Anonymousy

        question: this.get('question'),
        dateAnswered: new Date().toISOString().substring(0, 1)
      };

      /*this line of code makes it possible for the author to be Anonymous
      in conjuction with the two lines of code with a question mark?*/
      this.set('author', '');
      this.set('answered', '');


      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    },
    cancelAnswerForm() {
      this.set('addNewAnswer', false);
    }
  }
});
