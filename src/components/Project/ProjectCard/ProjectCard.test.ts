import { describe, expect, it } from 'vitest';
import { createVuetify } from 'vuetify';
import { mount } from '@vue/test-utils';
import ProjectCard from './ProjectCard.vue';
import type { IProject } from '~/types/Project';

const projectItem: IProject = {
  id: 1,
  img: '/img/test-img.webp',
  title: 'title',
  shortlyText: 'shortlyText',
  link: '/test/tset',
  skills: [
    {
      id: 1,

      text: 'HTML',
      color: 'red-darken-1'
    },

    {
      id: 2,
      icon: 'mdi-language-css3',
      text: 'CSS',
      color: 'blue-lighten-1'
    }
  ]
};

describe('ProjectCard tests', () => {
  const vuetify = createVuetify();

  const wrapper = mount(ProjectCard, {
    props: {
      projectItem
    },

    global: {
      plugins: [vuetify]
    }
  });

  it('Renders ProjectCard component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('component have title', () => {
    expect(wrapper.find('div').text()).toContain(`Проект «${projectItem.title}»`);
  });

  it('component have shortlyText', () => {
    expect(wrapper.find('div').text()).toContain(projectItem.shortlyText);
  });

  it('component have skills', () => {
    wrapper.findAllComponents('.v-chip').forEach((item) => {
      expect(item.text()).not.toBe('');
    });
  });

  it('component have link', () => {
    expect(wrapper.find('a').text()).toContain(`Перейти на ${projectItem.title}`);
    expect(wrapper.find('a').attributes('href')).toBe(projectItem.link);
    expect(wrapper.find('a').attributes('target')).toBe('_blank');
  });

  it('component have img', () => {
    expect(wrapper.find('nuxt-img').exists()).toBe(true);
    expect(wrapper.find('nuxt-img').attributes('src')).toBe(projectItem.img);
  });
});
