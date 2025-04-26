import { ReactNode } from "react";

interface WorkItemProps {
  children?: ReactNode;
  title: string;
  title_translation_reference: string;
  position_time: string;
  position_time_translation_reference: string;
  img_url: string;
  link_url?: string;
  tags?: ReactNode[];
}

export function WorkItemPlain({
  children,
  title,
  title_translation_reference,
  position_time,
  position_time_translation_reference,
  tags,
}: WorkItemProps) {
  return (
    <div className="flex items-start gap-2 flex-col pl-3">
      <div>
        <div className="flex items-center">
          <h3
            data-118n={title_translation_reference}
            className="text-xl font-semibold mr-2">
            {title}
          </h3>
          {tags}
        </div>
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
