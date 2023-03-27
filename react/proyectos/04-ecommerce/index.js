const { Server } = require("./app")

const main = () => {
    const server = new Server();
    server.start();
}

main();