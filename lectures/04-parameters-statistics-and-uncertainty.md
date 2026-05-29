---
title: Lecture 4 - Parameters, Statistics and Uncertainty
parent: Lectures
nav_order: 4
permalink: /lectures/04-parameters-statistics-and-uncertainty/
---

# Lecture 4: Parameters, Statistics and Uncertainty

## Opening scene

Scene: Mr. R writes two symbols on the board:

$$
\mu \quad \text{and} \quad \bar{x}
$$

**Oliver:** I remember \(\bar{x}\). It is the sample mean.

**Emma:** And \(\mu\) is the population mean.

**Mr. R:** Correct. Today we will understand why this distinction is one of the most important ideas in statistics.

**James:** Is this where uncertainty enters?

**Mr. R:** Exactly. The difference between population quantities and sample quantities leads naturally to uncertainty.

---

## Today's big question

What is the difference between the true population value and the value calculated from sample data?

In statistics, we distinguish between:

$$
\text{Parameter}
\quad \text{and} \quad
\text{Statistic}.
$$

---

## Parameter

A **parameter** is a numerical feature of a population.

Examples:

- population mean: \(\mu\);
- population variance: \(\sigma^2\);
- population proportion: \(p\).

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

**Sophia:** These are fixed values if the population is fixed?

**Mr. R:** Yes. Parameters are usually treated as fixed but unknown.

---

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

**Emma:** So the statistic is known once we observe the sample.

**Mr. R:** Correct.

---

## Mini conversation: fixed but unknown versus observed

**Oliver:** If \(\mu\) is fixed, why do we not just use it?

**Mr. R:** Because we usually do not know it. We would need to observe the whole population.

**James:** So we use \(\bar{x}\) to estimate \(\mu\).

**Mr. R:** Exactly.

**Sophia:** But before the sample is selected, \(\bar{X}\) is random.

**Mr. R:** Very important point. Before observing the data, the sample mean is written as

$$
\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i.
$$

After observing the data, it becomes the realised value

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

---

## Why uncertainty appears

Different samples can produce different values of \(\bar{x}\).

So although \(\mu\) is fixed, \(\bar{X}\) varies from sample to sample.

This is sampling variation.

The central question becomes:

$$
\text{How far might } \bar{X} \text{ be from } \mu?
$$

That question leads to:

- standard error;
- sampling distributions;
- confidence intervals;
- hypothesis testing.

---

## Quick activity

A sample of 150 adults gives a mean systolic blood pressure of 128 mmHg.

Identify:

1. The statistic.
2. The possible parameter being estimated.
3. The reason uncertainty exists.

<details>
<summary>Show suggested answer</summary>

The statistic is the sample mean, 128 mmHg. The parameter being estimated may be the population mean systolic blood pressure among the target adult population. Uncertainty exists because the sample is only one subset of the population, and another sample may give a different mean.

</details>

---

## Common mistake

### Common mistake: treating a statistic as the exact truth

A sample mean is not automatically the population mean.

A sample proportion is not automatically the population proportion.

A statistic is an estimate, and estimates contain uncertainty.

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

Inference uses statistics to learn about parameters while accounting for uncertainty.

---

## Reflection question

Suppose a survey of 800 voters finds that 54% support a candidate.

Is 54% a parameter or a statistic?

What parameter might it estimate?

<details>
<summary>Show suggested answer</summary>

The 54% is a sample statistic. It may estimate the population proportion of all target voters who support the candidate.

</details>
