import React from "react";

export type Venue = "cart" | "shop" | "neon";
export type ChapterState = "open" | "done" | "locked";

export declare const VENUES: Record<Venue, { ar: string; en: string }>;

/**
 * One chapter of the story: a year, a venue, and its days.
 */
export interface ChapterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The year as shown — Eastern Arabic numerals in the Arabic build (١٩٦٩). */
  year?: React.ReactNode;
  /** The chapter's name. */
  title?: React.ReactNode;
  /** cart (1954), shop (1969, 1984), neon (1999, 2015). */
  venue?: Venue;
  /** How many days the chapter runs. */
  days?: number;
  /** Which day the player has reached, for "2 / 4". */
  dayReached?: number;
  /** Pre-formatted money goal for the current day. */
  goal?: React.ReactNode;
  state?: ChapterState;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function ChapterCard(props: ChapterCardProps): React.ReactElement;
