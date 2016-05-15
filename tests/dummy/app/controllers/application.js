import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  actions: {
    toggleDemosExpanded() {
      this.toggleProperty('demosExpanded');
    }
  },

  onDemoPage: computed('currentRouteName', function() {
    return this.get('currentRouteName').startsWith('demo');
  }),

  demosExpanded: computed.reads('onDemoPage')
});
