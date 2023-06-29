const routes = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        // perbedaan query parameter dan path parameter
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {
                name = "stranger"
            } = request.params;

            // fungsi query parameter
            const {
                lang
            } = request.query; // mengambil nilai query parameter lang

            if (lang === 'id') { // jika nilai lang adalah id
                return `Hai, ${name}!`; // tampilkan Hai, {name}!
            }
            // jika tidak ada query parameter lang atau tidak bernilai id
            return `Hello, ${name}!`; // tampilkan Hello, {name}!
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;