---
title: Lecture 5 - Descriptive and Inferential Statistics
parent: Lectures
nav_order: 5
permalink: /lectures/05-descriptive-and-inferential-statistics/
---

# Lecture 5: Descriptive and Inferential Statistics

## Opening scene

Scene: Mr. R draws two columns on the board.

The first column says:

> Describe what we observed.

The second column says:

> Infer beyond what we observed.

**Oliver:** Are these the two main roles of statistics?

**Mr. R:** Yes. These are descriptive statistics and inferential statistics.

**Emma:** Descriptive statistics summarises the data we have.

**Mr. R:** Correct.

**James:** And inferential statistics uses data to make wider conclusions.

**Mr. R:** Exactly.

**Sophia:** So inference needs probability because we are reasoning beyond the observed sample.

**Mr. R:** Very good.

---

## Today's big question

What is the difference between describing data and making inference from data?

Statistics has two broad purposes:

$$
\text{Description}
\quad \text{and} \quad
\text{Inference}.
$$

Both are important, but they answer different questions.

---

## Descriptive statistics

Descriptive statistics summarises the data that have been observed.

Suppose we observe

$$
x_1, x_2, \ldots, x_n.
$$

We may summarise these values using:

- mean;
- median;
- minimum;
- maximum;
- variance;
- standard deviation;
- tables;
- graphs.

For example, the sample mean is

$$
\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i.
$$

This describes the centre of the observed data.

---

## Mini conversation: description

**Oliver:** If I calculate the average mark of 40 students in my class, is that descriptive statistics?

**Mr. R:** Yes, if you are only describing those 40 students.

**Emma:** So descriptive statistics stays close to the observed data.

**Mr. R:** Exactly. It does not automatically generalise beyond the data.

---

## Inferential statistics

Inferential statistics uses sample data to make conclusions about a larger population.

For example, we may want to estimate the population mean \(\mu\).

We calculate the sample mean \(\bar{x}\), then use it as an estimate of \(\mu\).

The movement is:

$$
\bar{x}
\quad \longrightarrow \quad
\mu.
$$

But because \(\bar{x}\) comes from a sample, we must consider uncertainty.

A simple inferential form is:

$$
\text{Estimate} \pm \text{Margin of error}.
$$

Later, this idea becomes a confidence interval.

---

## Mini conversation: inference

**James:** So if I use the average mark of 40 students to say something about all students in the school, I am doing inference?

**Mr. R:** Correct.

**Oliver:** But then I need to ask whether those 40 students represent the whole school.

**Mr. R:** Exactly.

**Sophia:** And we need to understand the sampling behaviour of \(\bar{X}\).

**Mr. R:** Yes. Before observing the sample, \(\bar{X}\) is a random variable. Its distribution is central to inference.

---

## Descriptive or inferential?

Try classifying these.

1. The mean height of 30 students in a class.
2. Using 30 students to estimate the mean height of all students in a school.
3. The percentage of patients in a sample who improved after treatment.
4. Testing whether a treatment improves recovery in the target population.

<details>
<summary>Show suggested answer</summary>

1. Descriptive, if only those 30 students are being described.  
2. Inferential.  
3. Descriptive, if only the sample is described.  
4. Inferential, because the conclusion concerns the wider target population.

</details>

---

## Common mistake

### Common mistake: generalising without inference

It is common to describe a sample and then speak as if the result automatically applies to the population.

This is dangerous.

To generalise from a sample to a population, we must think about:

- sampling method;
- sample size;
- variability;
- assumptions;
- uncertainty.

---

## Reality check

Suppose a study reports:

$$
\bar{x} = 72.
$$

This number alone is not enough.

We should ask:

- What does \(x\) measure?
- Who was included in the sample?
- What population is being targeted?
- How variable were the observations?
- Is 72 being used descriptively or inferentially?
- What uncertainty surrounds the estimate?

---

## Key takeaway

Descriptive statistics answers:

$$
\text{What does the observed data show?}
$$

Inferential statistics answers:

$$
\text{What can the observed data tell us about a wider population?}
$$

Description summarises.

Inference generalises.

---

## Reflection question

A researcher records the heights of 80 students and calculates the mean height.

When is this descriptive statistics?

When does it become inferential statistics?

<details>
<summary>Show suggested answer</summary>

It is descriptive if the researcher only summarises the 80 observed students. It becomes inferential if the researcher uses the 80 students to draw conclusions about a larger population, such as all students in the school or university.

</details>
