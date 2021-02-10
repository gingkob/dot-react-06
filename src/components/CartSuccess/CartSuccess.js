import React from 'react'
import Alert from '../Alert/Alert'
import './CartSuccess.css';

const CartSuccess = () => {
  const styles = {
    header: {
      width: '100%'
    },
    item: {
      marginRight: 20
    },
    wrapper: {
      borderTop: 'black solid 1px',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }
  return (
    <Alert title="Added to Cart" type="success">
      <div style={styles.wrapper}/* className="cart-success-wrapper" */>
        <h2 style={styles.header}>
          You have added 3 items:
        </h2>
        <div style={styles.item}/* className="item" */>
          <div>Bananas</div>
          <div>Quantity: 2</div>
        </div>
        <div style={styles.item}/* className="item" */>
          <div>Lettuce</div>
          <div>Quantity: 1</div>
        </div>
      </div>
    </Alert>
  )
}

export default CartSuccess
