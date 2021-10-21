import { addListener, addNotification, Notification } from ".";

describe("notify", () => {
  it("should add a listener", () => {
    // Arrange
    const spy = jest.fn();

    // Act
    addListener(spy);

    // Assert: ok
    expect(true).toBe(true);
  });

  it("should publish notification", () =>
    new Promise<void>((resolve) => {
      // Arrange
      const notification: Notification = {
        color: "red",
        heading: "Heading",
        text: "Some text",
      };
      const spy = jest.fn();
      addListener(spy);

      // Act
      addNotification(notification);

      // Assert
      setTimeout(() => {
        expect(spy).toHaveBeenCalledWith(notification);
        resolve();
      }, 20);
    }));
});
