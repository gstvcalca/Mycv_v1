import Carousel from "./components/carousel";
import CarouselItem from "./components/carousel_item";


export default function CarouselPage(){
  return (
    <Carousel>
      <CarouselItem imgURL="eowyn.webp" text="You gotta take your chances"/>
      <CarouselItem imgURL="heria.jpg" text="Give up chocolate"/>
      <CarouselItem imgURL="peakpx.jpg" text="Be bold"/>
      <CarouselItem imgURL="spy.jpg" text="Family \o/"/>
    </Carousel>

  )
}