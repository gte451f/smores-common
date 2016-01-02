import Ember from 'ember';
import layout from '../templates/components/custom-input';

export default Ember.Component.extend({
  layout: layout,

  detectedType: Ember.computed('customField', function () {
    return this.get('customField.input');
  }),

  // the indirect representation of the value being modified by the form
  // ignore this
  detectedValue: Ember.computed('customField', 'model', function () {
    let name = this.get('customField.modelName');
    let model = this.get('model');
    let value = model.get(name);

    if (this.get('isMultiCheckbox')) {
      // not reason to split empty values
      if (Ember.isEmpty(value)) {
        return [];
      }
      let allowedData = this.get('customField.allowedData');
      let valueList = [];

      let values = value.split(',');
      values.forEach(function (item) {
        let value = item.trim();
        if (allowedData === 'string') {
          valueList.push(value.toString());
        } else if (allowedData === 'number') {
          valueList.push(Number(value));
        } else {
          console.error('uh oh, unknown type detected');
        }
      });
      return valueList;
    } else {
      return value;
    }
  }),

  // when detectedValue changes, update model
  // observe the top level value as well as array members
  valueChanged: Ember.observer('detectedValue', 'detectedValue.[]', function () {
    let customField = this.get('customField');
    let newValue = this.get('detectedValue');

    // merge into csv is this ia multi checkbox
    if (this.get('isMultiCheckbox')) {
      newValue = newValue.join();
    }

    this.get('model').set(customField.get('modelName'), newValue);
  }),

  // create an array of values if a csv string is detected
  valueList: Ember.computed('customField', function () {
    let possibleValues = this.get('customField.possibleValues');
    let allowedData = this.get('customField.allowedData');
    let valueList = [];

    let values = possibleValues.split(',');
    values.forEach(function (item) {
      let value = item.trim();
      if (allowedData === 'string') {
        valueList.push(value.toString());
      } else if (allowedData === 'number') {
        valueList.push(Number(value));
      } else {
        console.error('uh oh, unknown type detected');
      }
    });
    return valueList;
  }),

  isTextArea: Ember.computed('customField', function () {
    if (this.get('customField.input') === 'textarea') {
      return true;
    }
    return false;
  }),
  isText: Ember.computed('customField', function () {
    if (this.get('customField.input') === 'text') {
      return true;
    }
    return false;
  }),
  isSelect: Ember.computed('customField', function () {
    if (this.get('customField.input') === 'select') {
      return true;
    }
    return false;
  }),
  isRadio: Ember.computed('customField', function () {
    if (this.get('customField.input') === 'radio') {
      return true;
    }
    return false;
  }),
  isCheckbox: Ember.computed('customField', function () {
    if (this.get('customField.input') === 'single-check') {
      return true;
    }
    return false;
  }),
  isMultiCheckbox: Ember.computed('customField', function () {
    if (this.get('customField.input') === 'multi-check') {
      return true;
    }
    return false;
  }),
  isDate: Ember.computed('customField', function () {
    if (this.get('customField.allowedData') === 'utcdate') {
      return true;
    }
    return false;
  })

});
