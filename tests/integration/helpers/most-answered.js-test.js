
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('most-answered.js', 'helper:most-answered.js', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{most-answered.js inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

