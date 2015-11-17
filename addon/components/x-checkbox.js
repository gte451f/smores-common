import Ember from 'ember';
import layout from '../templates/components/x-checkbox';

/**
 * inspired by this SO article
 * http://stackoverflow.com/questions/24154974/trigger-an-action-on-the-change-event-with-ember-js-checkbox-input-helper
 */
export default Ember.Checkbox.extend(Ember.ViewTargetActionSupport, {

  change: function (event) {
    this._super();
    var contexts = [
      this.get('value'),
      this.get('checked')
    ];
    this.triggerAction({ action: this.get('action'), actionContext: contexts });
  }

});