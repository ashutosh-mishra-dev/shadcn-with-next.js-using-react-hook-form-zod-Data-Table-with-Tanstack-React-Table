import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const CustomButton = ({
  disabled,
  isRounded,
  children,
}: {
  disabled?: boolean;
  isRounded?: boolean;

  children: ReactNode;
}) => {
  return (
    <div>
      {/* ye maine banaya hai */}
      <button
        className={` text-sm text-white ring cursor-pointer px-4 py-2 border border-gray-200 ${
          disabled
            ? "bg-gray-400"
            : "bg-amber-500 hover:bg-amber-300 ring-offset-1 hover:border-0 hover:ring-amber-300"
        } ${isRounded ? "rounded-full" : "rounded-md"}`}>
        {children}
      </button>

      <CustomButtonByCn disabled />
    </div>
  );
};

const CustomButtonByCn = ({
  disabled,
  isRounded,
}: {
  disabled?: boolean;
  isRounded?: boolean;
}) => {
  return (
    <div className="mt-5 flex justify-center items-center ">
      <button
        className={cn(
          "cursor-pointer",
          "px-4",
          "py-2",
          "text-sm",
          "text-white",
          "rounded-lg",
          disabled
            ? "bg-gray-400 hover:bg-gray-300 ring-1 hover:ring-gray-300 ring-offset-1"
            : "bg-amber-400",
          isRounded && "rounded-full"
        )}>
        cn button
      </button>
    </div>
  );
};

export default CustomButton;
