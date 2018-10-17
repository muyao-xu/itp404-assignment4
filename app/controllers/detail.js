import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteEmail(email) {
      email.destroyRecord();
      this.transitionToRoute('index');
    },
    back() {
      this.transitionToRoute('index');
    }
  }
});
