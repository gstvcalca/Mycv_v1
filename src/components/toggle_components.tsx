import { ChangeEvent } from "react";
import { BrazilFlagSVG } from "./svgs/brazil_flag";
import { UkFlagSVG } from "./svgs/uk_flag";

interface ToggleComponentsProps {
  setThemeVariables: (event: ChangeEvent<HTMLInputElement>) => void;
  changeLanguage: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function ToggleComponents({
  changeLanguage,
  setThemeVariables,
}: ToggleComponentsProps) {
  return (
    <div className="toggle_div flex gap-6 items-center justify-end w-full">
      <div className="switch_div flex gap-2 m-2 items-center">
        <span data-118n="dark">Dark</span>
        <label className="switch w-10 h-5 relative flex items-center">
          <input
            onChange={setThemeVariables}
            type="checkbox"
            className="peer opacity-0 w-0 h-0 checked:transition checked:duration-300 checked:translate-x-6"
          />
          <span className="slider flex absolute cursor-pointer inset-0 bg-text-primary rounded-xl transition duration-300 before:relative before:content-[''] before:w-5 before:h-5 before:bg-bg-secondary before:border-[1px] before:border-text-primary before:rounded-full before:box-border peer-checked:before:translate-x-6 before:transition before:duration-300"></span>
        </label>
        <span data-118n="light">Light</span>
      </div>
      <div className="switch_div flex items-center gap-2">
        <UkFlagSVG className="size-8" />
        <label className="switch w-10 h-5 relative flex items-center">
          <input
            onChange={changeLanguage}
            type="checkbox"
            className="peer opacity-0 w-0 h-0 checked:transition checked:duration-300 checked:translate-x-6"
          />
          <span className="slider flex absolute cursor-pointer inset-0 bg-text-primary rounded-xl transition duration-300 before:relative before:content-[''] before:w-5 before:h-5 before:bg-bg-secondary before:border-[1px] before:border-text-primary before:rounded-full before:box-border peer-checked:before:translate-x-6 before:transition before:duration-300"></span>
        </label>
        <BrazilFlagSVG className="size-8" />
      </div>
    </div>
  );
}
