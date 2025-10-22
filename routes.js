const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'Home Page';
        }
    },
    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
            return 'About Page';
        }
    },
    {
        method: 'GET',
        path: '/hello/{username?}',
        handler: (req, h) => {
            const {username = "visitor"} = req.params;
            const {lang} = req.query;

            if(lang === 'ID'){
                return `Selamat Datang ${username}`
            }
            return `Welcome ${username}`
        }
    },    
    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return 'Halaman tidak ditemukan';
        }
    },    
];

export default routes;

