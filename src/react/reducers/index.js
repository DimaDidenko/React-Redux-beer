import { combineReducers } from 'redux';
import gallery from './galleryReducer'
import beerpage from './beerPageReducer';
import foodform from './foodFormReducer';

import {randomProduct} from './randomReducer';
import {sliderReducer} from "./sliderReducer";
import favorites from './favoriteReducer';
import mobMenuExpanded from './mobileMenuReducer';
// import busket from '../reducers/busketReducer';
import busket from './busketReducer';
import isActiveBusket from '../reducers/isActiveReducers';
import priceBusket from './priceBusketReducer';
import totalBusket from './totalBusketReducer';

const rootReducer = combineReducers ({
    gallery,
    beerpage,
    foodform,
    randomProduct,
    sliderReducer,
    favorites,
    mobMenuExpanded,
    busket,
    isActiveBusket: isActiveBusket,
    priceBusket,
});

export default rootReducer;