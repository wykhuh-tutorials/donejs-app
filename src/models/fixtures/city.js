import fixture from 'can-fixture';

const store = fixture.store([{
  name: 0,
  description: 'First item'
}, {
  name: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/cities': store.findAll,
  'GET /api/cities/{name}': store.findOne,
  'POST /api/cities': store.create,
  'PUT /api/cities/{name}': store.update,
  'DELETE /api/cities/{name}': store.destroy
});

export default store;
