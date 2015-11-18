import Ember from 'ember';
import WizardRouteAwareMixin from '../../../mixins/wizard/route-aware';
import { module, test } from 'qunit';

module('Unit | Mixin | wizard/route aware');

// Replace this with your real tests.
test('it works', function(assert) {
  var WizardRouteAwareObject = Ember.Object.extend(WizardRouteAwareMixin);
  var subject = WizardRouteAwareObject.create();
  assert.ok(subject);
});
