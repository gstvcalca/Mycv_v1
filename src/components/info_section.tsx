import { ReactNode } from "react";

interface InfoSectionProps {
  children?: ReactNode;
  title: string;
}

export function InfoSection({children, title}:InfoSectionProps) {
  return (
    <div className="infos flex flex-col items-center w-full">
      <h3 data-118n={title} className="uppercase text-lg font-bold">{title}</h3>
      <div className="rounded-[100%] separator h-px bg-border-color mb-4"/>
      <div className="flex flex-col items-start w-full gap-2">{children}</div>
    </div>
  );
}
