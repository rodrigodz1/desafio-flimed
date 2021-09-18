import { HTMLAttributes } from "react";

type SpanProps = HTMLAttributes<HTMLSpanElement> & {
  isFavorite?: boolean;
};

export function Span({ isFavorite = false, ...props }: SpanProps) {
  return <span className={`${isFavorite ? "favorite" : ""}  `} {...props} />;
}
