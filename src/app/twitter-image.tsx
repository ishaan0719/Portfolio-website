import OpengraphImage from "./opengraph-image";
import { profile } from "@/content";

export const dynamic = "force-static";
export const alt = `${profile.name}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
