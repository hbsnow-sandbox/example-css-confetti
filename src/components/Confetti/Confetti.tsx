import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

import { Piece } from "../Piece";
import style from "./index.module.css";

type Props = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "className"
>;

export const Confetti = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div ref={ref} className={style.root} {...props}>
      <div className={`${style.piece}`}>
        <Piece color="green" width={10} height={10} />
      </div>
    </div>
  );
});
Confetti.displayName = "Confetti";
