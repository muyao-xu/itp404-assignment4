import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('the star is filled when starred is true', async function(assert) {
    this.set('email', {
      starred: true
    });
    await render(hbs`<StarButton
      @starred={{email.starred}}
    />`);
    assert.dom('[data-test="star-button"]').exists();
  });

  test ('the star is empty when starred is false', async function(assert) {
    this.set('email', {
      starred: false
    });

    await render(hbs `<StarButton @starred={{email.starred}} />`);
    assert.dom('[data-test="unstar-button"]').exists();
  });
});
