import { useMemo } from "react";

import { getRandomArbitrary } from "../../utils/getRandomArbitrary";
import { Piece } from "../Piece";
import style from "./index.module.css";

type Props = {
  count: number;
  pieceContainer: {
    duration: [number, number];
    delay: [number, number];
  };
  piece: {
    duration: [number, number];
  };
};

const classNameList = [style.fallA, style.fallB, style.fallC];

export const Confetti = (props: Props) => {
  const { count, pieceContainer, piece } = props;

  const pieces = useMemo(() => {
    return (
      <>
        {[...Array(count)].map((_, i) => {
          const pieceContainerStyle = {
            marginLeft: `${Math.random() * 100}%`,
            animationDelay: `-${getRandomArbitrary(...pieceContainer.delay)}s`,
            animationDuration: `${getRandomArbitrary(
              ...pieceContainer.duration
            )}s`,
          };

          const className =
            classNameList[Math.floor(Math.random() * classNameList.length)];

          const pieceStyle = {
            animationDuration: `${getRandomArbitrary(...piece.duration)}s`,
          };

          return (
            <div
              key={i}
              className={`${style.piece} ${className}`}
              style={pieceContainerStyle}
            >
              <Piece color="green" width={10} height={10} style={pieceStyle} />
            </div>
          );
        })}
      </>
    );
  }, [count, pieceContainer.delay, pieceContainer.duration, piece.duration]);

  return <div className={style.root}>{pieces}</div>;
};
