import React from "react";

export type IngredientKey = "rzmix" | "ruz" | "maca" | "ads" | "homos" | "salsa" | "taqleya";
export type LineState = "open" | "ex" | "no";

export interface IngredientDef {
  ar: string;
  en: string;
  /** What the counter calls it — ward, moona, kahraman, bondo', loz. */
  slang: string;
  slangEn?: string;
  col: string;
  col2: string;
  vessel: "vat" | "pot" | "sauce" | "tray";
  /** Scoop weight. taqleya is heaviest (1.45) on purpose. */
  w: number;
}

export declare const ING: Record<IngredientKey, IngredientDef>;
export declare function slangOf(key: IngredientKey, lang?: "ar" | "en"): string;
export declare function nameOf(key: IngredientKey, lang?: "ar" | "en"): string;

export interface OrderLine {
  key: IngredientKey;
  qty?: number;
  /** ex = asked for extra, no = refused this component. */
  state?: LineState;
}

/** The paid ticket on the spike. */
export interface OrderTicketProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ticket number, printed as #12. */
  no?: number;
  /** The size ordered — Small, Medium, Large, Box, Family pot. */
  name?: React.ReactNode;
  /** Archetype label, e.g. "Orders in the house language". */
  who?: React.ReactNode;
  /** The archetype emoji from KS_GLYPHS. */
  whoIcon?: React.ReactNode;
  lines?: OrderLine[];
  /** Pre-formatted price. */
  total?: React.ReactNode;
  /** Play the acknowledge tick instead of the arrival flutter. */
  tick?: boolean;
  lang?: "ar" | "en";
  /** Print counter slang instead of plain names (chapter 4+). */
  slang?: boolean;
  style?: React.CSSProperties;
}

export declare function OrderTicket(props: OrderTicketProps): React.ReactElement;
