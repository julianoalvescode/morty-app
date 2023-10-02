import { ButtonHTMLAttributes } from "react";

export interface ButtonCustomProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
