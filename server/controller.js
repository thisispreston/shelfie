module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db')

    db.get_inventory()
      .then( products => res.status(200).send(products))
      .catch( err => {
        res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
        console.log(err)
      })
  },
  getOne: async(req, res, next) => {
    let { id } = req.params
    const db = req.app.get('db')

    try{
      let response = await db.get_one({id})
      res.status(200).send(response)
    }
    catch(err){
      res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
    }
    //the curly brackets here and in sql make it more clear which is paired with which. Order doesn't matter this way.
      // .then( products => res.status(200).send(products))
      // .catch( err => {
      //   res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
      //   console.log(err)
      // })
  },
  postProduct: (req, res, next) => {
    const { name, price, img } = req.body
    const db = req.app.get('db')

    db.post_product(name, price, img)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
  },
  delete: (req, res, next) => {
    const db = req.app.get('db')
    const { id } = req.params

    db.delete_product(id)
      .then( () => res.sendStatus(200))
      .catch( err => {
        res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
        console.log(err)
      })
  },
  edit: (req, res, next) => {
    const { id } = req.params
    // console.log(req.body)
    const { name, price, img } = req.body
    const db = req.app.get('db')
    // console.log(id, name, price, img) THIS IS WORKING
    
    db.edit_product([id, name, price, img])
      .then( () => res.sendStatus(200))
      .catch( err => {
        res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
        console.log(err)
      })
  },
}
