import Image from "next/image";

export default function Avatar({ user, className = "size-9 rounded-[10px]" }) {
  const initial = (user.name || user.email || "?").trim().charAt(0);

  if (user.image) {
    return (
      <Image
        src={user.image}
        alt={user.name}
        width={80}
        height={80}
        unoptimized
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center bg-primary font-bold text-primary-content uppercase ${className}`}
    >
      {initial}
    </span>
  );
}
