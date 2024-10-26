const net = require('net')

const server = net.createServer(connection => {
    console.log('client connected');

    connection.on('end', () =>{
        console.log('client disconnected');
    });

    connection.write('Hello, client!\n');

    connection.on('error', (err) => {
        console.log(`server error:\n${err.stack}`);
        connection.close();
    });

     // 'connection' – это поток, который мы можем перенаправить
    connection.on('data', (data) =>{
        console.log(`message: ${data}`);
    });

    // затем перенаправляем в самого себя,
    // тем самым отправляя в ответ то, сообщение, что получили
    connection.pipe(connection);
});





server.listen(8082, () => {
    const address = server.address();
    console.log(`server listening ${address.address}: ${address.port}`);

});