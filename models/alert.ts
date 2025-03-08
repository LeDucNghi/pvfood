export interface Alert {
  type: "error" | "success" | "info" | "warning";
  content: string;
  position:
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "top-center"
    | "top-left";

  theme?: "colored" | "dark" | "light";
  autoClose?: number;
}
