"use client";

import { PointerEvent, useRef, useState } from "react";
import { GeoGridDemo, RIGA_GEO_GRID } from "../data/geogrid-demos";

const positions = Array.from({ length: 81 }, (_, index) => ({
  left: `${(8.7 + (index % 9) * 10.32).toFixed(2)}%`,
  top: `${(4.3 + Math.floor(index / 9) * 11.15).toFixed(2)}%`,
}));

function rangeSummary(values: number[]): string {
  const minimum = Math.min(...values);
  const maximum = Math.max(...values);
  return minimum === maximum
    ? `Rank ${minimum} across the grid`
    : `Ranks ${minimum}–${maximum} across the grid`;
}

function markerColor(demo: GeoGridDemo, value: number, state: "before" | "after") {
  if (state === "before") return demo.markerColors.before;
  return value === 1 ? demo.markerColors.afterPrimary : demo.markerColors.afterSecondary;
}

function MarkerLayer({
  demo,
  values,
  state,
}: {
  demo: GeoGridDemo;
  values: number[];
  state: "before" | "after";
}) {
  return (
    <div className={`legacy-marker-layer ${state}`}>
      {values.map((value, index) => (
        <span
          className={`legacy-marker rank-${value}`}
          key={`${demo.id}-${state}-${index}`}
          style={{ ...positions[index], backgroundColor: markerColor(demo, value, state) }}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export default function GeoGridComparison({ demo = RIGA_GEO_GRID }: { demo?: GeoGridDemo }) {
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const setFromPointer = (clientX: number) => {
    const element = frame.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    setPosition(Math.min(100, Math.max(0, ((clientX - bounds.left) / bounds.width) * 100)));
  };
  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromPointer(event.clientX);
  };
  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging) setFromPointer(event.clientX);
  };
  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const mapBackground = {
    backgroundImage: `linear-gradient(rgba(240,248,235,.06), rgba(240,248,235,.06)), url("${demo.mapImage}")`,
  };

  return (
    <div className="legacy-geogrid">
      <div className="legacy-geogrid-head">
        <div>
          <h3>{demo.businessName}</h3>
          <p>{demo.keyword} · {demo.city}, {demo.country}</p>
        </div>
      </div>
      <div
        className="legacy-geogrid-stage"
        ref={frame}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        role="img"
        aria-label={`${demo.city} illustrative local ranking comparison`}
      >
        <div className="legacy-map-image" style={mapBackground} />
        <div className="legacy-map-layer legacy-before-layer" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <MarkerLayer demo={demo} values={demo.beforeValues} state="before" />
        </div>
        <div className="legacy-map-layer legacy-after-layer" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <MarkerLayer demo={demo} values={demo.afterValues} state="after" />
        </div>
        <div className="legacy-before-label"><span>Before</span><strong>{rangeSummary(demo.beforeValues)}</strong></div>
        <div className="legacy-after-label"><span>After</span><strong>{rangeSummary(demo.afterValues)}</strong></div>
        <div className="legacy-divider" style={{ left: `${position}%` }}><span>‹›</span></div>
        <div className="legacy-attribution">
          <a href={demo.mapAttributionUrl} target="_blank" rel="noreferrer">{demo.mapAttribution}</a>
        </div>
      </div>
      <div className="legacy-geogrid-control">
        <div><span>Before · {demo.beforeDate}</span><strong>Drag the handle to compare</strong><span>After · {demo.afterDate}</span></div>
        <input aria-label={`Compare before and after illustrative ${demo.city} GeoGrid`} type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
      </div>
      <div className="legacy-geogrid-meta">
        <div><span><i className="legacy-dot red-dot" />Baseline</span><span><i className="legacy-dot green-dot" />Current view</span><span><i className="legacy-dot olive-dot" />Rank movement</span></div>
      </div>
    </div>
  );
}

