# Homework 6 — Functions, the basics

Welcome to your sixth homework! 🎉

This homework is **short on purpose**. It is only about the four things every function is made of:

* **declaring** a function and **calling** it
* **parameters** — the values you give a function
* **`return`** — the value you get *back* from a function
* **using** what a function returned: printing it, storing it in a variable, doing maths with it, passing it into another function

There are **six small exercises**. Nothing else is new: everything around the functions is what you already know from Workshops 1–6 — variables, operators, `if` / `else`, loops, arrays and template literals.

If you understand `return` after this homework, you understand functions. That is the whole goal.

**Deadline:** before Workshop 8.

**How to submit:** fork this repository, put your files in your own folder on your own branch, and open a **Pull Request**. Every step is explained below.

---

## How to submit — with a Pull Request

This is the same process as the last homework. A **fork** is your own copy of the repository, a **branch** is where your changes live, and a **Pull Request (PR)** asks to bring those changes into the original repository.

Follow the steps in order. If a command fails, read the error message carefully — it usually tells you what is wrong.

> Everywhere you see `<your-username>`, replace it with **your GitHub username** (without the angle brackets). For example, if your username is `nino-b`, your branch and your folder are both called `nino-b`.

### 1. Fork this repository

Open https://github.com/JavaScriptADI/javascript-205-homework-6 in your browser.

Click the **Fork** button in the top-right corner, keep the default settings and click **Create fork**.

GitHub creates your own copy of the repository at:

```text
https://github.com/<your-username>/javascript-205-homework-6
```

You can push to your fork. You cannot push to the original repository — that is exactly what the Pull Request is for.

### 2. Clone YOUR fork

On the page of **your fork**, click the green **Code** button, copy the URL and run:

```bash
git clone https://github.com/<your-username>/javascript-205-homework-6.git
cd javascript-205-homework-6
```

> Make sure the URL contains **your** username, not `JavaScriptADI`. If you cloned the original repository by accident, delete the folder and clone again from your fork.

### 3. Create a branch named after your GitHub username

```bash
git checkout -b <your-username>
```

You should see:

```text
Switched to a new branch '<your-username>'
```

You can check which branch you are on at any time with `git branch` — the current branch has a `*` in front of it.

### 4. Create your folder and your files

Inside the `submissions/` folder, create a folder named after your GitHub username and put your six exercise files inside it:

```bash
mkdir submissions/<your-username>
cd submissions/<your-username>
```

When you are done, your repository should look like this (with your own username instead of `<your-username>`):

```text
javascript-205-homework-6/
│
├── README.md
└── submissions/
    ├── README.md
    └── <your-username>/
        ├── exercise_1.js
        ├── exercise_2.js
        ├── exercise_3.js
        ├── exercise_4.js
        ├── exercise_5.js
        └── exercise_6.js
```

Only your own folder changes. Do not edit `README.md` or any other student's folder.

### 5. Run every file before committing

From inside your folder, run every file and compare what you see with the **expected output** under each exercise:

```bash
node exercise_1.js
node exercise_2.js
# ...and so on, up to exercise_6.js
```

A file that stops with an error is not finished yet.

### 6. Commit and push your branch

Go back to the repository folder, then add, commit and push:

```bash
cd ../..
git add .
git commit -m "Add homework 6"
git push -u origin <your-username>
```

If you are not inside your folder any more, skip the `cd ../..` line — check with `pwd` that you are in `javascript-205-homework-6`.

> The first push needs `-u origin <your-username>` because the branch does not exist on GitHub yet. Later pushes to the same branch only need `git push`.

### 7. Open the Pull Request

1. Open your fork on GitHub. A yellow banner says that `<your-username>` had recent pushes — click **Compare & pull request**. (If the banner is gone, click **Pull requests** → **New pull request** and pick your branch in the **compare** dropdown.)
2. Check the four dropdowns at the top of the page:
   * **base repository:** `JavaScriptADI/javascript-205-homework-6` and **base:** `main`
   * **head repository:** `<your-username>/javascript-205-homework-6` and **compare:** `<your-username>`
3. **Title:** "Homework 6 - Your Name" with your real name, for example "Homework 6 - Nino Beridze".
4. The description box already contains a template. Fill in your username and tick every box in the checklist that is true.
5. Click the green **Create pull request** button (not the *draft* option in its dropdown).

### 8. Wait for the review — and fix things on the same branch

The instructor is added as a reviewer automatically and will leave comments on your code.

If something needs fixing, edit the files in your folder, then commit and push to the **same branch**:

