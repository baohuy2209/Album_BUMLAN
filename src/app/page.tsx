import { HeartPulse } from "lucide-react";
export default function Home() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div>
        <span className="font-semibold text-[32px]">
          This is a surprise for my baby.
        </span>
      </div>
      <br />
      <HeartPulse width={50} height={100} />
    </div>
  );
}
