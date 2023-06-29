// route path parameter
const routes1 = [{
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const {
            username
        } = request.params;
        return `Hello, ${username}!`;
    }
}];
module.exports = routes1;

// route path parameter with default value or optional
const routes2 = [{
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
        const {
            username = 'stranger'
        } = request.params;
        return `Hello, ${username}!`;
    },
}];

module.exports = routes2;