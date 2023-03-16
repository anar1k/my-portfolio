import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ProjectCard from './ProjectCard.vue';
import { IProject } from '~/types/Project';

describe('ProjectCard tests', () => {
  it('Renders ProjectCard component', async () => {
    const propsData: IProject = {
      id: 1,
      img: '/img/test-img.webp',
      title: 'test',
      shortlyText: 'test'
    };

    const wrapper = await mount(ProjectCard, {
      props: propsData
    });
    console.log(wrapper.find('div').text());
    expect(wrapper.find('div').text()).toBe(`Проект «${propsData.title}»`);
  });
});
