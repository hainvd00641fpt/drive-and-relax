import React from 'react'

const testStyle = {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    // zIndex: "10000",
}

const testFull = {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    // zIndex: "10000",
    // display: 'none'
    pointerEvents: "none"
}

export default function BackgroundPage() {
    return (
        <div style={testFull}>
            <div className="background-video" style={testStyle}>
               <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/G_H800ffKb0?autoplay=1&;enablejsapi=1&controls=0&start=90&nologo=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen="1"
                ></iframe>
            </div>
        </div>
    )
}
