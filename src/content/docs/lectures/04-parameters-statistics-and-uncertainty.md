---
title: "Lecture 4: Parameters, Statistics and Uncertainty"
description: "Understanding the difference between population quantities and sample quantities."
---

## Opening scene

Scene: Mr. R writes two symbols on the board:

$$
\mu \quad \text{and} \quad \bar{x}.
$$

**Oliver:** I remember $\bar{x}$. It is the sample mean.

**Emma:** And $\mu$ is the population mean.

**Mr. R:** Correct. Today we will understand why this distinction is one of the most important ideas in statistics.

**James:** Is this where uncertainty enters?

**Mr. R:** Exactly. The gap between population quantities and sample quantities creates uncertainty.

:::note[Today's big question]

What is the difference between the true population value and the value calculated from sample data?

:::

## Parameter

A **parameter** is a numerical feature of a population.

Examples:

| Parameter | Meaning |
|---|---|
| $\mu$ | Population mean |
| $\sigma^2$ | Population variance |
| $p$ | Population proportion |

If the population values are:

$$
X_1, X_2, \ldots, X_N,
$$

then the population mean is:

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

The population variance is:

$$
\sigma^2 = \frac{1}{N}\sum_{i=1}^{N}(X_i-\mu)^2.
$$

**Sophia:** If the population is fixed, these parameters are fixed.

**Mr. R:** Correct. They are fixed but usually unknown.

## Statistic

A **statistic** is a numerical feature calculated from sample data.

If the sample values are:

$$
x_1, x_2, \ldots, x_n,
$$

then the sample mean is:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

The sample variance is:

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

**Emma:** So the statistic is known after the sample is observed.

**Mr. R:** Exactly.

## Mini conversation: fixed but unknown

**Oliver:** If $\mu$ is fixed, why do we not just use it?

**Mr. R:** Because we usually do not observe the full population.

**James:** So we calculate $\bar{x}$ and use it to estimate $\mu$.

**Mr. R:** Correct.

**Sophia:** Before the sample is observed, should we write the sample mean as $\bar{X}$?

**Mr. R:** Yes. Before observation, it is a random variable:

$$
\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i.
$$

After observation, it becomes a realised number:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

## Why uncertainty appears

Different samples can produce different values of $\bar{x}$.

So the central question becomes:

$$
\text{How far might } \bar{X} \text{ be from } \mu?
$$

This question leads to:

- standard errors;
- sampling distributions;
- confidence intervals;
- hypothesis tests.

:::tip[Key intuition]

A statistic is not the truth. It is sample-based evidence about an unknown population parameter.

:::

## Common mistake

:::caution[Common mistake]

Do not treat a sample mean as if it is automatically the population mean.

A sample statistic estimates a parameter, but it contains uncertainty.

:::

## Key takeaway

Statistics separates two worlds:

$$
\text{Population world: parameters}
$$

and:

$$
\text{Sample world: statistics}.
$$

Inference uses statistics to learn about parameters while accounting for uncertainty.

## Reflection question

A survey of 800 voters finds that 54% support a candidate.

Is 54% a parameter or a statistic?

What parameter might it estimate?
