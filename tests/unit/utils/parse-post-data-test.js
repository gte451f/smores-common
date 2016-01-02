import parsePostData from '../../../utils/parse-post-data';
import { module, test } from 'qunit';

module('Unit | Utility | parse post data');

test('it parses', function(assert) {
  var result = parsePostData("a=1&b=2");
  assert.equal(1, result.a);
  assert.equal(2, result.b);
});

test('it parses encoded data', function(assert) {
  var result = parsePostData("a=1&b="+encodeURIComponent('2 3'));
  assert.equal(1, result.a);
  assert.equal('2 3', result.b);
});
