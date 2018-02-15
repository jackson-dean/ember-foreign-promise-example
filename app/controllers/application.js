import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import { Promise } from 'rsvp';

export default Controller.extend({
  dynamicMessage: 'initial message',

  _fetchHello() {
    let nativePromise = new window.Promise(resolve => {
      setTimeout(() => {
        resolve('updated message');
      }, 500);
    });

    return Promise.resolve(nativePromise);
  },

  actions: {
    doAsyncStuff() {
      this._fetchHello().then(str => {
        run(() => {
          this.set('dynamicMessage', str);
        });
      });
    }
  }
});
