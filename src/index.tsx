import { BrazilFlagSVG } from "./components/svgs/brazil_flag";
import { EmailSVG } from "./components/svgs/email";
import { ExperienceItem } from "./components/experience_item";
import { GitHubSVG } from "./components/svgs/github";
import { InstagramSVG } from "./components/svgs/instagram";
import { LinkedInSVG } from "./components/svgs/linkedin";
import { O365SVG } from "./components/svgs/o365";
import { PowerAutomateSVG } from "./components/svgs/pautomate";
import { PbiSVG } from "./components/svgs/pbi";
import { PowerShellSVG } from "./components/svgs/powerShell";
import { PythonSVG } from "./components/svgs/python";
import { ReactSVG } from "./components/svgs/react";
import { SocialItem } from "./components/social_item";
import { TSSVG } from "./components/svgs/ts";
import { UkFlagSVG } from "./components/svgs/uk_flag";
import { MapPin } from "lucide-react";

export function MainPage() {
  function setThemeVariables(){
    const root = document.documentElement;
    const defaultTheme = '#2c2c2c'
    console.log(getComputedStyle(root).getPropertyValue("--bg-primary"));
    if (
      getComputedStyle(root).getPropertyValue("--bg-primary") ===
      defaultTheme
    ) {
      root.style.setProperty("--text-primary", "rgb(50, 50, 50)");
      root.style.setProperty("--text-secondary", "rgb(100, 100, 100)");
      root.style.setProperty("--bg-primary", "rgb(250, 250, 250)");
      root.style.setProperty("--bg-secondary", "rgb(240, 240, 240)");
      root.style.setProperty("--border-color", "rgb(50, 50, 50)");
      root.style.setProperty("--bg-gradient-start", "#464cf6");
      root.style.setProperty("--bg-gradient-ent", "#77ccf4");
      root.style.setProperty("--bg-modal", "rgba(0, 0, 0, 0.2)");
    } else {
      root.style.setProperty("--text-primary", "rgb(245, 245, 245)");
      root.style.setProperty("--text-secondary", "#b3b3b3");
      root.style.setProperty("--bg-primary", "#2c2c2c");
      root.style.setProperty("--bg-secondary", "rgb(60, 60, 60)");
      root.style.setProperty("--border-color", "white");
      root.style.setProperty("--bg-gradient-start", "#464cf6");
      root.style.setProperty("--bg-gradient-ent", "#77ccf4");
      root.style.setProperty("--bg-modal", "rgba(0, 0, 0, 0.8)");
    }
  }

  return (
    <div>
      <main className="flex flex-col min-h-screen border-2 py-12 px-[8%] space-y-6 items-center justify-center bg-bg-primary text-text-primary">
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
            <UkFlagSVG />
            <label className="switch w-10 h-5 relative flex items-center">
              <input
                type="checkbox"
                className="peer opacity-0 w-0 h-0 checked:transition checked:duration-300 checked:translate-x-6"
              />
              <span className="slider flex absolute cursor-pointer inset-0 bg-text-primary rounded-xl transition duration-300 before:relative before:content-[''] before:w-5 before:h-5 before:bg-bg-secondary before:border-[1px] before:border-text-primary before:rounded-full before:box-border peer-checked:before:translate-x-6 before:transition before:duration-300"></span>
            </label>
            <BrazilFlagSVG />
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <div className="flex-1 header-container gap-3 flex flex-col">
            <div className="header-description flex gap-6">
              <div className="w-fit">
                <img
                  src="./IMG_2081.jpg"
                  className="size-56 rounded-full border-white border-solid border-[1px]"
                />
              </div>
              <div className="flex flex-col py-6 justify-between">
                <div>
                  <h1
                    data-118n="greeting"
                    className="text-4xl font-bold text-text-primary">
                    Hi, I'm Gustavo 👋
                  </h1>
                  <h3
                    data-118n="position"
                    className="text-xl font-normal text-text-secondary">
                    Software developer
                  </h3>
                  <div className="location flex py-2 items-center gap-2">
                    <MapPin strokeWidth={0.75} />
                    <span>Kirribili, Sydney</span>
                  </div>
                </div>
                <div className="social_media">
                  <div className="social_icons flex gap-3 justify-between items-center">
                    <SocialItem
                      href="https://www.instagram.com/gstvcalca/"
                      SvgElement={InstagramSVG}
                    />
                    <SocialItem
                      href="https://www.linkedin.com/in/gcalca/"
                      SvgElement={LinkedInSVG}
                    />
                    <SocialItem
                      href="https://github.com/gstvcalca"
                      SvgElement={GitHubSVG}
                    />
                    <SocialItem
                      href="mailto:gstv.calca@gmail.com"
                      SvgElement={EmailSVG}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="experience_div my-2 flex-col w-fit gap-1 flex">
              <ExperienceItem
                svgElement={<ReactSVG className="size-9" />}
                title="Learning experience"
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
          </div>
          <div className="right-side">
            <div className="infos">
              <h3 data-118n="languages">Languages</h3>
              <div className="separator"></div>
              <div className="languages_info">
                <div className="language_item flex items-center gap-2">
                  <UkFlagSVG />
                  <div>
                    <span className="infos_title">EN — </span>
                    <span data-118n="fluent">Fluent</span>
                  </div>
                </div>
                <div className="language_item flex items-center gap-2">
                  <BrazilFlagSVG />
                  <div>
                    <span className="infos_title">PT-BR —</span>
                    <span data-118n="native_speaker">Native speaker</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <h3 data-118n="education">Education</h3>
              <div className="separator"></div>
              <div className="education-info">
                <div className="education-item">
                  <span className="education-title" data-118n="bachelor">
                    Bachelor in Computer Engineering
                  </span>
                  <br />
                  <span className="gap-1 flex">
                    2017 – 2021,
                    <span data-118n="eep">
                      Engineering University of Piracicaba, Brazil
                    </span>
                  </span>
                </div>
              </div>
              <h3 data-118n="certification">Certification</h3>
              <div className="separator"></div>
              <div className="certification">
                <ul className="c1">
                  <li className="c2">6 Sigma Green Belt</li>
                  <li>Microsoft PL-900 (Power Platform)</li>
                  <li>Microsoft DA-100 (Power BI)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="work_experience">
          <div className="work_title">
            <h2 data-118n="work_experience">Work experience</h2>
            <div className="separator_3"></div>
          </div>

          <div className="work_item">
            <h3 data-118n="jlc_analyst_title">
              IT Analyst at JLC maintenance services LTD
            </h3>
            <p data-118n="jlc_analyst_year">
              September 2021 - November 2023 (2 years 2 months)
            </p>
            <div className="separator_2"></div>
            <p data-118n="jlc_analyst_description">
              Using mainly Python and PowerShell, I was in charge of automating
              HR and charging processes. That includes development of unit
              tests, scripts, BOTs, as well as updating the processes docs to
              BPMN standards and building PBI reports to track KPIs.
            </p>
          </div>
          <div className="work_item">
            <h3 data-118n="cat_title">IT Intern at Caterpillar Inc.</h3>
            <p data-118n="cat_year">
              February 2020 - September 2021 (1 year 8 months)
            </p>
            <div className="separator_2"></div>
            <p data-118n="cat_description">
              Provided user support to create and publish PBI reports,
              development of automation solutions using O365 (Power Apps, Power
              Automate etc) and Automation Anywhere, documentation as-is and
              to-be included (BPMN).
            </p>
          </div>
        </section>
        <section className="portfolio">
          <div className="work_title">
            <h2 data-118n="portfolio">Portfolio</h2>
            <div className="separator_3"></div>
          </div>
          <div className="portfolio_items">
            <div className="portfolio_item">
              <button className="portfolio_btn open_modal_button">
                <img src="planner_thumbnail.png" />
              </button>
              <div className="warning_modal_container">
                <div className="warning_modal_content">
                  <div className="warning_modal_title">
                    <h3 data-118n="modal_greeting">Hello There,</h3>
                    <button className="close_modal_button">X</button>
                  </div>
                  <p data-118n="modal_description">
                    I really appreciate your curiosity to see the projects I've
                    developed. This is a friendly reminder that they are hosted
                    on two free platforms called Vercel (frontend) and Render
                    (backend). The backend usually takes 2 minutes to start
                    answering requests for the first time after being idle for a
                    few minutes. So, please, open the link, wait for two minutes
                    and refresh the page, then everything should be working
                    properly. Thank you!
                  </p>
                  <a
                    href="https://planner-nine-sooty.vercel.app/"
                    className="go_to_vercel_anchor"
                    data-118n="go_to_vercel">
                    Go to vercel
                  </a>
                </div>
              </div>
              <h3>Plann.er</h3>
              <div className="separator_4"></div>
              <p data-118n="planner_description">
                This project is an adaptation from the 2024 Next Level Week
                event hosted by Rocketseat. After a few changes and improvements
                it became my frontend project for the Web Development course I'm
                taking at Laneway Education.
              </p>
            </div>
            <div className="portfolio_item">
              <button className="portfolio_btn open_modal_button">
                <img src="caputteeno_thumbnail.png" />
              </button>
              <div className="warning_modal_container">
                <div className="warning_modal_content">
                  <div className="warning_modal_title">
                    <h3 data-118n="modal_greeting">Hello There,</h3>
                    <button className="close_modal_button">X</button>
                  </div>
                  <p data-118n="modal_description">
                    I really appreciate your curiosity to see the projects I've
                    developed. This is a friendly reminder that they are hosted
                    on two free platforms called Vercel (frontend) and Render
                    (backend). The backend usually takes 2 minutes to start
                    answering requests for the first time after being idle for a
                    few minutes. So, please, open the link, wait for two minutes
                    and refresh the page, then everything should be working
                    properly. Thank you!
                  </p>
                  <a
                    href="https://computer-force.vercel.app/"
                    className="go_to_vercel_anchor"
                    data-118n="go_to_vercel">
                    Go to vercel
                  </a>
                </div>
              </div>
              <h3>Caputteeno</h3>
              <div className="separator_4"></div>
              <p data-118n="caputteeno_description">
                This project is a challenge released by Rocketseat and done with
                the help of
                <a href="https://www.instagram.com/kipper.dev/">
                  @kipper.dev
                </a>{" "}
                :)
              </p>
            </div>
            <div className="portfolio_item">
              <a href="/portalrdo.html">
                <img src="arcelormittal.svg" />
              </a>
              <h3>ArcelorMittal Portal RDO</h3>
              <div className="separator_4"></div>
              <p data-118n="prdo_description"></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
