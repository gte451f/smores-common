import Ember from 'ember';
import layout from '../templates/components/wizard-step';

export default Ember.Component.extend({
  layout: layout,
    tagName: 'li',
    attributeBindings: ['displayIndex:data-step'],
    classNameBindings: ['isActive:active'],
    index: null,
    displayIndex: Ember.computed('index', function () {
        return this.get('index') + 1;
    }),
    isActive: Ember.computed('activeIndex', 'index', function () {
        return this.get('activeIndex') === this.get('index');
    })
});
