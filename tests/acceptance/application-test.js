import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /application', async function(assert) {
    await visit('/');
    await click('#message-button');

    let expectedMessage = 'updated message';
    let actualMessage = document.querySelector('#dynamic-message').textContent.trim();
    assert.equal(actualMessage, expectedMessage);
  });
});
