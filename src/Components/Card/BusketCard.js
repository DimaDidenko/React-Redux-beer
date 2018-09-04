import React from 'react';
import styles from './BusketCard.css';
import {connect} from 'react-redux';
import {addToBasket, countAdd, countUnAdd, price, countDelete, total} from '../../react/actions/busketActions';
import {priceBusket} from '../../react/actions/priceBusketAction';
import {totalBusketSelectors} from '../../react/selectors/busketSelectors';

// import {totals} from '../../react/actions/totalBusketActions';

// {name, img, price, count, countUnAdd, countAdd, priceBusket, priceBuskets, totalPriceBusket, countDelete, id, props}
const BusketCard = (props) => {
    console.log(props.id);
    return (
        <div className={styles.items}>
        <div className={styles.first}>
        <span onClick={() => props.countDelete(props.id)} className={styles.delete}>&times;</span> 
            <img src={props.img} className={styles.img}/>
            <span className={styles.name}>{props.name}</span>
        </div>
        <div className={styles.second}>
            <button onClick={() => props.countUnAdd(props.id)} className={styles.cartBtn}>-</button>
            <span className={styles.count}>{props.count}</span>
            <button onClick={() => props.countAdd(props.id)} className={styles.cartBtn}>+</button>
            
            {/* <p className={styles.price}>Price : ${busketTotal}</p> */}
         </div>   
         {/* <span >Total: {props.busketTotal.toFixed(1)}₴</span> */}
        </div>
    );
}


function MSTP (state) {
    return {
        beers: state.gallery,
        busket: state.busket,
        priceBuskets: state.priceBusket,
        busketTotal: totalBusketSelectors(state),
        // totals: state.totalBusket,
    }
}
function MDTP (dispatch) {
    return {
        
        countAdd: function (id) {
            dispatch(countAdd(id))
        },
        countUnAdd : function (id) {
            dispatch(countUnAdd(id))
        },
        priceBusket: function (price, count){
            dispatch(priceBusket(price, count))
        },
        countDelete : function(id) {
            dispatch(countDelete(id))
        },
        // totals: function (price) {
        //     dispatch(totals(price))
        // }
       
       
    }
}
export default connect(MSTP, MDTP)(BusketCard);
