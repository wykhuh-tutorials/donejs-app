import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './list.less!';
import template from './list.stache!';
import Restaurant from 'place-my-order/models/restaurant';

export const ViewModel = Map.extend({
  define: {
    // add restaurants property that can be access in template.
    // restaurants will have a list a restaurants from the server

    // restaurants returns a promise.
    restaurants: {
      value() {
        return Restaurant.getList({});
      }
    }
  }
});

export default Component.extend({
  tag: 'pmo-restaurant-list',
  viewModel: ViewModel,
  template
});
