import Image from "next/image";
import avatar from "@/public/avatar.jpeg";

export default function Avatar() {
  return (
    <Image
      src={avatar}
      alt="Avatar"
      width={64}
      height={64}
      className="rounded-full"
    />
  );
}
