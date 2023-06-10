import React, { useState, useRef, useCallback, ChangeEvent } from "react";
import Head from "next/head";
import OutputViewer from "../components/OutputViewer";

const Home: React.FC = () => {
  const url = "https://emmet-online-editor.netlify.com";

  const [source, setSource] = useState("");
  const inputEl = useRef(null);

  const handleSourceUpdate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSource(e.target.value),
    [source]
  );

  return (
    <div className="app">
      <Head>
        <title>Emmet Online Editor</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="'Emmet Online Editor' is online emmet executor" />
        <meta property="og:title" content="Emmet Online Editor" />
        <meta property="og:description" content="'Emmet Online Editor' is online emmet executor" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JNJ2KTJ1ZB"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JNJ2KTJ1ZB');
        </script>
      </Head>

      <header>
        <h1>Emmet Online Editor</h1>
      </header>

      <main>
        <div className="input-form">
          <label htmlFor="input-form">Emmet Command</label>
          <input
            id="input-form"
            type="text"
            defaultValue={source}
            onChange={handleSourceUpdate}
            placeholder="Enter your command"
            ref={inputEl}
          />
        </div>
        <div className="viewer">
          <OutputViewer text={source} />
        </div>
      </main>

      <footer>
        <div className="sns-links">
          <ul className="inline">
            <li>
              <a
                className="twitter"
                href={`https://twitter.com/share?text=Emmet%20Online%20Editor&url=${url}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/sns/twitter-brands.svg" width="30" height="30" />
              </a>
            </li>
            <li>
              <a
                href={`http://www.facebook.com/share.php?u=${url}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/sns/facebook-brands.svg" width="30" height="30" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rhythm191/emmet-online-editor"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="/sns/github-brands.svg" width="30" height="30" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <small>Copyright @rhythm191 2020</small>
        </div>
      </footer>

      <style jsx>{`
        .app {
          width: 100%;
          max-width: 768px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #333;
          margin: 0 auto;
          font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        header {
          width: 100%;
          text-align: center;
        }
        header > h1 {
          margin: 10px 0 20px;
          width: 100%;
          font-size: 2rem;
          line-height: 1.5;
        }
        @media (max-width: 576px) {
          header > h1 {
            font-size: 1.6rem;
          }
        }
        main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
        }
        .input-form {
          width: 100%;
          color: #000;
        }
        .input-form > label {
          width: 100%;
          margin: 0 0 6px 4px;
        }
        .input-form > input {
          box-sizing: border-box;
          width: 100%;
          font-size: 1.2rem;
          margin-bottom: 8px;
          padding: 6px 4px;
          border: none;
          border-bottom: 1px solid #ccc;
          border-radius: none;
        }
        .input-form > input:focus {
          outline: none;
          border-bottom: 2px solid #548ee6;
          margin-bottom: 7px;
        }
        .viewer {
          width: 100%;
          height: 100%;
        }
        footer {
          display: flex;
          width: 100%;
          height: 40px;
          padding: 20px 10px;
          justify-content: space-between;
          align-item: center;
        }
        .sns-links > ul {
          margin: 0;
          padding: 0;
        }
        .sns-links > ul > li {
          display: inline-block;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default Home;
