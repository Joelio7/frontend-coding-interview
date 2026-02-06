import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeMap = {
    sm: 24,
    md: 32,
    lg: 48,
  };

  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={sizeMap[size]}
      height={sizeMap[size]}
    />
  );
}
