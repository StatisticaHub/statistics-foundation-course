---
title: "Note 2: Populations, Samples and Variables"
description: "Detailed notes on populations, samples, observational units, and variables."
---

## Learning objectives

By the end of this note, you should be able to:

- define population and sample;
- identify the observational unit in a study;
- define a variable;
- distinguish between population, sample, unit, and variable;
- explain why clear definitions are essential before analysis;
- write simple mathematical notation for populations and samples;
- identify common errors in defining study structures.

## 1. Introduction

Every statistical study begins with a question.

Examples:

- What is the average height of students in a university?
- What proportion of households own a car?
- What is the average waiting time in a clinic?
- How common is high blood pressure in adults?
- Do exam marks differ between two classes?

Before analysing data, we must clearly define what is being studied.

The most important early questions are:

1. Who or what is the study about?
2. Which individuals or objects are actually observed?
3. What is measured on each observed unit?

These questions lead to four basic concepts:

$$
\text{population},\quad \text{sample},\quad \text{observational unit},\quad \text{variable}.
$$

## 2. Population

A **population** is the complete collection of individuals, objects, events, or measurements that we want to understand.

The population depends on the research question.

| Research question | Population |
|---|---|
| What is the mean height of students at a university? | All students at that university |
| What proportion of households own a car? | All households in the target region |
| What is the mean waiting time at a clinic? | All patient visits to that clinic |
| What is the average exam score in Year 10? | All Year 10 students in the school |

The population should be defined clearly. A vague population leads to vague conclusions.

For example, the question:

> What is the average income?

is incomplete. We must ask:

- income of whom?
- individuals or households?
- adults only or all people?
- full-time workers only?
- which city, country, or population?
- over what time period?

:::tip[Practical rule]

Always define the population before calculating anything.

:::

## 3. Sample

A **sample** is the subset of the population that is actually observed.

If the population is:

$$
\mathcal{P} = \{1,2,\ldots,N\},
$$

then a sample may be written as:

$$
\mathcal{S} = \{i_1,i_2,\ldots,i_n\},
$$

where:

$$
\mathcal{S} \subseteq \mathcal{P}.
$$

Here:

- $N$ is the population size;
- $n$ is the sample size;
- usually $n < N$.

The sample is used to learn about the population. But the quality of that learning depends strongly on how the sample was selected.

## 4. Why sampling matters

If a sample is representative, it can give useful information about the population.

If a sample is biased, it may give misleading information.

For example, suppose we want to estimate the average height of all university students, but we take a sample only from the basketball team. The sample may overestimate the average height.

The problem is not the formula for the mean. The problem is the sampling process.

:::caution[Common mistake]

A large sample is not automatically a good sample.

A large biased sample can still give a biased answer.

:::

## 5. Observational unit

The **observational unit** is the basic unit on which measurements are taken.

Examples:

| Study | Observational unit |
|---|---|
| Student height study | Student |
| Household income study | Household |
| Hospital waiting time study | Patient visit |
| Country-level life expectancy study | Country |
| Plant growth study | Plant |

The observational unit is not always a person. It may be a household, school, hospital, country, animal, plant, blood sample, or repeated measurement.

The observational unit must match the research question.

## 6. Variable

A **variable** is a characteristic measured on each observational unit.

Examples:

| Observational unit | Variable |
|---|---|
| Student | Height |
| Patient | Blood pressure |
| Household | Annual income |
| Country | Life expectancy |
| Plant | Leaf length |

If the variable is denoted by $X$, then the value for the $i$-th observational unit is:

$$
x_i.
$$

For $n$ observed units, the data are:

$$
x_1, x_2,\ldots,x_n.
$$

## 7. Variables can differ in type

Variables may be categorical or numerical.

Examples of categorical variables:

- blood group;
- smoking status;
- treatment group;
- disease status.

Examples of numerical variables:

- height;
- weight;
- age;
- blood pressure;
- number of hospital visits.

The type of variable affects what summaries and methods are appropriate.

## 8. Example: school exam marks

Suppose a school records the exam marks of 60 Year 10 students to understand performance among all Year 10 students.

| Concept | Identification |
|---|---|
| Population | All Year 10 students in the school |
| Sample | The 60 students whose marks were recorded |
| Observational unit | A Year 10 student |
| Variable | Exam mark |

If the exam marks are:

$$
x_1,x_2,\ldots,x_{60},
$$

then the sample mean is:

$$
\bar{x}=\frac{1}{60}\sum_{i=1}^{60}x_i.
$$

## 9. Common mistakes

:::caution[Common mistakes]

Do not confuse the sample with the population.

Do not define the variable before defining the observational unit.

Do not ignore whether the sample represents the population.

Do not assume that numerical labels are numerical measurements.

:::

## 10. Summary

A statistical study becomes clear when we identify:

$$
\text{Population}
\rightarrow
\text{Sample}
\rightarrow
\text{Observational unit}
\rightarrow
\text{Variable}.
$$

These ideas may look simple, but they are the foundation of correct statistical reasoning.

## Revision questions

1. What is a population?
2. What is a sample?
3. What is an observational unit?
4. What is a variable?
5. Why does the research question determine the population?
6. Why can a biased sample be misleading?
7. Identify the population, sample, unit, and variable in a study of household income.
