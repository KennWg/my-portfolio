import { useEffect, useState } from "react";

export function usePagePosition(setCategory,aboutRef,contactRef) {
    const [pagePosition, setPagePosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setPagePosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        console.log(aboutRef.current.offsetTop);
        console.log(pagePosition);

        if(pagePosition < aboutRef.current.offsetTop - 150){
            setCategory("portfolio");
        } else if (pagePosition > aboutRef.current.offsetTop + 200){
            setCategory("contact");
        } else {
            setCategory("about");
        }

        return () => window.removeEventListener('scroll', updatePosition);
    });

    return pagePosition;
}