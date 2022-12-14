import PropTypes from 'prop-types'
const Button = ({color, text}) => {
  return (
  <button
    onClick={onclick} 
    style={{backgroundColor:color}}
    className="btn"
   >
    {text}
  </button>
  )
}

Button.defaultProps = {
    color: 'stealblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button