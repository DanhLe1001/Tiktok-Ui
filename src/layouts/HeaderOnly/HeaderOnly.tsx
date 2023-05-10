import { Header } from "../component/Header";
import { ReactNode } from "react";
interface HeaderOnlyProps {
    children: ReactNode;
}

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {/* {children} */}
                </div>
            </div>
        </div>

    );
}

export default HeaderOnly;