import React from "react";
import HomepageFooter from './HomepageFooter'
function HomeFooter() {
    return (
        <div>
            <div className="footer_div creators" style={{ display: "flex", justifyContent: "center", background: "linear-gradient(90deg,#1eb0f6 6.32%,#2bd4df)" }}>
                <HomepageFooter name="Saikat Mohanta" post="Developer" />
                <HomepageFooter name="Saikat Mohanta" post="Developer" />
                <HomepageFooter name="Saikat Mohanta" post="Developer" />
            </div>
            <div className="copyright" style={{ backgroundColor: "blue", color: "white", textAlign: "center", background: "linear-gradient(90deg,#1eb0f6 6.32%,#2bd4df)" }}>
                <b>CopyRight - 2023</b>
            </div>
        </div>
    );
}
export default HomeFooter;