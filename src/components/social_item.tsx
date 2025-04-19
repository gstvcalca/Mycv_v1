import { SVGProps } from "react";


interface SocialItemProps {
  SvgElement: (props: SVGProps<SVGSVGElement>) => JSX.Element;  
  href: string;
}

export function SocialItem({href, SvgElement}: SocialItemProps) {
  return (
    <div className="flex items-center justify-center">
      <a href={href} target="_blank" className="border-[1px] border-solid border-border-color rounded-full p-3 group hover:scale-105 hover:border-bg-gradient-end hover:text-bg-gradient-end">
        <SvgElement className="group stroke-1 stroke-bg-primary size-6" />
      </a>
    </div>
  );
}
