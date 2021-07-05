import Page from "./global/page";
import WebPage from "./webpage/webPage";

export default function Home() {
  const a = "hello";

  return (
    <div className="container">
      <Page>
        <div>
          {/* <h1>Hello</h1> */}
          <WebPage />
        </div>
      </Page>
      <footer></footer>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
