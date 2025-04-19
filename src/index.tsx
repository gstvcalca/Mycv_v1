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
import { ChangeEvent } from "react";
import { InfoSection } from "./components/info_section";
import { MainSection } from "./components/main_section";
import { PortfolioItem } from "./components/portfolio_item";
import { WorkItem } from "./components/work_item";

export function MainPage() {
  function setThemeVariables() {
    const root = document.documentElement;
    const defaultTheme = "#2c2c2c";
    console.log(getComputedStyle(root).getPropertyValue("--bg-primary"));
    if (
      getComputedStyle(root).getPropertyValue("--bg-primary") === defaultTheme
    ) {
      // set to light theme
      root.style.setProperty("--text-primary", "rgb(50, 50, 50)");
      root.style.setProperty("--text-secondary", "rgb(100, 100, 100)");
      root.style.setProperty("--bg-primary", "rgb(250, 250, 250)");
      root.style.setProperty("--bg-secondary", "rgb(240, 240, 240)");
      root.style.setProperty("--border-color", "rgb(50, 50, 50)");
      root.style.setProperty("--bg-gradient-start", "#464cf6");
      root.style.setProperty("--bg-gradient-ent", "#77ccf4");
      root.style.setProperty("--bg-modal", "rgba(0, 0, 0, 0.2)");
    } else {
      // set to dark theme
      root.style.setProperty("--text-primary", "rgb(245, 245, 245)");
      root.style.setProperty("--text-secondary", "#b3b3b3");
      root.style.setProperty("--bg-primary", "#2c2c2c");
      root.style.setProperty("--bg-secondary", "rgb(60, 60, 60)");
      root.style.setProperty("--border-color", "#b3b3b3");
      root.style.setProperty("--bg-gradient-start", "#464cf6");
      root.style.setProperty("--bg-gradient-ent", "#77ccf4");
      root.style.setProperty("--bg-modal", "rgba(0, 0, 0, 0.8)");
    }
  }

  const translations = {
    en: {
      languages: "Languages",
      fluent: "Fluent",
      native_speaker: "Native speaker",
      greeting: "Hi, I'm Gustavo 👋",
      position: "Software developer",
      year: "year",
      years: "years",
      education: "Education",
      bachelor: "Bachelor in Computer Engineering",
      eep: "Engineering University of Piracicaba, Brazil",
      certification: "Certification",
      planner_description:
        "This project is an adaptation from the 2024 Next Level Week event hosted by Rocketseat. After a few changes and improvements it became my frontend project for the Web Development course I'm taking at Laneway Education.",
      caputteeno_description:
        "This project is a challenge released by Rocketseat and done with the help of @kipper.dev :)",
      "work experience": "Work experience",
      jlc_analyst_title: "IT Analyst at JLC maintenance services LTD",
      jlc_analyst_year: "September 2021 - November 2023 (2 years 2 months)",
      jlc_analyst_description:
        "Using mainly Python and PowerShell, I was in charge of automating HR and charging processes. That includes development of unit tests, scripts, BOTs, as well as updating the processes docs to BPMN standards and building PBI reports to track KPIs.",
      cat_title: "IT Intern at Caterpillar Inc.",
      cat_year: "February 2020 - September 2021 (1 year 8 months)",
      cat_description:
        "Provided user support to create and publish PBI reports, development of automation solutions using O365 (Power Apps, Power Automate etc) and Automation Anywhere, documentation as-is and to-be included (BPMN).",
      modal_greeting: "Hello there,",
      modal_description:
        "I really appreciate your curiosity to see the projects I've developed. This is a friendly reminder that they are hosted on two free platforms called Vercel (frontend) and Render (backend). The backend usually takes 2 minutes to start answering requests for the first time after being idle for a few minutes. So, please, open the link, wait for two minutes and refresh the page, then everything should be working properly. Thank you!",
      go_to_vercel: "Go to vercel",
      portfolio: "Portfolio",
      prdo_description:
        "This was the main project I did at JLC. Using Python, PowerShell and Power BI, I automated a billing proccess that used to take almost two days each week of an HR employee.",
      unset: "",
    },
    ptbr: {
      languages: "Idiomas",
      fluent: "Fluente",
      native_speaker: "Nativo",
      greeting: "Olá, eu sou Gustavo 👋",
      position: "Desenvolvedor",
      year: "ano",
      years: "anos",
      education: "Formação",
      bachelor: "Bacharel em Engenharia da Computação",
      eep: "Escola de Engenharia de Piracicaba, Brasil",
      certification: "Certificados",
      planner_description:
        "Este projeto é uma adaptação do evento Next Level Week 2024, promovido pela Rocketseat. Após algumas mudanças e melhorias, ele se tornou meu projeto de frontend para o curso de Desenvolvimento Web que estou fazendo na Laneway Education.",
      caputteeno_description:
        "Este projeto é um desafio lançado pela Rocketseat e feito com a ajuda de @kipper.dev :)",
      "work experience": "Experiência",
      jlc_analyst_title: "Analista de TI na JLC Serviços de Manutenção",
      jlc_analyst_year: "Setembro 2021 - Novembro 2023 (2 anos e 2 meses)",
      jlc_analyst_description:
        "Utilizando principalmente Python e PowerShell, fui responsável por automatizar processos de RH e de faturamento. Isto inclui desde o mapeamento dos processos utilizando padrões BPMN, desenvolvimento dos scripts e testes unitários, e também a criação de relatórios para acompanhamento das principais métricas (KPIs) utilizando Power BI.",
      cat_title: "Estagiário de TI na Caterpillar Inc.",
      cat_year: "Fevereiro 2020 - Setembro 2021 (1 ano 8 meses)",
      cat_description:
        "Suporte ao cliente de diversas áreas da empresa no desenvolvimento e publicação de relatórios Power BI, bem como o desenvolvimento de soluções de automação utilizando a plataforma Office 365 - Power Apps, Power Automate (Web & Desktop) e Automation Anywhere. Documentação de processos antes (as-is) e depois (to-be) utilzando os padrões BPMN.",
      modal_greeting: "Olá,",
      modal_description:
        "Fico feliz que tenha curiosidade pelos projetos que desenvolvi. Este é apenas um aviso que eles estão hospedados em duas plataformas gratuitas, Vercel para o Frontend, e Render para o Backend. Esta última normalmente demora 2 minutos para começar a responder solicitações depois de alguns minutos de inatividade. Então, por favor, acesse o link, espere dois minutos e recarregue a página, e tudo deverá funcionar normalmente. Obrigado.",
      go_to_vercel: "Ir para a Vercel",
      portfolio: "Portfólio",
      prdo_description:
        "Este foi o meu principal projeto na JLC. Utilizando Python, PowerShell e Power BI, eu automatizei um processo de cobrança que antes tomava quase dois dias por semana de um funcionário do RH.",
      unset: "",
    },
  };

  function changeLanguage(event: ChangeEvent<HTMLInputElement>) {
    const translateTo: keyof typeof translations = event.currentTarget.checked
      ? "ptbr"
      : "en";
    const newTranslationObj = translations[translateTo];
    const elements = document.querySelectorAll("[data-118n]");
    elements.forEach((el) => {
      const key = (el.getAttribute("data-118n") ||
        "unset") as keyof typeof newTranslationObj;
      if (key) {
        el.textContent = newTranslationObj[key] || el.textContent;
      }
    });
  }

  return (
    <div>
      <main className="flex flex-col min-h-screen border-2 py-12 px-[6%] pt-[0.5%] space-y-6 items-center justify-center bg-bg-primary text-text-primary">
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
        <div className="flex flex-1 w-full">
          <div className="flex-1 header-container gap-3 flex flex-col">
            <div className="header-description flex gap-6">
              <div className="w-fit">
                <img
                  src="./IMG_2081.jpg"
                  className="size-56 rounded-full border-border-color border-solid border-[1px]"
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
          </div>
          <div className="right-side flex flex-col gap-7">
            <InfoSection title="languages">
              <div className="languages_info">
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
              <div className="education-item border-l-2 border-border-color border-solid pl-2">
                <span
                  className="education-title font-semibold"
                  data-118n="bachelor">
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
            </InfoSection>
            <InfoSection title="certification">
              <div className="certification">
                <ul className="c1 list-disc">
                  <li className="c2">6 Sigma Green Belt</li>
                  <li>Microsoft PL-900 (Power Platform)</li>
                  <li>Microsoft DA-100 (Power BI)</li>
                </ul>
              </div>
            </InfoSection>
          </div>
        </div>
        <MainSection title="portfolio">
          <div className="portfolio_gallery flex gap-3">
            <PortfolioItem
              title="Plann.er"
              href="/planner"
              img_url="./planner_thumbnail.png">
              <p data-118n="planner_description">
                This project is an adaptation from the 2024 Next Level Week
                event hosted by Rocketseat. After a few changes and improvements
                it became my frontend project for the Web Development course I'm
                taking at Laneway Education.
              </p>
            </PortfolioItem>
            <PortfolioItem
              title="caputteeno"
              href="/caputteeno"
              img_url="./caputteeno_thumbnail.png">
              <p data-118n="caputteeno_description">
                This project is a challenge released by Rocketseat and done with
                the help of
                <a href="https://www.instagram.com/kipper.dev/">
                  @kipper.dev
                </a>{" "}
                :)
              </p>
            </PortfolioItem>
            <PortfolioItem
              title="ArcelorMittal Portal RDO"
              href="/prdo"
              img_url="./arcelormittal.svg">
              <p data-118n="prdo_description">
                This was the main project I did at JLC. Using Python, PowerShell
                and Power BI, I automated a billing proccess that used to take
                almost two days each week of an HR employee.
              </p>
            </PortfolioItem>
          </div>
        </MainSection>
        <MainSection title="work experience">
          <div className="flex flex-col gap-5">
          <WorkItem
            title="IT Analyst at JLC Maintenance Services LTD"
            title_translation_reference="jlc_analyst_title"
            position_time="September 2021 - November 2023 (2 years 2 months)"
            position_time_translation_reference="jlc_analyst_year">
            <p data-118n="jlc_analyst_description">
              Using mainly Python and PowerShell, I was in charge of automating
              HR and charging processes. That includes development of unit
              tests, scripts, BOTs, as well as updating the processes docs to
              BPMN standards and building PBI reports to track KPIs.
            </p>
          </WorkItem>
          <WorkItem
            title="IT Intern at Caterpillar Inc."
            title_translation_reference="cat_title"
            position_time="February 2020 - September 2021 (1 year 8 months)"
            position_time_translation_reference="cat_year">
            <p data-118n="cat_description">
              Provided user support to create and publish PBI reports,
              development of automation solutions using O365 (Power Apps, Power
              Automate etc) and Automation Anywhere, documentation as-is and
              to-be included (BPMN).
            </p>
          </WorkItem>
          </div>
        </MainSection>
      </main>
    </div>
  );
}
