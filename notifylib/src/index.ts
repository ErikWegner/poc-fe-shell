export interface Notification {
  color: string;
  heading: string;
  text: string;
}
type NotificationListener = (notification: Notification) => void;

const listeners: NotificationListener[] = [];

function addNotification(notification: Notification): void {
  listeners.forEach((receiver) => setTimeout(() => receiver(notification), 1)); // eslint-disable-line unicorn/no-array-for-each
}

export { addNotification };

function addListener(listenerCallback: NotificationListener): void {
  listeners.push(listenerCallback);
}

export { addListener };
