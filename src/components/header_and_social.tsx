import { MapPin } from "lucide-react";
import { SocialItem } from "./social_item";
import { EmailSVG } from "./svgs/email";
import { GitHubSVG } from "./svgs/github";
import { InstagramSVG } from "./svgs/instagram";
import { LinkedInSVG } from "./svgs/linkedin";

export function HeaderAndSocial() {
  return (
    <div className="flex flex-col py-6 justify-between gap-6">
      <div>
        <h1
          data-118n="greeting"
          className="text-4xl font-bold text-text-primary">
          Hi, I'm Gustavo 👋
        </h1>
        <h3
          data-118n="position"
          className="text-xl font-normal text-text-secondary">
          Software developer
        </h3>
        <div className="location flex py-2 items-center gap-2">
          <MapPin strokeWidth={0.75} />
          <span>Kirribili, Sydney</span>
        </div>
      </div>
      <div className="social_media">
        <div className="social_icons flex gap-3 justify-between items-center lg:max-w-72">
          <SocialItem
            href="https://www.instagram.com/gstvcalca/"
            SvgElement={InstagramSVG}
          />
          <SocialItem
            href="https://www.linkedin.com/in/gcalca/"
            SvgElement={LinkedInSVG}
          />
          <SocialItem
            href="https://github.com/gstvcalca"
            SvgElement={GitHubSVG}
          />
          <SocialItem
            href="mailto:gstv.calca@gmail.com"
            SvgElement={EmailSVG}
          />
        </div>
      </div>
    </div>
  );
}
