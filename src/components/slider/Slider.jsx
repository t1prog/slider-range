import PropTypes from 'prop-types'

const Slider = ({ values }) => {
  const { max, min, start, end } = values
  return <div className="slider"> </div>
}

Slider.propTypes = {
  values: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
    start: PropTypes.number,
    end: PropTypes.number,
  }),
}

export default Slider
