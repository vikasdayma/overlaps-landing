


// "use client";

// import React from "react";
// import ReactFlow, { Background } from "reactflow";
// import "reactflow/dist/style.css";
// import { useEffect, useRef } from "react";
// import { useReactFlow, ReactFlowProvider } from "reactflow";

// const nodeDefaults = {
//   style: {
//     padding: 10,
//     borderRadius: 8,
//     color: "#fff",
//     fontWeight: 500,
//   },
// };

// const initialNodes = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "💡 Client Idea" },
//     position: { x: 250, y: 0 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#12333D" },
//   },
//   {
//     id: "2",
//     data: { label: "🔍 Discovery & Strategy" },
//     position: { x: 250, y: 100 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#3c3c3c" },
//   },
//   {
//     id: "3",
//     data: {
//       label: "🤖 Workflow Automations\n• CRM • Lead Gen • Process AI",
//     },
//     position: { x: 0, y: 250 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#4338CA" },
//   },
//   {
//     id: "4",
//     data: {
//       label: "📊 Data Infrastructure\n• ETL • Dashboards • Analytics",
//     },
//     position: { x: 250, y: 250 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#047857" },
//   },
//   {
//     id: "5",
//     data: {
//       label: "☁️ Integrations & AI Ops\n• APIs • DevOps • CI/CD",
//     },
//     position: { x: 500, y: 250 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#7c3aed" },
//   },
//   {
//     id: "6",
//     data: { label: "🚀 Deployment & ROI Tracking" },
//     position: { x: 250, y: 400 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#1f2937" },
//   },
//   {
//     id: "7",
//     type: "output",
//     data: { label: "🏆 Scale & Client Success" },
//     position: { x: 250, y: 520 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#ca8a04" },
//   },
//   {
//     id: "8",
//     data: {
//       label: "🧠 AI Agents\n• Sales • Support • Internal Tools",
//     },
//     position: { x: -250, y: 250 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#0f766e" },
//   },
//   {
//     id: "9",
//     data: {
//       label: "📈 Predictive Intelligence\n• Forecasting • Insights • KPIs",
//     },
//     position: { x: 750, y: 250 },
//     ...nodeDefaults,
//     style: { ...nodeDefaults.style, background: "#be185d" },
//   },
// ];

// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2", animated: true },
//   {
//     id: "e2-3",
//     source: "2",
//     target: "3",
//     label: " Automations",
//     style: { stroke: "#4338CA" },
//     animated: true,
//   },
//   {
//     id: "e2-4",
//     source: "2",
//     target: "4",
//     label: " Data Layer",
//     style: { stroke: "#059669" },
//     animated: true,
//   },
//   {
//     id: "e2-5",
//     source: "2",
//     target: "5",
//     label: " AI Ops",
//     style: { stroke: "#8b5cf6" },
//     animated: true,
//   },
//   { id: "e3-6", source: "3", target: "6", style: { stroke: "#4338CA" }, animated: true },
//   { id: "e4-6", source: "4", target: "6", style: { stroke: "#059669" }, animated: true },
//   {
//     id: "e5-6",
//     source: "5",
//     target: "6",
//     label: " Integrate & Monitor",
//     style: { stroke: "#f97316" },
//     animated: true,
//   },
//   { id: "e6-7", source: "6", target: "7", animated: true },
//   {
//     id: "e2-8",
//     source: "2",
//     target: "8",
//     label: " AI Agents",
//     style: { stroke: "#0d9488" },
//     animated: true,
//   },
//   {
//     id: "e2-9",
//     source: "2",
//     target: "9",
//     label: " Predictive Models",
//     style: { stroke: "#db2777" },
//     animated: true,
//   },
//   { id: "e8-6", source: "8", target: "6", style: { stroke: "#0f766e" }, animated: true },
//   { id: "e9-6", source: "9", target: "6", style: { stroke: "#be185d" }, animated: true },
// ];

