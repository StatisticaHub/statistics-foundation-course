---
title: "Note 1: Introduction to Statistics"
description: "A detailed theoretical introduction to statistics as learning from data under uncertainty."
---

## Learning objectives

By the end of this note, you should be able to:

- define statistics as a discipline;
- explain why uncertainty is central to statistics;
- distinguish data, information, and statistical evidence;
- understand the difference between a population and a sample;
- explain the difference between a parameter and a statistic;
- describe the roles of descriptive and inferential statistics;
- understand why probability is the mathematical foundation of statistical inference.

## 1. Introduction

Statistics is the science of learning from data under uncertainty.

This definition is deliberately broader than simply saying that statistics is about averages, graphs, or formulas. Those are important tools, but they are not the whole subject.

In real life, we rarely observe everything we want to know. A government may want to understand the income of all households, but it cannot easily study every household. A researcher may want to understand the health of a population, but they usually observe only a sample. A school may want to understand student performance, but test scores vary from student to student and from exam to exam.

Statistics gives us a structured way to reason in such situations.

A useful summary is:

$$
\text{Statistics} = \text{data} + \text{variation} + \text{uncertainty} + \text{reasoning}.
$$

The key idea is not merely to calculate numbers. The key idea is to understand what those numbers mean, how reliable they are, and what conclusions can reasonably be drawn from them.

:::note[Core idea]

Statistics helps us move from observed data to meaningful conclusions while honestly accounting for uncertainty.

:::

## 2. Data and statistical evidence

Data are observed values. These may be numbers, categories, measurements, counts, rankings, or recorded responses.

Examples include:

| Context | Data |
|---|---|
| Education | Exam marks, attendance, grades |
| Health | Blood pressure, diagnosis, treatment response |
| Business | Sales, revenue, customer ratings |
| Social science | Survey responses, income, household size |
| Biology | Plant height, gene expression, survival time |

Data alone are not the same as evidence. Data become statistical evidence only after they are connected to a question and interpreted carefully.

For example, the number 128 has little meaning by itself. But if we say:

> The sample mean systolic blood pressure of 100 adults is 128 mmHg.

then it becomes meaningful because we know:

- what was measured;
- who was measured;
- how the number was calculated;
- what population it may represent.

## 3. Population and sample

A **population** is the complete group of individuals, objects, or measurements that we want to understand.

A **sample** is the part of the population that we actually observe.

For example, if we want to know the average height of all students in a university, the population is all students in that university. If we measure only 200 students, those 200 students form the sample.

If the population contains $N$ values,

$$
X_1, X_2, \ldots, X_N,
$$

then the population mean is:

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

If the sample contains $n$ observed values,

$$
x_1, x_2, \ldots, x_n,
$$

then the sample mean is:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

The sample is used to learn about the population, but the sample is not usually identical to the population.

## 4. Parameters and statistics

A **parameter** is a numerical feature of a population.

Examples include:

| Parameter | Meaning |
|---|---|
| $\mu$ | Population mean |
| $\sigma^2$ | Population variance |
| $\sigma$ | Population standard deviation |
| $p$ | Population proportion |

A **statistic** is a numerical feature calculated from a sample.

Examples include:

| Statistic | Meaning |
|---|---|
| $\bar{x}$ | Sample mean |
| $s^2$ | Sample variance |
| $s$ | Sample standard deviation |
| $\hat{p}$ | Sample proportion |

A parameter is usually fixed but unknown. A statistic is calculated from the sample and is used to estimate the parameter.

For example, $\bar{x}$ is often used to estimate $\mu$.

:::tip[Important distinction]

Parameters belong to populations.

Statistics belong to samples.

:::

## 5. Why uncertainty appears

Uncertainty appears because a sample is only one possible subset of the population.

If we select one sample, we may get one value of $\bar{x}$. If we select another sample, we may get a slightly different value.

This is called **sampling variation**.

Before the sample is observed, the sample mean is a random variable:

$$
\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i.
$$

After the sample is observed, the sample mean is a realised number:

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

This distinction is important because inferential statistics studies the behaviour of statistics such as $\bar{X}$ across possible samples.

## 6. Descriptive and inferential statistics

Statistics has two major branches.

### Descriptive statistics

Descriptive statistics summarises the data we have.

Examples include:

- tables;
- graphs;
- mean;
- median;
- variance;
- standard deviation;
- proportions.

Descriptive statistics answers:

$$
\text{What does the observed data show?}
$$

### Inferential statistics

Inferential statistics uses sample data to make conclusions about a wider population.

It answers:

$$
\text{What can the sample tell us about the population?}
$$

For example, if we calculate the mean blood pressure of 100 adults and use it to estimate the mean blood pressure of all adults in a city, we are doing inference.

## 7. Why probability is needed

Probability provides the mathematical language of uncertainty.

In statistics, we use probability to describe:

- how samples vary;
- how statistics behave;
- how likely certain results are under assumptions;
- how uncertain an estimate is.

For example, the sample mean $\bar{X}$ varies from sample to sample. Probability helps describe that variation.

This leads to ideas such as:

- sampling distributions;
- standard errors;
- confidence intervals;
- hypothesis tests.

:::note[Big picture]

Probability helps us understand uncertainty.

Statistics uses probability to learn from data.

:::

## 8. Common mistakes

:::caution[Common mistakes]

Do not think statistics is only calculation.

Do not treat a sample result as the exact population truth.

Do not ignore how the sample was selected.

Do not interpret a statistic without understanding the question, population, and uncertainty.

:::

## 9. Summary

Statistics is the science of learning from data under uncertainty.

The subject begins with simple ideas such as populations, samples, variables, and summaries. But its deeper purpose is to help us reason carefully when data are incomplete or variable.

The key movement in statistics is:

$$
\text{sample information}
\quad \longrightarrow \quad
\text{population understanding}.
$$

This movement is powerful, but it must be done carefully.

## Revision questions

1. What is statistics?
2. Why is uncertainty central to statistics?
3. What is the difference between a population and a sample?
4. What is the difference between a parameter and a statistic?
5. Why can two samples from the same population give different results?
6. What is the difference between descriptive and inferential statistics?
7. Why is probability important in statistics?
