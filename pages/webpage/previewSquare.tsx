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
    <div className="previewContainer">
      <div className="iframeContainer">
        <iframe src={src} scrolling="no"></iframe>
      </div>
      <p>{desc}</p>
      <style jsx>{`
        .previewContainer {
          width: ${width}px;
          position: relative;
          top: ${offset}px;
        }
        .iframeContainer {
          width: ${width}px;
          height: ${height}px;
          // background-color: #d3d3d3aa;
          display: flex;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          bottom: ${offset}px;
        }
        iframe {
          border: none;
          background-color: white;
          width: ${width}px;
          height: ${height}px;
          overflow: hidden;
          position: relative;
          top: ${offset}px;
        }
        p {
          width: 100%;
          margin: 0;
          padding: 5px;
        }
      `}</style>
    </div>
  );
}
