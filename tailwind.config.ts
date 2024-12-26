import type { Config } from 'tailwindcss';
import themer from 'tailwindcss-themer';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    themer({
      defaultTheme: {
        extend: {
          colors: {
            background: '#954bf780',
            'card-background': '#e9e3eaee',
            scrollbar: colors.indigo[200],
          },
          boxShadow: { card: defaultTheme.boxShadow.xl },
          fontFamily: { main: ['JetBrains Mono', 'monospace'] },
        },
      },
      themes: [
        {
          name: 'inset-theme',
          extend: {
            boxShadow: { card: 'inset 0 2px 4px 0 black' },
          },
        },

        {
          name: 'translucent-theme',
          extend: {
            colors: {
              'card-background': '#e9e3eacc',
            },
          },
        },

        {
          name: 'dark-theme',
          mediaQuery: '@media (prefers-color-scheme: dark)',
          extend: {
            colors: {
              background: colors.indigo[950],
              'card-background': colors.black,
              scrollbar: colors.indigo[950],
            },
          },
        },
      ],
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.grid-center': {
          display: 'grid',
          'place-items': 'center',
        },
      });
    }),
  ],
} satisfies Config;
