
class App {

    // Public section
    public noCordova() {
        this.cordova = false;
    }
    public main() {
        if (this.running) {
            throw "The application is already running.";
        }
        this.running = true;
        if (this.cordova) {
            document.addEventListener('deviceready', () => this.onDeviceReady(), false);
        } else {
            this.onDeviceReady();
        }
    }

    // Private section
    private cordova: boolean = true;
    private running: boolean = false;
    private run() {
        const btn = document.createElement('button');
        btn.innerText = 'Click me!';
        btn.addEventListener('click', ev => {
            alert('Hello, World!');
        });
        document.body.appendChild(btn);
    }
    private onDeviceReady() {
        this.run();
    }

}

const app = new App();

export default app;
