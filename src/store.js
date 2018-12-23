import { action, decoreate, obserable } from 'mobx';

class store {
  constructor() {
    this.test = 'ok';
  }
}

decorate(Store, {
  test: obserable,
});

export store = new Store();
