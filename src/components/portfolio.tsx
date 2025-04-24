import { MainSection } from "./main_section";
import { PortfolioItem } from "./portfolio_item";

export function Portfolio() {
  return (
    <MainSection title="portfolio">
      <div className="portfolio_gallery flex gap-3 flex-col lg:flex-row">
        <PortfolioItem
          title="Plann.er"
          href="/planner"
          img_url="./planner_thumbnail.png">
          <p>
            <span data-118n="planner_description_1">
              This project is an adaptation from the 2024 Next Level Week event
              hosted by
            </span>
            <a
              href="https://app.rocketseat.com.br/?type=ALL"
              className="underline underline-offset-2 ml-1">
              Rocketseat
            </a>
            <span data-118n="planner_description_2">
              . After a few changes and improvements it became my frontend
              project for the Web Development course I'm taking at Laneway
              Education.
            </span>
          </p>
        </PortfolioItem>
        <PortfolioItem
          title="caputteeno"
          href="https://computer-force.vercel.app/"
          img_url="./caputteeno_thumbnail.png">
          <span data-118n="caputteeno_description">
            This project is a challenge released by Rocketseat and done with the
            help of
          </span>
          <a
            href="https://www.instagram.com/kipper.dev/"
            className="underline px-1">
            @kipper.dev
          </a>
          <span>:)</span>
        </PortfolioItem>
        <PortfolioItem
          title="ArcelorMittal Portal RDO"
          href="/prdo"
          img_url="./arcelormittal.svg">
          <p data-118n="prdo_description">
            This was the main project I did at JLC. Using Python, PowerShell and
            Power BI, I automated a billing proccess that used to take almost
            two days each week of an HR employee.
          </p>
        </PortfolioItem>
      </div>
    </MainSection>
  );
}
