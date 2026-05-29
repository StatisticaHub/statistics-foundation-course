---
title: "Lecture 3: Types of Data and Measurement Scales"
description: "Understanding qualitative, quantitative, nominal, ordinal, interval, and ratio data."
---

## Opening scene

Scene: Mr. R writes four words on the board:

> Nominal, ordinal, interval, ratio.

**Oliver:** These already sound technical.

**Mr. R:** They do, but the idea is simple. Different variables carry different kinds of information.

**Emma:** So we should not treat every variable in the same way?

**Mr. R:** Exactly.

**James:** Does this affect what summaries we can use?

**Mr. R:** Yes. The type of data determines what calculations and interpretations are meaningful.

:::note[Today's big question]

What kind of information does a variable contain?

:::

## Qualitative and quantitative variables

A **qualitative variable** describes categories.

Examples include:

- blood group;
- smoking status;
- eye colour;
- treatment group.

A **quantitative variable** describes numerical measurements or counts.

Examples include:

- height;
- age;
- income;
- blood pressure;
- number of children.

**Oliver:** If a variable is written using numbers, is it always quantitative?

**Mr. R:** No. Student ID numbers are numbers, but they are labels, not measurements.

## Nominal scale

A **nominal variable** has categories with no natural order.

Examples:

- blood group;
- eye colour;
- marital status;
- treatment group.

If category $A$ appears $f_A$ times in a sample of size $n$, the sample proportion is:

$$
\hat{p}_A = \frac{f_A}{n}.
$$

**Emma:** So for nominal data, frequencies and proportions are useful.

**Mr. R:** Correct.

## Ordinal scale

An **ordinal variable** has categories with a meaningful order.

Examples:

- low, medium, high;
- mild, moderate, severe;
- strongly disagree, disagree, neutral, agree, strongly agree.

**Sophia:** The order matters, but the gaps between categories may not be equal.

**Mr. R:** Exactly. The gap between mild and moderate may not be the same as the gap between moderate and severe.

## Interval scale

An **interval variable** is numerical and has meaningful differences, but no true zero.

A common example is temperature in Celsius.

The difference between $20^\circ C$ and $30^\circ C$ is meaningful, but $0^\circ C$ does not mean absence of temperature.

## Ratio scale

A **ratio variable** is numerical, has meaningful differences, and has a true zero.

Examples:

- height;
- weight;
- age;
- income;
- distance;
- waiting time.

For ratio variables, ratios are meaningful.

If one person weighs 80 kg and another weighs 40 kg, then:

$$
80 = 2 \times 40.
$$

So the first person weighs twice as much.

## Summary table

| Scale | Order? | Equal differences? | True zero? | Example |
|---|---|---|---|---|
| Nominal | No | No | No | Blood group |
| Ordinal | Yes | Not necessarily | No | Pain severity |
| Interval | Yes | Yes | No | Celsius temperature |
| Ratio | Yes | Yes | Yes | Height |

## Common mistake

:::caution[Common mistake]

Do not treat labels as measurements.

A student ID such as 10452 is not a quantitative measurement. It is an identifier.

:::

## Key takeaway

The type of variable determines the type of statistical summary.

$$
\text{Variable}
\rightarrow
\text{Measurement scale}
\rightarrow
\text{Appropriate summary}
\rightarrow
\text{Valid interpretation}.
$$

## Reflection question

Why does it not make sense to calculate the average blood group?
