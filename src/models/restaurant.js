import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

// create restaurant type
export const Restaurant = can.Map.extend({
  define: {}
});


Restaurant.List = can.List.extend({
  Map: Restaurant
}, {});

// superMap adds getList() that gets list of all restaurants
export const restaurantConnection = superMap({
  url: '/api/restaurants',
  idProp: '_id',
  Map: Restaurant,
  List: Restaurant.List,
  name: 'restaurant'
});

tag('restaurant-model', restaurantConnection);

export default Restaurant;
