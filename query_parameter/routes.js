const routes = [{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        // fungsi query parameter
        const {
            name,
            location
        } = request.query; // mengambil nilai query parameter name dan location
        return `Hello, ${name} from ${location}`;
    },
}]

module.exports = routes;