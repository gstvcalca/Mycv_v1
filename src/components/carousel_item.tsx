interface CarouselItemProps {
  imgURL: string;
  text: string;
}

export default function CarouselItem({ imgURL, text }: CarouselItemProps) {
  let animation_string = ' typing #DURATION# #STEPS# forwards, blink 1.5s step-end infinite';
  let duration = (text.length * 0.05).toFixed(2) + 's';
  let steps = `steps(${text.length.toString()})`
  animation_string = animation_string.replace('#DURATION#', duration).replace('#STEPS#', steps);
  return (
    <div className="relative">
      <img src={imgURL} className="h-[95vh] m-auto"/>
      <div className="absolute top-1/3 left-[15%]">
        <p key={text}
          style={{animation: animation_string}}
          className="text-white text-4xl text-nowrap border-r-2 border-white overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
