export interface Notification {
    color: string;
    heading: string;
    text: string;
}
declare type NotificationListener = (notification: Notification) => void;
declare global {
    interface Window {
        _SC: {
            addNotification: (notification: Notification) => void;
            addListener: (listenerCallback: NotificationListener) => void;
        };
    }
}
export {};
