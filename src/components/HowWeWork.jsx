// import React from 'react'
// import ReactFlow, { Controls, Background, Handle } from 'reactflow'
// import 'reactflow/dist/style.css'
// import { motion } from 'framer-motion'
// import { Brain, Rocket, Database, BarChart3, ShieldCheck, Cloud, Workflow } from 'lucide-react'

// const CustomNode = ({ data }) => (
//   <motion.div
//     whileHover={{ scale: 1.08 }}
//     transition={{ type: 'spring', stiffness: 300 }}
//     className={`relative p-5 text-center rounded-2xl shadow-lg border-2 backdrop-blur-md ${data.color} w-64`}
//     style={{
//       boxShadow: `0 0 15px ${data.glow}`,
//     }}
//   >
//     <div className="flex justify-center mb-3 text-4xl">{data.icon}</div>
//     <h3 className={`font-extrabold text-3xl ${data.textColor}`}>{data.label}</h3>
//     <Handle type="target" position="top" className="bg-blue-400 w-2 h-2" />
//     <Handle type="source" position="bottom" className="bg-blue-400 w-2 h-2" />
//   </motion.div>
// )

// const nodeTypes = { custom: CustomNode }

// const nodes = [
//   {
//     id: '1',
//     type: 'custom',
//     position: { x: 600, y: 0 },
//     data: {
//       label: '💡 Client Idea',
//       color: 'bg-[#1E293B] border-[#3B82F6]',
//       glow: '#3B82F6AA',
//       textColor: 'text-white',
//       icon: <Brain size={30} color="#60A5FA" />,
//     },
//   },
//   {
//     id: '2',
//     type: 'custom',
//     position: { x: 600, y: 200 },
//     data: {
//       label: '🔍 Discovery & Strategy',
//       color: 'bg-[#1E293B] border-[#818CF8]',
//       glow: '#818CF8AA',
//       textColor: 'text-white',
//       icon: <Workflow size={30} color="#818CF8" />,
//     },
//   },
//   {
//     id: '3a',
//     type: 'custom',
//     position: { x: 250, y: 400 },
//     data: {
//       label: '🤖 AI Automation',
//       color: 'bg-[#1E293B] border-[#C084FC]',
//       glow: '#C084FCAA',
//       textColor: 'text-white',
//       icon: <Rocket size={30} color="#C084FC" />,
//     },
//   },
//   {
//     id: '3b',
//     type: 'custom',
//     position: { x: 600, y: 400 },
//     data: {
//       label: '📊 Data Infrastructure',
//       color: 'bg-[#1E293B] border-[#34D399]',
//       glow: '#34D399AA',
//       textColor: 'text-white',
//       icon: <Database size={30} color="#34D399" />,
//     },
//   },
//   {
//     id: '3c',
//     type: 'custom',
//     position: { x: 950, y: 400 },
//     data: {
//       label: '☁️ Cloud Integrations',
//       color: 'bg-[#1E293B] border-[#38BDF8]',
//       glow: '#38BDF8AA',
//       textColor: 'text-white',
//       icon: <Cloud size={30} color="#38BDF8" />,
//     },
//   },
//   {
//     id: '4',
//     type: 'custom',
//     position: { x: 600, y: 600 },
//     data: {
//       label: '📈 Outcome Delivery',
//       color: 'bg-[#1E293B] border-[#FACC15]',
//       glow: '#FACC15AA',
//       textColor: 'text-white',
//       icon: <BarChart3 size={30} color="#FACC15" />,
//     },
//   },
//   {
//     id: '5',
//     type: 'custom',
//     position: { x: 600, y: 800 },
//     data: {
//       label: '🛡️ Scale & Governance',
//       color: 'bg-[#1E293B] border-[#F472B6]',
//       glow: '#F472B6AA',
//       textColor: 'text-white',
//       icon: <ShieldCheck size={30} color="#F472B6" />,
//     },
//   },
// ]

// const edges = [
//   { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad1)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#60A5FA' } },
//   { id: 'e2-3a', source: '2', target: '3a', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad2)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#C084FC' } },
//   { id: 'e2-3b', source: '2', target: '3b', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad3)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#34D399' } },
//   { id: 'e2-3c', source: '2', target: '3c', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad4)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#38BDF8' } },
//   { id: 'e3a-4', source: '3a', target: '4', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad5)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#FACC15' } },
//   { id: 'e3b-4', source: '3b', target: '4', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad5)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#FACC15' } },
//   { id: 'e3c-4', source: '3c', target: '4', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad5)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#FACC15' } },
//   { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', animated: true, style: { stroke: 'url(#grad6)', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#F472B6' } },
// ]

