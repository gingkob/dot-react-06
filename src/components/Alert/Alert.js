import React from 'react';
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types';
import './Alert.css';

const colors = {
  success: '#6da06f',
  error: '#f56260',
}

const useStyles = createUseStyles({
  wrapper: {
    border: ({ type }) => `${colors[type]} solid 1px`,
    marginBottom: 15,
    padding: 15,
    position: 'relative',
    '& > h2': {
      color: ({ type }) => colors[type],
      margin: [0, 0, 10, 0],
    }
  }
})

const Alert = ({ children, title, type }) => {

  const classes = useStyles({ type })

  /*  const colors = {
     success: '#6da06f',
     error: '#f56260',
   } */

  /*   const style = {
      heading: {
        color: colors[type],
        margin: '0 0 10px 0',
      },
      wrapper: {
        border: `${colors[type]} solid 1px`,
        marginBottom: 15,
        padding: 15,
        position: 'relative',
      }
    } */

  return (
    <div className={classes.wrapper}/* style={style.wrapper} *//* className={`alert-wrapper ${type}`} */>
      <h2 /* style={style.heading} */>{title}</h2>
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Alert
