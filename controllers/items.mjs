export default function items(db) {
  const index = (request, response) => {
    db.Item.findAll()
      .then((items) => {
        response.render('items/index', { items });
      })
      .catch((error) => console.log(error));
  };

  return {
    index,
  };
}
