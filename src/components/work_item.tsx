import { ReactNode } from "react";

interface WorkItemProps {
  children?: ReactNode;
  title: string;
  title_translation_reference: string;
  position_time: string;
  position_time_translation_reference: string;
}

export function WorkItem({
  children,
  title,
  title_translation_reference,
  position_time,
  position_time_translation_reference,
}: WorkItemProps) {
  return (
    <div className="work_item border-[1px] border-border-color rounded-xl p-3 text-justify bg-diagonal-stripes">
      <h3 data-118n={title_translation_reference} className="text-xl font-semibold">
        {title}
      </h3>
      <p data-118n={position_time_translation_reference} className="text-text-secondary">
        {position_time}
      </p>
      <div className="h-px w-full bg-border-color my-3"></div>
      {children}
    </div>
  );
}
