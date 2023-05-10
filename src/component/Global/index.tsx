
import { ReactNode } from "react";
import "./globalStyle.scss"
interface Prop {
    children: ReactNode;
}
function GlobalStyle({ children }: Prop): JSX.Element {
    return <>{children}</>;
}
export default GlobalStyle;