// export default function HowWeWorkFlow() {
//   return (
//     <div className="h-screen w-full bg-[#0B0D10] text-white">
//       <svg width="0" height="0">
//         <defs>
//           <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#60A5FA" />
//             <stop offset="100%" stopColor="#818CF8" />
//           </linearGradient>
//           <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#818CF8" />
//             <stop offset="100%" stopColor="#C084FC" />
//           </linearGradient>
//           <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#34D399" />
//             <stop offset="100%" stopColor="#10B981" />
//           </linearGradient>
//           <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#38BDF8" />
//             <stop offset="100%" stopColor="#0EA5E9" />
//           </linearGradient>
//           <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#FACC15" />
//             <stop offset="100%" stopColor="#FBBF24" />
//           </linearGradient>
//           <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#F472B6" />
//             <stop offset="100%" stopColor="#EC4899" />
//           </linearGradient>
//         </defs>
//       </svg>

//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         fitView
//         nodeTypes={nodeTypes}
//         zoomOnScroll={false}
//         zoomOnPinch={false}
//         panOnScroll={false}
//         panOnDrag={false}
//         zoomOnDoubleClick={false}
//         nodesDraggable={false}
//         nodesConnectable={false}
//         elementsSelectable={false}
//       >
//         <Controls className="bg-gray-800 text-white rounded-lg" showInteractive={false} />
//         <Background color="#1a1d22" gap={18} />
//       </ReactFlow>
//     </div>
//   )
// }

// // import React from 'react'
// // import ReactFlow, { Controls, Background, Handle } from 'reactflow'
// // import 'reactflow/dist/style.css'
// // import { motion } from 'framer-motion'
// // import { Brain, Rocket, Database, BarChart3, ShieldCheck, Cloud, Workflow } from 'lucide-react'

// // const CustomNode = ({ data }) => (
// //   <motion.div
// //     whileHover={{ scale: 1.08 }}
// //     transition={{ type: 'spring', stiffness: 300 }}
// //     className={`p-5 text-center rounded-2xl shadow-lg border-2 ${data.color} w-64`}
// //   >
// //     <div className="flex justify-center mb-3 text-3xl">{data.icon}</div>
// //     <h3 className={`font-extrabold text-3xl ${data.textColor}`}>{data.label}</h3>
// //     <Handle type="target" position="top" className="bg-blue-400 w-2 h-2" />
// //     <Handle type="source" position="bottom" className="bg-blue-400 w-2 h-2" />
// //   </motion.div>
// // )

// // const nodeTypes = { custom: CustomNode }

// // const nodes = [
// //   {
// //     id: '1',
// //     type: 'custom',
// //     position: { x: 600, y: 0 },
// //     data: {
// //       label: '💡 Client Idea',
// //       color: 'bg-gray-100 border-gray-300',
// //       textColor: 'text-gray-900',
// //       icon: <Brain size={28} color="#2563EB" />,
// //     },
// //   },
// //   {
// //     id: '2',
// //     type: 'custom',
// //     position: { x: 600, y: 200 },
// //     data: {
// //       label: '🔍 Discovery & Strategy',
// //       color: 'bg-blue-50 border-blue-300',
// //       textColor: 'text-blue-900',
// //       icon: <Workflow size={28} color="#3B82F6" />,
// //     },
// //   },
// //   {
// //     id: '3a',
// //     type: 'custom',
// //     position: { x: 250, y: 400 },
// //     data: {
// //       label: '🤖 AI & Automation',
// //       color: 'bg-indigo-50 border-indigo-300',
// //       textColor: 'text-indigo-900',
// //       icon: <Rocket size={28} color="#7C3AED" />,
// //     },
// //   },
// //   {
// //     id: '3b',
// //     type: 'custom',
// //     position: { x: 600, y: 400 },
// //     data: {
// //       label: '📊 Data Infrastructure',
// //       color: 'bg-emerald-50 border-emerald-300',
// //       textColor: 'text-emerald-900',
// //       icon: <Database size={28} color="#10B981" />,
// //     },
// //   },
// //   {
// //     id: '3c',
// //     type: 'custom',
// //     position: { x: 950, y: 400 },
// //     data: {
// //       label: '☁️ Cloud Integrations',
// //       color: 'bg-sky-50 border-sky-300',
// //       textColor: 'text-sky-900',
// //       icon: <Cloud size={28} color="#0EA5E9" />,
// //     },
// //   },
// //   {
// //     id: '4',
// //     type: 'custom',
// //     position: { x: 600, y: 600 },
// //     data: {
// //       label: '📈 Outcome Delivery',
// //       color: 'bg-amber-50 border-amber-300',
// //       textColor: 'text-amber-900',
// //       icon: <BarChart3 size={28} color="#F59E0B" />,
// //     },
// //   },
// //   {
// //     id: '5',
// //     type: 'custom',
// //     position: { x: 600, y: 800 },
// //     data: {
// //       label: '🛡️ Scale & Success',
// //       color: 'bg-pink-50 border-pink-300',
// //       textColor: 'text-pink-900',
// //       icon: <ShieldCheck size={28} color="#EC4899" />,
// //     },
// //   },
// // ]

