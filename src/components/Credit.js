import React from "react";
import styled from "styled-components";
const Credit = () => {
  return (
    <CreditContainer>
      <Link href="https://github.com/anantadhia/reactplayer" target="_blank">
        Tatsu repository by an2ta
      </Link>
      <br />

      <Link
        href="https://github.com/WilsonLe/react-music-player"
        target="_blank"
      >
        Origin repository
      </Link>
      <p>
        {" "}
        This is a nonprofit project for personal and hobby. All rights is
        reserved to Tatsuro Yamashita. Please buy their original source.
      </p>
    </CreditContainer>
  );
};

const CreditContainer = styled.div`
  user-select: none;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 12;
  bottom: 5px;
  right: 5px;
  color: rgb(155, 155, 155);
  font-size: 0.75rem;
`;

const Link = styled.a`
  color: rgb(155, 155, 155);
`;
export default Credit;
