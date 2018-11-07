import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, click } from '@ember/test-helpers';
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

  test ('onClick is called with the new starred value when clicked', async function(assert) {
    this.set('email', {
      starred: false
    });

    await render(hbs `<StarButton data-test="starButton" @starred={{email.starred}} />`);
    await click('[data-test="starButton"]');

    // assert.dom('[data-test="unstar-button"]').exists();
  });

});
