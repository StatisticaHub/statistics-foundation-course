---
title: "Note 5: Descriptive and Inferential Statistics"
description: "Detailed notes on describing observed data and generalising from samples to populations."
---

## Learning objectives

By the end of this note, you should be able to:

- define descriptive statistics;
- define inferential statistics;
- distinguish describing observed data from generalising to a population;
- explain why probability is needed for inference;
- identify descriptive and inferential questions;
- understand why sample design affects inference;
- avoid overgeneralising from sample summaries.

## 1. Introduction

Statistics has two broad purposes:

$$
\text{description}
\quad \text{and} \quad
\text{inference}.
$$

Descriptive statistics summarises what has been observed.

Inferential statistics uses what has been observed to draw conclusions about a wider population.

Both are important, but they answer different questions.

A sample mean, for example, can be used descriptively or inferentially depending on the purpose.

If we calculate the mean mark of 40 students and only describe those 40 students, the calculation is descriptive. If we use those 40 students to estimate the mean mark of all students in the school, the same calculation becomes part of inference.

## 2. Descriptive statistics

**Descriptive statistics** summarises observed data.

Suppose we observe:

$$
x_1,x_2,\ldots,x_n.
$$

Descriptive summaries include:

- frequency tables;
- bar charts;
- histograms;
- mean;
- median;
- mode;
- range;
- variance;
- standard deviation;
- interquartile range.

The sample mean is:

$$
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i.
$$

The sample variance is:

$$
s^2=\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

These summaries describe the observed data.

They do not automatically justify conclusions about a larger population.

## 3. Inferential statistics

**Inferential statistics** uses sample data to learn about a population.

The basic movement is:

$$
\text{sample}
\quad \longrightarrow \quad
\text{population}.
$$

Examples include:

- estimating a population mean;
- estimating a population proportion;
- constructing a confidence interval;
- testing a hypothesis;
- comparing two population means;
- modelling relationships between variables.

If $\bar{x}$ is used to estimate $\mu$, then we are doing inference.

## 4. Why inference is uncertain

Inference is uncertain because the sample is only one possible subset of the population.

If another sample had been selected, the sample statistic might have been different.

This is why inferential statements should include uncertainty.

For example, instead of saying:

> The population mean is 128.

we might say:

> The sample mean is 128, and based on the sampling uncertainty, plausible values for the population mean lie within a certain interval.

This is the logic behind confidence intervals.

## 5. Descriptive versus inferential questions

| Question | Type |
|---|---|
| What is the average mark of these 40 students? | Descriptive |
| What is the estimated average mark of all Year 10 students? | Inferential |
| What percentage of this sample smokes? | Descriptive |
| What proportion of adults in the city smoke? | Inferential |
| What is the range of these observed values? | Descriptive |
| Is there evidence that the population mean differs from 50? | Inferential |

## 6. Role of probability in inference

Probability helps us describe how statistics behave under repeated sampling.

For example, before observing data, the sample mean is:

$$
\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i.
$$

Because $\bar{X}$ depends on the random sample, it has a distribution.

This distribution is called the sampling distribution.

Understanding the sampling distribution allows us to reason about:

- standard errors;
- confidence intervals;
- p-values;
- uncertainty.

:::note[Core idea]

Descriptive statistics summarises data.

Inferential statistics uses probability to generalise from data.

:::

## 7. The danger of overgeneralisation

A common mistake is to describe a sample and then speak as if the result automatically applies to the population.

For example:

> In our sample of 200 people, 60% supported the policy. Therefore, 60% of the city supports the policy.

This statement may be too strong.

Before generalising, we should ask:

- how was the sample selected?
- was the sample representative?
- how large was the sample?
- what is the sampling uncertainty?
- were there non-response or measurement issues?

## 8. Common mistakes

:::caution[Common mistakes]

Do not generalise from a sample without thinking about sampling.

Do not report descriptive summaries as if they are automatically population truths.

Do not ignore uncertainty when making inferential claims.

:::

## 9. Summary

Descriptive statistics answers:

$$
\text{What does the observed data show?}
$$

Inferential statistics answers:

$$
\text{What can the observed data tell us about a wider population?}
$$

Description is about summarising.

Inference is about generalising.

## Revision questions

1. What is descriptive statistics?
2. What is inferential statistics?
3. Can the same sample mean be descriptive and inferential?
4. Why is probability needed for inference?
5. What is overgeneralisation?
6. Why does sample selection matter?
