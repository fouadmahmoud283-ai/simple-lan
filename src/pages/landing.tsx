import React from "react";

const Landing: React.FC = () => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Welcome to Simple LAN App</h1>
            <p>This is the landing page. Get started by exploring the features!</p>
        </div>
    );
};

export default Landing;