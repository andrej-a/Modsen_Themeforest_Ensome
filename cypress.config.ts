import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            baseUrl: 'http://localhost:3000/';
        },
        testIsolation: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        video: false,
    },
});
