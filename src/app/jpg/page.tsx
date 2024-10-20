import Album from "@/components/album";
import { jpg } from "@/lib/data";
const JPG = () => {
  return (
    <div className="mt-4">
      <Album typeFile="jpg" pictures={jpg} />
    </div>
  );
};

export default JPG;
