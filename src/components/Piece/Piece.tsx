import {
  CSSProperties,
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
} from "react";

import style from "./index.module.css";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "className" | "color" | "width" | "height"
> & {
  color: Required<CSSProperties>["backgroundColor"];
  width: Required<CSSProperties>["width"];
  height: Required<CSSProperties>["height"];
};

export const Piece = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    color: frontColor,
    width,
    height,
    style: pieceStyle,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      className={style.root}
      style={{ ...pieceStyle, width, height }}
      {...rest}
    >
      <div className={style.front} style={{ backgroundColor: frontColor }} />
      <div className={style.back} />
    </div>
  );
});
Piece.displayName = "Piece";
