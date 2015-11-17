import Ember from 'ember';
import layout from '../templates/components/if-equal';

/**
 * compare two values to see if they match
 * ie {{#if-equal param1="somevalue" param2="someothervalue"}}
 */
export default Ember.Component.extend({
  layout: layout,

  isEqual: Ember.computed('param1', 'param2', function () {
    return this.get('param1') === this.get('param2');
  })
});