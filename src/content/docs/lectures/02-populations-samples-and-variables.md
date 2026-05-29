---
title: "Lecture 2: Populations, Samples and Variables"
description: "Understanding who is being studied and what is being measured."
---

## Opening scene

Scene: Mr. R places a small box of folded paper slips on the desk.

**Mr. R:** Today we will discuss three words that appear in almost every statistical study: population, sample, and variable.

**Oliver:** I remember population and sample. The population is the full group, and the sample is the part we observe.

**Mr. R:** Correct.

**Emma:** And a variable is what we measure?

**Mr. R:** Exactly.

**James:** Why do we spend so much time defining these? They sound obvious.

**Mr. R:** They sound obvious until a real study becomes unclear. If we do not know who we are studying and what we are measuring, the analysis becomes confused.

:::note[Today's big question]

Before analysing data, how do we clearly define what is being studied?

:::

## The four basic ingredients

A statistical study usually needs four clear ingredients:

| Ingredient | Meaning |
|---|---|
| Population | The full group of interest |
| Sample | The observed subset |
| Observational unit | The basic unit measured |
| Variable | The characteristic measured |

## Population

A **population** is the complete collection of individuals, objects, or outcomes about which we want to draw conclusions.

Examples:

| Research question | Population |
|---|---|
| What is the average height of university students? | All students in that university |
| What proportion of households own a car? | All households in the target region |
| What is the average waiting time in a clinic? | All patient visits to that clinic |

## Sample

A **sample** is the subset of the population that is actually observed.

If the population is denoted by:

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

**Sophia:** So mathematically, the sample is a subset of the population.

**Mr. R:** Correct. But in statistics, how the subset is selected matters greatly.

## Observational unit

The **observational unit** is the basic unit on which measurements are taken.

Examples:

| Study | Observational unit |
|---|---|
| Student height study | Student |
| Household income study | Household |
| Clinic waiting time study | Patient visit |
| Country-level life expectancy study | Country |

**Emma:** So the observational unit is not always a person.

**Mr. R:** Exactly. It depends on the research question.

## Variable

A **variable** is a characteristic measured on each observational unit.

If a variable is denoted by $X$, then the observed value for the $i$-th unit is written as:

$$
x_i.
$$

For $n$ observed units, the data are:

$$
x_1, x_2, \ldots, x_n.
$$

## Mini conversation: why definitions matter

**James:** Suppose we ask, “What is the average income in a city?” What can go wrong?

**Mr. R:** We must define the observational unit. Are we measuring individuals, households, workers, or adults?

**Emma:** Those would give different answers.

**Mr. R:** Exactly. A vague question gives vague statistics.

:::tip[Key intuition]

Before calculating anything, define the population, sample, observational unit, and variable.

:::

## Common mistake

:::caution[Common mistake]

Do not call the sample the population.

A sample of 300 adults is not the population. It is only the observed part of the population.

:::

## Key takeaway

A clear statistical study begins with:

$$
\text{Research question}
\rightarrow
\text{Population}
\rightarrow
\text{Sample}
\rightarrow
\text{Observational unit}
\rightarrow
\text{Variable}.
$$

## Reflection question

A hospital records the blood pressure of 250 patients with diabetes.

Identify the population, sample, observational unit, and variable.
