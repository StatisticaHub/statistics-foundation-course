---
title: "Note 3: Types of Data and Measurement Scales"
description: "Detailed notes on qualitative and quantitative data, and nominal, ordinal, interval, and ratio scales."
---

## Learning objectives

By the end of this note, you should be able to:

- distinguish qualitative and quantitative variables;
- explain nominal, ordinal, interval, and ratio scales;
- identify suitable summaries for different data types;
- understand why numerical labels are not always numerical measurements;
- explain why measurement scale affects interpretation;
- avoid common mistakes when summarising variables.

## 1. Introduction

Not all data contain the same kind of information.

Some variables describe categories, such as blood group or treatment type. Some variables describe numerical quantities, such as height or blood pressure. Some variables have natural order, while others do not. Some numerical variables have a meaningful zero, while others do not.

Understanding the type of variable is essential because it determines which summaries, graphs, and interpretations are meaningful.

A useful chain is:

$$
\text{Variable}
\rightarrow
\text{Measurement scale}
\rightarrow
\text{Appropriate summary}
\rightarrow
\text{Valid interpretation}.
$$

## 2. Qualitative variables

A **qualitative variable** describes categories or labels.

Examples include:

- blood group;
- eye colour;
- smoking status;
- treatment group;
- marital status;
- disease status.

Qualitative variables are often summarised using:

- frequency counts;
- percentages;
- proportions;
- bar charts.

If category $A$ appears $f_A$ times in a sample of size $n$, then the sample proportion is:

$$
\hat{p}_A=\frac{f_A}{n}.
$$

The percentage is:

$$
100\hat{p}_A = \frac{f_A}{n}\times 100.
$$

## 3. Quantitative variables

A **quantitative variable** describes a numerical amount or count.

Examples include:

- height;
- weight;
- age;
- income;
- blood pressure;
- number of children;
- number of hospital visits.

Quantitative variables are often summarised using:

- mean;
- median;
- range;
- variance;
- standard deviation;
- histograms;
- boxplots.

However, not every number is a quantitative variable.

For example, a student ID such as 10452 is written using digits, but it is not a measurement. It is a label.

:::caution[Common mistake]

Do not assume that a variable is quantitative simply because it is written as a number.

:::

## 4. Nominal scale

A **nominal variable** has categories with no natural order.

Examples:

- blood group: A, B, AB, O;
- eye colour;
- treatment group;
- city name;
- disease type.

For nominal data, it is meaningful to ask:

- how many observations fall in each category?
- what proportion belongs to each category?
- which category is most common?

It is not meaningful to calculate a mean blood group or say that one blood group is greater than another.

## 5. Ordinal scale

An **ordinal variable** has categories with a meaningful order.

Examples:

- mild, moderate, severe;
- low, medium, high;
- strongly disagree, disagree, neutral, agree, strongly agree;
- stage I, stage II, stage III, stage IV.

Ordinal variables contain more information than nominal variables because the categories have order.

However, the distance between categories is not necessarily equal.

For example, the difference between mild and moderate pain may not be the same as the difference between moderate and severe pain.

## 6. Interval scale

An **interval variable** is numerical and has meaningful differences, but no true zero.

A common example is temperature measured in Celsius.

The difference between $20^\circ C$ and $30^\circ C$ is meaningful.

But $0^\circ C$ does not mean absence of temperature.

This means ratios are not meaningful. It is not correct to say that $20^\circ C$ is twice as hot as $10^\circ C$ in an absolute sense.

## 7. Ratio scale

A **ratio variable** is numerical, has meaningful differences, and has a true zero.

Examples include:

- height;
- weight;
- income;
- distance;
- age;
- waiting time;
- number of hospital visits.

For ratio variables, ratios are meaningful.

If one person weighs 80 kg and another weighs 40 kg, then:

$$
80 = 2\times 40.
$$

It is meaningful to say the first person weighs twice as much as the second.

## 8. Summary table

| Scale | Categories? | Ordered? | Equal differences? | True zero? | Example |
|---|---:|---:|---:|---:|---|
| Nominal | Yes | No | No | No | Blood group |
| Ordinal | Yes | Yes | Not necessarily | No | Pain severity |
| Interval | No | Yes | Yes | No | Celsius temperature |
| Ratio | No | Yes | Yes | Yes | Weight |

## 9. Why scale matters

The measurement scale tells us what operations are meaningful.

For example:

- nominal data can be counted;
- ordinal data can be ranked;
- interval data can be compared using differences;
- ratio data can be compared using ratios.

A method may be mathematically possible but conceptually meaningless.

For example, we can assign numbers to blood groups, but the mean of those numbers would not have a biological interpretation.

:::tip[Key idea]

Statistical analysis must respect the meaning of the variable, not just its format.

:::

## 10. Summary

The type of data determines how it should be summarised and interpreted.

Before analysing a variable, ask:

1. Is it categorical or numerical?
2. If categorical, is it ordered?
3. If numerical, does it have a true zero?
4. What summaries are meaningful?

## Revision questions

1. What is a qualitative variable?
2. What is a quantitative variable?
3. What is a nominal variable?
4. What is an ordinal variable?
5. What is the difference between interval and ratio scales?
6. Why is student ID not a quantitative measurement?
7. Why does measurement scale matter?
