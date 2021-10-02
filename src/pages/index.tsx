import React from "react";

import { NextPage } from "next";
import { classnames } from "tailwindcss-classnames";

import { Piece } from "../components/Piece";

const Page: NextPage = () => {
  return (
    <main className={classnames("container")}>
      <Piece />
    </main>
  );
};

export default Page;
