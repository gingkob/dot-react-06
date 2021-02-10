// import './App.css';
import { createUseStyles } from 'react-jss';
import Alert from '../Alert/Alert';
import CartSuccess from '../CartSuccess/CartSuccess';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20
  }
})

function App() {
  const classes = useStyles();

  /* const wrapper = {
    padding: 20
  } */

  return (
    <div className={classes.wrapper}/* style={wrapper} */ /* className='wrapper */>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}

export default App;
