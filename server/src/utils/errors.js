class NodeCourseError extends Error {
    constructor (message) {
        super(message);
        this.status = 500;
    }
}

class LoginError extends NodeCourseError {
    constructor (message = 'Login error') {
        super(message);
        this.status = 400;
    }
}

class RoleError extends NodeCourseError {
    constructor (message = 'Must be another role') {
        super(message);
        this.status = 400;
    }
}

class InvalidRequestError extends NodeCourseError {
    constructor (message = 'Invalid request') {
        super(message);
        this.status = 400;
    }
}

module.exports = {
    NodeCourseError,
    LoginError,
    RoleError,
    InvalidRequestError
};