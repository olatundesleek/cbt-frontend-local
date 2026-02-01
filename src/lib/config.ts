export const getBaseURL = () => {
  if (typeof window === "undefined") return "http://localhost:4000";
  const host = window.location.hostname;
  return `http://${host}:4000`;
};

// Export as functions, not constants
export const getAPIURL = () => `${getBaseURL()}/api`;
export const getSocketURL = () => getBaseURL();

export const getImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${getBaseURL()}${path.startsWith("/") ? path : "/uploads/" + path}`;
};
