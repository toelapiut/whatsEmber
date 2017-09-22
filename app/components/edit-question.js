import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        author: this.get('author'),
        asked: this.get('asked'),
        notes: this.get('notes')
      }
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    },
    cancelEditForm() {
      this.set('editQuestionForm', false);
    }
  }
});
