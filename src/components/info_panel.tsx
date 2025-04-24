import { InfoSection } from "./info_section";
import { BrazilFlagSVG } from "./svgs/brazil_flag";
import { UkFlagSVG } from "./svgs/uk_flag";

export function InfoPanel() {
  return (
    <div className="right-side flex flex-col gap-7 p-2">
      <InfoSection title="languages">
        <div className="languages_info flex w-2/3 lg:w-full justify-center items-center lg:items-start flex-col gap-1 ">
          <div className="language_item flex items-center gap-2">
            <UkFlagSVG className="size-8" />
            <div>
              <span className="infos_title">EN — </span>
              <span data-118n="fluent">Fluent</span>
            </div>
          </div>
          <div className="language_item flex items-center gap-2">
            <BrazilFlagSVG className="size-8" />
            <div>
              <span className="infos_title">PT-BR — </span>
              <span data-118n="native_speaker">Native speaker</span>
            </div>
          </div>
        </div>
      </InfoSection>
      <InfoSection title="education">
        <div className="border-l-2 border-border-color border-solid pl-2 py-1 gap-2 items-center">
          <p
            className="education-title font-semibold mr-1"
            data-118n="bachelor">
            Bachelor in Computer Engineering
          </p>
          <a
            data-118n="eep"
            className="underline underline-offset-2"
            href="https://www.eep.br/">
            Engineering University of Piracicaba
          </a>
          <span data-118n="brazil">, Brazil</span>
          <p className="text-text-secondary text-sm">2017 – 2021</p>
        </div>
        <div className="border-l-2 border-border-color border-solid pl-2 py-1 gap-2 items-center">
          <p
            className="education-title font-semibold mr-1"
            data-118n="diploma_web">
            Diploma IV in Web Development
          </p>
          <a
            className="underline underline-offset-2"
            href="https://laneway.edu.au/">
            Laneway Education
          </a>
          <span>, Sydney</span>
          <p className="text-text-secondary text-sm">2024 – 2025</p>
        </div>
      </InfoSection>
      <InfoSection title="certification">
        <div className="certification ">
          <ul className="c1 list-disc list-inside">
            <li className="c2">6 Sigma Green Belt</li>
            <li>Microsoft PL-900 (Power Platform)</li>
            <li>Microsoft DA-100 (Power BI)</li>
          </ul>
        </div>
      </InfoSection>
    </div>
  );
}
