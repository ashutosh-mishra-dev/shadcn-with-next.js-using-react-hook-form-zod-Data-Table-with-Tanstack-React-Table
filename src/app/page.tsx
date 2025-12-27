import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  return (
    <div className=" h-screen flex justify-center items-center gap-5">
      <div>
        <Button
          variant="destructive"
          size="xl"
          className="rounded-full cursor-pointer">
          <CirclePlus />
          Click Button
        </Button>
      </div>
      <div>
        <CustomButton isRounded>custom button</CustomButton>
      </div>
    </div>
  );
};

export default HomePage;
