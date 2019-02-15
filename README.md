# Foo Bar Qix
A quick summary of Foo Bar Qix

### Overview
Write a program that displays numbers from 1 to 100.
One number per line.

### Rules
* If the number is divisible by 3 or contains 3, write "Foo" instead of 3.
* If the number is divisible by 5 or contains 5, write "Bar" instead of 5.
* If the number is divisible by 7 or contains 7, write "Qix" instead of 7.
* We look at the divisors before the content (ex: 51 -> FooBar)
* We look at the content in the order it appears (ex: 53 -> BarFoo)
* We look at the multiples in the order Foo, Bar and Qix (ex: 21 -> FooQix)
* 13 contains 3, so is written as "Foo"
* 15 is divisible by 3 and 5 and contains a 5 hence is written as "FooBarBar"
* 33 contains twice 3 and is divisible by 3 so "FooFooFoo" is written

###  Sample output
1  
2  
foofoo  
4  
BarBar  
foo  
QixQix  
8  
foo  
Bar  