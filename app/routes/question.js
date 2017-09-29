import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id)
  },
  actions: {
    edit(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    saveAnswer(params) {

      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    /***This is the up and down vote section ***/
    answerUp(answer) {
      var vote = parseInt(this.get('upvote'));
      vote += 1;
      answer.set('upvote', vote);
      answer.save();
    },
    answerDown(answer) {
      var vote = parseInt(this.get('downvote'));
      vote++;
      answer.set('downvote', vote);
      answer.save();
    }
    /*** End of up and down vote ***/
  }

});
