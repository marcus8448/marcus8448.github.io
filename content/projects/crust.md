---
title: Crust
subtitle: Toy compiler
date: 2025-06-24T22:53:35-07:00
publishDate: 2025-07-01T08:00:00-07:00
timeframe: 2023-2024
icon: /image/crust.png
description: |
  A toy programming language and compiler.
repository: https://github.com/marcus8448/crust
tools:
  - C
  - CMake
---

## About
Crust is an experimental compiler for a C-like language with Rust-like syntax.
Crust supports for loops, conditionals, and external C functions.
It follows the x86-64 System-V ABI, allowing for C function calls both into and out of the program.

## Compiler
The Crust compiler is the core of the project.
Written in C, it converts Crust programs into x86-64 assembly through a 5-step process:
tokenization, preprocessing, syntax tree generation, register allocation, and finally code generation.

### Example program

Recursive fibonacci generator
```rust
extern fn puts(str: [u8]) -> i32;
extern fn printf(fmt: [u8], num: i64, num2: i64) -> i32;
extern fn strtol(str: [u8], endptr: [[u8]], base: i32) -> i32;

fn main(argc: i32, argv: [[u8]]) -> i64 {
    if (argc < 2) {
        puts("Usage: fib <num>");
        return 1;
    }
    let n: i64 = strtol(argv[1], 0, 10) as i64;
    printf("fib(%lli) = %lli\n", n, fib(n));
    return 0;
}

fn fib(n: i64) -> i64 {
    if n < 2 {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
```
