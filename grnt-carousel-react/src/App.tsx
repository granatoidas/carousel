import './App.css'
import { CarouselItemData } from './carousel/carousel-item'
import W3cHome from './assets/w3c_home.png'
import Picture1 from './assets/random1.jpg'
import { Carousel } from './carousel/carousel'

function App() {
  var carouselItems: CarouselItemData[] = [
    { content: <img src={W3cHome} className="block w-full h-full bg-cover" /> },
    { content: <img src={Picture1} className="block w-full h-full bg-cover" /> },
    {
      content: (
        <div className="text-center align-middle h-full flex justify-center items-center">
          <h2>item with text</h2>
        </div>
      ),
    },
  ]

  return <Carousel className="w-60 h-40" items={carouselItems} autoDelayMs={4000} />
}

export default App
