// utils/getCurrentLanguage.ts
export function getCurrentLanguage(pathname: string): string {
  const pathSegments = pathname.split("/");
  return pathSegments[1] || "en"; // Default to 'en' if no language segment is found
}
