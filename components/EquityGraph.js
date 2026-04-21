import dynamic from "next/dynamic";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false
});

export default function EquityGraph() {

  const data = {
    nodes: [
      { id: "华智未来（重庆）", group: 1 },
      { id: "华源未来（山西）", group: 2 },
      { id: "华蓉未来（四川）", group: 2 }
    ],
    links: [
      { source: "华智未来（重庆）", target: "华源未来（山西）" },
      { source: "华智未来（重庆）", target: "华蓉未来（四川）" }
    ]
  };

  return (
    <div style={{ height: "500px" }}>
      <ForceGraph2D
        graphData={data}
        nodeAutoColorBy="group"
      />
    </div>
  );
}