```bash
git add .
git commit -m "Fix exercise 3"
git push
```

Your Pull Request updates itself — you do **not** need to open a new one. **Do not open a second PR.** When everything is fine, the instructor approves and merges your PR.

> **Good to know**
>
> * You cannot push to the **original** repository (`JavaScriptADI/javascript-205-homework-6`) and its `main` branch is protected. That is expected: your work always goes to your fork, on your branch, and reaches the original repository only through a Pull Request.
> * One folder per student. Do not touch other students' folders or the `README.md`.
> * If you get stuck, take a screenshot of the error and bring it to the next workshop.

---

## Before you start — the two shapes of a function

Every function in this homework is a **function declaration**:

```javascript
function name(parameter) {
    // the code block: what the function does
}
```

There are only two kinds of function in this homework, and knowing which one you are writing is the whole skill:

**A function that prints.** It shows something on the screen and gives nothing back.

```javascript
function printDouble(n) {
    console.log(n * 2);
}

printDouble(5);   // shows 10 on the screen
```

**A function that returns.** It hands a **value** back to the place where it was called, so your program can keep working with it.

```javascript
function doubleOf(n) {
    return n * 2;
}

console.log(doubleOf(5));      // 10
const x = doubleOf(5) + 1;     // x is 11 — you cannot do this with printDouble
```

> `console.log` talks to **you**. `return` talks to **your program**.

---

## Exercises

Create the files below inside `submissions/<your-username>/` and write JavaScript code to solve each task.

