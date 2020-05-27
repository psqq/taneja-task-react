import * as reactApp from './react-app';

// Public section
export function noCordova() {
    cordova = false;
}

export function main() {
    if (running) {
        throw "The application is already running.";
    }
    running = true;
    if (cordova) {
        document.addEventListener('deviceready', onDeviceReady, false);
    } else {
        onDeviceReady();
    }
}

// Private section
let cordova: boolean = true;
let running: boolean = false;

function run() {
    reactApp.main();
}

function onDeviceReady() {
    run();
}
