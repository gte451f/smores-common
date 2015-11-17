import { capitalizeWord } from '../../../helpers/capitalize-word';
import { module, test } from 'qunit';

module('Unit | Helper | capitalize word');

test('works when supplied an invalid value', function(assert) {
  var result = capitalizeWord('word');
  assert.ok(result);
});

test('works when supplied a valid value', function(assert) {
  var result = capitalizeWord('word');
  assert.ok(result);
});
