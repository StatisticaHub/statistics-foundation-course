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
      title: 'Statistics Foundation',
      description:
        'A theoretical, beginner-friendly foundation course in statistics by StatisticaHub.',

      customCss: ['./src/styles/custom.css'],

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
          ],
        },

        {
          label: 'Notes',
          items: [
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
          ],
        },

        {
          label: 'Exercises',
          items: [
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
          ],
        },
      ],
    }),
  ],
});