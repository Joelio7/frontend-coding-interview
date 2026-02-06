import Image from "next/image";

interface LinkIconProps {
  size?: number;
  className?: string;
}

export function LinkIcon({ size = 16, className = "" }: LinkIconProps) {
  return (
    <Image
      src="/icons/links.svg"
      alt=""
      width={size}
      height={size}
      className={className}
    />
  );
}
