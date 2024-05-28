export function getCurrentLanguage(pathname: string): string {
  const pathSegments = pathname.split("/");
  return pathSegments[1] || "id";
}