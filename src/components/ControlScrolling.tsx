'use client'

import { useState, useEffect } from "react";

function ControlScrolling() {
    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault();

        // Disable scrolling
        document.body.style.overflow = 'hidden';
        document.addEventListener('wheel', preventDefault, { passive: false });
        document.addEventListener('touchmove', preventDefault, { passive: false });

        // Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('wheel', preventDefault);
            document.removeEventListener('touchmove', preventDefault);
        };
    }, []);

    return null;
}

export default ControlScrolling