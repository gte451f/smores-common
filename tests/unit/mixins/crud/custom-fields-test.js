import Ember from 'ember';
import CrudCustomFieldsMixin from '../../../mixins/crud/custom-fields';
import { module, test } from 'qunit';

module('Unit | Mixin | crud/custom fields');

// Replace this with your real tests.
test('it works', function(assert) {
  var CrudCustomFieldsObject = Ember.Object.extend(CrudCustomFieldsMixin);
  var subject = CrudCustomFieldsObject.create();
  assert.ok(subject);
});
