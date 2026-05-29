---
title: "Lecture 8: Measures of Spread"
description: "Understanding range, variance, standard deviation, and interquartile range."
---

## Opening scene

Scene: Mr. R writes two sets of marks on the board.

Set A:

$$
48,\ 49,\ 50,\ 51,\ 52
$$

Set B:

$$
20,\ 35,\ 50,\ 65,\ 80
$$

**Oliver:** Both sets seem centred around 50.

**Mr. R:** Good observation. But are they equally variable?

**Emma:** No. Set B is much more spread out.

**Mr. R:** Exactly. A measure of centre is not enough. We also need a measure of spread.

:::note[Today's big question]

How much do observations vary around the centre?

:::

## Why spread matters

Two datasets can have the same centre but very different variability.

Both sets above have mean:

$$
\bar{x}=50.
$$

But Set A is tightly clustered, while Set B is widely spread.

**James:** So spread tells us whether the centre represents the data well.

**Mr. R:** Correct.

## Range

The range is:

$$
\text{Range}=x_{\max}-x_{\min}.
$$

**Oliver:** That is simple.

**Mr. R:** Yes, but it only uses two values: the minimum and maximum.

**Emma:** So one extreme value can strongly affect the range.

**Mr. R:** Exactly.

## Deviations from the mean

For each observation $x_i$, the deviation from the mean is:

$$
x_i-\bar{x}.
$$

A positive deviation means the value is above the mean.

A negative deviation means the value is below the mean.

But:

$$
\sum_{i=1}^{n}(x_i-\bar{x})=0.
$$

So raw deviations cancel out.

## Variance

To avoid cancellation, we square the deviations.

The sample variance is:

$$
s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$

**Sophia:** Squaring makes deviations non-negative.

**Mr. R:** Correct. It also gives larger deviations more weight.

## Standard deviation

The standard deviation is the square root of the variance:

$$
s = \sqrt{s^2}.
$$

So:

$$
s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2}.
$$

**James:** Why take the square root?

**Mr. R:** Because variance is in squared units. Standard deviation returns the measure to the original units.

:::tip[Key intuition]

Standard deviation describes a typical distance from the mean, measured in the original units.

:::

## Interquartile range

The interquartile range is:

$$
\text{IQR}=Q_3-Q_1.
$$

It measures the spread of the middle 50% of the data.

**Emma:** So IQR is less affected by extreme values.

**Mr. R:** Correct.

## Common mistake

:::caution[Common mistake]

Do not interpret variance in the original units.

If the data are measured in centimetres, variance is measured in centimetres squared. Standard deviation is easier to interpret.

:::

## Key takeaway

Centre tells us where the data are located.

Spread tells us how much the data vary.

$$
\text{Description} = \text{centre} + \text{spread}.
$$

## Reflection question

Two classes have the same mean mark, but one class has a much larger standard deviation.

What does this tell you?
