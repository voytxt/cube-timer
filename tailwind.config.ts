import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: { light: colors.indigo[200], dark: colors.indigo[950] },
        'card-background': { light: colors.violet[200], dark: colors.violet[950] },
      },
      fontFamily: { main: ['Cartograph CF', 'monospace'] },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-color-light': {
          'scrollbar-color': `${colors.indigo[200]} ${colors.violet[200]}`,
        },
        '.scrollbar-color-dark': {
          'scrollbar-color': `${colors.indigo[950]} ${colors.violet[950]}`,
        },
      });
    }),
  ],
} satisfies Config;
