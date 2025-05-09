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

export function WorkItem({
  children,
  title,
  title_translation_reference,
  position_time,
  position_time_translation_reference,
  img_url,
  link_url,
  tags,
}: WorkItemProps) {
  const ImgElement = (
    <img src={img_url} className="size-16 rounded-lg border-border-color" />
  );

  return (
    <div className="work_item border-[1px] border-border-color rounded-xl p-3 text-justify bg-diagonal-stripes">
      <div className="flex items-center gap-2 flex-col md:flex-row">
        {link_url ? (
          <a href={link_url} target="_blank">
            {ImgElement}
          </a>
        ) : (
          ImgElement
        )}
        <div>
          <div className="flex items-center flex-col md:flex-row">
            <h3
              data-118n={title_translation_reference}
              className="text-xl font-semibold mr-2">
              {title}
            </h3>
            {tags}
          </div>
          <p
            data-118n={position_time_translation_reference}
            className="text-text-secondary">
            {position_time}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-border-color my-3"></div>
      {children}
    </div>
  );
}
