export interface Notification {
    color: string;
    heading: string;
    text: string;
}
declare type NotificationListener = (notification: Notification) => void;
export declare function addNotification(notification: Notification): void;
export declare function addListener(listenerCallback: NotificationListener): void;
export {};
