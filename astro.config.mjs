import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://Statisticahub.github.io',
  base: '/statistics-foundation-course',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  integrations: [
    starlight({
      title: 'Statistics Foundation for University Students',
      description:
        'A theoretical, beginner-friendly foundation course in statistics for university students by My Academic Tutor.',

      customCss: ['./src/styles/custom.css'],

      components: {
        Footer: './src/components/Footer.astro',
        ThemeSelect: './src/components/Empty.astro',
      },

      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css',
          },
        },
      ],

      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Home', slug: 'index' },
            { label: 'About', slug: 'about' },
            { label: 'Formula Sheet', slug: 'formula-sheet' },
          ],
        },

        {
          label: 'Lectures',
          items: [
            { label: 'Lectures Overview', slug: 'lectures' },

            {
              label: 'Module 1: Foundations of Statistics',
              items: [
                {
                  label: '1. Introduction to Statistics',
                  slug: 'lectures/01-introduction-to-statistics',
                },
                {
                  label: '2. Populations, Samples and Variables',
                  slug: 'lectures/02-populations-samples-and-variables',
                },
                {
                  label: '3. Types of Data and Measurement Scales',
                  slug: 'lectures/03-types-of-data-and-measurement-scales',
                },
                {
                  label: '4. Parameters, Statistics and Uncertainty',
                  slug: 'lectures/04-parameters-statistics-and-uncertainty',
                },
                {
                  label: '5. Descriptive and Inferential Statistics',
                  slug: 'lectures/05-descriptive-and-inferential-statistics',
                },
              ],
            },

            {
              label: 'Module 2: Descriptive Statistics',
              items: [
                {
                  label: '6. Tables, Graphs and Data Summaries',
                  slug: 'lectures/06-tables-graphs-and-data-summaries',
                },
                {
                  label: '7. Measures of Centre',
                  slug: 'lectures/07-measures-of-centre',
                },
                {
                  label: '8. Measures of Spread',
                  slug: 'lectures/08-measures-of-spread',
                },
                {
                  label: '9. Position, Shape and Outliers',
                  slug: 'lectures/09-position-shape-and-outliers',
                },
                {
                  label: '10. Standardisation and Z-scores',
                  slug: 'lectures/10-standardisation-and-z-scores',
                },
              ],
            },
          ],
        },

        {
          label: 'Notes',
          items: [
            { label: 'Notes Overview', slug: 'notes' },

            {
              label: 'Module 1: Foundations of Statistics',
              items: [
                {
                  label: '1. Introduction to Statistics',
                  slug: 'notes/01-introduction-to-statistics',
                },
                {
                  label: '2. Populations, Samples and Variables',
                  slug: 'notes/02-populations-samples-and-variables',
                },
                {
                  label: '3. Types of Data and Measurement Scales',
                  slug: 'notes/03-types-of-data-and-measurement-scales',
                },
                {
                  label: '4. Parameters, Statistics and Uncertainty',
                  slug: 'notes/04-parameters-statistics-and-uncertainty',
                },
                {
                  label: '5. Descriptive and Inferential Statistics',
                  slug: 'notes/05-descriptive-and-inferential-statistics',
                },
              ],
            },

            {
              label: 'Module 2: Descriptive Statistics',
              items: [
                {
                  label: '6. Tables, Graphs and Data Summaries',
                  slug: 'notes/06-tables-graphs-and-data-summaries',
                },
                {
                  label: '7. Measures of Centre',
                  slug: 'notes/07-measures-of-centre',
                },
                {
                  label: '8. Measures of Spread',
                  slug: 'notes/08-measures-of-spread',
                },
                {
                  label: '9. Position, Shape and Outliers',
                  slug: 'notes/09-position-shape-and-outliers',
                },
                {
                  label: '10. Standardisation and Z-scores',
                  slug: 'notes/10-standardisation-and-z-scores',
                },
              ],
            },
          ],
        },

        {
          label: 'Exercises',
          items: [
            { label: 'Exercises Overview', slug: 'exercises' },

            {
              label: 'Module 1: Foundations of Statistics',
              items: [
                {
                  label: '1. Introduction to Statistics',
                  slug: 'exercises/01-introduction-to-statistics',
                },
                {
                  label: '2. Populations, Samples and Variables',
                  slug: 'exercises/02-populations-samples-and-variables',
                },
                {
                  label: '3. Types of Data and Measurement Scales',
                  slug: 'exercises/03-types-of-data-and-measurement-scales',
                },
                {
                  label: '4. Parameters, Statistics and Uncertainty',
                  slug: 'exercises/04-parameters-statistics-and-uncertainty',
                },
                {
                  label: '5. Descriptive and Inferential Statistics',
                  slug: 'exercises/05-descriptive-and-inferential-statistics',
                },
              ],
            },

            {
              label: 'Module 2: Descriptive Statistics',
              items: [
                {
                  label: '6. Tables, Graphs and Data Summaries',
                  slug: 'exercises/06-tables-graphs-and-data-summaries',
                },
                {
                  label: '7. Measures of Centre',
                  slug: 'exercises/07-measures-of-centre',
                },
                {
                  label: '8. Measures of Spread',
                  slug: 'exercises/08-measures-of-spread',
                },
                {
                  label: '9. Position, Shape and Outliers',
                  slug: 'exercises/09-position-shape-and-outliers',
                },
                {
                  label: '10. Standardisation and Z-scores',
                  slug: 'exercises/10-standardisation-and-z-scores',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});