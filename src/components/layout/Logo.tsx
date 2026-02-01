import Link from "next/link";
import { useSystemSettingsStore } from "@/store/useSystemSettingsStore";
import { getBaseURL } from "@/lib/config";

export default function Logo() {
  const settings = useSystemSettingsStore((store) => store.settings);

  // Get base URL
  const baseURL = getBaseURL();

  let logoUrl: string | null = null;

  if (settings?.logoUrl) {
    // Absolute URL (http://...) -> replace localhost with network host if needed
    if (settings.logoUrl.startsWith("http")) {
      if (typeof window !== "undefined") {
        const host = window.location.hostname;
        logoUrl = settings.logoUrl.replace(/localhost|127\.0\.0\.1/, host);
      } else {
        logoUrl = settings.logoUrl;
      }
    } else {
      // Relative URL -> prepend baseURL
      logoUrl = `${baseURL}${settings.logoUrl.startsWith("/") ? "" : "/"}${
        settings.logoUrl
      }`;
    }
  }

  const shortName = settings?.shortName ?? "CBT TEST";
  const institutionName = settings?.institutionName ?? "CBT";

  return (
    <Link href="/dashboard">
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoUrl} alt={institutionName} className="h-10 w-auto" />
      ) : (
        <span className="text-primary-900 shadow text-2xl font-black">
          {shortName}
        </span>
      )}
    </Link>
  );
}
