import './App.css'
import LoadMore from './components/LoadMore/Index'
import Menu from './components/SideMenu/data'
import SideMenu from './components/SideMenu/Index'
// import RandomColor from './components/RandomColor'
// import Accordian from './components/Accordian'
// import StarRating from './components/StarRating/Index'
// import ImageSlider from './components/ImageSlider/Index'


function App() {

  return (
    <>
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/*Random Color Component*/}
      {/* <RandomColor /> */}

      {/* Star Rating Component*/}
      {/* <StarRating noOfStars={9}/> */}

      {/* Image Slider Component*/}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'5'} /> */}

      {/* Load More Component*/}
      {/* <LoadMore/> */}

      {/* Side Menu Components */}
      <SideMenu menues={Menu} />


    </>
  )
}

export default App
