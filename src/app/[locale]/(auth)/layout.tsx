import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
    </>
  );
}
