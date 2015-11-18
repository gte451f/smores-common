import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';
import layout from '../templates/components/x-tooltip';

/**
 * a general purpose tooltip styled for admin-lte
 * see ember-cli-tooltipster for usage
 */
export default TooltipsterComponent.extend({
  layout: layout,
  tagName: 'span',
  classNames: ['badge bg-light-blue'],
  title: 'Help',
  position: 'top',
  theme: 'tooltipster-default',
  timer: 10000
});
