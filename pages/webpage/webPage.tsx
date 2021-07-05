import PreviewSquare from "./previewSquare";

export default function WebPage() {
  return (
    <>
      <div className="chartContainer">
        <PreviewSquare
          src={"https://dailynexusdata.github.io/covidtracker/"}
          height={330}
          width={320}
          desc={"python pandas to s3 bucket to d3"}
        ></PreviewSquare>
        <PreviewSquare
          src={"https://dailynexusdata.github.io/kcsb-covid/#vaccines"}
          height={500}
          width={600}
          desc={"Santa Barbara County COVID Variant Streamgraph."}
        ></PreviewSquare>
        <PreviewSquare
          src={"https://dailynexusdata.github.io/kcsb-covid/#variants"}
          height={500}
          width={600}
          desc={"Santa Barbara County COVID Variant Streamgraph."}
        ></PreviewSquare>
      </div>
      <style jsx>
        {`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      </style>
    </>
  );
}
