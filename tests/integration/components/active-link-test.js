import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

module('Integration | Component | active-link', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:router', Service.extend({
      currentRouteName: 'my.path'
    }));
    this['router'] = this.owner.lookup('service:router');
  });

  test('link is active if it matches the current route', async function (assert) {
    await render(hbs`<ActiveLink @route='my.path'>My Path</ActiveLink>`);

    assert.dom('li').hasClass('active');
    assert.dom().hasText('My Path');
  });

  test('link is not active if it does not match the current route', async function (assert) {
    await render(hbs`<ActiveLink @route='your.path'>Your Path</ActiveLink>`);

    assert.dom('li').doesNotHaveClass('active');
    assert.dom().hasText('Your Path');
  });
});
