import { h } from 'vue';
import type { IconSet, IconProps } from 'vuetify';
import TelegramIcon from '@/components/CustomIcons/TelegramIcon.vue';

const aliases: { [key in string]: string } = {
  telegram: 'custom:TelegramIcon'
};

const customSvgNameToComponent: any = {
  TelegramIcon
};

const customSVGs: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon])
};

export { aliases, customSVGs };
