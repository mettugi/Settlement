import { test, expect } from '@playwright/test';
import { BookstorePage } from '../pages/BookstorePage';

test('Search for a valid book', async ({ page }) => {
  const bookstore = new BookstorePage(page);
  await page.goto('https://demoqa.com/books');
  await bookstore.searchBook('Git');
  await expect(page.locator('.action-buttons a')).toHaveCount(1);
});

test('Search for a invalid book', async ({ page }) => {
  const bookstore = new BookstorePage(page);
  await page.goto('https://demoqa.com/books');
  await bookstore.searchBook('agit');
  await expect(page.locator('.action-buttons a')).toHaveCount(0);
});
