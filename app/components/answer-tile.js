import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Please do not delete me ;(...')) {
        this.sendAction('destroyAnswer', answer)
      }
    },
    answerUp(answer) {
      this.sendAction('answerUp', answer);
    },
    answerDown(answer) {
      this.sendAction('answerDown', answer);
    },
  }
});
