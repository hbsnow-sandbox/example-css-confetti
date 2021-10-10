import { useMemo } from "react";

import { getRandomArbitrary } from "../../utils/getRandomArbitrary";
import { Piece } from "../Piece";
import style from "./index.module.css";

type Props = {
  count: number;
  duration: [number, number];
  delay: [number, number];
};

const classNameList = [style.fallA, style.fallB, style.fallC];

export const Confetti = (props: Props) => {
  const { count, duration, delay } = props;

  const pieces = useMemo(() => {
    return (
      <>
        {[...Array(count)].map((_, i) => {
          const pieceStyle = {
            marginLeft: `${Math.random() * 100}%`,
            animationDelay: `-${getRandomArbitrary(...delay)}s`,
            animationDuration: `${getRandomArbitrary(...duration)}s`,
          };

          const className =
            classNameList[Math.floor(Math.random() * classNameList.length)];

          return (
            <div
              key={i}
              className={`${style.piece} ${className}`}
              style={pieceStyle}
            >
              <Piece color="green" width={10} height={10} />
            </div>
          );
        })}
      </>
    );
  }, [count, delay, duration]);

  return <div className={style.root}>{pieces}</div>;
};
