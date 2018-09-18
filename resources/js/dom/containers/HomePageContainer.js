import { Component } from 'domr-framework';

export default class extends Component {
  constructor() {
    super();
  }

  Markup() {
    return `
      <div class="home">
        <h1>Howdy</h1>
        <h3>This is Domr Skeleton</h3>
      </div>
    `;
  }
}
