import { Notification } from "./notification";

type NotificationListener = (notification: Notification) => void;

const listeners: NotificationListener[] = [];

export function addNotification(notification: Notification): void {
  listeners.forEach(l => setTimeout(() => l(notification), 1));
}

export function addListener(listenerCallback: NotificationListener): void {
  listeners.push(listenerCallback);
}
