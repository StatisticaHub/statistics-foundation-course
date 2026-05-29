---
title: "Note 10: Standardisation and Z-scores"
description: "Detailed notes on standardisation, z-scores, and comparing values across distributions."
---

## Learning objectives

By the end of this note, you should be able to:

- explain why standardisation is useful;
- define a z-score;
- interpret positive, negative, and zero z-scores;
- understand why we subtract the mean and divide by the standard deviation;
- standardise a random variable;
- show that a standardised variable has mean 0;
- show that a standardised variable has variance 1;
- compare observations from different distributions.

## 1. Introduction

Raw values are not always directly comparable.

Suppose one student scores 72 in Statistics and another scores 68 in Mathematics. At first, 72 looks better. But this may be misleading.

If the Statistics exam was easy and the class average was 80, then 72 may be below average.

If the Mathematics exam was difficult and the class average was 55, then 68 may be above average.

To compare values fairly, we need to know where each value lies relative to its own distribution.

This is the purpose of standardisation.

## 2. The idea of standardisation

Standardisation converts a raw value into a relative position.

It answers:

> How far is this value from the mean, measured in standard deviations?

The most common standardised value is the **z-score**.

## 3. Z-score for sample data

For an observation $x$, sample mean $\bar{x}$, and sample standard deviation $s$, the z-score is:

$$
z=\frac{x-\bar{x}}{s}.
$$

This formula has two parts:

1. subtract the mean;
2. divide by the standard deviation.

## 4. Why subtract the mean?

The expression:

$$
x-\bar{x}
$$

centres the value around the mean.

If $x>\bar{x}$, then $x-\bar{x}>0$.

If $x<\bar{x}$, then $x-\bar{x}<0$.

If $x=\bar{x}$, then $x-\bar{x}=0$.

So subtracting the mean tells us whether the value is above or below average.

## 5. Why divide by the standard deviation?

The expression:

$$
\frac{x-\bar{x}}{s}
$$

rescales the centred value using the standard deviation.

This converts the value into standard deviation units.

For example, $z=2$ means the value is two standard deviations above the mean.

This allows comparison across different variables or exams.

:::tip[Key intuition]

A z-score removes the original units and expresses position in standard deviation units.

:::

## 6. Interpreting z-scores

| Z-score | Interpretation |
|---|---|
| $z=0$ | The value equals the mean |
| $z>0$ | The value is above the mean |
| $z<0$ | The value is below the mean |
| $z=1$ | One standard deviation above the mean |
| $z=-2$ | Two standard deviations below the mean |

A z-score does not tell us whether a value is good or bad by itself. Interpretation depends on the context.

For example, a high z-score for exam marks may be good, but a high z-score for blood pressure may be concerning.

## 7. Example

Suppose a student scores 75 in an exam.

The class mean is:

$$
\bar{x}=65.
$$

The standard deviation is:

$$
s=10.
$$

Then the z-score is:

$$
z=\frac{75-65}{10}=1.
$$

The student scored one standard deviation above the class mean.

## 8. Standardising a random variable

If $X$ is a random variable with mean $\mu$ and standard deviation $\sigma$, the standardised variable is:

$$
Z=\frac{X-\mu}{\sigma}.
$$

This transformation produces a variable with mean 0 and variance 1.

## 9. Mean of the standardised variable

We can show that:

$$
E(Z)=0.
$$

Starting with:

$$
Z=\frac{X-\mu}{\sigma},
$$

we take expectation:

$$
E(Z)=E\left(\frac{X-\mu}{\sigma}\right).
$$

Since $\sigma$ is constant:

$$
E(Z)=\frac{1}{\sigma}E(X-\mu).
$$

Now:

$$
E(X-\mu)=E(X)-\mu.
$$

Since $E(X)=\mu$:

$$
E(X)-\mu=\mu-\mu=0.
$$

Therefore:

$$
E(Z)=0.
$$

## 10. Variance of the standardised variable

We can also show that:

$$
\operatorname{Var}(Z)=1.
$$

Using:

$$
Z=\frac{X-\mu}{\sigma},
$$

we have:

$$
\operatorname{Var}(Z)
=
\operatorname{Var}\left(\frac{X-\mu}{\sigma}\right).
$$

Subtracting a constant does not change variance, and multiplying by $\frac{1}{\sigma}$ multiplies variance by $\frac{1}{\sigma^2}$.

So:

$$
\operatorname{Var}(Z)
=
\frac{1}{\sigma^2}\operatorname{Var}(X).
$$

Since:

$$
\operatorname{Var}(X)=\sigma^2,
$$

we get:

$$
\operatorname{Var}(Z)=\frac{\sigma^2}{\sigma^2}=1.
$$

## 11. Common mistakes

:::caution[Common mistakes]

Do not compare raw values from different distributions without considering their means and standard deviations.

Do not interpret z-scores without context.

Do not forget that standardisation removes original units.

Do not assume a high z-score is always desirable.

:::

## 12. Summary

Standardisation converts raw values into relative positions.

The z-score is:

$$
z=\frac{x-\bar{x}}{s}.
$$

It tells us how far a value lies from the mean in standard deviation units.

For a random variable:

$$
Z=\frac{X-\mu}{\sigma}
$$

has:

$$
E(Z)=0
$$

and:

$$
\operatorname{Var}(Z)=1.
$$

## Revision questions

1. What is a z-score?
2. Why do we subtract the mean?
3. Why do we divide by the standard deviation?
4. What does $z=0$ mean?
5. What does $z=2$ mean?
6. Why are z-scores useful for comparing different distributions?
7. Show that $E(Z)=0$ for $Z=(X-\mu)/\sigma$.
8. Show that $\operatorname{Var}(Z)=1$ for $Z=(X-\mu)/\sigma$.
