module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get('db')

    db.show_products()
      .then( products => res.status(200).send(products))
      .catch( err => {
        res.status(500).send({errorMessage: 'Oops! Something went wrong. Our engineers have been informed!'})
        console.log(err)
      })
  },
}