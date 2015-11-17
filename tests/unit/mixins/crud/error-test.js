import Ember from 'ember';
import CrudErrorMixin from '../../../mixins/crud/error';
import { module, test } from 'qunit';

module('Unit | Mixin | crud/error');

// Replace this with your real tests.
test('it works', function(assert) {
  var CrudErrorObject = Ember.Object.extend(CrudErrorMixin);
  var subject = CrudErrorObject.create();
  assert.ok(subject);
});
