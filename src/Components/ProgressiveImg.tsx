import { useEffect, useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  max-width: 960px;
  width: 100%;
  display: block;
  &.loading {
    filter: blur(5px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0);
    transition: filter 0.5s linear;
  }
`;

interface IProgressiveImg {
  placeholderSrc: string;
  src: string;
}

const ProgressiveImg = ({ placeholderSrc, src, ...props }: IProgressiveImg) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <Img
      {...{
        src: imgSrc,
        ...props,
      }}
      className={`image-${customClass}`}
    />
  );
};

export default ProgressiveImg;
