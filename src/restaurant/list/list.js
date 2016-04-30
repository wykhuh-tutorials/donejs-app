import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './list.less!';
import template from './list.stache!';

// models
import Restaurant from 'place-my-order/models/restaurant';
import State from 'place-my-order/models/state';
import City from 'place-my-order/models/city';

// Map creates an observable 
export const ViewModel = Map.extend({
  // define rules for each property
  define: {
    // getList returns a promise.
    states: {
      get() {
        return State.getList({});
      }
    },
    // user selects state
    state: {
      type: 'string',
      // default value is null
      value: null,
      set() {
        // Remove the city when the state changes
        this.attr('city', null);
      }
    },
    cities: {
      // when state property changes, we get new list of cities
      get() {
        let state = this.attr('state');

        if(!state) {
          return null;
        }

        // if state exists, get a list of cities for the state
        return City.getList({ state });
      }
    },
    // user selects city
    city: {
      type: 'string',
      value: null
    },

    // add restaurants property that can be access in template.
    // restaurants will have a list a restaurants from the server
    restaurants: {
      get() {
        let state = this.attr('state');
        let city = this.attr('city');

        // if state and city is state, getList of restaurants
        if(state && city) {
          return Restaurant.getList({
            'address.state': state,
            'address.city': city
          });
        }

        return null;
      }
    }
  }
});

export default Component.extend({
  tag: 'pmo-restaurant-list',
  viewModel: ViewModel,
  template
});
