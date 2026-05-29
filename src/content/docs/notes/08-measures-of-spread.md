---
title: "Note 8: Measures of Spread"
description: "Detailed notes on range, variance, standard deviation, and interquartile range."
---

## Learning objectives

By the end of this note, you should be able to:

- explain why spread is needed in addition to centre;
- define the range;
- define deviations from the mean;
- explain variance and standard deviation;
- interpret standard deviation in original units;
- define the interquartile range;
- compare standard deviation and IQR;
- identify common mistakes in interpreting variability.

## 1. Introduction

A measure of centre tells us where the data are located.

But centre alone is not enough.

Two datasets may have the same mean but very different variability.

For example:

$$
48,\ 49,\ 50,\ 51,\ 52
$$

and:

$$
20,\ 35,\ 50,\ 65,\ 80
$$

both have mean 50, but the second dataset is much more spread out.

Spread describes how much observations vary.

## 2. Range

The **range** is the difference between the largest and smallest observations:

$$
\text{Range}=x_{\max}-x_{\min}.
$$

For the dataset:

$$
20,\ 35,\ 50,\ 65,\ 80,
$$

the range is:

$$
80-20=60.
$$

The range is simple, but it depends only on two values. Therefore, it is sensitive to extreme observations.

## 3. Deviations from the mean

For each observation $x_i$, the deviation from the mean is:

$$
x_i-\bar{x}.
$$

This tells us how far the observation is from the mean, including direction.

Positive deviations are above the mean.

Negative deviations are below the mean.

However:

$$
\sum_{i=1}^{n}(x_i-\bar{x})=0.
$$

So raw deviations cancel out.

## 4. Variance

To avoid cancellation, we square the deviations.

The **sample variance** is:

$$
s^2=\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

Variance measures average squared distance from the mean.

The reason squared deviations are used is that:

- they make all deviations non-negative;
- they give larger deviations more weight;
- they lead to useful mathematical properties.

:::note[Interpretation]

Variance is useful mathematically, but it is measured in squared units.

:::

## 5. Standard deviation

The **sample standard deviation** is the square root of the sample variance:

$$
s=\sqrt{s^2}.
$$

Therefore:

$$
s=\sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2}.
$$

Standard deviation is easier to interpret than variance because it is measured in the original units.

For example:

- if height is measured in cm, standard deviation is measured in cm;
- if income is measured in pounds, standard deviation is measured in pounds;
- if marks are measured in points, standard deviation is measured in points.

## 6. Why divide by $n-1$?

The sample variance uses $n-1$ rather than $n$:

$$
s^2=\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

The reason is connected to estimating the population variance.

When we calculate deviations from $\bar{x}$, the sample mean has already been estimated from the data. This uses one degree of freedom.

The deviations satisfy:

$$
\sum_{i=1}^{n}(x_i-\bar{x})=0.
$$

So once $n-1$ deviations are known, the last one is determined.

This is why the denominator is $n-1$.

## 7. Interquartile range

The **interquartile range** is:

$$
\text{IQR}=Q_3-Q_1.
$$

It measures the spread of the middle 50% of the data.

The IQR is less sensitive to extreme values than the range or standard deviation.

It is especially useful for skewed data.

## 8. Comparing measures of spread

| Measure | Uses all values? | Sensitive to outliers? | Best used when |
|---|---:|---:|---|
| Range | No | Very sensitive | Quick rough spread |
| Variance | Yes | Sensitive | Mathematical analysis |
| Standard deviation | Yes | Sensitive | Roughly symmetric numerical data |
| IQR | No | Less sensitive | Skewed data or outliers |

## 9. Common mistakes

:::caution[Common mistakes]

Do not interpret variance in original units.

Do not report centre without spread.

Do not assume two datasets with the same mean have the same variability.

Do not ignore outliers when using standard deviation.

:::

## 10. Summary

Spread describes variability.

A good numerical description often includes both centre and spread:

$$
\text{description}=\text{centre}+\text{spread}.
$$

The mean and standard deviation are often paired.

The median and IQR are often paired.

## Revision questions

1. What is the range?
2. What is a deviation from the mean?
3. Why do raw deviations sum to zero?
4. What is variance?
5. What is standard deviation?
6. Why is standard deviation easier to interpret than variance?
7. What is the IQR?