// // const edges = [
// //   { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true, style: { stroke: '#60A5FA', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#60A5FA' } },
// //   { id: 'e2-3a', source: '2', target: '3a', type: 'smoothstep', animated: true, style: { stroke: '#A78BFA', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#A78BFA' } },
// //   { id: 'e2-3b', source: '2', target: '3b', type: 'smoothstep', animated: true, style: { stroke: '#34D399', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#34D399' } },
// //   { id: 'e2-3c', source: '2', target: '3c', type: 'smoothstep', animated: true, style: { stroke: '#38BDF8', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#38BDF8' } },
// //   { id: 'e3a-4', source: '3a', target: '4', type: 'smoothstep', animated: true, style: { stroke: '#FBBF24', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#FBBF24' } },
// //   { id: 'e3b-4', source: '3b', target: '4', type: 'smoothstep', animated: true, style: { stroke: '#FBBF24', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#FBBF24' } },
// //   { id: 'e3c-4', source: '3c', target: '4', type: 'smoothstep', animated: true, style: { stroke: '#FBBF24', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#FBBF24' } },
// //   { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', animated: true, style: { stroke: '#F472B6', strokeWidth: 3 }, markerEnd: { type: 'arrowclosed', color: '#F472B6' } },
// // ]

// // export default function HowWeWorkFlow() {
// //   return (
// //     <div className="h-screen w-full bg-[#0d0f12] flex items-center justify-center">
// //       <ReactFlow
// //         nodes={nodes}
// //         edges={edges}
// //         fitView
// //         nodeTypes={nodeTypes}
// //         defaultEdgeOptions={{ type: 'smoothstep', animated: true, style: { strokeWidth: 2 } }}
// //         zoomOnScroll={false}
// //         zoomOnPinch={false}
// //         panOnScroll={false}
// //         panOnDrag={false}
// //         zoomOnDoubleClick={false}
// //         preventScrolling={false}
// //         nodesDraggable={false}
// //         nodesConnectable={false}
// //         elementsSelectable={false}
// //       >
// //         <Controls className="bg-gray-800 text-white rounded-lg" showInteractive={false} />
// //         <Background color="#1a1d22" gap={18} />
// //       </ReactFlow>
// //     </div>
// //   )
// // }


"use client";

import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import { useEffect, useRef } from "react";
import { useReactFlow, ReactFlowProvider } from "reactflow";

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
    data: {
      label: "🤖 Workflow Automations\n• CRM • Lead Gen • Process AI",
    },
    position: { x: 0, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#4338CA" },
  },
  {
    id: "4",
    data: {
      label: "📊 Data Infrastructure\n• ETL • Dashboards • Analytics",
    },
    position: { x: 250, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#047857" },
  },
  {
    id: "5",
    data: {
      label: "☁️ Integrations & AI Ops\n• APIs • DevOps • CI/CD",
    },
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
    data: {
      label: "🧠 AI Agents\n• Sales • Support • Internal Tools",
    },
    position: { x: -250, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#0f766e" },
  },
  {
    id: "9",
    data: {
      label: "📈 Predictive Intelligence\n• Forecasting • Insights • KPIs",
    },
    position: { x: 750, y: 250 },
    ...nodeDefaults,
    style: { ...nodeDefaults.style, background: "#be185d" },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    label: " Automations",
    style: { stroke: "#4338CA" },
    animated: true,
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    label: " Data Layer",
    style: { stroke: "#059669" },
    animated: true,
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    label: " AI Ops",
    style: { stroke: "#8b5cf6" },
    animated: true,
  },
  { id: "e3-6", source: "3", target: "6", style: { stroke: "#4338CA" }, animated: true },
  { id: "e4-6", source: "4", target: "6", style: { stroke: "#059669" }, animated: true },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    label: " Integrate & Monitor",
    style: { stroke: "#f97316" },
    animated: true,
  },
  { id: "e6-7", source: "6", target: "7", animated: true },
  {
    id: "e2-8",
    source: "2",
    target: "8",
    label: " AI Agents",
    style: { stroke: "#0d9488" },
    animated: true,
  },
  {
    id: "e2-9",
    source: "2",
    target: "9",
    label: " Predictive Models",
    style: { stroke: "#db2777" },
    animated: true,
  },
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
      >
        <Background variant="dots" className="bg-[#010101]" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default function WorkFlow() {
  return (
    <div id="howwework" style={{ height: "100vh", background: "#111827" }}>
      <ReactFlowProvider>
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
