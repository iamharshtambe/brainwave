import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={34}
            height={34}
            className="rounded-full"
          />
          <h1 className="text-lg font-bold">Brainwave</h1>
        </Link>
        {children}
      </div>
    </div>
  );
}
