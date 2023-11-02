import type { ISkill } from '~/types/Skill';

export interface IProject {
    id: number,
    img: string,
    title: string,
    shortlyText: string,
    skills?: ISkill[],
    link?: string,
}
