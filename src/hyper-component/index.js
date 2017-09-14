import {wire as html} from 'hyperhtml';
import PolymerHyperElement from './../polymer-hyper';

export default class HyperComponent extends PolymerHyperElement {
  static get properties() {
    return {
      myName: {
        type: String,
        value: 'Init name',
        observer: 'myNameChanged'
      }
    };
  }

  constructor() {
    super();
    this.myName = 'Luke';

    setTimeout(() => {
      this.myName = `I'm running under Polymer 3 and hyperHTML`;
    }, 4000)
  }

  myNameChanged(myName, oldName) {
    console.log('Name changed!', myName, oldName);
  }

  render() {
    return html()`
      <div> ${this.myName} </div>
    `;
  }

}

window.customElements.define('hyper-component', HyperComponent);
