import React from "react";

// Export the Container, Row, and Col components 

// This Container component allows us to minimize using boostrap with class names
export function Container({ fluid, children}) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component allows us to minimize using boostrap with class names
export function Row({fluid, children}) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component ties col widths to "size" 
export function Col({size, children }) {
    return (
        <div className={size 
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
        {children}
        </div>
    );
}