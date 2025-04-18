import { BrazilFlagSVG } from "./components/brazil_flag";
import { EmailSVG } from "./components/email";
import { GitHubSVG } from "./components/github";
import { InstagramSVG } from "./components/instagram";
import { LinkedInSVG } from "./components/linkedin";
import { O365SVG } from "./components/o365";
import { PowerAutomateSVG } from "./components/pautomate";
import { PbiSVG } from "./components/pbi";
import { PowerShellSVG } from "./components/PowerShell";
import { PythonSVG } from "./components/python";
import { ReactSVG } from "./components/react";
import { TSSVG } from "./components/ts";
import { UkFlagSVG } from "./components/uk_flag";

export function MainPage() {
  return (
    <div>
      <main className="flex flex-col min-h-screen border-2 py-12 px-[8%] space-y-6 items-center justify-center bg-bg-primary text-text-primary">
        <div className="toggle_div flex gap-6 m-2 items-center">
          <div className="switch_div flex gap-2 m-2 items-center">
            <span data-118n="dark">Dark</span>
            <label className="switch">
              <input type="checkbox" id="toggle_theme" />
              <span className="slider"></span>
            </label>
            <span data-118n="light">Light</span>
          </div>
          <div className="switch_div flex items-center gap-2">
            <UkFlagSVG />
            <label className="switch">
              <input type="checkbox" id="toggle_language" />
              <span className="language_slider"></span>
            </label>
            <BrazilFlagSVG />
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <div className="flex-1 header-container">
            <div className="header-description flex gap-2">
              <div className="w-fit">
                <img
                  src="IMG_2081.jpg"
                  className="size-52 rounded-full border-white border-solid border-[1px]"
                />
              </div>
              <div className="flex flex-col py-6 justify-between">
                <div>
                  <h1 data-118n="greeting">Hi, I'm Gustavo 👋</h1>
                  <h3 data-118n="position">Software developer</h3>
                  <div className="location flex py-3">
                    <svg
                      className="icon"
                      fill="#ffffff"
                      width="20px"
                      height="20px"
                      viewBox="0 0 56 56"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M 27.9883 43.1992 C 28.9492 43.1992 30.1680 39.4492 30.1680 32.5352 L 30.1680 21.4961 C 33.9883 20.5117 36.8008 17.0430 36.8008 12.9180 C 36.8008 8.0664 32.8867 4.1055 27.9883 4.1055 C 23.1133 4.1055 19.1992 8.0664 19.1992 12.9180 C 19.1992 17.0430 21.9883 20.5117 25.8086 21.4726 L 25.8086 32.5352 C 25.8086 39.4258 27.0508 43.1992 27.9883 43.1992 Z M 25.4805 13.4102 C 23.8867 13.4102 22.4805 12.0039 22.4805 10.3867 C 22.4805 8.7461 23.8867 7.3633 25.4805 7.3633 C 27.1211 7.3633 28.4805 8.7461 28.4805 10.3867 C 28.4805 12.0039 27.1211 13.4102 25.4805 13.4102 Z M 27.9883 51.8945 C 42.1680 51.8945 50.3711 46.9727 50.3711 41.7461 C 50.3711 35.4414 40.3399 31.6211 33.8711 31.5977 L 33.8711 35.2539 C 38.3711 35.2774 45.3789 37.7148 45.3789 41.1836 C 45.3789 44.8633 38.7696 47.9570 27.9883 47.9570 C 17.2305 47.9570 10.6211 44.8867 10.6211 41.1836 C 10.6211 37.7148 17.6289 35.2774 22.1289 35.2539 L 22.1289 31.5977 C 15.6602 31.6211 5.6289 35.4414 5.6289 41.7461 C 5.6289 46.9727 13.8321 51.8945 27.9883 51.8945 Z" />
                    </svg>
                    <span>Kirribili, NSW</span>
                  </div>
                </div>
                <div className="social_media">
                  <div className="social_icons flex gap-2 justify-evenly">
                    <div className="button_bg">
                      <a
                        href="https://www.instagram.com/gstvcalca/"
                        target="_blank">
                        <InstagramSVG />
                      </a>
                    </div>
                    <div className="button_bg">
                      <a
                        href="https://www.linkedin.com/in/gcalca/"
                        target="_blank">
                        <LinkedInSVG />
                      </a>
                    </div>
                    <div className="button_bg">
                      <a href="https://github.com/gstvcalca" target="_blank">
                        <GitHubSVG />
                      </a>
                    </div>
                    <div className="button_bg">
                      <a href="mailto:gstv.calca@gmail.com">
                        <EmailSVG />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience_div">
              <div className="experience_item flex items-center gap-2">
                <ReactSVG />
                <div className="experience_bar flex items-center border-[1px] border-white rounded-xl w-[300px]">
                  <div
                    className="actual_experience w-1/3 flex items-center justify-center bg-black rounded-xl"
                    title="learning experience">
                    <span>
                      1 <span data-118n="year">year</span>*
                    </span>
                  </div>
                </div>
              </div>
              <div className="experience_item">
                <PythonSVG className="" />
                <div className="experience_bar">
                  <div className="actual_experience two_years">
                    <span>
                      2 <span data-118n="years">years</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="experience_item">
                <PowerShellSVG />
                <div className="experience_bar">
                  <div className="actual_experience two_years">
                    <span>
                      2 <span data-118n="years">years</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="logos_only flex flex-1 gap-8">
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
                <div className="language_item">
                  <UkFlagSVG />
                  <div>
                    <span className="infos_title">EN — </span>
                    <span data-118n="fluent">Fluent</span>
                  </div>
                </div>
                <div className="language_item">
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
                  <span>
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
