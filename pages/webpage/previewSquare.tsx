interface Props {
  src: string;

  desc: string;

  height: number;
  width: number;
  offset?: number;
}

export default function PreviewSquare({
  src,
  height,
  width,
  desc,
  offset = 0,
}: Props) {
  return (
    <>
      <div className="previewContainer">
        <div className="iframeContainer">
          <iframe src={src} scrolling="no"></iframe>
        </div>
      </div>
      <p>{desc}</p>
      <style jsx>{`
        .previewContainer {
          position: relative;
          top: ${offset}px;
        }
        .iframeContainer {
          // height: ${height}px;
          // background-color: #d3d3d3aa;
          display: flex;
          align-items: center;
          flex-direction: column;
          // overflow: hidden;
          position: relative;
          bottom: ${offset}px;
        }
        @media (max-width: ${width}px) {
          iframe,
          .iframeContainer,
          .previewContainer,
          p {
            width: 100% !important;
          }
        }
        iframe {
          display: block;
          border: none;
          background-color: white;
          width: ${width}px;
          height: 100vh;
          height: ${height}px;
          // overflow: hidden;
          // position: fixed;
          // top: ${offset}px;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        p {
          // width: ${width}px;
          margin: 0;
          padding: 5px 15px;
        }
      `}</style>
    </>
  );
}
