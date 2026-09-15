import React from "react";

/** The day's headline modifier, shown once before service. */
export interface EventBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase kicker — "Today's news" / "خبر النهارده". */
  kicker?: React.ReactNode;
  /** The headline, e.g. "Onions have jumped". */
  title?: React.ReactNode;
  /** One or two sentences of consequence, in plain language. */
  detail?: React.ReactNode;
  /** Drives the spring in/out. */
  open?: boolean;
  style?: React.CSSProperties;
}

export declare function EventBanner(props: EventBannerProps): React.ReactElement;
