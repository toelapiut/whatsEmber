import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "Anonymous",
        asked: this.get('asked') ? this.get('asked') : "Where's the question",
        notes: this.get('notes') ? this.get('notes') : "Sorry no notes"
      };

      // lines with empty parenthesis eg this.set('author', '');
      this.set('author', '');
      this.set('asked', '');
      this.set('asked', '');
      this.set('notes', '');

      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);

    },
    cancelQuestionForm() {
      this.set('addNewQuestion', false);
    }
  }
});
