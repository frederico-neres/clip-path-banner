import { ITAU_SHAPE_CLIP_ID, ITAU_SHAPE_PATH_D } from "./itauShape.constants";

export function ItauShapeClip() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={0}
      height={0}
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <defs>
        <clipPath id={ITAU_SHAPE_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d={ITAU_SHAPE_PATH_D} />
        </clipPath>
      </defs>
    </svg>
  );
}
