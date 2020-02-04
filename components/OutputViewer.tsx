import React, { useState, useCallback, useMemo } from "react";
import expand from "emmet";
import CopyToClipboard from "react-copy-to-clipboard";

type Props = {
  text: string;
};

const OutputViewer: React.FC<Props> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const turnOnCopied = useCallback(() => setCopied(true), [copied]);

  const formattedText = useMemo(() => {
    try {
      setCopied(false);
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

      <CopyToClipboard text={formattedText} onCopy={turnOnCopied}>
        <div>
          <button className="clipboard">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="clipboard"
              className="svg-inline--fa fa-clipboard fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"
              ></path>
            </svg>
            copy
          </button>
          {copied && <span className="copied">Copied!</span>}
        </div>
      </CopyToClipboard>

      <style jsx>{`
        .output-viewer {
          position: relative;
          width: 100%;
          height: 100%;
          margin: 10px auto;

          border: 1px solid #f5f5f5;
          border-radius: 5px;
        }
        .formatted-text {
          margin: 0;
          padding: 10px;
          color: #333;
          font-size: 1.2rem;
          font-family: "Source Han Code JP", monospace, sans-serif;
        }
        .clipboard {
          position: absolute;
          top: 0;
          right: 4px;
          color: #9a9a9a;
          background: #f7f7f7;
          border: 1px solid #9a9a9a;
          border-radius: 5px;
          cursor: pointer;
        }
        .clipboard > svg {
          display: block;
          width: 24px;
          height: 32px;
        }
        .clipboard > svg > path {
          fill: #9a9a9a;
        }
        .copied {
          position: absolute;
          top: 60px;
          right: 0;
          padding: 4px 4px;
          font-size: 12px;
          color: #fff;
          background-color: #000;
          border-radius: 5px;
          animation: fade_out 1s cubic-bezier(0.075, 0.82, 0.165, 1) 3s forwards;
        }

        @keyframes fade_out {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default OutputViewer;
