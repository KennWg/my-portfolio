import { useEffect, useState } from "react";

export function usePagePosition() {
    const [pagePosition, setPagePosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setPagePosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return pagePosition;
}