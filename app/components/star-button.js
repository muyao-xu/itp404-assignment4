import Component from '@ember/component';

export default Component.extend({
  actions: {
    starEmail() {
      this.onClick(!this.starred);
    }
  }
});
