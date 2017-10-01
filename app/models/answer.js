import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answered: DS.attr(),
  upvote: parseInt(DS.attr('number')),
  downvote:parseInt( DS.attr('number')),
  question: DS.belongsTo('question', {
    async: true
  })
});
