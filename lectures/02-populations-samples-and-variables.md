---
title: Lecture 2 - Populations, Samples and Variables
parent: Lectures
nav_order: 2
---

# Lecture 2: Populations, Samples and Variables

## Opening scene

Scene: Mr. R enters the classroom with a small box of paper slips.

**Mr. R:** Today, we will talk about three words that appear everywhere in statistics: population, sample, and variable.

**Oliver:** I remember population and sample from the first lecture. The population is the full group, and the sample is the part we observe.

**Mr. R:** Correct. But today we will make those ideas more precise.

**Emma:** And variables are the things we measure?

**Mr. R:** Exactly. A variable is a characteristic that can take different values across individuals or units.

---

## Today's big question

How do we clearly define what we are studying?

Before doing statistics, we must identify:

$$
\text{Who or what is being studied?}
$$

and

$$
\text{What is being measured?}
$$

These questions lead to the ideas of population, sample, observational unit, and variable.

---

## Population

**Mr. R:** A population is the full set of units about which we want to make a conclusion.

**James:** Units means people?

**Mr. R:** Sometimes. But not always. Units may be people, households, schools, hospitals, blood samples, plants, countries, or repeated measurements.

**Emma:** So the population depends on the research question.

**Mr. R:** Exactly.

For example:

| Research question | Population |
|---|---|
| What is the mean height of students in a university? | All students in that university |
| What proportion of households own a car? | All households in the target region |
| What is the average waiting time in a hospital clinic? | All patient visits to that clinic |

---

## Sample

A sample is the subset of the population that is actually observed.

If the population is

$$
\mathcal{P} = \{1,2,\ldots,N\},
$$

then a sample may be written as

$$
\mathcal{S} = \{i_1,i_2,\ldots,i_n\},
$$

where

$$
\mathcal{S} \subseteq \mathcal{P}.
$$

**Sophia:** So mathematically, the sample is a subset of the population.

**Mr. R:** Yes. But in real studies, how that subset is selected matters greatly.

---

## Observational unit

**Emma:** What is an observational unit?

**Mr. R:** The observational unit is the basic object on which measurements are taken.

If we measure the height of students, the observational unit is a student.

If we measure annual income of households, the observational unit is a household.

If we measure hospital waiting time for visits, the observational unit is a patient visit.

**James:** So the observational unit must be clear before defining variables.

**Mr. R:** Exactly.

---

## Variable

A variable is a characteristic measured on each observational unit.

Examples:

| Observational unit | Variable |
|---|---|
| Student | Height |
| Patient | Blood pressure |
| Household | Number of family members |
| City | Annual rainfall |

If a variable is denoted by \(X\), then the observed value for the \(i\)-th unit may be written as

$$
x_i.
$$

For \(n\) observed units, the data may be written as

$$
x_1, x_2, \ldots, x_n.
$$

---

## Mini conversation: why definitions matter

**Oliver:** Sometimes I feel these definitions are obvious.

**Mr. R:** They may look obvious, but unclear definitions can create serious confusion.

**James:** Can you give an example?

**Mr. R:** Suppose we ask: What is the average income in a city? Are we measuring individuals, households, or working adults only?

**Emma:** Those would give different answers.

**Mr. R:** Exactly. The population and observational unit must be clearly defined.

---

## Common mistake

### Common mistake: confusing population with sample

A sample of 500 adults is not the population.

It is only the observed part of the population.

The purpose of statistical inference is often to use sample information to learn about the population.

---

## Key takeaway

Before analysing data, always identify:

$$
\text{Population}
\quad \rightarrow \quad
\text{Sample}
\quad \rightarrow \quad
\text{Observational unit}
\quad \rightarrow \quad
\text{Variable}.
$$

A statistical study becomes clearer when these four ideas are clearly defined.

---

## Reflection question

A school records the exam marks of 60 students from Year 10 to understand the performance of all Year 10 students.

Identify:

- the population;
- the sample;
- the observational unit;
- the variable.
