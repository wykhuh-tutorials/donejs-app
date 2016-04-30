import fixture from 'can-fixture';

const store = fixture.store([{
  short: 0,
  description: 'First item'
}, {
  short: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/states': store.findAll,
  'GET /api/states/{short}': store.findOne,
  'POST /api/states': store.create,
  'PUT /api/states/{short}': store.update,
  'DELETE /api/states/{short}': store.destroy
});

export default store;
