import { useEffect, useState } from 'react';

function useSliderCards() {
    const [sliderCards, setSliderCards] = useState(3);

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
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { sliderCards };
}

export default useSliderCards;
