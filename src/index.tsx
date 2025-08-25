import { ChangeEvent } from "react";
import { ToggleComponents } from "./components/toggle_components";
import { ProfileImage } from "./components/profile_img";
import { HeaderAndSocial } from "./components/header_and_social";
import { Technologies } from "./components/technologies";
import { InfoPanel } from "./components/info_panel";
import { WorkExperience } from "./components/work_experience";
import { Portfolio } from "./components/portfolio";
import { jsonTranslations } from "./assets/translations.json";


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

  const translations: Record<string, Record<string, string>> = jsonTranslations;

  return (
    <div>
      <main className="flex flex-col min-h-screen py-12 px-[6%] pt-[0.5%] space-y-6 items-center justify-center bg-bg-primary text-text-primary relative text-lg">
        <ToggleComponents
          changeLanguage={changeLanguage}
          setThemeVariables={setThemeVariables}
        />
        <div className="flex flex-1 w-full bg-[url('./bg.png')] bg-no-repeat bg-center flex-col lg:flex-row">
          <div className="flex-1 header-container gap-3 flex flex-col">
            <div className="header-description flex lg:gap-6 flex-col lg:flex-row items-center">
              <ProfileImage />
              <HeaderAndSocial />
            </div>
            <Technologies />
          </div>
          <InfoPanel />
        </div>
        <Portfolio />
        <WorkExperience />
      </main>

      
    </div>
  );
}
