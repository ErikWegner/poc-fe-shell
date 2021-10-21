export interface Notification {
    color: string;
    heading: string;
    text: string;
}
declare type NotificationListener = (notification: Notification) => void;
declare function addNotification(notification: Notification): void;
export { addNotification };
declare function addListener(listenerCallback: NotificationListener): void;
export { addListener };
