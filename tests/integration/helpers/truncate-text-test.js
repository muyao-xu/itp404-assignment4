import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('the text is truncated to the number of characters passed in', async function(assert) {
    this.set('text', '12345678');
    this.set('length', 5);

    await render(hbs`{{truncate-text text length}}`);

    assert.equal(this.element.textContent.trim(), '12345...');
  });

  test('the text is not truncated when the length is too short', async function(assert) {
    this.set('text', '1234');
    this.set('length', 5);

    await render(hbs`{{truncate-text text length}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });
});
