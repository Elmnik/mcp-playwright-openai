// Playwright test

import { test, expect } from '@playwright/test';

//Test1
test('Ask ChatGPT about Playwright (MOCKED)', async ({ page }) => {
  // Mock the AI response
    const mockAnswer = "Playwright is a browser automation tool for testing.";

    await page.goto('https://example.com'); //using an example domain
    await page.fill('#input-field', 'What is Playwright?'); //example locator
    await page.click('#submit-button'); //action

  // Verify the mock response
    await expect(page.locator('#response')).toContainText(mockAnswer);
});