import { describe, expect, it } from 'vitest';
import { createVuetify } from 'vuetify';
import { mount } from '@vue/test-utils';
import ProjectsCard from './ProjectsCard.vue';
import type { IProject } from '~/types/Project';

const cardItem: IProject = {
  id: 1,
  img: '/img/test-img.webp',
  title: 'title',
  shortlyText: 'shortlyText'
};

describe('ProjectsCard tests', () => {
  const vuetify = createVuetify();

  const wrapper = mount(ProjectsCard, {
    props: {
      cardItem
    },

    global: {
      plugins: [vuetify]
    }
  });

  it('Renders ProjectsCard component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('component have title', () => {
    expect(wrapper.find('.v-card-title').text()).toContain(cardItem.title);
  });

  it('component have shortlyText', () => {
    expect(wrapper.find('.v-card-text').text()).toContain(cardItem.shortlyText);
  });

  it('component have link', () => {
    expect(wrapper.find('a.v-card').exists()).toBe(true);
  });

  it('component have img', () => {
    expect(wrapper.find('nuxt-img').exists()).toBe(true);
    expect(wrapper.find('nuxt-img').attributes('src')).toBe(cardItem.img);
  });
});
