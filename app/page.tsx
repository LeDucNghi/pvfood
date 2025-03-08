import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function Home() {
  return (
    <Image
      src={faker.image.avatar()}
      alt="Vercel Logo"
      width={100}
      height={24}
    />
  );
}
