import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            questions: this.store.findAll('question'),
            answers: this.store.findAll('answer')
        })

    },

    actions: {
        saveQuestion(params) {
            var newQuestion = this.store.createRecord('question', params);
            newQuestion.save();
            this.transitionTo('index');
        },
        saveAnswer(params) {
            var newAnswer = this.store.createRecord('answer', params);
            newAnswer.save();
            this.transitionTo('index'); //it is usually used to display what has been added to the database
        }
    }
});
