import { alertService } from 'alertor-library';
import { v4 as uuidv4 } from 'uuid';

const createNotification = (type: 'success' | 'error', message: string) => {
    alertService.addAlert({
        position: 'bottom-right',
        spawnAnimation: 'smooth-sliding-in',
        fadeAnimation: 'fade-out',
        type,
        visibleTime: 5000,
        title: type === 'success' ? 'Subscribed' : 'Error in subscribed!',
        description: message,
        indent: 'small',
        color: type === 'success' ? '#0cee53' : '#f30808',
        id: uuidv4(),
        animationDuration: 1000,
    });
};

export default createNotification;
