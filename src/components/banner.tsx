import { PropsWithChildren } from "react";
import { IconCircleCross } from "../assets/icons/icon-circle-cross";
import { classNames } from "../helpers/classnames";
import { IconCircleCheck } from "../assets/icons/icon-circle-check";

export enum BannerType {
  ERROR,
  SUCCESS,
}

type Props = {
  type: BannerType;
};

export const Banner = ({
  type = BannerType.ERROR,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={classNames(
        "flex gap-2 justify-center items-center h-10 font-semibold text-sm  border rounded-lg",
        type === BannerType.ERROR
          ? "bg-red-100 text-red-800 border-red-200"
          : "bg-green-100 text-green-800 border-green-200",
      )}
    >
      <div className="w-4">
        {type === BannerType.ERROR ? <IconCircleCross /> : <IconCircleCheck />}
      </div>
      {children}
    </div>
  );
};
