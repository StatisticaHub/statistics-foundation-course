---
title: Lecture 1 - Introduction to Statistics
parent: Lectures
nav_order: 1
---

# Lecture 1: Introduction to Statistics

## Opening scene

Scene: A quiet classroom. Mr. R writes one question on the board:

> How can we learn from data when we cannot observe everything?

**Oliver:** Mr. R, I have seen statistics in many places: averages, percentages, surveys, graphs, and exam results. But I still do not understand what statistics really means.

**Mr. R:** That is a good starting point, Oliver. Many people think statistics is only about calculation. But statistics is much deeper than that.

**Emma:** Is statistics mainly about organising data clearly?

**Mr. R:** That is one part of it. Statistics helps us collect, organise, summarise, analyse, and interpret data.

**James:** But why do we need a whole subject for that? Can we not just look at the numbers?

**Mr. R:** Sometimes looking is enough. But often, the data are incomplete, noisy, variable, and uncertain. Statistics gives us a disciplined way to reason from such data.

**Sophia:** So statistics is really about uncertainty?

**Mr. R:** Exactly. Statistics is the science of learning from data under uncertainty.

---

## Today's big question

What is statistics, and why is it needed?

Statistics helps us move from:

$$
\text{observed data}
\quad \longrightarrow \quad
\text{meaningful conclusions}.
$$

But the movement is not automatic. We need careful reasoning.

---

## Intuition first

**Mr. R:** Suppose a university wants to know the average height of all its students.

**Oliver:** They could measure every student.

**Mr. R:** Yes, but imagine the university has 20,000 students. Measuring everyone may be expensive and time-consuming.

**James:** So we measure only some students?

**Mr. R:** Correct. We select a sample, say 200 students, and calculate their average height.

**Emma:** Then the problem is whether those 200 students represent the whole university.

**Mr. R:** Exactly. That is where statistics begins.

---

## Population and sample

The **population** is the complete group we want to study.

The **sample** is the smaller group we actually observe.

If the population contains \(N\) values,

$$
X_1, X_2, \ldots, X_N,
$$

then the population mean is

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

If the sample contains \(n\) values,

$$
x_1, x_2, \ldots, x_n,
$$

then the sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

---

## Mini conversation: statistic versus parameter

**Emma:** Mr. R, what is the difference between \(\mu\) and \(\bar{x}\)?

**Mr. R:** Good question. \(\mu\) is a **parameter** because it describes the population. \(\bar{x}\) is a **statistic** because it is calculated from the sample.

**Oliver:** So a statistic is something we know, and a parameter is something we want to know?

**Mr. R:** Very often, yes.

**Sophia:** And \(\bar{x}\) is used to estimate \(\mu\)?

**Mr. R:** Exactly.

---

## Why uncertainty appears

**James:** If we take another sample of 200 students, will we get the same \(\bar{x}\)?

**Mr. R:** Usually not. Different samples usually give different results.

**Emma:** That means the sample result can vary.

**Mr. R:** Correct. This is called **sampling variation**.

The central issue in statistics is not only calculating a statistic. It is understanding how much that statistic may vary from sample to sample.

---

## Common mistake

### Common mistake: thinking statistics is only arithmetic

Statistics is not simply the calculation of means, percentages, or graphs.

Those are tools.

The deeper purpose of statistics is to answer questions such as:

- What does the data suggest?
- How uncertain is the conclusion?
- Can the result be generalised?
- Could the pattern be due to chance?
- What assumptions are being made?

---

## Key takeaway

Statistics is the science of learning from data under uncertainty.

A useful way to remember the subject is:

$$
\text{Data} + \text{Probability} + \text{Reasoning}
= \text{Statistical Inference}.
$$

---

## Reflection question

Suppose a researcher measures the blood pressure of 100 adults in a city and calculates the average.

Before using this average to describe the whole city, what questions should we ask?
