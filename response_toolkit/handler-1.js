// Detailed notation
const handler = (request, h) => {
    const response = h.response('success'); // response() digunakan untuk mengubah body dari response.
    response.type('text/plain'); // type() digunakan untuk mengubah content-type dari response.
    response.header('X-Custom', 'some-value'); // header() digunakan untuk menambahkan header ke response.
    return response; // kembalikan response yang sudah diubah.
};