---
title: "Lecture 1: Introduction to Statistics"
description: "A conversational introduction to statistics."
---


## Opening scene

Scene: A classroom on the first day of the Statistics Foundation course.

Mr. R writes one question on the board:

> How can we learn from data when we cannot observe everything?

**Oliver:** Mr. R, I have seen statistics everywhere: averages, percentages, charts, surveys, and exam results. But I still do not really understand what statistics is.

**Mr. R:** That is a very honest starting point. Many people think statistics is only calculation, but statistics is much deeper than that.

**Emma:** Is it about organising data properly?

**Mr. R:** That is one part of it. Statistics helps us collect, organise, summarise, analyse, and interpret data. But the deeper purpose is to help us reason under uncertainty.

**James:** What kind of uncertainty?

**Mr. R:** The uncertainty that appears when we do not observe everything, when data vary from person to person, and when we use a small amount of information to say something about a larger group.

**Sophia:** So statistics is connected to inference?

**Mr. R:** Exactly. Statistics gives us the language and tools to move from observed data to reasonable conclusions.

## Today's big question

What is statistics, and why do we need it?

A useful summary is:

$$
\text{Statistics} = \text{learning from data under uncertainty}.
$$

The key words are:

- **data**: the information we observe;
- **uncertainty**: the fact that data vary and are often incomplete;
- **learning**: the process of drawing conclusions carefully.

## Intuition first

**Mr. R:** Suppose we want to know the average height of all students in a university.

**Oliver:** We can measure everyone.

**Mr. R:** In theory, yes. But suppose the university has 20,000 students.

**James:** That would take too much time.

**Mr. R:** Correct. So we may select 200 students and measure their heights.

**Emma:** Then we use those 200 students to understand the full group?

**Mr. R:** Yes. That is one of the central ideas of statistics.

The full group is called the **population**.

The smaller observed group is called the **sample**.

## A first mathematical bridge

Suppose the population has $N$ values:

$$
X_1, X_2, \ldots, X_N.
$$

The population mean is

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

But in practice, we may observe only $n$ values:

$$
x_1, x_2, \ldots, x_n.
$$

The sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

**Sophia:** So $\mu$ describes the population, and $\bar{x}$ describes the sample?

**Mr. R:** Exactly.

## Why uncertainty matters

**Oliver:** If $\bar{x}$ is calculated from the sample, can we just say it is equal to $\mu$?

**Mr. R:** Usually, no. The sample mean may be close to the population mean, but it is not guaranteed to be exactly equal.

**Emma:** Because a different sample may give a different sample mean?

**Mr. R:** Correct. That is called **sampling variation**.

**James:** So statistics is not just about calculating $\bar{x}$. It is about deciding how much we can trust it.

**Mr. R:** Very good. That is the heart of statistical thinking.

## Key takeaway

Statistics is about using data to reason under uncertainty.

A useful summary is:

$$
\text{Data} + \text{variation} + \text{probability}
=
\text{statistical reasoning}.
$$

## Reflection question

A researcher measures the blood pressure of 100 adults in Bristol and calculates the average.

Before using this average to describe all adults in Bristol, what questions should we ask?
