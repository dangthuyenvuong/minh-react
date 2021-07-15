import React from 'react'

export default function VideoModal() {
    return (
        <div className="popup-video" style={{ display: 'none' }}>
            <div className="wrap">
                <div className="video-src" />
            </div>
            <div className="close" />
        </div>
    )
}