// const FlowContent = () => {
//   const { fitView } = useReactFlow();
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new ResizeObserver(() => {
//       fitView({ padding: 0.1 });
//     });

//     observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, [fitView]);

//   return (
//     <div ref={containerRef} className="w-full h-full">
//       <ReactFlow
//         nodes={initialNodes}
//         edges={initialEdges}
//         fitView
//         zoomOnScroll={false}
//         zoomOnPinch={true}
//         panOnDrag={false}
//         panOnScroll={false}
//         preventScrolling={false}
//         proOptions={{ hideAttribution: true }}
//       >
//         {/* <Background variant="dots" className="bg-[#0D0F12]" gap={12} size={1} /> */}
//       </ReactFlow>
//     </div>
//   );
// };

// export default function WorkFlow() {
//   return (
//     <div id="howwework" style={{ height: "100vh", background: "#0D0F12" }} className="relative">
//       {/* Heading Section */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0" />
//       <h2 className="absolute w-full text-center md:w-auto top-20 md:top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-5xl font-bold tracking-wide">
//         How It Works
//       </h2>

//       {/* React Flow Graph */}
//       <ReactFlowProvider>
//         <div className="pt-12 md:pt-28 h-full">
//           <FlowContent />
//         </div>
//       </ReactFlowProvider>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useRef } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";


const nodeDefaults = {
  style: {
    padding: 10,
    borderRadius: 8,
    color: "#fff",
    fontWeight: 500,
  },
};

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "💡 Client Idea" },
    position: { x: 250, y: 0 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#12333D" },
  },
  {
    id: "2",
    data: { label: "🔍 Discovery & Strategy" },
    position: { x: 250, y: 100 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#3c3c3c" },
  },
  {
    id: "3",
    data: { label: "🤖 Workflow Automations\n• CRM • Lead Gen • Process AI" },
    position: { x: 0, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#4338CA" },
  },
  {
    id: "4",
    data: { label: "📊 Data Infrastructure\n• ETL • Dashboards • Analytics" },
    position: { x: 250, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#047857" },
  },
  {
    id: "5",
    data: { label: "☁️ Integrations & AI Ops\n• APIs • DevOps • CI/CD" },
    position: { x: 500, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#7c3aed" },
  },
  {
    id: "6",
    data: { label: "🚀 Deployment & ROI Tracking" },
    position: { x: 250, y: 400 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#1f2937" },
  },
  {
    id: "7",
    type: "output",
    data: { label: "🏆 Scale & Client Success" },
    position: { x: 250, y: 520 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#ca8a04" },
  },
  {
    id: "8",
    data: { label: "🧠 AI Agents\n• Sales • Support • Internal Tools" },
    position: { x: -250, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#0f766e" },
  },
  {
    id: "9",
    data: { label: "📈 Predictive Intelligence\n• Forecasting • Insights • KPIs" },
    position: { x: 750, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#be185d" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", label: " Automations", style: { stroke: "#4338CA" }, animated: true },
  { id: "e2-4", source: "2", target: "4", label: " Data Layer", style: { stroke: "#059669" }, animated: true },
  { id: "e2-5", source: "2", target: "5", label: " AI Ops", style: { stroke: "#8b5cf6" }, animated: true },
  { id: "e3-6", source: "3", target: "6", style: { stroke: "#4338CA" }, animated: true },
  { id: "e4-6", source: "4", target: "6", style: { stroke: "#059669" }, animated: true },
  { id: "e5-6", source: "5", target: "6", label: " Integrate & Monitor", style: { stroke: "#f97316" }, animated: true },
  { id: "e6-7", source: "6", target: "7", animated: true },
  { id: "e2-8", source: "2", target: "8", label: " AI Agents", style: { stroke: "#0d9488" }, animated: true },
  { id: "e2-9", source: "2", target: "9", label: " Predictive Models", style: { stroke: "#db2777" }, animated: true },
  { id: "e8-6", source: "8", target: "6", style: { stroke: "#0f766e" }, animated: true },
  { id: "e9-6", source: "9", target: "6", style: { stroke: "#be185d" }, animated: true },
];

const FlowContent = () => {
  const { fitView } = useReactFlow();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      fitView({ padding: 0.1 });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [fitView]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        zoomOnScroll={false}
        zoomOnPinch={true}
        panOnDrag={false}
        panOnScroll={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
};

export default function WorkFlow() {
  return (
    <div
      id="howitworks"
      style={{ height: "100vh", background: "#0D0F12" }}
      className="relative"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] z-0" />

      {/* Heading */}
      <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-4xl font-bold tracking-wide z-10">
        HOW IT WORKS
      </h2>

      {/* React Flow Graph */}
      <ReactFlowProvider>
        <div className="pt-28 h-full">
          <FlowContent />
        </div>
      </ReactFlowProvider>
    </div>
  );
}
