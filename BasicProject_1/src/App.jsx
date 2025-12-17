import './App.css'
// import RandomColor from './components/RandomColor'
// import Accordian from './components/Accordian'
// import StarRating from './components/StarRating/Index'
import ImageSlider from './components/ImageSlider/Index'


function App() {

  return (
    <>
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/*Random Color*/}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={9}/> */}

      {/* Image Slider */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'5'} />
    </>
  )
}

export default App
