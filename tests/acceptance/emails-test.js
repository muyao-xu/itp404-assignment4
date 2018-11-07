import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);


  test('the inbox displays starred and unstarred emails', async function(assert) {
    server.createList('email', 2, {starred: true});
    server.createList('email', 3);

    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="starred-email"]').exists({count : 2});
    assert.dom('[data-test="unstarred-email"]').exists({count : 3});
  });

  test('viewing a single email', async function(assert) {
    server.create('email', {
      id: 1,
      from: "test@ember.com",
      to: "browser@ember.com",
      subject: "this is a title",
      message: "this is a message",
      starred: true
    });

    await visit('/email/1');

    assert.dom('[data-test="email-id"]').hasText('1');
    assert.dom('[data-test="email-from"]').hasText('test@ember.com');
    assert.dom('[data-test="email-to"]').hasText('browser@ember.com');
    assert.dom('[data-test="email-subject"]').hasText('this is a title');
    assert.dom('[data-test="email-message"]').hasText('this is a message');
  });

  test('deleting a signle email', async function(assert) {
    server.createList('email', 2);

    await visit('email/1');
    await click('[data-test="email-delete"]');

    assert.dom('[data-test="unstarred-email"]').exists({count: 1});
    assert.equal(currentURL(), '/');
  });

  test('creating an email', async function(assert) {
    await visit('/compose');

    await fillIn('#from', 'test@ember.com');
    await fillIn('#to', 'browser@ember.com');
    await fillIn('#subject', 'this is a title');
    await fillIn('#message', 'this is a message');
    await click('[data-test="compose-submit"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="unstarred-email"]').exists({count : 1});
    assert.equal(server.db.emails[0].from, 'test@ember.com');
    assert.equal(server.db.emails[0].to, 'browser@ember.com');
    assert.equal(server.db.emails[0].subject, 'this is a title');
    assert.equal(server.db.emails[0].message, 'this is a message');
  });


});
