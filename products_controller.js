module.exports={
    create: (req,res,next) => {
        const { name, description, price, image_url } = req.body;
        console.log(description)
        req.app.get('db').create_product([ name, description, price, image_url])
        .then(() => {res.status(200).send("Hello")})
        .catch(() => {res.status(500).send('Uh oh spaghetti-o!')})
    },
    getOne: (req,res,next) => {
        const { params } = req;

        req.app.get('db').read_product([params.id])
        .then((product) => {res.status(200).send(product)})
        .catch(() => {res.status(500).send('Uh oh spaghetti-o!')})
    },
    getAll: (req,res,next) => {
        const dbins= req.app.get('db')

        dbins.read_products()
        .then((products) => res.status(200).send(products))
        .catch(() => {res.status(500).send('Uh oh spaghetti-o!')})
    },
    delete: (req,res,next) => {
        const { params } = req;
        const dbins= req.app.get('db')

        dbins.delete_products([params.id])
        .then(() => res.status(200))
        .catch(() => {res.status(500).send('Uh oh spaghetti-o!')})
    },
    update: (req,res,next) => {
        const { params, query } = req;
        const dbins = req.app.get('db')

        dbins.update_products([params.id, query.desc])
        .then(() => res.status(200))
        .catch(() => {res.status(500).send('Uh oh spaghetti-o!')} )
    }
}