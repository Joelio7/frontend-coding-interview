import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeMap = {
    sm: 50,
    md: 75,
    lg: 100,
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
