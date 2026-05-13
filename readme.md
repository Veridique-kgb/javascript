*INTRODUCTION TO JAVASCRIPT*

Compiled Languages vs interpreted languages

HTML: Skeleton structure
CSS: Styling
JS: User interactivity

JS: A programming language that interacts with the browser to create interactive and dynamic web pages

*What do we use it for*

1. User interactivity: How users interact with a web page e.g scrool, click, ype, hover, focus
2. Reactivity: Automatic loading of data without refreshing 

*Where to Write JS*

1. Internal J: Writing JS in HTML inside script tags <script></script>
      ->In the head section
      ->In the body section (Most common way)
2. External Js
    -> Writing JS in an external and separate JS file with .js extension
    ->Used when JS code is a lot or when a developer wants an organisation and separation of concerns

*Variables*
-> A named container ued to store values(data)

*Variable naming rules in JS*

1. Variable names can only contain letters, digits, unsercores, dollar sign
2. Varibale names can only start with letters,underscores, or dollar sign
3. Variable names are case sensitive e.g: x and X are totally different
4. Variabale names cannot be key words or reverved words

*How to declare varibales in JS*

1. let -> used when declaring a variable that can be reassigned or changed
2. const -> used when the value of a variable is meant to be constant
3. var -> works just like let but is outdated (depracated) -> used in older browser version -> replaced by let in modern JS

*Data types in JS*

1. String - set of character(s) enclosed in single/double quotes
2. Number - accounts for both whole(integers) and decimals (float)
3. Boolean - represents truth value (true and false)

*console.log()* - function used to output data in the console window

*typeof()* - function that returns the data type of a value/variable

*Comments*

-> A way of documenting code
1. Single line comments -> //
2. Multiple or block comments->*/ */

*String Methods*
-> methods: in-built functions that are used to manipulate data
-> Most methods are accessed using the dot operator
1. length -> returns the number of characters in a string
2. charAt() -> returns the character of a string at a specified index
     :indexing is zero based (starts from zero)
    :JS does not support negative indexing by default
3. sclice() ->extracts a portion of a string => slice(start,end)
4. toLowerCase(): - converting all string characters to lower case format
5. toUpperCase(): converting all string characters to upper case format
6. trim(): used to remove whitespaces from a string
7. trimStart(): used to remove whitespaces fromthe the left side of a string
8. trimEnd(): used to remove whitespaces fromthe the right side of a string
9. concat(): method used to join or combine two or more strings - used in palce of + to join strings
10. endsWith(): checks whether a string ends with a specific characters - return a boolean 
11. startsWith(): checks whether a string starts with a specific characters - return a boolean 
12. replace(): repalces a character with another 

*Task*

1. split()
2. substring()
3. includes()
4. task on slide 56

*Numeric Operations / Methods*

+ -> Addition
- -> Substraction
/ -> division
* -> multiplication 
** -> exponential 
% -> Modulus
++ -? Increment ->increase/add by 1
-- -? decrement ->decrease/subtract by 1

*Type coercion vs Type conversion*

*Type coercion*: The automatic conversion of a value from one data to another. this is done y the language or program automatically 

*Type conversion*: The manual and explicit conversion of a value from one data to another. this is done by the programmer; also called casting when it is done manually 

*Polymorphism*: an object taking more than one form
              : -> method overloading & operator overloading
+ -> used as an addition
+ -> used to concanate two or more strings

*Digit strings* -> a string that has all characters as numeric values

*OPERATIONS*: -> Special symbols used to perform specific operations in programming
-> Broadly we have 4 major categories of operations:
1. Arithmetic operators: used for mathematical operations
addition(+),substraction(-),division(/),multiplication(*),exponention(**),modulus(%),increment(++),decrement(--)
2. Assignment operators: used to assign values to variables: =, +=, -=, *=, %=
3. Logical operators: used in logical operations
and (&&): returns true if all conditions are true
or (||): returns true if at least one condition is true
not (!): negates the boolen value if something is true it converts it to false if something is falase it converts it to true
4. Comparison operators: used to compare values

>, <, <=, >=,
==: loose equality: only checks for value ignoring data type
-> allows type coercion
===: strict equality: checks for both value and data type
-> doesn't allow for type coercion
!=: loose inequality
!==: strict inequality

*CONDITIONAL STATEMENTS ALSO CALLED DECISION MAKERS*

--> These are data structures that enale aprogram make decisions based on some predefined rules/conditions
--> an action is taked based on wether the condition is met or not
--> this is enabled by if-else statements

*Syntax of if-else statements*

--> if(condition){
    //what happens if the condition is met
   }else{
    //what happens if the condition is not met
    } 
*syntax of if-else statements with multiple conditions*

if(condition 1){
    //what happens if condition 1 is met
}else if(condition 2){
    //what happens if condition 2 is met
}else if(condition 3){
    //what happens if condition 3 is met
}else{
    //what happens if none is met
}

*Taking user inputs in JS*

--> user input in JS is through a prompt() function
--> Any data coming from user input is always a string

*Ternary operators*

--> is a shorthand for writing simple if else statements
--> it can only be used when there is only one condition to be met
-->it uses the symmbol "?" 

*Syntax of ternary operator*

let variable_name = condition ? what happens if condition is met : what happens if condition is not met


*Task*

--> slide 69

8. Conditional statement A student's final grade is determined by their exam score ( anumber between 0 and 100) using the rules below: if the score is 70 or above, the grade is

*DATA STRUCTURES (COLLECTIONS)*

--> A data structure is a collection of of multiple values in one varibale /memory location

--> In JS we have two data structures

a) arrays
b) Objects

*Arrays*
--> collection of multiple values that could be of different data types
--> it is the equivalent of lists in python

*Properties of arrays*
1. they can hold multiple values of any data type
2. they are rodered --> values can be accessed using index
                    --> by default there is no negative index in JS arrays (indexing is zero based)
3. they are mutable _ values can be changed
4. values in array are coma-separated
5. they have access to methods
6. they are represented using []

*Arrays Methods*
1. Accesing values in arrays - uses indexing(indexing is zero-based by default)
2. uodating or changing values in array - use indexing
3. length - dtermine the no of items in an array
4. slice()  - extracts a poriton of an array .slice(start,end)
5. adding items to an array
   -->push(): add items at the end
   -->unshift(): add items at the beggining 
6. renoving items from an array
     --> pop(): removing items at the end 
     --> shift(): removig items at the start 
7. includes(): checks if an item is contained in an array (returns a boolean)

8. at(): used to access a value by index (it allows for both zero-based and negative indexing)

*Task*

1. find out what the following array methods do:

-->splice()
--> sort
--> concat()

2. task on slides 72 & 73

*Why indexing starts from zero?*
*Spread operators*

-->used to combine or join array items by unpacking

*OBJECTS*

--> A data structure that stores values in key-value pairs
--> It is an equivalent of a dictionary in python

*Prperties of objects*

1. stores values in key-value
2. key is used to access the value
3. key is considered to be a string
4. values can be of any data type
5. they are mutable
6. represented using {}

*property* - key + value pair

*Why use objects?*

1. to store related data
2. to represent real world entities
3. to store complex data in a structured manner

*Objects operations*

1. accessing values in an object - use the key to access the value 
       --> dot notation : when the key follows indetifiers naming rules
       --> bracket notation: used regardless of wether the key follows varibale naming rules or not











