import { useEffect, useState } from 'react';

function useSliderCards(defaultCards: number) {
    const [sliderCards, setSliderCards] = useState(defaultCards);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1100) {
                setSliderCards(3);
            } else if (width >= 768) {
                setSliderCards(2);
            } else {
                setSliderCards(1);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { sliderCards };
}

export default useSliderCards;
