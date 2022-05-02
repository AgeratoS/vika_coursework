import React, { ReactNode } from "react";

const BaseLayout: React.FC<{children: ReactNode}> = ({ children }) => (
    <>
        <header>
            <p>Шапка</p>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Подвал</p>
        </footer>
    </>
)

export default BaseLayout;
