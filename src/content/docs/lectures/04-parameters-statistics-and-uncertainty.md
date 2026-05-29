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

## Today's big question

What is the difference between the true population value and the value calculated from sample data?

In statistics, we distinguish between:

$$
\text{parameter}
\quad \text{and} \quad
\text{statistic}.
$$

## Parameter

A **parameter** is a numerical feature of a population.

Examples include:

- population mean: $\mu$;
- population variance: $\sigma^2$;
- population proportion: $p$.

If the population values are

$$
X_1, X_2, \ldots, X_N,
$$

then the population mean is

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

The population variance is

$$
\sigma^2 = \frac{1}{N}\sum_{i=1}^{N}(X_i-\mu)^2.
$$

## Statistic

A **statistic** is a numerical feature calculated from sample data.

If the sample values are

$$
x_1, x_2, \ldots, x_n,
$$

then the sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

The sample variance is

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

## Why uncertainty appears

**James:** So we use $\bar{x}$ to estimate $\mu$?

**Mr. R:** Exactly.

**Sophia:** But before observing the data, the sample mean is a random variable.

**Mr. R:** Correct. Before observing the sample, we write:

$$
\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i.
$$

After observing the data, the realised value is:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

Different samples can produce different values of $\bar{x}$.

This is sampling variation.

## Key takeaway

Statistics separates two worlds:

$$
\text{Population world: parameters}
$$

and

$$
\text{Sample world: statistics}.
$$

Inference uses statistics to learn about parameters while accounting for uncertainty.

## Reflection question

A survey of 800 voters finds that 54% support a candidate.

Is 54% a parameter or a statistic?

What parameter might it estimate?
