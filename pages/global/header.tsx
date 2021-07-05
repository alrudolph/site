export default function Header() {
  return (
    <>
      <nav>
        <div id="navContainer">
          <h1>Alex Rudolph</h1>
          <div>
            <h2>About</h2>
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          min-height: 100px;
          background-color: #d3d3d3aa;
          display: flex;
          justify-content: center;
        }
        #navContainer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 900px;
          padding: 10px;
        }
        @media (max-width: 900px) {
          #navContainer {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
