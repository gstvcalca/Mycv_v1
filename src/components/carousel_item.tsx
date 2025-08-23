interface CarouselItemProps {
  imgURL: string;
  text: string;
}

export default function CarouselItem({ imgURL, text }: CarouselItemProps) {
  return (
    <div className="relative">
      <img src={imgURL} className="h-[95vh] m-auto"/>
      <div className="absolute top-1/3 left-[15%]">
        <p className="text-white text-4xl animate-typing-blink text-nowrap border-r-2 border-white overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
