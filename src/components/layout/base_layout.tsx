import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

const BaseLayout: React.FC<{children: ReactNode}> = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
)

export default BaseLayout;
