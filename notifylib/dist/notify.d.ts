import { Notification } from "./notification";
declare type NotificationListener = (notification: Notification) => void;
export declare function addNotification(notification: Notification): void;
export declare function addListener(listenerCallback: NotificationListener): void;
export {};
