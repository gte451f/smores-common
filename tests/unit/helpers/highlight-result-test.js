import { highlightResult } from '../../../helpers/highlight-result';
import { module, test } from 'qunit';

module('Unit | Helper | highlight result');

test('highlight a word inside a phrase', function(assert) {
  var query = 'marcelo';
  var phrase = [ 'Marcelo Andrade' ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, '<i class="highlight">Marcelo</i> Andrade');
});

test('highlight a word inside a phrase 2', function(assert) {
  var query = 'celo';
  var phrase = [ 'Marcelo Andrade' ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, 'Mar<i class="highlight">celo</i> Andrade');
});

test('highlight a word inside a phrase 3', function(assert) {
  var query = 'drade';
  var phrase = [ 'Marcelo Andrade' ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, 'Marcelo An<i class="highlight">drade</i>');
});

test('highlight a word inside a phrase 4', function(assert) {
  var query;
  var phrase = [ 'Marcelo Andrade' ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, 'Marcelo Andrade');
});

test('highlight a word inside a phrase duplicated', function(assert) {
  var query = 'celo';
  var phrase = [ 'Marcelo Andrade, Andrade Marcelo' ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, 'Mar<i class="highlight">celo</i> Andrade, Andrade Mar<i class="highlight">celo</i>');
});


test('highlight a null value', function(assert) {
  var query = 'celo';
  var phrase = [ null ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, null);
});

test('highlight an undefined value', function(assert) {
  var query = 'celo';
  var phrase = [ undefined ];
  var result = highlightResult(phrase, {query: query});
  assert.equal(result, null);
});