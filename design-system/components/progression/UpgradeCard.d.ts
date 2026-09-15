import React from "react";

export type UpgradeState = "buy" | "owned" | "locked" | "cant";

/** A row in the kit-and-fittings shop. */
export interface UpgradeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A glyph or small canvas — the source draws a tiny object per upgrade. */
  icon?: React.ReactNode;
  /** The shopfront name, e.g. "Tanta Heavy Pan" / "صاج طنطا الثقيل". */
  title?: React.ReactNode;
  /** One sentence of visible consequence. */
  description?: React.ReactNode;
  /** Pre-formatted cost. */
  price?: React.ReactNode;
  /** buy = affordable, cant = too expensive, locked = chapter-gated, owned = bought. */
  state?: UpgradeState;
  buyLabel?: React.ReactNode;
  ownedLabel?: React.ReactNode;
  cantLabel?: React.ReactNode;
  onBuy?: () => void;
  style?: React.CSSProperties;
}

export declare function UpgradeCard(props: UpgradeCardProps): React.ReactElement;
