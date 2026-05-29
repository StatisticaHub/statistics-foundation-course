---
title: Lecture 3 - Types of Data and Measurement Scales
parent: Lectures
nav_order: 3
permalink: /lectures/03-types-of-data-and-measurement-scales/
---

# Lecture 3: Types of Data and Measurement Scales

## Opening scene

Scene: Mr. R writes four words on the board:

> Nominal, Ordinal, Interval, Ratio

**Oliver:** These words already sound difficult.

**Mr. R:** They look technical, but the idea is simple. Different variables carry different kinds of information.

**Emma:** So not all data should be summarised in the same way?

**Mr. R:** Exactly.

**James:** Does this affect what methods we can use later?

**Mr. R:** Yes. The type of data affects the summaries, comparisons, and interpretations that are meaningful.

---

## Today's big question

What kind of information does a variable contain?

A variable may describe:

- names or categories;
- ordered categories;
- numerical values with meaningful differences;
- numerical values with meaningful ratios.

This gives us different measurement scales.

---

## Qualitative and quantitative variables

A **qualitative variable** describes categories.

Examples:

- blood group;
- sex;
- smoking status;
- treatment group;
- eye colour.

A **quantitative variable** describes numerical measurements or counts.

Examples:

- age;
- height;
- weight;
- income;
- blood pressure;
- number of children.

**Oliver:** If a variable uses numbers, is it always quantitative?

**Mr. R:** Good question. No. A student ID may be numeric, but it is not a measurement.

---

## Nominal scale

A **nominal variable** has categories with no natural order.

Examples:

- blood group: A, B, AB, O;
- eye colour;
- marital status;
- treatment group.

For a nominal variable, we can count frequencies.

If category \(A\) appears \(f_A\) times in a sample of size \(n\), the sample proportion is

$$
\hat{p}_A = \frac{f_A}{n}.
$$

**Emma:** So with nominal data, we can say how common each category is.

**Mr. R:** Correct.

---

## Ordinal scale

An **ordinal variable** has categories with a meaningful order.

Examples:

- low, medium, high;
- mild, moderate, severe;
- strongly disagree, disagree, neutral, agree, strongly agree.

**James:** So ordinal data has order, but the distance between categories may not be equal.

**Mr. R:** Exactly.

**Sophia:** The difference between mild and moderate may not equal the difference between moderate and severe.

**Mr. R:** Correct.

---

## Interval scale

An **interval variable** is numerical and has meaningful differences, but no true zero.

A common example is temperature measured in Celsius.

The difference between \(20^\circ C\) and \(30^\circ C\) is meaningful.

But \(0^\circ C\) does not mean absence of temperature.

---

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

If one person weighs 80 kg and another weighs 40 kg, it is meaningful to say:

$$
80 = 2 \times 40.
$$

So the first person weighs twice as much.

---

## Mini conversation: choosing summaries

**Emma:** For nominal data, we should use frequencies and proportions.

**Mr. R:** Correct.

**Sophia:** For quantitative data, we may use means, variances, and standard deviations.

**Mr. R:** Yes, if those summaries are meaningful for the context.

**James:** So data type controls interpretation.

**Mr. R:** Exactly. A method is not just a calculation. It must match the meaning of the data.

---

## Quick activity

Classify each variable:

1. Blood group
2. Pain severity: mild, moderate, severe
3. Temperature in Celsius
4. Age in years
5. Student ID number

<details>
<summary>Show suggested answer</summary>

1. Blood group: nominal.  
2. Pain severity: ordinal.  
3. Temperature in Celsius: interval.  
4. Age in years: ratio.  
5. Student ID number: nominal identifier, not a quantitative measurement.

</details>

---

## Common mistake

### Common mistake: treating all numbers as measurements

A number is not always a quantity.

For example:

$$
\text{Student ID} = 10452
$$

This is a label, not a measurement.

It would not make sense to calculate the mean student ID.

---

## Key takeaway

The type of variable determines what statistical summaries are meaningful.

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

---

## Reflection question

Why would it be inappropriate to calculate the average of blood group categories?

<details>
<summary>Show suggested answer</summary>

Blood group is nominal. Its categories have no numerical distance or order. Therefore, calculating an average blood group has no meaningful interpretation.

</details>
