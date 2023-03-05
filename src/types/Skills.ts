export interface Skill {
    [name: string]: string | undefined,
    icon?: string,
    text: string,
}

export type Skills = Skill[];
