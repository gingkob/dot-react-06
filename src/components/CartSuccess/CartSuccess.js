import React from 'react'
import { createUseStyles } from 'react-jss';
import Alert from '../Alert/Alert'
import './CartSuccess.css';

const useStyles = createUseStyles({
  item: {
    // marginRight: 20
  },
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    flexWrap: 'wrap',
    '& h2': {
      width: '100%'
    },
    '& $item': {
      marginRight: 20
    }
  }
})

const CartSuccess = () => {

  const classes = useStyles();

  /*  const styles = {
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
   } */
  return (
    <Alert title="Added to Cart" type="success">
      <div className={classes.wrapper} /* style={styles.wrapper} *//* className="cart-success-wrapper" */>
        <h2 /* style={styles.header} */>
          You have added 3 items:
        </h2>
        <div className={classes.item} /* style={styles.item} *//* className="item" */>
          <div>Bananas</div>
          <div>Quantity: 2</div>
        </div>
        <div className={classes.item} /* style={styles.item} *//* className="item" */>
          <div>Lettuce</div>
          <div>Quantity: 1</div>
        </div>
      </div>
    </Alert>
  )
}

export default CartSuccess
