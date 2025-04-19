import { ReactNode } from "react";

interface MainSectionProps {
  title: string;
  children?: ReactNode;
}
export function MainSection({ title, children }: MainSectionProps) {
  return (
    <section>
      <div className="flex flex-col mb-6 gap-1">
        <h2
          data-118n={title}
          className="text-3xl text-bold capitalize font-bold">
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end w-1/2"></div>
      </div>
      {children}
    </section>
  );
}
