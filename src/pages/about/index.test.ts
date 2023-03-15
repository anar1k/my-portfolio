import { describe, expect, it } from 'vitest';
import { $fetch } from '@nuxt/test-utils';

describe('aboutPage', () => {
  it('Renders about page', async () => {
    const html = await $fetch('/about');

    expect(html).not.toBeNull();
  });
});
