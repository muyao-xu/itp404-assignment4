import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sent');
  this.route('trash');
  this.route('detail', { path: '/email/:id' });
  this.route('compose');
});

export default Router;
