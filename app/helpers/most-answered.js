import Ember from 'ember';

export function mostAnswered(params) {
  var question = params[0];

  if (question.get('answers').get('length') >= 10) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-eye-open" title="Come view me!"></span>');
  }
}

export default Ember.Helper.helper(mostAnswered);
