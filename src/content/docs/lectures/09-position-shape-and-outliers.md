---
title: "Lecture 9: Position, Shape and Outliers"
description: "Understanding quartiles, percentiles, skewness, and unusual observations."
---

## Opening scene

Scene: Mr. R shows the class a histogram.

Most values are clustered on the left, but a few large values stretch far to the right.

**Oliver:** The graph looks unbalanced.

**Mr. R:** Good observation. That is an example of skewness.

**Emma:** So today we are looking beyond centre and spread?

**Mr. R:** Yes. We also need to understand position, shape, and outliers.

:::note[Today's big question]

How can we describe where values lie within a distribution and whether some observations are unusual?

:::

## Position in a dataset

A value's position tells us where it lies relative to the rest of the data.

Important measures of position include:

- quartiles;
- percentiles;
- z-scores.

## Quartiles

Quartiles divide ordered data into four parts.

| Quartile | Meaning |
|---|---|
| $Q_1$ | First quartile |
| $Q_2$ | Median |
| $Q_3$ | Third quartile |

Approximately:

$$
25\% \text{ of observations lie below } Q_1.
$$

$$
50\% \text{ of observations lie below } Q_2.
$$

$$
75\% \text{ of observations lie below } Q_3.
$$

## Percentiles

The $p$-th percentile is a value below which approximately $p\%$ of observations lie.

For example, the 90th percentile is a value below which approximately 90% of observations lie.

**James:** If a student is at the 90th percentile, did they perform better than about 90% of students?

**Mr. R:** In that context, yes.

:::tip[Key intuition]

Percentiles describe relative position, not just raw value.

:::

## Shape of a distribution

The shape of a distribution describes the overall pattern of the data.

Important features include:

- symmetry;
- skewness;
- number of peaks;
- gaps;
- outliers.

## Symmetric distributions

A distribution is roughly symmetric when the left and right sides have similar shape.

In a symmetric distribution, the mean and median are often close.

## Right skew

A distribution is right-skewed when it has a long tail to the right.

In many right-skewed datasets:

$$
\text{mean} > \text{median}.
$$

Examples include income, hospital waiting times, and house prices.

## Left skew

A distribution is left-skewed when it has a long tail to the left.

In many left-skewed datasets:

$$
\text{mean} < \text{median}.
$$

## Outliers

An outlier is an observation that is unusually far from the rest of the data.

One common rule uses the IQR:

$$
\text{IQR}=Q_3-Q_1.
$$

A value may be unusually low if it is below:

$$
Q_1-1.5\times\text{IQR}.
$$

A value may be unusually high if it is above:

$$
Q_3+1.5\times\text{IQR}.
$$

**Emma:** Does this prove the value is wrong?

**Mr. R:** No. It only flags the value as unusual. We must investigate the context.

## Common mistake

:::caution[Common mistake]

Do not delete outliers automatically.

An outlier may be a data error, but it may also be a real and important observation.

:::

## Key takeaway

A good description of data includes:

$$
\text{centre}+\text{spread}+\text{position}+\text{shape}+\text{outliers}.
$$

## Reflection question

Why might the median be more informative than the mean for a strongly right-skewed variable such as income?
