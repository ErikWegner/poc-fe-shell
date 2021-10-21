"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const _1 = require(".");
chai.use(spies);
const expect = chai.expect;
describe('notify', () => {
    it('should add a listener', () => {
        // Arrange
        const spy = chai.spy();
        // Act
        (0, _1.addListener)(spy);
        // Assert: ok
    });
    it('should publish notification', (done) => {
        // Arrange
        const notification = {
            color: 'red',
            heading: 'Heading',
            text: 'Some text'
        };
        const spy = chai.spy();
        (0, _1.addListener)(spy);
        // Act
        (0, _1.addNotification)(notification);
        // Assert
        setTimeout(() => {
            expect(spy).to.have.been.called.with(notification);
            done();
        }, 20);
    });
});
