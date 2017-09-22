import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Please do not delete me!')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
