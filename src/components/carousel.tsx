import { Children, ReactNode, useState } from "react";

interface CarouselProps {
  children: ReactNode
}

export default function Carousel({children}: CarouselProps){
  const children_array = Children.toArray(children);
    const [active, setActive] = useState(0);
  
  return (
    <div className="">
      {children_array[active]}
      <div className="flex space-x-4 justify-center items-center m-3">
        {children_array.map((_, i) => (
          <button className={`w-3 h-3 rounded-full ` + (active === i && "bg-blue-300" || "bg-gray-300")}
          onClick={() => setActive(i)}/>
        ))}
      </div>
    </div>
  )
}