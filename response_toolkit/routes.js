// routes menggunakan fungsi handler yang menerima dua parameter yaitu request dan h.
const routes = [{
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201); // code() digunakan untuk mengubah status code dari response.
    },
}]

module.exports = routes;