import Album from "@/components/album";
import { jfif } from "@/lib/data";
const JFIF = () => {
  return (
    <div className="mt-4">
      <Album typeFile="jfif" pictures={jfif} />
    </div>
  );
};

export default JFIF;
