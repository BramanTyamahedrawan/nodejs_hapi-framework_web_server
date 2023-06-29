// Chained notation
const handler = (request, h) => {
    return h.response('success') // response() digunakan untuk mengubah body dari response.
        .type('text/plain') // type() digunakan untuk mengubah content-type dari response.
        .header('X-Custom', 'some-value'); // header() digunakan untuk menambahkan header ke response.
};