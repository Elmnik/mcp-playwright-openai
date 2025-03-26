import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 30000, // Longer timeout for AI calls
    fullyParallel: true,
});