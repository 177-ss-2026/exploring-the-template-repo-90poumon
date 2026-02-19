# Reflection

## 1) Summarize your understanding of `node_modules` and its relationship with `package.json`

The `package.json` file is the **project manifest** — it describes the project name, main file, scripts, dependencies, and dev tools. When we run `bun install`, Bun (like npm/yarn) reads `package.json` and installs all required packages and development tools into the `node_modules` folder. The `node_modules` directory is where those downloaded packages actually live, and Bun will use them when running scripts or code.

## 2) What does the ${} syntax do inside backticks? Why is it useful?

Inside backticks, `${}` allows us to **embed variables or expressions directly into a string**. this is called a *template literal*. It makes the code easier to read compared to traditional string concatenation (`+`) and lets you format strings neatly.

## 3) What happened when you saved your code in VS Code?

When I saved my code in VS Code with the Bun Biome template, the Biome formatter auto-formatted my code according to the project's style rules (like spacing and indentation). VS Code also showed errors or suggestions if something was wrong with my code, helping me catch mistakes early. This made my code cleaner and more consistent without me having to manually format it.

## 4) How many commits did you make for this assignment? Why is it better to make multiple small commits instead of one large commit?

I made 3 commits for this assignment. It is better to make multiple small commits because it keeps changes organized, makes it easier to track progress, and makes it easier to fix mistakes or go back to a previous version if something breaks.

## 5) When do we use `const` vs `let`? What about `var`?

We use `const` when a variable’s value should not change after it’s assigned.
We use `let` when we plan to change the value later.
We generally avoid `var` because it has old scoping rules and can lead to bugs. The Biome linter used in the template also enforces using `const` and `let` and prevents using `var`.
