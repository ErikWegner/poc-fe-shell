import * as mocha from 'mocha';
import * as chai from 'chai';
import * as spies from 'chai-spies';

import { addListener, addNotification, Notification } from '.';

chai.use(spies);
const expect = chai.expect;

describe('notify', () => {
  it('should add a listener', () => {
    // Arrange
    const spy = chai.spy();

    // Act
    addListener(spy);

    // Assert: ok
  });

  it('should publish notification', (done) => {
    // Arrange
    const notification: Notification = {
      color: 'red',
      heading: 'Heading',
      text: 'Some text'
    };
    const spy = chai.spy();
    addListener(spy);

    // Act
    addNotification(notification);

    // Assert
    setTimeout(() => {
      expect(spy).to.have.been.called.with(notification);
      done();
    }, 20);
  });
});