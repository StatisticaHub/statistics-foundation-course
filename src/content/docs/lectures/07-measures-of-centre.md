---
title: "Lecture 7: Measures of Centre"
description: "Understanding mean, median, and mode as different ways to describe a typical value."
---

## Opening scene

Scene: Mr. R writes three words on the board:

> Mean, median, mode.

**Oliver:** I have heard all three before, but I usually use the mean.

**Mr. R:** Many students do. But the mean is not always the best measure of centre.

**Emma:** So each measure has a different meaning?

**Mr. R:** Exactly.

**James:** Does the best choice depend on the data?

**Mr. R:** Yes. Centre is not just a formula; it is an interpretation.

:::note[Today's big question]

How do we describe the centre or typical value of a dataset?

:::

## What is a measure of centre?

A measure of centre gives one value that represents where the data are located.

Suppose the observed values are:

$$
x_1, x_2, \ldots, x_n.
$$

A measure of centre tries to answer:

> What value is typical?

## The mean

The sample mean is:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

Equivalently:

$$
\bar{x} = \frac{x_1+x_2+\cdots+x_n}{n}.
$$

**Sophia:** The mean uses every observation.

**Mr. R:** Correct. That is its strength and its weakness.

**Oliver:** Why weakness?

**Mr. R:** Because extreme values can pull the mean upward or downward.

## Mean as a balance point

The mean has an important mathematical property:

$$
\sum_{i=1}^{n}(x_i-\bar{x}) = 0.
$$

**Sophia:** Can we derive that?

**Mr. R:** Yes.

$$
\sum_{i=1}^{n}(x_i-\bar{x})
=
\sum_{i=1}^{n}x_i
-
\sum_{i=1}^{n}\bar{x}.
$$

Since $\bar{x}$ is constant,

$$
\sum_{i=1}^{n}\bar{x}=n\bar{x}.
$$

So:

$$
\sum_{i=1}^{n}(x_i-\bar{x})
=
\sum_{i=1}^{n}x_i-n\bar{x}.
$$

But:

$$
n\bar{x}=\sum_{i=1}^{n}x_i.
$$

Therefore:

$$
\sum_{i=1}^{n}(x_i-\bar{x})=0.
$$

:::tip[Key intuition]

The mean is the balance point of the data.

:::

## The median

The median is the middle value after arranging the observations in increasing order.

If $n$ is odd, the median is the value at position:

$$
\frac{n+1}{2}.
$$

If $n$ is even, the median is the average of the two middle values.

**Emma:** The median is less affected by extreme values.

**Mr. R:** Correct.

## The mode

The mode is the most frequently occurring value or category.

The mode is useful for categorical data.

For example, if the most common blood group is O, then O is the mode.

## Mean, median, and mode

| Measure | Main idea | Sensitive to outliers? |
|---|---|---|
| Mean | Arithmetic average | Yes |
| Median | Middle ordered value | Less sensitive |
| Mode | Most frequent value | No, in the same way |

## Common mistake

:::caution[Common mistake]

Do not report only the mean when data are strongly skewed or contain extreme values.

The median may describe the typical value better.

:::

## Key takeaway

The mean, median, and mode are different answers to:

$$
\text{What is a typical value?}
$$

## Reflection question

For household income data, would the mean or median usually be more informative?

Explain why.
