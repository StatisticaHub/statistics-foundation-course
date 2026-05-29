---
title: "Lecture 10: Standardisation and Z-scores"
description: "Understanding how to compare values measured on different scales."
---

## Opening scene

Scene: Mr. R writes two exam results on the board.

Oliver scored 72 in Statistics.

Emma scored 68 in Mathematics.

**Oliver:** I scored higher, so did I perform better?

**Mr. R:** Not necessarily.

**James:** Why not? 72 is greater than 68.

**Mr. R:** Because the two exams may have different difficulty levels and different distributions.

**Sophia:** So we need to compare each score relative to its own distribution.

**Mr. R:** Exactly. That is where standardisation helps.

:::note[Today's big question]

How can we compare observations measured on different scales or from different distributions?

:::

## The idea of standardisation

A raw value alone may not tell us enough.

A mark of 72 may be excellent in a difficult exam but ordinary in an easy exam.

Standardisation converts a raw value into a relative position.

## Z-score

For a value $x$, sample mean $\bar{x}$, and sample standard deviation $s$, the z-score is:

$$
z=\frac{x-\bar{x}}{s}.
$$

The z-score tells us how many standard deviations the value is from the mean.

## Interpretation

| Z-score | Interpretation |
|---|---|
| $z=0$ | The value equals the mean |
| $z>0$ | The value is above the mean |
| $z<0$ | The value is below the mean |
| $z=2$ | Two standard deviations above the mean |
| $z=-1.5$ | 1.5 standard deviations below the mean |

:::tip[Key intuition]

A z-score is measured in standard deviation units, not in the original units.

:::

## Why subtract the mean?

**Oliver:** Why do we subtract the mean?

**Mr. R:** Subtracting the mean recentres the data around zero.

For each observation:

$$
x_i-\bar{x}.
$$

Values above the mean become positive, and values below the mean become negative.

## Why divide by the standard deviation?

**Emma:** Why do we divide by $s$?

**Mr. R:** Dividing by the standard deviation rescales the values.

This allows variables with different units or spreads to be compared.

## Standardising a random variable

If $X$ has mean $\mu$ and standard deviation $\sigma$, the standardised variable is:

$$
Z=\frac{X-\mu}{\sigma}.
$$

This transformed variable has mean:

$$
E(Z)=0
$$

and variance:

$$
\operatorname{Var}(Z)=1.
$$

**Sophia:** Can we see why $E(Z)=0$?

**Mr. R:** Yes.

$$
E(Z)=E\left(\frac{X-\mu}{\sigma}\right).
$$

Since $\sigma$ is constant:

$$
E(Z)=\frac{1}{\sigma}E(X-\mu).
$$

Now:

$$
E(X-\mu)=E(X)-\mu=\mu-\mu=0.
$$

Therefore:

$$
E(Z)=0.
$$

## Common mistake

:::caution[Common mistake]

A larger raw value does not always mean better relative performance.

Always compare values relative to the relevant distribution.

:::

## Key takeaway

Standardisation converts raw values into relative positions:

$$
z=\frac{x-\bar{x}}{s}.
$$

A z-score answers:

> How far is this value from the mean, measured in standard deviations?

## Reflection question

A student scores 75 in Exam A and 70 in Exam B.

What information do you need before deciding in which exam the student performed better relative to the class?
