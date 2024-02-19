import Slider from './components/slider/Slider'

const sliderTest = {
  min: 2001,
  max: 2020,
  start: 2001,
  end: 2004,
}

const App = () => {
  return (
    <>
      <Slider values={sliderTest} />
    </>
  )
}

export default App
