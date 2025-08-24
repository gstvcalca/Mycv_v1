import { ReactNode } from "react";

interface WorkItemProps {
  children?: ReactNode;
  img_url: string;
  link_url?: string;
  company: string
}

export function WorkItemMultiple({
  children,
  img_url,
  link_url,
  company
}: WorkItemProps) {
  const ImgElement = (
    <img src={img_url} className="size-16 rounded-lg border-(--border-color)" />
  );
  return (
    <div className="box-border border-[1px] border-(--border-color) rounded-xl p-3 text-justify bg-diagonal-stripes flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        {link_url ? (
          <a href={link_url} target="_blank">
            {ImgElement}
          </a>
        ) : (
          ImgElement
        )}
        <div>
          <h3
            className="text-xl font-semibold">
            {company}
          </h3>
        </div>
      </div>
      {children}
    </div>
  );
}
