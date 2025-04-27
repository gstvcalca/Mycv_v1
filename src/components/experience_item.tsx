import { ReactNode } from "react";

interface ExperienceItemProps {
  svgElement: ReactNode;
  title: string;
  years: number;
}
export function ExperienceItem({
  svgElement,
  title,
  years,
}: ExperienceItemProps) {
  const fillBar = Number((years/3) * 100).toFixed(0);
  const plural = years > 1 ? "s" : ""
  return (
    <div className="experience_item flex items-center gap-2" title={title}>
      {svgElement}
      <div className="experience_bar flex items-center border-[1px] border-border-color rounded-xl w-[80%] md:w-[300px]">
        <div
          className={"actual_experience flex items-center justify-center bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end rounded-xl"}
          title={title}
          style={{width: `${fillBar}%`}}
          >
          <span>
            {years} <span data-118n={"year" + plural}>year{plural}</span>
            {title === "React: learning experience" ? "*" : null}
          </span>
        </div>
      </div>
    </div>
  );
}
