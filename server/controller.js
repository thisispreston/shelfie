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
  postProduct: (req, res, next) => {
    const { name, price, img } = req.body
    const db = req.app.get('db')

    db.post_product(name, price, img)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
  }
}
