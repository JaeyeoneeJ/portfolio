import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.p<{ fontSize: string; color: string }>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  &::after {
    content: "|";
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

interface IProp {
  text?: string;
  speed?: number;
  fontSize?: string;
  color?: string;
}

const TypingText = ({
  text = "",
  speed = 200,
  fontSize = "1em",
  color = "black",
}: IProp) => {
  const [typingText, setTypingText] = useState("");
  const [count, setCount] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  console.log(isAdding);

  useEffect(() => {
    if (isAdding) {
      const interval = setInterval(() => {
        setTypingText((typingText) => {
          let updated = typingText;
          updated = typingText + text[count];
          return updated;
        });
        setCount(count + 1);
      }, speed);
      if (count === text.length) {
        setTimeout(() => {
          setIsAdding(false);
        }, 2000);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setTypingText((typingText) => {
          let updated = typingText;
          updated = text.slice(0, count);
          return updated;
        });
        setCount(count - 1);
      }, speed);
      if (typingText.length === 0) {
        setTimeout(() => {
          setIsAdding(true);
        }, 1000);
        clearInterval(interval);
        setCount(0);
      }
      return () => clearInterval(interval);
    }
  });

  return (
    <Text fontSize={fontSize} color={color}>
      {typingText}
    </Text>
  );
};

export default TypingText;
