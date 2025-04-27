import { X } from "lucide-react";
import { ReactNode, useState } from "react";

interface PortfolioItemProps {
  children?: ReactNode;
  href: string;
  title: string;
  img_url: string;
}

export function PortfolioItemWithModal({
  children,
  href,
  img_url,
  title,
}: PortfolioItemProps) {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <div className="portfolio_item flex flex-col rounded-xl border-border-color border-[1px] gap-2 bg-diagonal-stripes">
      <a className="" onClick={() => setModalState(true)}>
        <img
          src={img_url}
          className="rounded-xl border-[1px] border-border-color hover:scale-105 transition duration_300"
        />
      </a>
      <h3 className="text-center text-xl font-bold">{title}</h3>
      <div className="separator_4 w-4/5 h-px bg-border-color rounded-full mx-auto"></div>
      <div className="p-4 text-justify">{children}</div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center my-0 text-text-primary backdrop-blur-sm">
        <div className="w-[90%] sm:w-1/2 border-border-color border-[1px] flex flex-col rounded-xl p-5 gap-5 bg-bg-primary text-sm sm:text-base">
          <div className="flex justify-between">
            <p>Hello There,</p>
            <button onClick={() => setModalState(false)}>
              <X />
            </button>
          </div>
          <p className="indent-10">
            I really appreciate your curiosity to see the projects I've
            developed. This is a friendly reminder that the backend is hosted on
            a free platform called{" "}
            <a
              href="https://render.com/"
              className="underline underline-offset-2">
              Render
            </a>{" "}
            and it usually takes 2 minutes to start answering requests for the
            first time after being idle for a few minutes. So, please, open the
            link, wait for two minutes and refresh the page, then everything
            should be working properly. Thank you!
          </p>
          <button className="bg-bg-secondary w-fit m-auto px-7 py-3 rounded-xl hover:bg-text-secondary border-text-secondary border-[1px]">
            <a href={href}>Go to Project</a>
          </button>
        </div>
      </div>
      )}
    </div>
  );
}
