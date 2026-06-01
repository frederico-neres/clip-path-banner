import Image from "next/image";
import { ItauShapeClip } from "./ItauShapeClip";
import type { ShapeBannerProps } from "./ShapeBanner.types";
import styles from "./ShapeBanner.module.css";

export function ShapeBanner({
  imageSrc,
  imageAlt,
  backgroundColor = "aqua",
  width = "80vw",
  maxWidth = "800px",
  className,
}: ShapeBannerProps) {
  return (
    <>
      <ItauShapeClip />

      <div
        className={[styles.wrapper, className].filter(Boolean).join(" ")}
        style={
          {
            "--sb-width": width,
            "--sb-max-width": maxWidth,
            "--sb-bg-color": backgroundColor,
          } as React.CSSProperties
        }
      >
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 800px) 80vw, 800px"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
