// Automated accessibility and visual regression test for modal dialog
const { test, expect } = require('@playwright/test');

test.describe('Modal Dialog Accessibility', () => {
  test('should open and close the modal with keyboard and mouse', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust port as needed
    await page.click('text=See All');
    await expect(page.locator('[role=dialog]')).toBeVisible();
    // Focus trap test
    await page.keyboard.press('Tab');
    const closeBtn = page.locator('[aria-label="Close dialog"]');
    await expect(closeBtn).toBeFocused();
    // ESC to close
    await page.keyboard.press('Escape');
    await expect(page.locator('[role=dialog]')).toBeHidden();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 700 });
    await page.goto('http://localhost:3000');
    await page.click('text=See All');
    const modal = page.locator('[role=dialog]');
    await expect(modal).toBeVisible();
    const modalBox = await modal.boundingBox();
    expect(modalBox.width).toBeLessThanOrEqual(375);
  });
});
