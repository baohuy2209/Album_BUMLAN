import Album from "@/components/album";
import { png } from "@/lib/data";
const JFIF = () => {
  return (
    <div className="mt-4">
      <Album typeFile="png" pictures={png} />
    </div>
  );
};

export default JFIF;
