import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from "react";

import style from "./index.module.css";

export type Props = Readonly<
  Omit<
    ComponentPropsWithoutRef<"div">,
    "className" | "color" | "width" | "height" | "style"
  > & {
    color: Required<CSSProperties>["backgroundColor"];
    width: Required<CSSProperties>["width"];
    height: Required<CSSProperties>["height"];
  }
>;

export const Piece = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { color: frontColor, width, height } = props;

  return (
    <div ref={ref} className={style.root} style={{ width, height }} {...props}>
      <div className={style.front} style={{ backgroundColor: frontColor }} />
      <div className={style.back} />
    </div>
  );
});
Piece.displayName = "Piece";
