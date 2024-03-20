import { service } from '@ember/service';
import Component from '@glimmer/component';

export default class ActiveLinkComponent extends Component {
  @service router;

  get active() {
    return this.router.currentRouteName === this.args.route;
  }
}
