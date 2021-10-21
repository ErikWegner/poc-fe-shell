"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addListener = exports.addNotification = void 0;
const listeners = [];
function addNotification(notification) {
    listeners.forEach(l => window.setTimeout(() => l(notification), 1));
}
exports.addNotification = addNotification;
function addListener(listenerCallback) {
    listeners.push(listenerCallback);
}
exports.addListener = addListener;
