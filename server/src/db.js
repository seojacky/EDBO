const { Client } = require('pg');

const createConnection = () => {
    const client = new Client({
        connectionString: "postgres://pihxjewcqiusfv:a626a10de74b41c8fc896b905d3f2aeadd6a0b291d38bc536a4b67dc65e829b1@ec2-3-230-199-240.compute-1.amazonaws.com:5432/d917qrcc34qb37",
        ssl: {
            rejectUnauthorized: false
        }
    });
    client.connect()
    return client;
}

module.exports = createConnection;