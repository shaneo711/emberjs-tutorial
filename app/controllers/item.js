import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked colour = 'red';

  get productImage() {
    return `/assets/images/beats-solo-${this.colour}.png`;
  }

  @action
  onChangeColour(newColour) {
    this.colour = newColour;
  }
}
