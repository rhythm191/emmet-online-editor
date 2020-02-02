import React from "react";
import Head from "next/head";
import InputForm from "../components/InputForm";
import OutputViewer from "../components/OutputViewer";

const Home = () => {
  const url = "https://emmet-online-editor";

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
      </Head>

      <header>
        <h1>Emmet Online Editor</h1>
      </header>

      <main>
        <div className="input-form">
          <InputForm />
        </div>
        <div className="viewer">
          <OutputViewer />
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
        }
        header {
          width: 100%;
          text-align: center;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .viewer {
          width: 100%;
          height: 100%;
        }
        footer {
          display: flex;
          width: 100%;
          height: 40px;
          padding: 10px 10px;
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
