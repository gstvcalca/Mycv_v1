import { ReactNode } from "react";

interface WorkItemProps {
  children?: ReactNode;
  title: string;
  title_translation_reference: string;
  position_time: string;
  position_time_translation_reference: string;
  img_url: string;
  link_url?: string;
}

export function WorkItemPlain({
  children,
  title,
  title_translation_reference,
  position_time,
  position_time_translation_reference,
}: WorkItemProps) {
  return (
    <div className="flex items-start gap-2 flex-col pl-3">
      <div>
        <h3
          data-118n={title_translation_reference}
          className="text-xl font-semibold">
          {title}
        </h3>
        <span
          data-118n={position_time_translation_reference}
          className="text-text-secondary">
          {position_time}
        </span>
      </div>
      {children}
    </div>
  );
}
