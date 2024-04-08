import { ReactNode } from "react";

export interface AuthLayoutProps {
  children: ReactNode;
}

export interface AuthNavigationProps {
  pageType: "signin" | "signup";
}