Use only what we covered in Workshops 1–6 (see the [Rules](#rules) at the bottom). You can run each file with:

```bash
node exercise_1.js
```

Every exercise shows its **expected output**. Your program should print exactly that.

When you print an array, pass the label and the value as **two arguments**: `console.log("Sum:", total);` Use the labels shown in each expected output.

---

### `exercise_1.js` — Declare a function, call a function

Write two functions that take **no parameters** and only print:

1. `sayHello()` — prints `Hello!`
2. `printLine()` — prints twenty `-` characters

Then, below the functions, call them in this order: `sayHello`, `sayHello`, `printLine`, `sayHello`.

Expected output:

```text
Hello!
Hello!
--------------------
Hello!
```

Notice two things. The function body does **not** run when you write it — only when you **call** it. And one function you wrote once can be called as many times as you like.

> Hint: `"-".repeat(20)` gives you twenty dashes, so you do not have to type them.

---

### `exercise_2.js` — Parameters

A parameter is a value you hand to the function when you call it. Inside the function it behaves like a normal variable.

Write three functions that print:

1. `greet(name)` — prints `Hello, <name>!`
2. `printAge(name, age)` — prints `<name> is <age> years old`
3. `printSquare(n)` — prints `n` multiplied by itself

Then call them, in this order:

```javascript
greet("Nino")
greet("Giorgi")
printAge("Mariam", 22)
printSquare(6)
printSquare(9)
```

Expected output:

```text
Hello, Nino!
Hello, Giorgi!
Mariam is 22 years old
36
81
```

The same `greet` function produced two different lines, because you gave it two different values. That is the whole point of a parameter.

> Hint: use a template literal — `` console.log(`Hello, ${name}!`); ``

---

### `exercise_3.js` — `return` is not `console.log`

This is the most important exercise of the homework. Take your time with it.

Copy these two functions into your file:

```javascript
function printDouble(n) {
    console.log(n * 2);
}

function doubleOf(n) {
    return n * 2;
}
```

They look almost the same, but only one of them gives a **value back** to the place where it was called.

Now write these four lines, in this order:

1. Call `printDouble(5)` on its own.
2. Print the result of `doubleOf(5)`.
3. Store `doubleOf(8)` in a `const` called `result`, then print `result`.
4. Print `doubleOf(5) + doubleOf(10)`.

Expected output:

```text
10
10
16
30
```

Then answer this question in a comment at the bottom of the file:

**Why can you not write `printDouble(5) + printDouble(10)` and get `30`?**

> Hint: `return` puts a real value in the exact spot where you wrote the call — after it runs, JavaScript sees `doubleOf(5) + doubleOf(10)` as `10 + 20`. A function without `return` gives back `undefined`, and `undefined + undefined` is not a number.

---

### `exercise_4.js` — Small functions that return

Write four functions. Each one **returns** its answer, and none of them uses `console.log` inside:

1. `add(a, b)` — returns the sum of the two numbers.
2. `multiply(a, b)` — returns the two numbers multiplied.
3. `fullName(firstName, lastName)` — returns the two names with a space between them.
4. `celsiusToFahrenheit(celsius)` — returns `celsius * 9 / 5 + 32`.

Then print, in this order:

```javascript
add(3, 4)
multiply(3, 4)
fullName("Nino", "Beridze")
celsiusToFahrenheit(0)
celsiusToFahrenheit(100)
add(add(1, 2), 3)
```

Expected output:

```text
7
12
Nino Beridze
32
212
6
```

Look closely at the last line. `add(1, 2)` runs first, `return` turns it into `3`, and *that* is what the outer `add` receives as its first parameter. **A call that returns a value can be used anywhere a value can be used.**

---

### `exercise_5.js` — `return` inside an `if`

Write three functions:

1. `isEven(n)` — returns `true` or `false`. Return the comparison itself; you do not need `if`.
2. `biggest(a, b)` — returns the bigger of the two numbers, using `if` / `else`.
3. `passOrFail(score)` — returns the string `"Passed"` when the score is `70` or more, and `"Failed"` otherwise.

Print the results with these labels:

```text
isEven(4): true
isEven(7): false
biggest(10, 3): 10
biggest(2, 8): 8
passOrFail(85): Passed
passOrFail(41): Failed
```

> Hint: `n % 2 === 0` is already `true` or `false` — you can `return` it directly instead of writing `if (…) { return true; } else { return false; }`.
>
> In `biggest` and `passOrFail` every branch of the `if` needs its own `return`. As soon as one of them runs, the function stops right there.

---

### `exercise_6.js` — A function with a loop inside

Start with this array:

```javascript
const numbers = [5, 7, 10, 11, 3];
```

Write three functions. Each one takes the **whole array** as a parameter and returns a single number:

1. `sum(numbers)` — returns the total of every number in the array.
2. `biggestOf(numbers)` — returns the largest number, without using `Math.max`.
3. `average(numbers)` — returns the average. **Call your own `sum` function inside it** instead of writing the loop a second time.

Print:

```text
Sum: 36
Biggest: 11
Average: 7.2
Sum of [1, 2, 3]: 6
```

> Hint: the pattern is always the same — make a variable **before** the loop, change it **inside** the loop, and `return` it **after** the loop. If you put the `return` inside the loop, the function stops on the very first element.
>
> For `biggestOf`, start with `numbers[0]` as the biggest so far, exactly like we did in the array workshop.
>
> The last line shows why a parameter is better than reaching for the outside `numbers` variable: the same function works on any array you give it.

---

## Rules

Solve the exercises using only concepts covered in Workshops 1–6.

You may use:

* Everything from the earlier homeworks: operators (`+ - * / % ** += ++ === < >= && || !`), `.length`, array indexes, `Math` methods
* `const` and `let`
* Template literals and string methods, including `.repeat()`
* `if` / `else if` / `else`
* `for`, `while` and `for...of` loops
* Arrays
* **Functions written as declarations**, parameters, and `return`

Not allowed:

* **Arrow functions** (`const f = (x) => x + 1`) and function expressions (`const f = function (x) { … }`) — we have not covered them yet. Every function in this homework is written as `function name(parameters) { … }`
* `map`, `filter`, `find`, `some`, `every`, `reduce`, `forEach` and any other method that takes a function as an argument — write the loop yourself
* Default parameter values (`function greet(name = "stranger")`)
* `prompt()` — it does not exist in Node.js, so the file would crash
* anything else we have not covered yet

If you already know some of the things in the "not allowed" list from somewhere else: well done, but please solve this homework with the tools above. The point is to get `return` completely solid first.

---

## Checklist before you submit

* [ ] `exercise_1.js` … `exercise_6.js` are inside `submissions/<your-username>/`
* [ ] Every file runs with `node` without errors and prints the expected output
* [ ] Every function is written as `function name(...) { ... }` — no arrow functions
* [ ] Only concepts covered in Workshops 1–6 are used (no `prompt()`)
* [ ] `exercise_3.js`: my answer to the question is in a comment
* [ ] No files outside your own folder were changed
* [ ] Your branch is named after your GitHub username
* [ ] The Pull Request is open with the title "Homework 6 - Your Name"
* [ ] The checklist in the Pull Request description is filled in

Good luck! 🚀

---

## Helpful links

* Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* `function` declarations: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
* `return`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
* Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
* `String.prototype.repeat()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
* `for...of`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
* GitHub Docs — Fork a repository: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
* GitHub Docs — Creating a pull request from a fork: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
