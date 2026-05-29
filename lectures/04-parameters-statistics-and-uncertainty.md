---
title: Lecture 4 - Parameters, Statistics and Uncertainty
parent: Lectures
nav_order: 4
---

# Lecture 4: Parameters, Statistics and Uncertainty

## Opening scene

Scene: Mr. R writes two symbols on the board:

$$
\mu \quad \text{and} \quad \bar{x}
$$

**Oliver:** I recognise \(\bar{x}\). That is the sample mean.

**Emma:** And \(\mu\) is the population mean.

**Mr. R:** Correct. Today we will understand why this distinction is one of the most important ideas in statistics.

---

## Today's big question

What is the difference between the true population value and the value calculated from sample data?

In statistics, we often distinguish between:

$$
\text{parameter}
\quad \text{and}
\quad
\text{statistic}.
$$

---

## Parameter

A parameter is a numerical feature of a population.

Examples:

| Parameter | Meaning |
|---|---|
| \(\mu\) | population mean |
| \(\sigma^2\) | population variance |
| \(p\) | population proportion |

If a population has values

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

---

## Statistic

A statistic is a numerical feature calculated from sample data.

If a sample has values

$$
x_1, x_2, \ldots, x_n,
$$

then the sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

The sample variance is commonly written as

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

**Sophia:** Why do we use \(n-1\) instead of \(n\)?

**Mr. R:** That question leads to the idea of unbiased estimation. We will study it properly later. For now, remember that \(s^2\) is used to estimate the population variance \(\sigma^2\).

---

## Mini conversation: known and unknown

**Oliver:** Do we usually know the parameter?

**Mr. R:** Usually, no. If we knew the population parameter exactly, we would not need to estimate it.

**Emma:** So the statistic is calculated from the sample and used to estimate the parameter.

**Mr. R:** Exactly.

**James:** So statistics is a bridge from what we observe to what we want to know.

**Mr. R:** Very well said.

---

## Uncertainty

Suppose we take one sample and calculate \(\bar{x}\).

Then we take another sample and calculate another \(\bar{x}\).

The two sample means may differ.

This variation occurs because samples differ.

So we may write:

$$
\bar{X} \neq \mu
$$

in general, but we hope that \(\bar{X}\) is close to \(\mu\).

---

## Sampling variation

**Mr. R:** The sample mean is not fixed before the sample is selected. It is a random quantity.

**Sophia:** So before observing the data, we should write it as \(\bar{X}\), not \(\bar{x}\)?

**Mr. R:** Correct. \(\bar{X}\) is a random variable. After observing data, its realised value is \(\bar{x}\).

This distinction is important:

$$
\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i
$$

is a random variable.

After observing data,

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i
$$

is a number.

---

## Common mistake

### Common mistake: assuming the sample value is the truth

A sample mean is not automatically the population mean.

A sample proportion is not automatically the population proportion.

A statistic is an estimate, and estimates are uncertain.

---

## Key takeaway

Statistics separates two worlds:

$$
\text{Population world: parameters}
$$

and

$$
\text{Sample world: statistics}.
$$

The goal of inference is to use statistics to learn about parameters while honestly accounting for uncertainty.

---

## Reflection question

A sample of 150 adults gives an average systolic blood pressure of 128 mmHg.

Is 128 mmHg a parameter or a statistic?

What population parameter might it be estimating?
