/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import styles from './Busket.css';
import {addToBasket, price, countDelete} from '../../react/actions/busketActions';
import BusketCard from '../Card/BusketCard';
import {busketActive} from '../../react/actions/isActiveAction';
import {totalBusketSelectors} from '../../react/selectors/busketSelectors';

const Busket = (props) => {
    // let classReact = React.createClass({color: 'white'})
    // console.log(props.busket)
    return (
            <div className={styles.container}>
             <ul className={props.isActiveBusket ? 
             `${styles.aside} ${styles.asideShow}` :  styles.aside }><li className={styles.items}>
             {props.busket.map(el =><BusketCard name={el.name} img={el.img} price={el.price} count={el.count} key={el.id} id={el.id}/>)}</li> 
            
            {/* <div className={styles.buys}> */}
                
                {/* <button className={styles.buttonBuy}>Buy</button> */}
            {/* </div> */}
            <div className={styles.totalClose}><span className={styles.buttonBuy}>Total: {props.busketTotal.toFixed(1)}₴<span className={styles.closeBusket} onClick={props.busketActive}>&times;</span></span></div>
            </ul>
            
            
            </div>
            //  <button onClick={() => props.addItem(props.beers, 81)}>ADD</button>
    );
}

function MSTP (state) {
    return {
        beers: state.gallery,
        busket: state.busket,
        isActiveBusket: state.isActiveBusket,
        busketTotal: totalBusketSelectors(state),
    }
}

function MDTP (dispatch) {
    return {
        addItem : function(arr, id) {
            dispatch(addToBasket(arr, id))
        },
        
        price: function (id) {
            dispatch(price(id))
        },
        busketActive: function () {
            dispatch(busketActive())
        }
    }
}

export default connect(MSTP, MDTP)(Busket)
