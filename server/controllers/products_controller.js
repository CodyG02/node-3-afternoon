module.exports ={
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body

        db.create_product([name, description, price, image_url]).then( () =>{
            res.status(200).send()
        }).catch(err => {
            res.status(500).send('Request Failed, Please Try Again Later')
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.read_product(id).then(product =>{
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Request Failed, Please Try Again Later')
            console.log(err)
        })
    },

    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products().then(product =>{
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Request Failed, Please Try Again Later')
            console.log(err)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db')
         const {id} = req.params
         const {desc} = req.query

        db.update_product([id, desc]).then( () =>{
            res.status(200).send()
        }).catch(err => {
            res.status(500).send('Request Failed, Please Try Again Later')
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id).then( () =>{
            res.status(200).send()
        }).catch(err => {
            res.status(500).send('Request Failed, Please Try Again Later')
            console.log(err)
        })
    },
}