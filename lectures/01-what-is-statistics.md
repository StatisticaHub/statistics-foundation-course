---
title: Lecture 1 - What is Statistics?
parent: Lectures
nav_order: 1
---

# Lecture 1: What is Statistics?

## Characters

**Mr. R** — teacher and mentor  
**Oliver** — curious beginner  
**Emma** — careful and methodical student  
**James** — practical student  
**Sophia** — mathematically strong student  

---

## Scene: The first statistics class

The class begins with a simple question written on the board:

> What does it mean to learn from data?

**Oliver:** Mr. R, I have seen statistics in many places: averages, percentages, surveys, graphs, and exam results. But I still do not understand what statistics really means.

**Mr. R:** That is a good starting point, Oliver. Many people think statistics is just about calculating averages or drawing graphs. But statistics is much deeper than that.

**Emma:** Is statistics mainly about organising data clearly?

**Mr. R:** That is one part of it. Statistics helps us collect, organise, summarise, analyse, and interpret data. But the deeper purpose is to help us reason under uncertainty.

**James:** What do you mean by uncertainty?

**Mr. R:** In real life, we rarely observe everything. We often observe only a small part of a much larger situation. Statistics helps us use that limited information carefully.

**Sophia:** So statistics is connected to inference?

**Mr. R:** Exactly. Inference is one of the central ideas of statistics. We observe a sample and use it to learn about a population.

---

## A simple classroom example

**Mr. R:** Suppose we want to know the average height of all students in a university.

**Oliver:** We could measure everyone.

**Mr. R:** In theory, yes. But what if the university has 20,000 students?

**James:** That would take too much time.

**Mr. R:** Exactly. So instead, we might select 200 students and measure their heights.

**Emma:** Then the 20,000 students are the population, and the 200 selected students are the sample.

**Mr. R:** Correct.

---

## Population and sample

**Mr. R:** The **population** is the full group we want to understand.

The **sample** is the part of the population we actually observe.

**Oliver:** So the sample is like a small window into the population?

**Mr. R:** Very nicely said. But we must remember that the window may not show everything perfectly.

**Sophia:** Because different samples can give different results?

**Mr. R:** Exactly. That is called sampling variation.

---

## Parameter and statistic

**Emma:** What do we call the true average height of all 20,000 students?

**Mr. R:** That is called a **parameter**. A parameter is a numerical feature of a population.

**Sophia:** So if the population values are \(X_1, X_2, \ldots, X_N\), the population mean is

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}X_i.
$$

**Mr. R:** Correct. That is the population mean.

**James:** But if we only measure 200 students, then we calculate the sample mean?

**Mr. R:** Yes. If the sample values are \(x_1, x_2, \ldots, x_n\), the sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

**Oliver:** Is \(\bar{x}\) always equal to \(\mu\)?

**Mr. R:** Usually, no. The sample mean is an estimate of the population mean. It may be close, but it is not guaranteed to be exactly equal.

---

## Why statistics is not just calculation

**James:** So the real problem is not just calculating \(\bar{x}\). The real problem is deciding how much we can trust it.

**Mr. R:** Exactly. That is where statistics becomes powerful. It gives us tools to measure uncertainty.

**Emma:** So statistics asks: how far might our sample result be from the truth?

**Mr. R:** Yes. That question leads to ideas such as sampling distributions, standard errors, confidence intervals, and hypothesis tests.

**Sophia:** So even simple statistics eventually connect to probability theory.

**Mr. R:** Correct. Probability is the mathematical language of uncertainty, and statistics uses probability to make inference from data.

---

## Main idea

Statistics is the science of learning from data under uncertainty.

It helps us move from:

$$
\text{sample information}
\quad \longrightarrow \quad
\text{population understanding}.
$$

---

## What you should remember

By the end of this lecture, you should understand:

- statistics is not only calculation;
- statistics is about reasoning from data;
- a population is the full group of interest;
- a sample is the observed part of the population;
- a parameter describes a population;
- a statistic describes a sample;
- uncertainty appears because samples vary;
- probability provides the mathematical foundation for statistical inference.