import React from "react";

/**
 * The day's star rating — brass stars that pop in sequence.
 */
export interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** How many are lit. */
  value?: number;
  /** Total shown. The game uses 3. */
  max?: number;
  /** Any CSS length; defaults to the 31px game size. */
  size?: string | number;
  style?: React.CSSProperties;
}

export declare function StarRating(props: StarRatingProps): React.ReactElement;
