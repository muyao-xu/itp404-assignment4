import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sendEmail(event) {
      event.preventDefault();

      let email = this.store.createRecord('email', {
        from: this.from,
        to: this.to,
        subject: this.subject,
        message: this.message
      });

      // let email = this.model;
      email.save().then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
