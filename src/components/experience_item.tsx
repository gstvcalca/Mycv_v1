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
  return (
    <div className="experience_item flex items-center gap-2">
      {svgElement}
      <div className="experience_bar flex items-center border-[1px] border-white rounded-xl w-[300px]">
        <div
          className={"actual_experience w-" + years + "/3 flex items-center justify-center bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end rounded-xl"}
          title={title}>
          <span>
            {years} <span data-118n="year">year{years > 1 ? "s" : null}</span>
            {title === "Learning experience" ? "*" : null}
          </span>
        </div>
      </div>
    </div>
  );
}
