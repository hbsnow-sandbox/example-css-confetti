import { useMemo } from "react";

import { getRandomArbitrary } from "../../utils/getRandomArbitrary";
import { Piece } from "../Piece";
import style from "./index.module.css";

type Props = {
  count: number;
  duration: [number, number];
  delay: [number, number];
};

export const Confetti = (props: Props) => {
  const { count, duration, delay } = props;

  const pieceStyles = useMemo(() => {
    return [...Array(count)].map(() => {
      const pieceStyle = {
        marginLeft: `${Math.random() * 100}%`,
        animationDelay: `-${getRandomArbitrary(...delay)}s`,
        animationDuration: `${getRandomArbitrary(...duration)}s`,
      };

      return pieceStyle;
    });
  }, [count, delay, duration]);

  return (
    <div className={style.root}>
      {pieceStyles.map((pieceStyle, i) => {
        return (
          <div key={i} className={style.piece} style={pieceStyle}>
            <Piece color="green" width={10} height={10} />
          </div>
        );
      })}
    </div>
  );
};
