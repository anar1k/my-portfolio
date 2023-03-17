import { beforeEach, describe, expect, it } from 'vitest';
import { createVuetify } from 'vuetify';
import { mount } from '@vue/test-utils';
import ProjectCard from './ProjectCard.vue';
import { IProject } from '~/types/Project';

const projectItem: IProject = {
  id: 1,
  img: '/img/test-img.webp',
  title: 'title',
  shortlyText: 'shortlyText'
};

describe('ProjectCard tests', () => {
  let wrapper: any;

  beforeEach(() => {
    const vuetify = createVuetify();

    wrapper = mount(ProjectCard, {
      props: {
        projectItem
      },

      global: {
        plugins: [vuetify]
      }
    });
  });

  it('Renders ProjectCard component', () => {
    expect(wrapper.find('div').text()).toContain(`Проект «${projectItem.title}»`);
    expect(wrapper.find('div').text()).toContain(projectItem.shortlyText);
  });
});
