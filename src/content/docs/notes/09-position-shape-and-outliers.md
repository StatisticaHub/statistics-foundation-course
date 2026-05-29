---
title: "Note 9: Position, Shape and Outliers"
description: "Detailed notes on quartiles, percentiles, skewness, distribution shape, and outliers."
---

## Learning objectives

By the end of this note, you should be able to:

- define quartiles and percentiles;
- interpret relative position in a dataset;
- describe distribution shape;
- distinguish symmetry, right skew, and left skew;
- define an outlier;
- use the IQR rule to identify possible outliers;
- explain why outliers should not be removed automatically.

## 1. Introduction

Centre and spread are important, but they do not describe everything.

To understand data well, we also need to describe:

- position;
- shape;
- skewness;
- outliers.

A dataset may have a mean and standard deviation, but still have unusual shape or extreme observations.

For example, income data often have strong right skew. Most people may have moderate income, but a small number of very high incomes can stretch the distribution to the right.

## 2. Position in a dataset

A value's position tells us where it lies relative to the rest of the data.

Measures of position include:

- quartiles;
- percentiles;
- z-scores.

Position is especially useful when we want to compare an individual value with a group.

## 3. Quartiles

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

The median is the second quartile:

$$
Q_2=\text{median}.
$$

## 4. Percentiles

The $p$-th percentile is the value below which approximately $p\%$ of observations lie.

For example:

- the 10th percentile has about 10% of observations below it;
- the 50th percentile is the median;
- the 90th percentile has about 90% of observations below it.

If a student is at the 90th percentile in an exam, this means the student scored higher than approximately 90% of students.

:::tip[Interpretation]

Percentiles describe relative position, not just raw performance.

:::

## 5. Distribution shape

The shape of a distribution describes the overall pattern of values.

Important features include:

- symmetry;
- skewness;
- number of peaks;
- gaps;
- clusters;
- outliers.

Graphs such as histograms and boxplots are useful for assessing shape.

## 6. Symmetric distributions

A distribution is symmetric if the left and right sides are approximately mirror images.

In a symmetric distribution, the mean and median are often close:

$$
\text{mean} \approx \text{median}.
$$

Many theoretical distributions, such as the normal distribution, are symmetric.

## 7. Right-skewed distributions

A distribution is right-skewed if it has a long tail to the right.

In many right-skewed distributions:

$$
\text{mean} > \text{median}.
$$

Examples include:

- income;
- hospital waiting time;
- house prices;
- length of stay.

The mean is pulled toward the long right tail.

## 8. Left-skewed distributions

A distribution is left-skewed if it has a long tail to the left.

In many left-skewed distributions:

$$
\text{mean} < \text{median}.
$$

Examples may include very easy exam scores, where many students score high and only a few score low.

## 9. Outliers

An **outlier** is an observation that is unusually far from the rest of the data.

Outliers may occur because of:

- measurement error;
- data entry error;
- unusual but genuine cases;
- rare events;
- mixture of different populations.

An outlier should be investigated, not automatically deleted.

## 10. IQR rule for possible outliers

The interquartile range is:

$$
\text{IQR}=Q_3-Q_1.
$$

A value may be flagged as unusually low if:

$$
x < Q_1 - 1.5\times \text{IQR}.
$$

A value may be flagged as unusually high if:

$$
x > Q_3 + 1.5\times \text{IQR}.
$$

This rule does not prove that an observation is wrong. It only identifies values that deserve attention.

## 11. Common mistakes

:::caution[Common mistakes]

Do not delete outliers automatically.

Do not rely only on the mean when the distribution is skewed.

Do not describe data without considering shape.

Do not confuse an unusual value with an impossible value.

:::

## 12. Summary

A good description of data includes:

$$
\text{centre}+\text{spread}+\text{position}+\text{shape}+\text{outliers}.
$$

Quartiles and percentiles describe relative position.

Skewness describes asymmetry.

Outliers identify unusual observations that may need investigation.

## Revision questions

1. What is a quartile?
2. What is a percentile?
3. What is the median in terms of quartiles?
4. What is right skew?
5. What is left skew?
6. What is an outlier?
7. Why should outliers not be removed automatically?
