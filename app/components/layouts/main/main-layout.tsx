import * as React from "react";

import { Footer } from "../../commons/footer/footer";
import { Header } from "../../commons/header/header";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <div className="main-layout-container">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
