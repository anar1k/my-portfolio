import { describe, expect, it } from 'vitest';
import { $fetch } from '@nuxt/test-utils';

describe('ProjectCard', () => {
  it('Renders index page', async () => {
    const html = await $fetch('/');

    expect(html).not.toBeNull();
  });
});
