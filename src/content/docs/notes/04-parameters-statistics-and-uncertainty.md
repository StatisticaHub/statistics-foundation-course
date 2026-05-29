---
title: "Note 4: Parameters, Statistics and Uncertainty"
description: "Detailed notes on population parameters, sample statistics, and sampling uncertainty."
---

## Learning objectives

By the end of this note, you should be able to:

- define a parameter;
- define a statistic;
- distinguish population quantities from sample quantities;
- explain why statistics vary from sample to sample;
- understand the difference between $\bar{X}$ and $\bar{x}$;
- describe sampling variation;
- explain why uncertainty is central to inference.

## 1. Introduction

One of the most important distinctions in statistics is the distinction between a **parameter** and a **statistic**.

A parameter describes a population.

A statistic describes a sample.

This distinction matters because in most real situations we do not observe the full population. Instead, we observe a sample and use sample statistics to estimate unknown population parameters.

For example, if we want to know the average height of all students in a university, the true population mean height is a parameter. If we measure 200 students and calculate their average height, that sample mean is a statistic.

## 2. Parameters

A **parameter** is a numerical feature of a population.

Common parameters include:

| Symbol | Meaning |
|---|---|
| $\mu$ | Population mean |
| $\sigma^2$ | Population variance |
| $\sigma$ | Population standard deviation |
| $p$ | Population proportion |

If the population values are:

$$
X_1,X_2,\ldots,X_N,
$$

then the population mean is:

$$
\mu=\frac{1}{N}\sum_{i=1}^{N}X_i.
$$

The population variance is:

$$
\sigma^2=\frac{1}{N}\sum_{i=1}^{N}(X_i-\mu)^2.
$$

A parameter is usually treated as fixed but unknown.

:::note[Important idea]

The parameter is the quantity we want to know, but usually cannot observe directly.

:::

## 3. Statistics

A **statistic** is a numerical feature calculated from sample data.

Common statistics include:

| Symbol | Meaning |
|---|---|
| $\bar{x}$ | Sample mean |
| $s^2$ | Sample variance |
| $s$ | Sample standard deviation |
| $\hat{p}$ | Sample proportion |

If the sample values are:

$$
x_1,x_2,\ldots,x_n,
$$

then the sample mean is:

$$
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i.
$$

The sample variance is:

$$
s^2=\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

A statistic is known after the sample has been observed.

## 4. Random variable versus observed value

Before data are observed, the sample mean is a random variable:

$$
\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i.
$$

After data are observed, the sample mean becomes a number:

$$
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i.
$$

This distinction is important.

- $\bar{X}$ refers to the random process before observation.
- $\bar{x}$ refers to the observed value after sampling.

Sophia would say: $\bar{X}$ has a distribution, but $\bar{x}$ is one realised value from that distribution.

## 5. Sampling variation

Different samples from the same population can give different statistics.

This is called **sampling variation**.

For example, suppose we take three different samples of 100 students from the same university. Their sample means may be:

$$
\bar{x}_1=169.2,\quad \bar{x}_2=170.1,\quad \bar{x}_3=168.7.
$$

These values differ because the samples contain different students.

The true population mean $\mu$ is fixed, but the sample mean varies.

## 6. Why uncertainty matters

Because a sample statistic varies from sample to sample, we cannot simply treat it as the exact truth.

Instead, inference asks:

$$
\text{How close is the statistic likely to be to the parameter?}
$$

For example:

$$
\bar{x} \approx \mu.
$$

The symbol $\approx$ reminds us that the sample mean estimates the population mean but is not necessarily equal to it.

This idea leads naturally to:

- standard error;
- sampling distribution;
- confidence interval;
- hypothesis test.

## 7. Estimation

A statistic used to estimate a parameter is called an **estimator** before the data are observed and an **estimate** after the data are observed.

For example:

- $\bar{X}$ is an estimator of $\mu$;
- $\bar{x}$ is an estimate of $\mu$.

Similarly:

- $\hat{P}$ is an estimator of $p$;
- $\hat{p}$ is an estimate of $p$.

:::tip[Language matters]

Estimator: the rule before seeing data.

Estimate: the numerical value after seeing data.

:::

## 8. Common mistakes

:::caution[Common mistakes]

Do not confuse $\mu$ with $\bar{x}$.

Do not assume the sample statistic equals the population parameter.

Do not ignore sampling variation.

Do not describe a parameter as random in a basic frequentist setting.

:::

## 9. Summary

Statistics is built on the distinction between the population and the sample.

Population quantities are parameters.

Sample quantities are statistics.

The central problem of inference is to use statistics to learn about parameters while accounting for uncertainty.

## Revision questions

1. What is a parameter?
2. What is a statistic?
3. Why is $\mu$ different from $\bar{x}$?
4. What is sampling variation?
5. What is the difference between $\bar{X}$ and $\bar{x}$?
6. What is an estimator?
7. What is an estimate?
