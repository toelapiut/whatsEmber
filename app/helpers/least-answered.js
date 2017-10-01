import Ember from 'ember';

export function leastAnswered(params) {
  var question = params[0];

  if (question.get('answers').get('length') <= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-certificate" data-toggle="tooltip" title="I need more answers"></span>');
  }
}

export default Ember.Helper.helper(leastAnswered);
