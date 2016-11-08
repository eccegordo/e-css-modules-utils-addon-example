import Ember from 'ember';
import layout from './template';
import styles from './styles';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  styles,
  classNameBindings: ['fractionClass'],
  localClassNames: ['grid-col'],

  /**
   * Normally this computed property shouldn't be necessary and you should be
   * able to use `localClassNameBindings`:
   *
   * localClassNameBindings: ['fraction']
   *
   * I'm still hunting down the bug but conceptually you're just applying a
   * prefixed class that is of the same value as the fraction property.
   */
  fractionClass: computed('fraction', function() {
    return this.get('styles')[this.get('fraction')];
  })
});
