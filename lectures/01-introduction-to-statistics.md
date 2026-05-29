---
title: Lecture 1 - Introduction to Statistics
parent: Lectures
nav_order: 1
permalink: /lectures/01-introduction-to-statistics/
---

# Lecture 1: Introduction to Statistics

## Opening scene

Scene: A classroom on the first day of the Statistics Foundation course.

Mr. R writes one question on the board:

> How can we learn from data when we cannot observe everything?

**Oliver:** Mr. R, I have seen statistics everywhere: averages, percentages, charts, surveys, exam results. But I still do not really understand what statistics *is*.

**Mr. R:** That is a very honest place to begin, Oliver. Many people think statistics is just calculation. But statistics is much more than that.

**Emma:** Is it about organising data properly?

**Mr. R:** Yes, that is one part. But the deeper purpose of statistics is to help us make sense of data when there is uncertainty.

**James:** What kind of uncertainty?

**Mr. R:** The uncertainty that appears when we do not observe everything, when data vary from person to person, and when we use a small amount of information to say something about a larger group.

**Sophia:** So statistics is connected to inference?

**Mr. R:** Exactly. Statistics gives us the language and tools to move from observed data to reasonable conclusions.

---

## Today's big question

What is statistics, and why do we need it?

A simple way to describe statistics is:

$$
\text{Statistics} = \text{Learning from data under uncertainty}.
$$

The key words are:

- **data**: the information we observe;
- **uncertainty**: the fact that data vary and are often incomplete;
- **learning**: the process of drawing conclusions carefully.

---

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

---

## A first mathematical bridge

Suppose the population has \(N\) values:

$$
X_1, X_2, \ldots, X_N.
$$

The population mean is

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

But in practice, we may observe only \(n\) values:

$$
x_1, x_2, \ldots, x_n.
$$

The sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

**Sophia:** So \(\mu\) describes the population, and \(\bar{x}\) describes the sample?

**Mr. R:** Exactly.

---

## Mini conversation: why uncertainty matters

**Oliver:** If \(\bar{x}\) is calculated from the sample, can we just say it is equal to \(\mu\)?

**Mr. R:** Usually, no. The sample mean may be close to the population mean, but it is not guaranteed to be exactly equal.

**Emma:** Because a different sample may give a different sample mean?

**Mr. R:** Correct. That is called **sampling variation**.

**James:** So statistics is not just about calculating \(\bar{x}\). It is about deciding how much we can trust it.

**Mr. R:** Very good. That is the heart of statistical thinking.

---

## Two sides of statistics

Statistics has two broad roles.

### 1. Descriptive statistics

Descriptive statistics summarises the data we have.

Examples include:

- mean;
- median;
- standard deviation;
- tables;
- graphs.

### 2. Inferential statistics

Inferential statistics uses sample data to make conclusions about a wider population.

For example:

$$
\text{Sample information} \longrightarrow \text{Population conclusion}.
$$

---

## Common mistake

### Common mistake: thinking statistics is only about formulas

**Oliver:** Sometimes statistics feels like memorising formulas.

**Mr. R:** That is a common feeling. But formulas are not the real goal. Formulas are tools.

The real goal is to answer questions such as:

- What does the data suggest?
- How uncertain is the conclusion?
- Can we generalise from the sample to the population?
- Could the result be due to chance?
- What assumptions are being made?

---

## Reality check

Suppose a survey asks 500 people whether they support a new policy.

The result is:

$$
\hat{p} = 0.62.
$$

This means 62% of the sample supports the policy.

But before saying “62% of the population supports the policy”, we should ask:

- How were the 500 people selected?
- Were they representative?
- How large is the sampling uncertainty?
- Was the question worded fairly?
- Could non-response bias affect the result?

Statistics forces us to slow down and think carefully.

---

## Key takeaway

Statistics is not only about numbers.

Statistics is about using data to reason under uncertainty.

A useful summary is:

$$
\text{Data} + \text{Variation} + \text{Probability} = \text{Statistical reasoning}.
$$

---

## Reflection question

A researcher measures the blood pressure of 100 adults in Bristol and calculates the average.

Before using this average to describe all adults in Bristol, what questions should we ask?

<details>
<summary>Show suggested answer</summary>

We should ask how the 100 adults were selected, whether they represent the target population, how variable blood pressure is, whether the sample size is large enough, and how much uncertainty surrounds the sample average.

</details>
