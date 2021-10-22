export interface Notification {
  color: string;
  heading: string;
  text: string;
}
type NotificationListener = (notification: Notification) => void;

declare global {
  interface Window {
    _SC: {
      addNotification: (notification: Notification) => void;
      addListener: (listenerCallback: NotificationListener) => void;
    };
  }
}

(function (SC) {
  const listeners: NotificationListener[] = [];

  function addNotification(notification: Notification): void {
    listeners.forEach((receiver) =>
      setTimeout(() => receiver(notification), 1)
    ); // eslint-disable-line unicorn/no-array-for-each
  }

  function addListener(listenerCallback: NotificationListener): void {
    listeners.push(listenerCallback);
  }

  if (!SC.addListener) {
    SC.addNotification = addNotification;
  }
  if (!SC.addListener) {
    SC.addListener = addListener;
  }
})(window._SC || ((window._SC as any) = {}));
