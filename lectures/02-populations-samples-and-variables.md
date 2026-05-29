---
title: Lecture 2 - Populations, Samples and Variables
parent: Lectures
nav_order: 2
permalink: /lectures/02-populations-samples-and-variables/
---

# Lecture 2: Populations, Samples and Variables

## Opening scene

Scene: Mr. R places a box of folded paper slips on the desk.

**Mr. R:** Today we will discuss three ideas that appear in almost every statistical study: population, sample, and variable.

**Oliver:** Population and sample were in the first lecture. Population is the full group, and sample is the part we observe.

**Mr. R:** Correct.

**Emma:** And variable means the characteristic we measure?

**Mr. R:** Exactly.

**James:** Why are these ideas so important?

**Mr. R:** Because if we are unclear about who we are studying and what we are measuring, the rest of the analysis becomes unclear.

---

## Today's big question

Before analysing data, we must ask:

$$
\text{Who or what is being studied?}
$$

and

$$
\text{What is being measured?}
$$

These two questions lead to four important ideas:

- population;
- sample;
- observational unit;
- variable.

---

## Population

A **population** is the complete collection of individuals, objects, or outcomes about which we want to draw conclusions.

**Mr. R:** Suppose we ask: What is the average height of students at a university?

**Oliver:** Then the population is all students at that university.

**Mr. R:** Correct.

**Emma:** If we ask about adults in Bristol, the population is all adults in Bristol.

**Mr. R:** Exactly. The population depends on the research question.

---

## Sample

A **sample** is the subset of the population that is actually observed.

If the population is denoted by

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

**Sophia:** So mathematically, a sample is a subset of the population.

**Mr. R:** Correct. But in statistics, the way that subset is selected is very important.

---

## Observational unit

The **observational unit** is the basic unit on which measurements are taken.

**Mr. R:** If we measure the height of students, what is the observational unit?

**Emma:** A student.

**Mr. R:** Correct.

**James:** If we measure waiting time in a hospital clinic?

**Mr. R:** Then the observational unit might be a patient visit.

**Oliver:** So the observational unit is not always a person?

**Mr. R:** Exactly. It could be a person, household, school, hospital, country, plant, animal, or repeated measurement.

---

## Variable

A **variable** is a characteristic measured on each observational unit.

Examples:

- height of a student;
- blood pressure of a patient;
- income of a household;
- rainfall in a city;
- number of children in a family.

If the variable is denoted by \(X\), then the value for the \(i\)-th unit is written as

$$
x_i.
$$

For \(n\) observed units, the data are

$$
x_1, x_2, \ldots, x_n.
$$

---

## Mini conversation: why definitions matter

**James:** This sounds simple. Why do students get confused?

**Mr. R:** Because in real examples, the population and observational unit are not always obvious.

Suppose we ask:

> What is the average income in a city?

**Emma:** We must ask whether income is measured for individuals, households, workers, or adults.

**Mr. R:** Exactly. Those are different observational units and may lead to different conclusions.

**Sophia:** So the mathematical analysis depends on the conceptual definition.

**Mr. R:** Very well said.

---

## Quick activity

For each question, identify the population and variable.

### Question 1

What is the average exam score of Year 10 students in a school?

### Question 2

What proportion of households in a city own a car?

### Question 3

What is the average waiting time for patients attending a clinic?

<details>
<summary>Show suggested answer</summary>

1. Population: all Year 10 students in the school. Variable: exam score.  
2. Population: all households in the city. Variable: car ownership status.  
3. Population: patient visits to the clinic. Variable: waiting time.

</details>

---

## Common mistake

### Common mistake: calling the sample the population

A sample of 300 adults is not the population.

It is only the observed part of the population.

The population is the wider group about which we want to draw conclusions.

---

## Key takeaway

Every statistical study should begin with this chain:

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

If this chain is unclear, the analysis will also be unclear.

---

## Reflection question

A hospital records the blood pressure of 250 patients with diabetes and wants to understand blood pressure among diabetic patients attending that hospital.

Identify:

- the population;
- the sample;
- the observational unit;
- the variable.

<details>
<summary>Show suggested answer</summary>

The population is diabetic patients attending that hospital, depending on the intended target group. The sample is the 250 recorded patients. The observational unit is a patient. The variable is blood pressure.

</details>
