import {Element} from '@polymer/polymer/polymer-element';
import {PropertyAccessors} from '@polymer/polymer/lib/mixins/property-accessors';
import {PropertyEffects} from '@polymer/polymer/lib/mixins/property-effects';
import {bind} from 'hyperhtml';

const withHyper = Base => {
  return class extends PropertyEffects(PropertyAccessors(Base)) {
    constructor(...args) {
      super(...args);
      this.html = bind(this.shadowRoot || this);
    }
    _propertiesChanged(...args) {
      super._propertiesChanged(...args);
      const content = this.render();
      this.html`${content}`;
    }

    static get template() {
      return '';
    }
  };
};

export default class PolymerHyperElement extends withHyper(Element) {}
