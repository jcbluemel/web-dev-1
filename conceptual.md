# Conceptual Exercise

Answer the following questions below in Markdown.
Check out the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### What is Big O notation and why does it matter?
Big O allows us to fuzzily measure how code performs as we increase the
number of inputs. When increasing inputs by orders of magnitude, things we perceive as small inefficiencies can balloon massively, and understanding Big O allows us to both understand how to write more efficient code, and identify problem areas.

### What is time complexity?
The amount of time a piece of code takes to run, in fuzzy terms. It gives us a trend for how efficiently something will run as a number of inputs increases.

### What are important differences between arrays and objects?
An array is a type of object, but it has distinct properties. Arrays store data in an ordered fashion, and each 'index' is given a number, starting with 0. Indexes can be accessed in constant time by 'indexing' them directly (nums[0]), but require O(n) if an index isn't known. For ... of loops allow you to loop through the items at each index, without specifying the index number. Arrays have their own methods we can use to mutate them, including .pop(), as well as methods for accessing them for various reasons, like .includes(). Objects store data in a key to value pair. Objects are also iterable, but there is no index number to access. Data is called by accessing a key, which gives the corresponding data. A For ... in loop allows you to loop through the keys. Objects allow for dot notation (obj.key) and bracket notation (obj[key]) to access value at a specific key. Keys can be accessed in constant time. In general, objects allow for better time complexity, as most commands that mutate an object can be done in constant time.

### What are important differences between `var` and `let`?
They have different scopes. Var have a function scope and let has a block scope. Var can be redeclared, and let cannot.

### What are important differences between `let` and `const`?
Let can be reassigned, and const cannot. They both help with readability, as a user seeing a const will know that said variable will remain the same (though if a reference type, can still be mutated).

### What are important differences between arrow functions and regular functions?
Arrow functions are anonymous, and use shorthand syntax. They only work as function expressions. Arrows do not create a 'this' context. If you use a single argument, you can ignore placing (), and return is implied if you don't use {}.

### What is the purpose of the rest operator?
Rest collects any additional arguments and bundles them together into a single array.

### What is the purpose of the spread operator?
Spread allows you to 'spread out' any remaining array elements. It can also be used to make a copy of an array or object with simple syntax.

### What is Object Oriented Programming?
OOP is using classes and instances of said classes to more easily and efficiently manage data and functionality.

### What is a class? When would you make one?
 Javascript uses classes to create a blueprint of an object, which can then be instantiated into a variable using said blueprint. Classes make it much easier to manage more complex projects, as you cut down on duplication, memory allocation, and the need to juggle multiple objects that seem very similar but aren't cut from the same blueprint.

### What is an instance?
An instance is an individual copy of a class. If I have a class Triangle, I can instantiate that Triangle into a variable with a name I choose, and that variable will have all the same properties of the Triangle class it originated from, while being it's own object.

### What is the keyword `this`?
This is a pain in the butt, I mean, 'this' is the Javascript syntax given to the context that an object makes when it is created. 'this' refers to the object when created, but the context of 'this' can change with the creation of new objects/methods/.call/.bind.

### What does the `bind` function do?
Bind allows us to, well, bind a function to a specific context. It is a method that returns a copy of the function it is permanently binding to, ensuring that the 'correct' context is always carried with it. This is useful for callback functions so the correct context is always bound, even if the programmer who wrote it doesn't know when the callback will be called itself.
