import { useEffect, useState } from "react";
import styled from "styled-components";

const Img = styled.img<{ maxWidth: string | undefined }>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  width: 100%;
  display: block;
  &.image-loading {
    filter: blur(5px);
    clip-path: inset(0);
  }
  &.image-loaded {
    filter: blur(0);
    transition: filter 0.5s linear;
  }
`;

interface IProgressiveImg {
  placeholderSrc: string;
  src: string;
  maxWidth?: string;
}

const ProgressiveImg = ({
  placeholderSrc,
  src,
  maxWidth,
  ...props
}: IProgressiveImg) => {
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
      maxWidth={maxWidth}
      {...{
        src: imgSrc,
        ...props,
      }}
      className={`image-${customClass}`}
    />
  );
};

export default ProgressiveImg;
