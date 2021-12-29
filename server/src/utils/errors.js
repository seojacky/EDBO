class NodeError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}

class LoginError extends NodeError {
    constructor(message = 'Login error') {
        super(message);
        this.status = 400;
    }
}

class RoleError extends NodeError {
    constructor(message = 'Must be another role') {
        super(message);
        this.status = 400;
    }
}

class InvalidRequestError extends NodeError {
    constructor(message = 'Invalid request') {
        super(message);
        this.status = 400;
    }
}

class SqlError extends NodeError {
    constructor(message = 'SQL error') {
        super(message);
        this.status = 400;
    }
}


module.exports = {
    NodeError,
    LoginError,
    RoleError,
    InvalidRequestError,
    SqlError
};