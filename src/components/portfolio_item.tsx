import { ReactNode } from "react";

interface PortfolioItemProps {
  children?: ReactNode;
  href: string;
  title: string;
  img_url: string;
}

export function PortfolioItem({
  children,
  href,
  img_url,
  title,
}: PortfolioItemProps) {
  return (
    <div className="portfolio_item flex flex-col rounded-xl border-border-color border-[1px] gap-2 bg-diagonal-stripes">
      <a className="" href={href}>
        <img src={img_url} className="rounded-xl border-[1px] border-border-color hover:scale-105 transition duration_300" />
      </a>
      <h3 className="text-center text-xl font-bold">{title}</h3>
      <div className="separator_4 w-4/5 h-px bg-border-color rounded-full mx-auto"></div>
      <div className="p-4 text-justify">{children}</div>
    </div>
  );
}
