import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

export default function Page({ children }) {
  return (
    <>
      <Head>
        <title>Alex Rudolph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="container">
        <div id="centered">
          <article>
            <main>{children}</main>
          </article>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          #container {
            display: flex;
            justify-content: center;
          }
          #centered {
            width: 700px;
          }
          #centered > * {
            margin: 10px;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
