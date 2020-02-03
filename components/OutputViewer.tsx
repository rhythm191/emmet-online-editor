import React, { useMemo } from "react";
import expand from "emmet";

type Props = {
  text: string;
};

const OutputViewer: React.FC<Props> = ({ text }) => {
  const formattedText = useMemo(() => {
    try {
      return expand(text);
    } catch {
      console.log(`error text: ${text}`);
    }
    return "";
  }, [text]);

  return (
    <div className="output-viewer">
      <pre className="formatted-text">
        <code>{formattedText}</code>
      </pre>

      <style jsx>{`
        .output-viewer {
          position: relative;
          width: 100%;
          height: 100%;

          border-radius: 5px;
        }
        .formatted-text {
          color: #333;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default OutputViewer;
