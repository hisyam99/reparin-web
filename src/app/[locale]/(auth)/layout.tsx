import GoogleCaptchaWrapper from "@/components/layout/GoogleCaptchaWrapper";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
    </>
  );
}
