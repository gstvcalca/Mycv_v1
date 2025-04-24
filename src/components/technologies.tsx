import { ExperienceItem } from "./experience_item";
import { O365SVG } from "./svgs/o365";
import { PowerAutomateSVG } from "./svgs/pautomate";
import { PbiSVG } from "./svgs/pbi";
import { PowerShellSVG } from "./svgs/powerShell";
import { PythonSVG } from "./svgs/python";
import { ReactSVG } from "./svgs/react";
import { TSSVG } from "./svgs/ts";

export function Technologies() {
  return (
    <div className="experience_div my-2 flex-col w-fit gap-1 flex mx-auto lg:mx-1">
      <ExperienceItem
        svgElement={<ReactSVG className="size-9" />}
        title="React: learning experience"
        years={1}
      />
      <ExperienceItem
        svgElement={<PythonSVG className="size-9" />}
        title="Python 3.9"
        years={2}
      />
      <ExperienceItem
        svgElement={<PowerShellSVG className="size-9" />}
        title="PowerShell"
        years={2}
      />
      <div className="logos_only flex gap-8 justify-evenly mt-4">
        <TSSVG className="border-bottom small-icon-exp" />
        <PowerAutomateSVG className="border-bottom small-icon-exp" />
        <O365SVG className="border-bottom small-icon-exp" />
        <PbiSVG className="border-bottom small-icon-exp" />
      </div>
    </div>
  );
}
