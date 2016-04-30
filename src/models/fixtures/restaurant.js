import fixture from 'can-fixture';

const store = fixture.store([{
  _id: 0,
  description: 'First item'
}, {
  _id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/restaurants': store.findAll,
  'GET /api/restaurants/{_id}': store.findOne,
  'POST /api/restaurants': store.create,
  'PUT /api/restaurants/{_id}': store.update,
  'DELETE /api/restaurants/{_id}': store.destroy
});

export default store;
