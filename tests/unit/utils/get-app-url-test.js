import getAppUrl from '../../../utils/get-app-url';
import { module, test } from 'qunit';

module('Unit | Utility | get app url');

test('it should join env restDestination with restNamespace with path', function(assert) {
  var ENV = {
    APP: {
      restDestination: 'http://localhost:8080',
      restNameSpace: 'v1'
    }
  };
  var result = getAppUrl(ENV, '/matters');
  assert.equal('http://localhost:8080/v1/matters', result);
});
