/* ==========================================================
   DevPath - C# Exercises
   Categories / Exercises / Answers / Progress
   ========================================================== */


/* ==========================================================
   Start Exercise Data
   ========================================================== */

const exerciseCategories = [

    {
        id: "syntax",
        title: "Syntax",
        count: 5
    },

    {
        id: "output",
        title: "Output",
        count: 3
    },

    {
        id: "comments",
        title: "Comments",
        count: 4
    },

    {
        id: "variables",
        title: "Variables",
        count: 8
    },

    {
        id: "constant-variables",
        title: "Constant Variables",
        count: 4
    },

    {
        id: "display-variables",
        title: "Display Variables",
        count: 6
    },

    {
        id: "multiple-variables",
        title: "Multiple Variables",
        count: 4
    },

    {
        id: "identifiers",
        title: "Identifiers",
        count: 4
    },

    {
        id: "data-types",
        title: "Data Types",
        count: 6
    },

    {
        id: "type-casting",
        title: "Type Casting",
        count: 5
    },

    {
        id: "user-input",
        title: "User Input",
        count: 7
    },

    {
        id: "arithmetic-operators",
        title: "Arithmetic Operators",
        count: 7
    },

    {
        id: "assignment-operators",
        title: "Assignment Operators",
        count: 5
    },

    {
        id: "comparison-operators",
        title: "Comparison Operators",
        count: 5
    },

    {
        id: "logical-operators",
        title: "Logical Operators",
        count: 5
    },

    {
        id: "math",
        title: "Math",
        count: 7
    },

    {
        id: "strings",
        title: "Strings",
        count: 7
    },

    {
        id: "string-concatenation",
        title: "String Concatenation",
        count: 6
    },

    {
        id: "string-interpolation",
        title: "String Interpolation",
        count: 4
    },

    {
        id: "access-strings",
        title: "Access Strings",
        count: 6
    },

    {
        id: "special-characters",
        title: "Special Characters",
        count: 5
    },

    {
        id: "booleans",
        title: "Booleans",
        count: 8
    },

    {
        id: "if",
        title: "If",
        count: 6
    },

    {
        id: "else",
        title: "Else",
        count: 3
    },

    {
        id: "else-if",
        title: "Else if",
        count: 3
    },

    {
        id: "shorthand-if-else",
        title: "Shorthand if else",
        count: 4
    },

    {
        id: "switch",
        title: "Switch",
        count: 6
    },

    {
        id: "while-loop",
        title: "While Loop",
        count: 7
    },

    {
        id: "for-loop",
        title: "For Loop",
        count: 6
    },

    {
        id: "break-continue",
        title: "Break and Continue",
        count: 8
    },

    {
        id: "arrays",
        title: "Arrays",
        count: 7
    },

    {
        id: "array-loops",
        title: "Array Loops",
        count: 5
    },

    {
        id: "sort-arrays",
        title: "Sort Arrays",
        count: 6
    },

    {
        id: "multidimensional-arrays",
        title: "Multidimensional Arrays",
        count: 6
    },

    {
        id: "methods",
        title: "Methods",
        count: 6
    },

    {
        id: "method-parameters",
        title: "Method Parameters",
        count: 8
    },

    {
        id: "default-parameter",
        title: "Default Parameter",
        count: 3
    },

    {
        id: "return-values",
        title: "Return Values",
        count: 5
    },

    {
        id: "method-overloading",
        title: "Method Overloading",
        count: 4
    },

    {
        id: "oop",
        title: "OOP",
        count: 5
    },

    {
        id: "classes-objects",
        title: "Classes and Objects",
        count: 8
    },

    {
        id: "multiple-objects",
        title: "Multiple Objects",
        count: 5
    },

    {
        id: "class-members",
        title: "Class Members",
        count: 7
    },

    {
        id: "constructors",
        title: "Constructors",
        count: 7
    },

    {
        id: "access-modifiers",
        title: "Access Modifiers",
        count: 6
    },

    {
        id: "properties",
        title: "Properties",
        count: 6
    },

    {
        id: "inheritance",
        title: "Inheritance",
        count: 7
    },

    {
        id: "polymorphism",
        title: "Polymorphism",
        count: 5
    },

    {
        id: "abstraction",
        title: "Abstraction",
        count: 6
    },

    {
        id: "interface",
        title: "Interface",
        count: 7
    },

    {
        id: "enums",
        title: "Enums",
        count: 8
    },

    {
        id: "files",
        title: "Files",
        count: 8
    },

    {
        id: "exceptions",
        title: "Exceptions",
        count: 8
    }

];


/* ==========================================================
   Exercise Templates
   ========================================================== */

const exerciseTemplates = {


    syntax: [

        {
            type: "mc",
            title: "C# Statement Ending",
            question: "Which symbol is normally used to end a C# statement?",
            code: "int number = 10;",
            options: [";", ":", ".", ","],
            answer: ";",
            explanation: "C# statements normally end with a semicolon."
        },

        {
            type: "fill",
            title: "Declare an Integer",
            question: "Fill in the blank to declare an integer variable.",
            code: "___ number = 10;",
            answer: "int",
            explanation: "The int keyword is used to declare an integer."
        },

        {
            type: "mc",
            title: "Main Method",
            question: "Which method is commonly used as the entry point of a C# console application?",
            code: "static void ______() { }",
            options: ["Main", "Start", "Run", "Begin"],
            answer: "Main",
            explanation: "Main is the standard entry point of a C# console application."
        },

        {
            type: "fill",
            title: "Class Keyword",
            question: "Fill in the keyword used to declare a class.",
            code: "___ Program\n{\n}",
            answer: "class",
            explanation: "The class keyword declares a class."
        },

        {
            type: "mc",
            title: "Code Block",
            question: "Which symbols are used to define a block of C# code?",
            code: "class Program ___\n    // code\n___",
            options: ["{ }", "( )", "[ ]", "< >"],
            answer: "{ }",
            explanation: "Curly braces define code blocks in C#."
        }

    ],


    output: [

        {
            type: "mc",
            title: "Console Output",
            question: "Which method prints text to the console and moves to a new line?",
            code: "Console.________(\"Hello\");",
            options: ["WriteLine", "ReadLine", "WriteText", "PrintLine"],
            answer: "WriteLine",
            explanation: "Console.WriteLine writes text and moves to the next line."
        },

        {
            type: "fill",
            title: "Write Without New Line",
            question: "Fill in the method name to write text without automatically adding a new line.",
            code: "Console.___(\"Hello\");",
            answer: "Write",
            explanation: "Console.Write writes text without adding a new line."
        },

        {
            type: "mc",
            title: "Multiple Values",
            question: "Which method can print a formatted value to the console?",
            code: "Console.________(\"Age: {0}\", age);",
            options: ["WriteLine", "ReadLine", "Input", "Read"],
            answer: "WriteLine",
            explanation: "WriteLine supports formatted output."
        }

    ],


    comments: [

        {
            type: "mc",
            title: "Single-Line Comment",
            question: "Which symbol starts a single-line comment in C#?",
            code: "___ This is a comment",
            options: ["//", "/*", "#", "--"],
            answer: "//",
            explanation: "// starts a single-line comment."
        },

        {
            type: "mc",
            title: "Multi-Line Comment",
            question: "Which syntax creates a multi-line comment?",
            code: "___ comment ___",
            options: ["/* */", "// //", "<!-- -->", "# #"],
            answer: "/* */",
            explanation: "/* and */ surround multi-line comments."
        },

        {
            type: "fill",
            title: "Comment Symbol",
            question: "Fill in the symbol used before a single-line comment.",
            code: "___ Explain this code",
            answer: "//",
            explanation: "// starts a single-line comment."
        },

        {
            type: "mc",
            title: "Comments and Execution",
            question: "Does commented-out C# code execute?",
            code: "// Console.WriteLine(\"Hello\");",
            options: ["No", "Yes", "Only in Debug", "Only in Release"],
            answer: "No",
            explanation: "Comments are ignored by the compiler."
        }

    ],


    variables: [

        {
            type: "fill",
            title: "Integer Variable",
            question: "Fill in the data type.",
            code: "___ age = 22;",
            answer: "int",
            explanation: "int stores whole numbers."
        },

        {
            type: "mc",
            title: "String Variable",
            question: "Which type stores text?",
            code: "_____ name = \"Mohamed\";",
            options: ["string", "int", "bool", "double"],
            answer: "string",
            explanation: "string stores text."
        },

        {
            type: "mc",
            title: "Boolean Variable",
            question: "Which type stores true or false?",
            code: "_____ isOnline = true;",
            options: ["bool", "int", "string", "char"],
            answer: "bool",
            explanation: "bool stores true or false."
        },

        {
            type: "fill",
            title: "Double Variable",
            question: "Fill in the type for a decimal number.",
            code: "___ price = 19.99;",
            answer: "double",
            explanation: "double stores floating-point numbers."
        },

        {
            type: "mc",
            title: "Change Variable",
            question: "Which variable can be reassigned?",
            code: "int age = 20;\nage = 21;",
            options: ["age", "int", "21", "None"],
            answer: "age",
            explanation: "A normal variable can be assigned a new value."
        },

        {
            type: "fill",
            title: "Character Variable",
            question: "Fill in the type used to store one character.",
            code: "___ grade = 'A';",
            answer: "char",
            explanation: "char stores a single character."
        },

        {
            type: "mc",
            title: "Variable Assignment",
            question: "Which operator assigns a value to a variable?",
            code: "int x ___ 10;",
            options: ["=", "==", "=>", ":"],
            answer: "=",
            explanation: "The = operator assigns a value."
        },

        {
            type: "fill",
            title: "Variable Name",
            question: "Complete the variable declaration.",
            code: "string ___ = \"DevPath\";",
            answer: "name",
            explanation: "name is the identifier used for the string variable."
        }

    ],


    "constant-variables": [

        {
            type: "fill",
            title: "Constant Keyword",
            question: "Fill in the keyword used to declare a constant.",
            code: "___ double PI = 3.14;",
            answer: "const",
            explanation: "const creates a constant value."
        },

        {
            type: "mc",
            title: "Changing Constants",
            question: "Can a const variable be changed after declaration?",
            code: "const int x = 10;",
            options: ["No", "Yes", "Only once", "Only in Main"],
            answer: "No",
            explanation: "A const value cannot be reassigned."
        },

        {
            type: "fill",
            title: "Constant Value",
            question: "Complete the constant declaration.",
            code: "const int MaxUsers ___ 100;",
            answer: "=",
            explanation: "The assignment operator initializes the constant."
        },

        {
            type: "mc",
            title: "Constant Initialization",
            question: "When must a local const variable receive its value?",
            code: "const int max = 100;",
            options: ["At declaration", "After Main", "Before compilation", "Never"],
            answer: "At declaration",
            explanation: "A const must be initialized when declared."
        }

    ],


    "display-variables": [

        {
            type: "mc",
            title: "Display Variable",
            question: "Which method displays a variable?",
            code: "int age = 22;\nConsole.________(age);",
            options: ["WriteLine", "ReadLine", "Input", "Display"],
            answer: "WriteLine",
            explanation: "Console.WriteLine can display variable values."
        },

        {
            type: "fill",
            title: "Display Text and Variable",
            question: "Fill in the method.",
            code: "string name = \"Mohamed\";\nConsole.___(name);",
            answer: "WriteLine",
            explanation: "WriteLine prints the value followed by a new line."
        },

        {
            type: "mc",
            title: "String Output",
            question: "Which statement displays the value of name?",
            code: "string name = \"Ali\";",
            options: [
                "Console.WriteLine(name);",
                "Console.ReadLine(name);",
                "Console.Print(name);",
                "Console.Display(name);"
            ],
            answer: "Console.WriteLine(name);",
            explanation: "Console.WriteLine(name) displays the value."
        },

        {
            type: "fill",
            title: "Output Variable",
            question: "Complete the statement.",
            code: "int score = 95;\nConsole.___(score);",
            answer: "WriteLine",
            explanation: "WriteLine is commonly used to display output."
        },

        {
            type: "mc",
            title: "Formatted Output",
            question: "Which method can use placeholders such as {0}?",
            code: "Console.________(\"Score: {0}\", score);",
            options: ["WriteLine", "ReadLine", "Read", "Input"],
            answer: "WriteLine",
            explanation: "WriteLine supports composite formatting."
        },

        {
            type: "mc",
            title: "Output Order",
            question: "What is displayed first?",
            code: "Console.WriteLine(\"Hello\");\nConsole.WriteLine(\"World\");",
            options: ["Hello", "World", "Both at once", "Nothing"],
            answer: "Hello",
            explanation: "Statements execute from top to bottom."
        }

    ],


    "multiple-variables": [

        {
            type: "fill",
            title: "Two Variables",
            question: "Complete the declaration.",
            code: "int x = 5, ___ = 10;",
            answer: "y",
            explanation: "Multiple variables of the same type can be declared together."
        },

        {
            type: "mc",
            title: "Same Type",
            question: "Can multiple variables of the same type be declared in one statement?",
            code: "int x = 1, y = 2, z = 3;",
            options: ["Yes", "No", "Only strings", "Only constants"],
            answer: "Yes",
            explanation: "C# allows multiple variables of the same type in one declaration."
        },

        {
            type: "fill",
            title: "Multiple Integers",
            question: "Fill in the missing variable.",
            code: "int first = 1, ___ = 2;",
            answer: "second",
            explanation: "second is another variable declared as int."
        },

        {
            type: "mc",
            title: "Different Types",
            question: "Can this declaration contain different types?",
            code: "int x = 1, string name = \"Ali\";",
            options: ["No", "Yes", "Always", "Only in methods"],
            answer: "No",
            explanation: "A single declaration statement uses one declared type."
        }

    ],


    identifiers: [

        {
            type: "mc",
            title: "Valid Identifier",
            question: "Which is a valid C# identifier?",
            code: "________ = 10;",
            options: ["userAge", "123age", "user-age", "class"],
            answer: "userAge",
            explanation: "Identifiers can contain letters and digits but cannot start with a digit."
        },

        {
            type: "mc",
            title: "Identifier Case",
            question: "Are C# identifiers case-sensitive?",
            code: "int age = 20;\nint Age = 30;",
            options: ["Yes", "No", "Only methods", "Only classes"],
            answer: "Yes",
            explanation: "age and Age are different identifiers."
        },

        {
            type: "fill",
            title: "Identifier Start",
            question: "An identifier cannot normally start with a ___.",
            code: "int 123name = 10;",
            answer: "number",
            explanation: "A normal identifier cannot start with a number."
        },

        {
            type: "mc",
            title: "Keyword Identifier",
            question: "Which word should not normally be used as a regular identifier?",
            code: "int ______ = 10;",
            options: ["class", "age", "score", "number"],
            answer: "class",
            explanation: "class is a reserved C# keyword."
        }

    ],


    "data-types": [

        {
            type: "mc",
            title: "Whole Numbers",
            question: "Which type is commonly used for whole numbers?",
            code: "_____ age = 22;",
            options: ["int", "string", "bool", "char"],
            answer: "int",
            explanation: "int stores whole numbers."
        },

        {
            type: "mc",
            title: "Decimal Numbers",
            question: "Which type can store decimal values?",
            code: "_____ price = 19.99;",
            options: ["double", "bool", "char", "string"],
            answer: "double",
            explanation: "double is commonly used for floating-point values."
        },

        {
            type: "fill",
            title: "True or False",
            question: "Fill in the data type.",
            code: "___ active = true;",
            answer: "bool",
            explanation: "bool stores true or false."
        },

        {
            type: "mc",
            title: "Single Character",
            question: "Which type stores one character?",
            code: "_____ grade = 'A';",
            options: ["char", "string", "int", "bool"],
            answer: "char",
            explanation: "char stores a single character."
        },

        {
            type: "fill",
            title: "Text Type",
            question: "Fill in the type.",
            code: "___ city = \"Cairo\";",
            answer: "string",
            explanation: "string stores text."
        },

        {
            type: "mc",
            title: "Large Whole Number",
            question: "Which type is designed for larger whole numbers than int?",
            code: "_____ population = 9000000000;",
            options: ["long", "bool", "char", "string"],
            answer: "long",
            explanation: "long provides a larger integral range than int."
        }

    ],


    "type-casting": [

        {
            type: "mc",
            title: "Implicit Casting",
            question: "Which conversion is generally safe and can happen implicitly?",
            code: "int x = 10;\ndouble y = ______;",
            options: ["x", "int(x)", "double.Parse(x)", "Convert.Text(x)"],
            answer: "x",
            explanation: "An int can be implicitly converted to double."
        },

        {
            type: "fill",
            title: "Explicit Casting",
            question: "Fill in the type cast.",
            code: "double x = 9.8;\nint y = ___(x);",
            answer: "(int)",
            explanation: "Explicit casting can convert double to int."
        },

        {
            type: "mc",
            title: "Convert.ToInt32",
            question: "Which method converts a value to Int32?",
            code: "int number = Convert.________(value);",
            options: ["ToInt32", "ToInteger", "Int32", "ParseInt"],
            answer: "ToInt32",
            explanation: "Convert.ToInt32 converts a value to Int32."
        },

        {
            type: "mc",
            title: "Parse",
            question: "Which method can parse numeric text into an int?",
            code: "int number = int.______(\"25\");",
            options: ["Parse", "Read", "Convert", "Number"],
            answer: "Parse",
            explanation: "int.Parse converts numeric text into an int."
        },

        {
            type: "fill",
            title: "Double Conversion",
            question: "Complete the conversion.",
            code: "string text = \"12.5\";\ndouble value = double.___(text);",
            answer: "Parse",
            explanation: "double.Parse parses a numeric string into a double."
        }

    ],


    "user-input": [

        {
            type: "mc",
            title: "Read Input",
            question: "Which method reads a line from the console?",
            code: "string name = Console.________();",
            options: ["ReadLine", "WriteLine", "ReadText", "Input"],
            answer: "ReadLine",
            explanation: "Console.ReadLine reads a line from standard input."
        },

        {
            type: "fill",
            title: "Read Name",
            question: "Complete the code.",
            code: "string name = Console.___();",
            answer: "ReadLine",
            explanation: "ReadLine returns the entered line as a string."
        },

        {
            type: "mc",
            title: "Numeric Input",
            question: "Console.ReadLine returns input as which type?",
            code: "string input = Console.ReadLine();",
            options: ["string", "int", "double", "bool"],
            answer: "string",
            explanation: "ReadLine returns a string."
        },

        {
            type: "fill",
            title: "Convert Input",
            question: "Complete the integer conversion.",
            code: "int age = int.___(Console.ReadLine());",
            answer: "Parse",
            explanation: "int.Parse converts the entered string to int."
        },

        {
            type: "mc",
            title: "Input Method",
            question: "Which method should be used to read one complete line?",
            code: "Console.________();",
            options: ["ReadLine", "WriteLine", "Write", "Clear"],
            answer: "ReadLine",
            explanation: "ReadLine reads an entire line."
        },

        {
            type: "fill",
            title: "String Input",
            question: "Fill in the missing method.",
            code: "string city = Console.___();",
            answer: "ReadLine",
            explanation: "ReadLine is used to receive a line of text."
        },

        {
            type: "mc",
            title: "Output vs Input",
            question: "Which method is used for output?",
            code: "Console.________(\"Hello\");",
            options: ["WriteLine", "ReadLine", "Read", "Input"],
            answer: "WriteLine",
            explanation: "WriteLine outputs text to the console."
        }

    ],


    "arithmetic-operators": [

        {
            type: "mc",
            title: "Addition",
            question: "Which operator adds two values?",
            code: "int result = 10 ___ 5;",
            options: ["+", "-", "*", "/"],
            answer: "+",
            explanation: "+ performs addition."
        },

        {
            type: "mc",
            title: "Subtraction",
            question: "Which operator subtracts values?",
            code: "int result = 10 ___ 5;",
            options: ["-", "+", "*", "%"],
            answer: "-",
            explanation: "- performs subtraction."
        },

        {
            type: "fill",
            title: "Multiplication",
            question: "Fill in the multiplication operator.",
            code: "int result = 5 ___ 4;",
            answer: "*",
            explanation: "* performs multiplication."
        },

        {
            type: "mc",
            title: "Division",
            question: "Which operator performs division?",
            code: "double result = 10 ___ 2;",
            options: ["/", "*", "%", "-"],
            answer: "/",
            explanation: "/ performs division."
        },

        {
            type: "fill",
            title: "Remainder",
            question: "Fill in the operator that returns the remainder.",
            code: "int result = 10 ___ 3;",
            answer: "%",
            explanation: "% returns the remainder of a division."
        },

        {
            type: "mc",
            title: "Increment",
            question: "Which operator increases a variable by one?",
            code: "x___;",
            options: ["++", "--", "+=", "=="],
            answer: "++",
            explanation: "++ increments a variable by one."
        },

        {
            type: "mc",
            title: "Decrement",
            question: "Which operator decreases a variable by one?",
            code: "x___;",
            options: ["--", "++", "-=", "!="],
            answer: "--",
            explanation: "-- decrements a variable by one."
        }

    ],


    "assignment-operators": [

        {
            type: "fill",
            title: "Assignment",
            question: "Fill in the basic assignment operator.",
            code: "int x ___ 10;",
            answer: "=",
            explanation: "= assigns a value."
        },

        {
            type: "mc",
            title: "Add and Assign",
            question: "Which operator adds a value and assigns the result?",
            code: "x ___ 5;",
            options: ["+=", "-=", "*=", "=="],
            answer: "+=",
            explanation: "+= adds and assigns."
        },

        {
            type: "mc",
            title: "Subtract and Assign",
            question: "Which operator subtracts and assigns?",
            code: "x ___ 5;",
            options: ["-=", "+=", "*=", "/="],
            answer: "-=",
            explanation: "-= subtracts and assigns."
        },

        {
            type: "mc",
            title: "Multiply and Assign",
            question: "Which operator multiplies and assigns?",
            code: "x ___ 2;",
            options: ["*=", "+=", "/=", "%="],
            answer: "*=",
            explanation: "*= multiplies and assigns."
        },

        {
            type: "fill",
            title: "Divide and Assign",
            question: "Fill in the operator.",
            code: "x ___ 2;",
            answer: "/=",
            explanation: "/= divides and assigns."
        }

    ],


    "comparison-operators": [

        {
            type: "mc",
            title: "Equal To",
            question: "Which operator checks whether two values are equal?",
            code: "x ___ y",
            options: ["==", "=", "!=", ">"],
            answer: "==",
            explanation: "== compares two values for equality."
        },

        {
            type: "fill",
            title: "Not Equal",
            question: "Fill in the not-equal operator.",
            code: "x ___ y",
            answer: "!=",
            explanation: "!= checks whether values are different."
        },

        {
            type: "mc",
            title: "Greater Than",
            question: "Which operator checks if x is greater than y?",
            code: "x ___ y",
            options: [">", "<", ">=", "<="],
            answer: ">",
            explanation: "> checks greater than."
        },

        {
            type: "mc",
            title: "Less Than",
            question: "Which operator checks if x is less than y?",
            code: "x ___ y",
            options: ["<", ">", ">=", "=="],
            answer: "<",
            explanation: "< checks less than."
        },

        {
            type: "fill",
            title: "Greater or Equal",
            question: "Fill in the operator.",
            code: "x ___ y",
            answer: ">=",
            explanation: ">= checks greater than or equal to."
        }

    ],


    "logical-operators": [

        {
            type: "mc",
            title: "Logical AND",
            question: "Which operator requires both conditions to be true?",
            code: "age > 18 ___ age < 60",
            options: ["&&", "||", "!", "&"],
            answer: "&&",
            explanation: "&& represents logical AND."
        },

        {
            type: "fill",
            title: "Logical OR",
            question: "Fill in the operator that requires at least one condition to be true.",
            code: "x > 10 ___ y > 10",
            answer: "||",
            explanation: "|| represents logical OR."
        },

        {
            type: "mc",
            title: "Logical NOT",
            question: "Which operator reverses a boolean value?",
            code: "___isReady",
            options: ["!", "&&", "||", "!="],
            answer: "!",
            explanation: "! represents logical NOT."
        },

        {
            type: "mc",
            title: "Both Conditions",
            question: "Which expression requires both conditions to be true?",
            code: "x > 0 ___ x < 100",
            options: ["&&", "||", "!", "="],
            answer: "&&",
            explanation: "&& requires both conditions to be true."
        },

        {
            type: "fill",
            title: "Either Condition",
            question: "Fill in the logical operator.",
            code: "isAdmin ___ isManager",
            answer: "||",
            explanation: "|| returns true when at least one condition is true."
        }

    ],


    math: [

        {
            type: "mc",
            title: "Maximum Value",
            question: "Which method returns the larger of two numbers?",
            code: "Math.____(10, 20)",
            options: ["Max", "Min", "Round", "Abs"],
            answer: "Max",
            explanation: "Math.Max returns the larger value."
        },

        {
            type: "fill",
            title: "Minimum Value",
            question: "Fill in the method.",
            code: "Math.___(10, 20);",
            answer: "Min",
            explanation: "Math.Min returns the smaller value."
        },

        {
            type: "mc",
            title: "Square Root",
            question: "Which method returns a square root?",
            code: "Math.____(25);",
            options: ["Sqrt", "Root", "Square", "Pow"],
            answer: "Sqrt",
            explanation: "Math.Sqrt returns the square root."
        },

        {
            type: "fill",
            title: "Power",
            question: "Fill in the method used for powers.",
            code: "Math.___(2, 3);",
            answer: "Pow",
            explanation: "Math.Pow calculates a power."
        },

        {
            type: "mc",
            title: "Absolute Value",
            question: "Which method returns the absolute value?",
            code: "Math.____(-10);",
            options: ["Abs", "Absolute", "Positive", "Sign"],
            answer: "Abs",
            explanation: "Math.Abs returns the absolute value."
        },

        {
            type: "mc",
            title: "Rounding",
            question: "Which method rounds a number?",
            code: "Math.____(4.6);",
            options: ["Round", "Floor", "Ceiling", "Trim"],
            answer: "Round",
            explanation: "Math.Round rounds a numeric value."
        },

        {
            type: "fill",
            title: "Ceiling",
            question: "Fill in the method that rounds upward.",
            code: "Math.___(4.2);",
            answer: "Ceiling",
            explanation: "Math.Ceiling rounds a number toward positive infinity."
        }

    ],


    strings: [

        {
            type: "mc",
            title: "String Declaration",
            question: "Which type is used to store text?",
            code: "_____ message = \"Hello\";",
            options: ["string", "char", "text", "StringValue"],
            answer: "string",
            explanation: "string stores text."
        },

        {
            type: "fill",
            title: "String Value",
            question: "Complete the declaration.",
            code: "string city = ___Cairo___;",
            answer: "\"Cairo\"",
            explanation: "String values are surrounded by double quotes."
        },

        {
            type: "mc",
            title: "String Length",
            question: "Which property returns the number of characters?",
            code: "name.____",
            options: ["Length", "Count", "Size", "Characters"],
            answer: "Length",
            explanation: "The Length property returns the number of characters."
        },

        {
            type: "mc",
            title: "Uppercase",
            question: "Which method converts a string to uppercase?",
            code: "name.________()",
            options: ["ToUpper", "Upper", "UpperCase", "MakeUpper"],
            answer: "ToUpper",
            explanation: "ToUpper converts the string to uppercase."
        },

        {
            type: "fill",
            title: "Lowercase",
            question: "Fill in the method.",
            code: "name.___()",
            answer: "ToLower",
            explanation: "ToLower converts a string to lowercase."
        },

        {
            type: "mc",
            title: "Contains",
            question: "Which method checks whether a string contains text?",
            code: "name.____(\"Dev\");",
            options: ["Contains", "Has", "IncludesText", "Find"],
            answer: "Contains",
            explanation: "Contains checks whether the specified text exists."
        },

        {
            type: "fill",
            title: "Trim",
            question: "Which method removes leading and trailing whitespace?",
            code: "name.___()",
            answer: "Trim",
            explanation: "Trim removes whitespace from both ends."
        }

    ],


    "string-concatenation": [

        {
            type: "mc",
            title: "Plus Operator",
            question: "Which operator can concatenate strings?",
            code: "string fullName = firstName ___ lastName;",
            options: ["+", "-", "*", "/"],
            answer: "+",
            explanation: "+ can concatenate strings."
        },

        {
            type: "fill",
            title: "Concatenate Two Strings",
            question: "Complete the expression.",
            code: "string result = \"Hello\" ___ \" World\";",
            answer: "+",
            explanation: "The + operator joins strings."
        },

        {
            type: "mc",
            title: "Three Strings",
            question: "How can three strings be joined using concatenation?",
            code: "string result = first ___ middle ___ last;",
            options: ["+ , +", "- , -", "* , *", "/ , /"],
            answer: "+ , +",
            explanation: "The + operator can concatenate multiple strings."
        },

        {
            type: "fill",
            title: "Greeting",
            question: "Fill in the concatenation operator.",
            code: "Console.WriteLine(\"Hello \" ___ name);",
            answer: "+",
            explanation: "The + operator joins the greeting and name."
        },

        {
            type: "mc",
            title: "Text and Number",
            question: "Which operator can combine text with a number in a string expression?",
            code: "\"Age: \" ___ age",
            options: ["+", "-", "*", "%"],
            answer: "+",
            explanation: "The + operator can concatenate strings and values."
        },

        {
            type: "fill",
            title: "Full Name",
            question: "Complete the expression.",
            code: "string full = firstName ___ \" \" ___ lastName;",
            answer: "+",
            explanation: "String concatenation uses +."
        }

    ],


    "string-interpolation": [

        {
            type: "mc",
            title: "Interpolation Symbol",
            question: "Which prefix enables string interpolation?",
            code: "___\"Hello {name}\"",
            options: ["$", "@", "#", "&"],
            answer: "$",
            explanation: "$ enables string interpolation."
        },

        {
            type: "fill",
            title: "Interpolated String",
            question: "Fill in the missing symbol.",
            code: "string text = ___\"Age: {age}\";",
            answer: "$",
            explanation: "The $ prefix enables interpolation."
        },

        {
            type: "mc",
            title: "Variable Placeholder",
            question: "Where is a variable placed inside an interpolated string?",
            code: "$\"Hello {_____}\"",
            options: ["name", "$name", "%name", "[name]"],
            answer: "name",
            explanation: "Interpolated expressions are placed inside curly braces."
        },

        {
            type: "fill",
            title: "Interpolation Prefix",
            question: "Complete the statement.",
            code: "Console.WriteLine(___\"Score: {score}\");",
            answer: "$",
            explanation: "$ starts an interpolated string."
        }

    ],


    "access-strings": [

        {
            type: "mc",
            title: "Indexing",
            question: "What is the index of the first character in a C# string?",
            code: "string word = \"Hello\";",
            options: ["0", "1", "-1", "5"],
            answer: "0",
            explanation: "C# strings use zero-based indexing."
        },

        {
            type: "fill",
            title: "First Character",
            question: "Complete the index.",
            code: "char first = word[___];",
            answer: "0",
            explanation: "Index 0 refers to the first character."
        },

        {
            type: "mc",
            title: "Last Character",
            question: "Which expression accesses the last character?",
            code: "string word = \"Hello\";",
            options: [
                "word[word.Length - 1]",
                "word[word.Length]",
                "word[1]",
                "word[-1]"
            ],
            answer: "word[word.Length - 1]",
            explanation: "The last valid index is Length - 1."
        },

        {
            type: "fill",
            title: "Length Property",
            question: "Fill in the property.",
            code: "int length = word.___;",
            answer: "Length",
            explanation: "Length returns the number of characters."
        },

        {
            type: "mc",
            title: "Character Type",
            question: "What type is returned when accessing one character from a string?",
            code: "char letter = word[0];",
            options: ["char", "string", "int", "bool"],
            answer: "char",
            explanation: "A string index returns a char."
        },

        {
            type: "fill",
            title: "Second Character",
            question: "Which index accesses the second character?",
            code: "char second = word[___];",
            answer: "1",
            explanation: "The second character has index 1."
        }

    ],


    "special-characters": [

        {
            type: "mc",
            title: "New Line",
            question: "Which escape sequence creates a new line?",
            code: "Console.WriteLine(\"Hello___World\");",
            options: ["\\n", "\\t", "\\\"", "\\\\"],
            answer: "\\n",
            explanation: "\\n represents a new line."
        },

        {
            type: "fill",
            title: "Tab",
            question: "Fill in the escape sequence for a tab.",
            code: "\"Hello___World\"",
            answer: "\\t",
            explanation: "\\t represents a tab."
        },

        {
            type: "mc",
            title: "Double Quote",
            question: "Which escape sequence represents a double quote inside a string?",
            code: "\"He said ___Hello___\"",
            options: ["\\\"", "\\n", "\\t", "\\\\"],
            answer: "\\\"",
            explanation: "\\\" allows a double quote inside a string."
        },

        {
            type: "fill",
            title: "Backslash",
            question: "Fill in the escape sequence for a backslash.",
            code: "\"C:___Users\"",
            answer: "\\\\",
            explanation: "\\\\ represents a literal backslash."
        },

        {
            type: "mc",
            title: "Carriage Return",
            question: "Which escape sequence represents a carriage return?",
            code: "\"Hello___World\"",
            options: ["\\r", "\\n", "\\t", "\\0"],
            answer: "\\r",
            explanation: "\\r represents a carriage return."
        }

    ],


    "booleans": [

        {
            type: "mc",
            title: "Boolean Type",
            question: "Which type stores true or false?",
            code: "_____ isActive = true;",
            options: ["bool", "boolean", "int", "bit"],
            answer: "bool",
            explanation: "C# uses bool."
        },

        {
            type: "fill",
            title: "True Value",
            question: "Complete the boolean value.",
            code: "bool isLoggedIn = ___;",
            answer: "true",
            explanation: "true is a boolean literal."
        },

        {
            type: "mc",
            title: "False Value",
            question: "Which is the correct false value?",
            code: "bool result = ___;",
            options: ["false", "False()", "0", "\"false\""],
            answer: "false",
            explanation: "false is the C# boolean literal."
        },

        {
            type: "fill",
            title: "Boolean Comparison",
            question: "Complete the comparison.",
            code: "bool result = 10 ___ 5;",
            answer: ">",
            explanation: "10 is greater than 5."
        },

        {
            type: "mc",
            title: "Boolean Result",
            question: "What type does a comparison expression return?",
            code: "10 > 5",
            options: ["bool", "int", "string", "double"],
            answer: "bool",
            explanation: "Comparisons return true or false."
        },

        {
            type: "mc",
            title: "Boolean Variable",
            question: "Which declaration is valid?",
            code: "________________",
            options: [
                "bool ready = true;",
                "bool ready = \"true\";",
                "bool ready = 1;",
                "boolean ready = true;"
            ],
            answer: "bool ready = true;",
            explanation: "bool is the correct C# type."
        },

        {
            type: "fill",
            title: "Not Operator",
            question: "Fill in the operator.",
            code: "bool result = ___isReady;",
            answer: "!",
            explanation: "! reverses a boolean value."
        },

        {
            type: "mc",
            title: "True Comparison",
            question: "Which expression is true?",
            code: "________________",
            options: ["10 > 5", "5 > 10", "3 == 4", "2 != 2"],
            answer: "10 > 5",
            explanation: "10 is greater than 5."
        }

    ],


    "if": [

        {
            type: "fill",
            title: "If Keyword",
            question: "Fill in the keyword.",
            code: "___ (age >= 18)\n{\n    Console.WriteLine(\"Adult\");\n}",
            answer: "if",
            explanation: "if executes code when a condition is true."
        },

        {
            type: "mc",
            title: "Condition",
            question: "What does an if statement evaluate?",
            code: "if (age >= 18)",
            options: ["A condition", "A class", "A method", "A namespace"],
            answer: "A condition",
            explanation: "if evaluates a boolean condition."
        },

        {
            type: "mc",
            title: "Greater Than",
            question: "Which condition checks whether x is greater than 10?",
            code: "if (________)",
            options: ["x > 10", "x < 10", "x = 10", "x != 10"],
            answer: "x > 10",
            explanation: "> checks greater than."
        },

        {
            type: "fill",
            title: "Equal Condition",
            question: "Complete the condition.",
            code: "if (age ___ 18)",
            answer: ">=",
            explanation: ">= includes 18."
        },

        {
            type: "mc",
            title: "Boolean Condition",
            question: "Which expression can be used directly as an if condition?",
            code: "if (________)",
            options: ["isReady", "25", "\"Hello\"", "5.5"],
            answer: "isReady",
            explanation: "isReady can be a bool variable."
        },

        {
            type: "fill",
            title: "If Block",
            question: "Complete the if syntax.",
            code: "___ (score >= 50)\n{\n    Console.WriteLine(\"Pass\");\n}",
            answer: "if",
            explanation: "The if keyword begins the conditional statement."
        }

    ],


    "else": [

        {
            type: "mc",
            title: "Else Keyword",
            question: "Which keyword runs when the if condition is false?",
            code: "if (age >= 18) { } ___ { }",
            options: ["else", "otherwise", "then", "default"],
            answer: "else",
            explanation: "else handles the false branch."
        },

        {
            type: "fill",
            title: "Else Block",
            question: "Complete the code.",
            code: "if (score >= 50) { }\n___ { }",
            answer: "else",
            explanation: "else runs when the if condition is false."
        },

        {
            type: "mc",
            title: "Alternative Branch",
            question: "Which keyword provides an alternative branch?",
            code: "if (x > 0) { } ______ { }",
            options: ["else", "switch", "case", "while"],
            answer: "else",
            explanation: "else provides the alternative branch."
        }

    ],


    "else-if": [

        {
            type: "fill",
            title: "Else If",
            question: "Fill in the two keywords.",
            code: "if (score >= 90) { }\n___ ___ (score >= 80) { }",
            answer: "else if",
            explanation: "else if tests another condition."
        },

        {
            type: "mc",
            title: "Multiple Conditions",
            question: "Which structure is useful for checking several conditions in order?",
            code: "if (...) { }\n________ (...) { }\nelse { }",
            options: ["else if", "while", "for", "case"],
            answer: "else if",
            explanation: "else if allows additional conditions."
        },

        {
            type: "fill",
            title: "Grade Check",
            question: "Complete the condition branch.",
            code: "if (grade == 'A') { }\n___ ___ (grade == 'B') { }",
            answer: "else if",
            explanation: "else if adds another condition."
        }

    ],


    "shorthand-if-else": [

        {
            type: "mc",
            title: "Ternary Operator",
            question: "Which operator is used for the shorthand if...else expression?",
            code: "string result = age >= 18 ___ \"Adult\" : \"Minor\";",
            options: ["?", ":", "??", "=>"],
            answer: "?",
            explanation: "The ? starts the true expression in a ternary operator."
        },

        {
            type: "fill",
            title: "Ternary Separator",
            question: "Fill in the separator between the true and false expressions.",
            code: "age >= 18 ? \"Adult\" ___ \"Minor\"",
            answer: ":",
            explanation: "The colon separates the true and false expressions."
        },

        {
            type: "mc",
            title: "Ternary Result",
            question: "What does the following return?",
            code: "string result = 10 > 5 ? \"Yes\" : \"No\";",
            options: ["Yes", "No", "10", "true"],
            answer: "Yes",
            explanation: "10 > 5 is true, so the first expression is returned."
        },

        {
            type: "fill",
            title: "Short If",
            question: "Complete the shorthand expression.",
            code: "int max = a > b ___ a : b;",
            answer: "?",
            explanation: "The ternary operator begins with ?."
        }

    ],


    switch: [

        {
            type: "mc",
            title: "Switch Keyword",
            question: "Which keyword begins a switch statement?",
            code: "___ (day)\n{\n}",
            options: ["switch", "case", "choose", "select"],
            answer: "switch",
            explanation: "switch begins a switch statement."
        },

        {
            type: "fill",
            title: "Case Keyword",
            question: "Fill in the keyword used for an individual switch option.",
            code: "switch (day)\n{\n    ___ 1:\n}",
            answer: "case",
            explanation: "case defines a matching switch value."
        },

        {
            type: "mc",
            title: "Default Case",
            question: "Which keyword handles unmatched switch cases?",
            code: "switch (x)\n{\n    case 1:\n        break;\n    ______:\n        break;\n}",
            options: ["default", "else", "otherwise", "fallback"],
            answer: "default",
            explanation: "default runs when no case matches."
        },

        {
            type: "fill",
            title: "Break",
            question: "Which keyword normally exits a switch case?",
            code: "case 1:\n    Console.WriteLine(\"One\");\n    ___;",
            answer: "break",
            explanation: "break exits the switch statement."
        },

        {
            type: "mc",
            title: "Switch Expression",
            question: "What value does switch compare against its cases?",
            code: "switch (day)",
            options: ["day", "default", "break", "case"],
            answer: "day",
            explanation: "The switch expression is compared with case labels."
        },

        {
            type: "fill",
            title: "Default Branch",
            question: "Complete the final switch branch.",
            code: "___:\n    Console.WriteLine(\"Unknown\");",
            answer: "default",
            explanation: "default handles unmatched cases."
        }

    ],


    "while-loop": [

        {
            type: "fill",
            title: "While Keyword",
            question: "Fill in the loop keyword.",
            code: "___ (i < 5)\n{\n    i++;\n}",
            answer: "while",
            explanation: "while repeats code while a condition is true."
        },

        {
            type: "mc",
            title: "Loop Condition",
            question: "When does a while loop stop?",
            code: "while (i < 5)",
            options: ["When the condition becomes false", "Immediately", "After one iteration", "Never"],
            answer: "When the condition becomes false",
            explanation: "The loop continues while the condition is true."
        },

        {
            type: "fill",
            title: "Increment Counter",
            question: "Complete the loop.",
            code: "int i = 0;\nwhile (i < 3)\n{\n    ___;\n}",
            answer: "i++",
            explanation: "Incrementing i allows the loop to eventually finish."
        },

        {
            type: "mc",
            title: "Initial Value",
            question: "Which value starts the counter?",
            code: "int i = 0;\nwhile (i < 5)",
            options: ["0", "5", "1", "10"],
            answer: "0",
            explanation: "The counter is initialized to 0."
        },

        {
            type: "fill",
            title: "Loop Condition",
            question: "Fill in the condition.",
            code: "int i = 0;\nwhile (i ___ 10)\n{\n    i++;\n}",
            answer: "<",
            explanation: "The loop runs while i is less than 10."
        },

        {
            type: "mc",
            title: "Infinite Loop",
            question: "Which loop could become infinite if its condition never changes?",
            code: "while (true)\n{\n}",
            options: ["while loop", "for loop only", "if statement", "switch"],
            answer: "while loop",
            explanation: "while(true) continues indefinitely unless interrupted."
        },

        {
            type: "fill",
            title: "While Structure",
            question: "Complete the loop keyword.",
            code: "___ (number > 0)\n{\n    number--;\n}",
            answer: "while",
            explanation: "while checks the condition before each iteration."
        }

    ],


    "for-loop": [

        {
            type: "mc",
            title: "For Keyword",
            question: "Which keyword creates a for loop?",
            code: "___ (int i = 0; i < 5; i++)",
            options: ["for", "loop", "repeat", "while"],
            answer: "for",
            explanation: "for creates a counted loop."
        },

        {
            type: "fill",
            title: "Loop Increment",
            question: "Complete the increment expression.",
            code: "for (int i = 0; i < 5; ___)",
            answer: "i++",
            explanation: "i++ increments the counter after each iteration."
        },

        {
            type: "mc",
            title: "Loop Start",
            question: "Which value is assigned initially?",
            code: "for (int i = 0; i < 5; i++)",
            options: ["0", "1", "5", "-1"],
            answer: "0",
            explanation: "The counter starts at 0."
        },

        {
            type: "fill",
            title: "Loop Condition",
            question: "Complete the condition.",
            code: "for (int i = 0; i ___ 10; i++)",
            answer: "<",
            explanation: "The loop continues while i is less than 10."
        },

        {
            type: "mc",
            title: "Counter Variable",
            question: "Which variable controls this loop?",
            code: "for (int i = 0; i < 5; i++)",
            options: ["i", "for", "5", "int"],
            answer: "i",
            explanation: "i is the loop counter."
        },

        {
            type: "fill",
            title: "For Loop",
            question: "Complete the statement.",
            code: "___ (int i = 0; i < 3; i++)\n{\n    Console.WriteLine(i);\n}",
            answer: "for",
            explanation: "for is the correct loop keyword."
        }

    ],


    "break-continue": [

        {
            type: "mc",
            title: "Break",
            question: "Which keyword exits a loop immediately?",
            code: "if (i == 5)\n{\n    ___;\n}",
            options: ["break", "continue", "exit", "stop"],
            answer: "break",
            explanation: "break exits the loop."
        },

        {
            type: "fill",
            title: "Continue",
            question: "Which keyword skips the current iteration?",
            code: "if (i == 5)\n{\n    ___;\n}",
            answer: "continue",
            explanation: "continue skips to the next iteration."
        },

        {
            type: "mc",
            title: "Break Result",
            question: "What happens after break executes?",
            code: "for (...) {\n    break;\n}",
            options: ["The loop ends", "The loop restarts", "The iteration repeats", "Nothing"],
            answer: "The loop ends",
            explanation: "break terminates the loop."
        },

        {
            type: "fill",
            title: "Skip Iteration",
            question: "Complete the keyword.",
            code: "if (i % 2 == 0)\n{\n    ___;\n}",
            answer: "continue",
            explanation: "continue can skip the current iteration."
        },

        {
            type: "mc",
            title: "Loop Control",
            question: "Which statement skips the rest of the current iteration?",
            code: "for (...) {\n    ______;\n}",
            options: ["continue", "break", "return", "throw"],
            answer: "continue",
            explanation: "continue skips to the next iteration."
        },

        {
            type: "mc",
            title: "Loop Exit",
            question: "Which statement exits the nearest loop?",
            code: "while (true)\n{\n    ______;\n}",
            options: ["break", "continue", "skip", "next"],
            answer: "break",
            explanation: "break exits the nearest loop."
        },

        {
            type: "fill",
            title: "Break Statement",
            question: "Complete the statement.",
            code: "if (number < 0)\n{\n    ___;\n}",
            answer: "break",
            explanation: "break can stop the loop."
        },

        {
            type: "mc",
            title: "Continue Statement",
            question: "Which keyword is commonly used to ignore one iteration?",
            code: "if (value == 0)\n{\n    ______;\n}",
            options: ["continue", "break", "stop", "ignore"],
            answer: "continue",
            explanation: "continue skips the current iteration."
        }

    ],


    arrays: [

        {
            type: "mc",
            title: "Array Declaration",
            question: "Which syntax declares an integer array?",
            code: "_____ numbers = { 1, 2, 3 };",
            options: ["int[]", "int", "array<int>", "numbers[]"],
            answer: "int[]",
            explanation: "int[] declares an array of integers."
        },

        {
            type: "fill",
            title: "Array Type",
            question: "Fill in the array type.",
            code: "___[] numbers = { 1, 2, 3 };",
            answer: "int",
            explanation: "The array contains integers."
        },

        {
            type: "mc",
            title: "First Element",
            question: "Which index accesses the first array element?",
            code: "int[] numbers = { 10, 20, 30 };",
            options: ["0", "1", "2", "3"],
            answer: "0",
            explanation: "C# arrays use zero-based indexing."
        },

        {
            type: "fill",
            title: "Array Length",
            question: "Fill in the property that returns the number of elements.",
            code: "int count = numbers.___;",
            answer: "Length",
            explanation: "Length returns the number of elements."
        },

        {
            type: "mc",
            title: "Second Element",
            question: "Which expression accesses 20?",
            code: "int[] numbers = { 10, 20, 30 };",
            options: ["numbers[1]", "numbers[2]", "numbers[0]", "numbers[3]"],
            answer: "numbers[1]",
            explanation: "20 is at index 1."
        },

        {
            type: "fill",
            title: "Array Creation",
            question: "Complete the array declaration.",
            code: "string___ names = { \"Ali\", \"Omar\" };",
            answer: "[]",
            explanation: "[] marks an array type."
        },

        {
            type: "mc",
            title: "Array Type",
            question: "What type is the following?",
            code: "string[] names = { \"Ali\", \"Omar\" };",
            options: ["Array of strings", "Single string", "Array of chars", "Object only"],
            answer: "Array of strings",
            explanation: "string[] represents an array of strings."
        }

    ],


    "array-loops": [

        {
            type: "mc",
            title: "Loop Through Array",
            question: "Which loop is commonly used to iterate through every array element?",
            code: "for (int i = 0; i < numbers.Length; i++)",
            options: ["for", "if", "switch", "try"],
            answer: "for",
            explanation: "A for loop can iterate using indexes."
        },

        {
            type: "fill",
            title: "Array Length",
            question: "Complete the condition.",
            code: "for (int i = 0; i < numbers.___; i++)",
            answer: "Length",
            explanation: "Length gives the number of elements."
        },

        {
            type: "mc",
            title: "Foreach Keyword",
            question: "Which keyword iterates directly over array values?",
            code: "______ (int number in numbers)",
            options: ["foreach", "for", "while", "each"],
            answer: "foreach",
            explanation: "foreach iterates over values directly."
        },

        {
            type: "fill",
            title: "Foreach Variable",
            question: "Complete the foreach statement.",
            code: "foreach (int ___ in numbers)",
            answer: "number",
            explanation: "number represents the current array element."
        },

        {
            type: "mc",
            title: "Array Output",
            question: "Which statement prints each number?",
            code: "foreach (int number in numbers)\n{\n    __________(number);\n}",
            options: [
                "Console.WriteLine",
                "Console.ReadLine",
                "Console.Input",
                "Console.Array"
            ],
            answer: "Console.WriteLine",
            explanation: "WriteLine displays each element."
        }

    ],


    "sort-arrays": [

        {
            type: "mc",
            title: "Sort Method",
            question: "Which method sorts an array?",
            code: "Array.______(numbers);",
            options: ["Sort", "Order", "Arrange", "Organize"],
            answer: "Sort",
            explanation: "Array.Sort sorts an array."
        },

        {
            type: "fill",
            title: "Sort Array",
            question: "Complete the method.",
            code: "Array.___(numbers);",
            answer: "Sort",
            explanation: "Array.Sort sorts the array."
        },

        {
            type: "mc",
            title: "Ascending Order",
            question: "What does Array.Sort normally produce?",
            code: "int[] numbers = { 3, 1, 2 };\nArray.Sort(numbers);",
            options: ["Ascending order", "Descending order", "Random order", "Reverse insertion"],
            answer: "Ascending order",
            explanation: "Array.Sort sorts values in ascending order."
        },

        {
            type: "fill",
            title: "Reverse Array",
            question: "Which method reverses an array?",
            code: "Array.___(numbers);",
            answer: "Reverse",
            explanation: "Array.Reverse reverses the order."
        },

        {
            type: "mc",
            title: "Descending Order",
            question: "Which combination can be used for descending order?",
            code: "Array.Sort(numbers);\nArray.______(numbers);",
            options: ["Reverse", "Flip", "Back", "Desc"],
            answer: "Reverse",
            explanation: "Sorting then reversing gives descending order."
        },

        {
            type: "fill",
            title: "Array Sort",
            question: "Complete the sorting call.",
            code: "Array.___(values);",
            answer: "Sort",
            explanation: "Sort orders the array values."
        }

    ],


    "multidimensional-arrays": [

        {
            type: "mc",
            title: "Two Dimensions",
            question: "Which syntax declares a two-dimensional array?",
            code: "int[__] matrix;",
            options: [",", ":", ";", "[]"],
            answer: ",",
            explanation: "A comma inside the brackets indicates two dimensions."
        },

        {
            type: "fill",
            title: "Matrix Declaration",
            question: "Complete the declaration.",
            code: "int[___] matrix = new int[2, 3];",
            answer: ",",
            explanation: "int[,] is the syntax for a two-dimensional array."
        },

        {
            type: "mc",
            title: "Access Matrix",
            question: "How do you access an element in a two-dimensional array?",
            code: "matrix[___, ___]",
            options: ["row, column", "row", "column", "index only"],
            answer: "row, column",
            explanation: "Two-dimensional arrays use row and column indexes."
        },

        {
            type: "fill",
            title: "Two Indexes",
            question: "Complete the access expression.",
            code: "int value = matrix[___, ___];",
            answer: "0, 1",
            explanation: "A two-dimensional array uses two indexes."
        },

        {
            type: "mc",
            title: "Matrix Rows",
            question: "Which property can return the number of rows?",
            code: "matrix.________(0)",
            options: ["GetLength", "LengthOf", "Rows", "CountRows"],
            answer: "GetLength",
            explanation: "GetLength(0) returns the size of the first dimension."
        },

        {
            type: "fill",
            title: "Matrix Dimension",
            question: "Which method gets the size of a specific dimension?",
            code: "matrix.___(1)",
            answer: "GetLength",
            explanation: "GetLength returns the length of a specified dimension."
        }

    ],


    methods: [

        {
            type: "mc",
            title: "Method Keyword",
            question: "Which keyword declares a method that returns no value?",
            code: "static ___ SayHello()",
            options: ["void", "null", "empty", "none"],
            answer: "void",
            explanation: "void means the method does not return a value."
        },

        {
            type: "fill",
            title: "Method Name",
            question: "Complete the method declaration.",
            code: "static void ___()\n{\n    Console.WriteLine(\"Hello\");\n}",
            answer: "SayHello",
            explanation: "SayHello is the method name."
        },

        {
            type: "mc",
            title: "Calling Method",
            question: "How do you call a method named SayHello?",
            code: "________________;",
            options: ["SayHello();", "call SayHello;", "Run(SayHello);", "method SayHello();"],
            answer: "SayHello();",
            explanation: "A method is called using its name followed by parentheses."
        },

        {
            type: "fill",
            title: "Return Type",
            question: "Fill in the return type.",
            code: "static ___ Add(int a, int b)\n{\n    return a + b;\n}",
            answer: "int",
            explanation: "The method returns an integer."
        },

        {
            type: "mc",
            title: "Return Keyword",
            question: "Which keyword sends a value back from a method?",
            code: "___ a + b;",
            options: ["return", "send", "result", "output"],
            answer: "return",
            explanation: "return sends a value back to the caller."
        },

        {
            type: "fill",
            title: "Method Call",
            question: "Complete the call.",
            code: "int result = Add(___, 20);",
            answer: "10",
            explanation: "10 can be passed as the first argument."
        }

    ],


    "method-parameters": [

        {
            type: "mc",
            title: "Parameter",
            question: "What is a parameter?",
            code: "static void Greet(string name)",
            options: [
                "A value received by a method",
                "A class",
                "A return value only",
                "A namespace"
            ],
            answer: "A value received by a method",
            explanation: "A parameter receives data passed into a method."
        },

        {
            type: "fill",
            title: "String Parameter",
            question: "Complete the parameter type.",
            code: "static void Greet(___ name)",
            answer: "string",
            explanation: "name is a string parameter."
        },

        {
            type: "mc",
            title: "Two Parameters",
            question: "How many parameters are declared here?",
            code: "Add(int a, int b)",
            options: ["2", "1", "3", "0"],
            answer: "2",
            explanation: "a and b are two parameters."
        },

        {
            type: "fill",
            title: "First Parameter",
            question: "Complete the method.",
            code: "static int Add(int ___, int b)",
            answer: "a",
            explanation: "a is the first parameter."
        },

        {
            type: "mc",
            title: "Arguments",
            question: "What are the values passed when calling a method called?",
            code: "Add(10, 20);",
            options: ["Arguments", "Parameters", "Classes", "Properties"],
            answer: "Arguments",
            explanation: "Arguments are values passed to a method."
        },

        {
            type: "fill",
            title: "Method Argument",
            question: "Complete the call.",
            code: "Greet(___);",
            answer: "\"Mohamed\"",
            explanation: "A string argument can be passed to the name parameter."
        },

        {
            type: "mc",
            title: "Parameter Order",
            question: "Which argument is assigned to the first parameter?",
            code: "Add(10, 20)",
            options: ["10", "20", "Both", "Neither"],
            answer: "10",
            explanation: "Arguments are matched by position by default."
        },

        {
            type: "fill",
            title: "Integer Parameter",
            question: "Complete the declaration.",
            code: "void PrintAge(___ age)",
            answer: "int",
            explanation: "age is an integer parameter."
        }

    ],


    "default-parameter": [

        {
            type: "mc",
            title: "Default Value",
            question: "What does a default parameter provide?",
            code: "void Greet(string name = \"Guest\")",
            options: [
                "A value used when no argument is supplied",
                "A constant class",
                "A return value",
                "A required argument"
            ],
            answer: "A value used when no argument is supplied",
            explanation: "The default value is used when the argument is omitted."
        },

        {
            type: "fill",
            title: "Default Parameter",
            question: "Complete the declaration.",
            code: "void Greet(string name ___ \"Guest\")",
            answer: "=",
            explanation: "= assigns the default parameter value."
        },

        {
            type: "mc",
            title: "Optional Argument",
            question: "Can a caller omit a parameter that has a default value?",
            code: "Greet();",
            options: ["Yes", "No", "Only with int", "Only in Main"],
            answer: "Yes",
            explanation: "A default parameter can be omitted."
        }

    ],


    "return-values": [

        {
            type: "mc",
            title: "Return Keyword",
            question: "Which keyword returns a value from a method?",
            code: "___ a + b;",
            options: ["return", "value", "send", "yield"],
            answer: "return",
            explanation: "return sends a value back."
        },

        {
            type: "fill",
            title: "Integer Return",
            question: "Complete the return type.",
            code: "static ___ Add(int a, int b)",
            answer: "int",
            explanation: "The method returns an integer."
        },

        {
            type: "mc",
            title: "Returned Value",
            question: "What value is returned?",
            code: "return 10 + 5;",
            options: ["15", "10", "5", "105"],
            answer: "15",
            explanation: "10 + 5 equals 15."
        },

        {
            type: "fill",
            title: "Return Statement",
            question: "Complete the method.",
            code: "int GetNumber()\n{\n    ___ 10;\n}",
            answer: "return",
            explanation: "return sends 10 to the caller."
        },

        {
            type: "mc",
            title: "Void Method",
            question: "Can a void method return a value?",
            code: "void SayHello()",
            options: ["No", "Yes", "Only int", "Only string"],
            answer: "No",
            explanation: "void methods do not return a value."
        }

    ],


    "method-overloading": [

        {
            type: "mc",
            title: "Method Overloading",
            question: "What does method overloading mean?",
            code: "Add(int a, int b)\nAdd(double a, double b)",
            options: [
                "Same method name with different parameter lists",
                "Same parameters with different variable names",
                "Two classes with the same name",
                "One method calling another"
            ],
            answer: "Same method name with different parameter lists",
            explanation: "Overloaded methods share a name but differ in their parameter list."
        },

        {
            type: "fill",
            title: "Overloaded Method",
            question: "Complete the second method parameter type.",
            code: "Add(int a, int b)\nAdd(double a, ___ b)",
            answer: "double",
            explanation: "The second overload uses double parameters."
        },

        {
            type: "mc",
            title: "Parameter Difference",
            question: "What must differ between overloaded methods?",
            code: "Print(int x)\nPrint(string x)",
            options: ["Parameter list", "Method name", "Class name", "Namespace"],
            answer: "Parameter list",
            explanation: "Overloaded methods must have different parameter signatures."
        },

        {
            type: "fill",
            title: "Same Name",
            question: "Overloaded methods have the same method ___.",
            code: "Print(int x)\nPrint(string x)",
            answer: "name",
            explanation: "The method name stays the same."
        }

    ],


    "oop": [

        {
            type: "mc",
            title: "OOP Meaning",
            question: "What does OOP stand for?",
            code: "OOP",
            options: [
                "Object-Oriented Programming",
                "Object Output Program",
                "Open Object Process",
                "Ordered Object Programming"
            ],
            answer: "Object-Oriented Programming",
            explanation: "OOP stands for Object-Oriented Programming."
        },

        {
            type: "mc",
            title: "Class",
            question: "What is a class?",
            code: "class Car { }",
            options: [
                "A blueprint for objects",
                "Only a variable",
                "A loop",
                "A namespace"
            ],
            answer: "A blueprint for objects",
            explanation: "A class defines the structure and behavior of objects."
        },

        {
            type: "fill",
            title: "Object Keyword",
            question: "Complete the object creation.",
            code: "Car car = ___ Car();",
            answer: "new",
            explanation: "new creates an object."
        },

        {
            type: "mc",
            title: "Encapsulation",
            question: "Which OOP concept bundles data and behavior inside a class?",
            code: "class BankAccount { ... }",
            options: ["Encapsulation", "Looping", "Casting", "Iteration"],
            answer: "Encapsulation",
            explanation: "Encapsulation groups data and methods together."
        },

        {
            type: "mc",
            title: "Inheritance",
            question: "Which OOP concept allows a class to derive from another class?",
            code: "class Dog : Animal",
            options: ["Inheritance", "Casting", "Iteration", "Parsing"],
            answer: "Inheritance",
            explanation: "Inheritance allows one class to derive from another."
        }

    ],


    "classes-objects": [

        {
            type: "fill",
            title: "Class Declaration",
            question: "Complete the class declaration.",
            code: "___ Car\n{\n}",
            answer: "class",
            explanation: "class declares a class."
        },

        {
            type: "mc",
            title: "Create Object",
            question: "Which statement creates an object?",
            code: "Car car = ______ Car();",
            options: ["new", "create", "object", "make"],
            answer: "new",
            explanation: "new creates an instance."
        },

        {
            type: "fill",
            title: "Object Variable",
            question: "Complete the object declaration.",
            code: "Car ___ = new Car();",
            answer: "car",
            explanation: "car references the created object."
        },

        {
            type: "mc",
            title: "Class Blueprint",
            question: "A class is best described as what?",
            code: "class Student { }",
            options: ["Blueprint", "Loop", "Variable", "Condition"],
            answer: "Blueprint",
            explanation: "A class is a blueprint for objects."
        },

        {
            type: "fill",
            title: "Access Member",
            question: "Which operator accesses an object's member?",
            code: "car___Brand",
            answer: ".",
            explanation: "The dot operator accesses members."
        },

        {
            type: "mc",
            title: "Instance",
            question: "What is an object created from a class called?",
            code: "Car car = new Car();",
            options: ["Instance", "Namespace", "Method", "Property only"],
            answer: "Instance",
            explanation: "An object is an instance of a class."
        },

        {
            type: "fill",
            title: "New Object",
            question: "Complete the keyword.",
            code: "Student s = ___ Student();",
            answer: "new",
            explanation: "new creates the object."
        },

        {
            type: "mc",
            title: "Object Member",
            question: "Which syntax accesses a member?",
            code: "student.________",
            options: ["Name", "->Name", "::Name", "#Name"],
            answer: "Name",
            explanation: "The dot operator accesses a member."
        }

    ],


    "multiple-objects": [

        {
            type: "mc",
            title: "Two Objects",
            question: "Can one class create multiple objects?",
            code: "Car car1 = new Car();\nCar car2 = new Car();",
            options: ["Yes", "No", "Only structs", "Only static classes"],
            answer: "Yes",
            explanation: "A class can be instantiated many times."
        },

        {
            type: "fill",
            title: "First Object",
            question: "Complete the variable name.",
            code: "Car ___ = new Car();",
            answer: "car1",
            explanation: "car1 is the first object reference."
        },

        {
            type: "mc",
            title: "Independent Objects",
            question: "Can different objects have different property values?",
            code: "car1.Color = \"Red\";\ncar2.Color = \"Blue\";",
            options: ["Yes", "No", "Only strings", "Only integers"],
            answer: "Yes",
            explanation: "Each object has its own instance state."
        },

        {
            type: "fill",
            title: "Second Object",
            question: "Complete the declaration.",
            code: "Car ___ = new Car();",
            answer: "car2",
            explanation: "car2 references another Car instance."
        },

        {
            type: "mc",
            title: "Same Class",
            question: "Which class can create both car1 and car2?",
            code: "Car car1 = new Car();\nCar car2 = new Car();",
            options: ["Car", "Object2", "Main", "new"],
            answer: "Car",
            explanation: "Both objects are instances of Car."
        }

    ],


    "class-members": [

        {
            type: "mc",
            title: "Class Member",
            question: "Which can be a member of a C# class?",
            code: "class Person\n{\n    ______\n}",
            options: ["Fields and methods", "Only loops", "Only conditions", "Only comments"],
            answer: "Fields and methods",
            explanation: "Classes can contain fields, properties, methods, constructors, and more."
        },

        {
            type: "fill",
            title: "Field",
            question: "Complete the field declaration.",
            code: "class Person\n{\n    ___ string name;\n}",
            answer: "private",
            explanation: "private is commonly used for fields."
        },

        {
            type: "mc",
            title: "Method Member",
            question: "Which is a method member?",
            code: "class Person\n{\n    ______\n}",
            options: ["void Walk() { }", "int age;", "string name;", "const int X = 1;"],
            answer: "void Walk() { }",
            explanation: "Walk is a method."
        },

        {
            type: "fill",
            title: "Property Member",
            question: "Complete the property.",
            code: "public string Name { ___; set; }",
            answer: "get",
            explanation: "Properties commonly use get and set accessors."
        },

        {
            type: "mc",
            title: "Field Type",
            question: "What type is the field?",
            code: "private int age;",
            options: ["int", "private", "age", "field"],
            answer: "int",
            explanation: "age is an int field."
        },

        {
            type: "fill",
            title: "Method Return Type",
            question: "Complete the return type.",
            code: "public ___ GetAge()\n{\n    return age;\n}",
            answer: "int",
            explanation: "GetAge returns an integer."
        },

        {
            type: "mc",
            title: "Member Access",
            question: "Which operator accesses an object member?",
            code: "person.___",
            options: [".", "::", "->", "#"],
            answer: ".",
            explanation: "The dot operator accesses members."
        }

    ],


    "constructors": [

        {
            type: "mc",
            title: "Constructor Name",
            question: "What must a constructor have as its name?",
            code: "class Car\n{\n    ______() { }\n}",
            options: ["Car", "Constructor", "Create", "New"],
            answer: "Car",
            explanation: "A constructor has the same name as its class."
        },

        {
            type: "fill",
            title: "Constructor Keyword",
            question: "Does a constructor have a return type?",
            code: "public Car() { }",
            answer: "no",
            explanation: "Constructors do not have a return type."
        },

        {
            type: "mc",
            title: "Constructor Call",
            question: "When is a constructor automatically called?",
            code: "Car car = new Car();",
            options: ["When the object is created", "When the class is compiled", "When the program closes", "Never"],
            answer: "When the object is created",
            explanation: "The constructor runs during object creation."
        },

        {
            type: "fill",
            title: "Constructor Name",
            question: "Complete the constructor.",
            code: "class Student\n{\n    public ___() { }\n}",
            answer: "Student",
            explanation: "The constructor name matches the class."
        },

        {
            type: "mc",
            title: "Constructor Parameters",
            question: "Can constructors have parameters?",
            code: "public Car(string brand) { }",
            options: ["Yes", "No", "Only one", "Only int"],
            answer: "Yes",
            explanation: "Constructors can accept parameters."
        },

        {
            type: "fill",
            title: "Create Object",
            question: "Complete object creation.",
            code: "Car car = ___ Car();",
            answer: "new",
            explanation: "new creates the object and invokes its constructor."
        },

        {
            type: "mc",
            title: "Default Constructor",
            question: "What is a parameterless constructor called?",
            code: "public Car() { }",
            options: ["Parameterless constructor", "Static constructor only", "Method", "Property"],
            answer: "Parameterless constructor",
            explanation: "A constructor without parameters is parameterless."
        }

    ],


    "access-modifiers": [

        {
            type: "mc",
            title: "Public",
            question: "Which modifier allows broad access?",
            code: "_____ class Person { }",
            options: ["public", "private", "protected", "internalOnly"],
            answer: "public",
            explanation: "public members are accessible from outside the class subject to normal accessibility rules."
        },

        {
            type: "fill",
            title: "Private",
            question: "Fill in the most restrictive common member modifier.",
            code: "___ int age;",
            answer: "private",
            explanation: "private restricts access to the containing type."
        },

        {
            type: "mc",
            title: "Protected",
            question: "Which modifier allows access in the class and derived classes?",
            code: "_____ int age;",
            options: ["protected", "public", "private", "internalOnly"],
            answer: "protected",
            explanation: "protected members are accessible in the containing type and derived types."
        },

        {
            type: "fill",
            title: "Internal",
            question: "Which modifier limits access to the current assembly?",
            code: "___ class Helper { }",
            answer: "internal",
            explanation: "internal restricts access to the current assembly."
        },

        {
            type: "mc",
            title: "Private Field",
            question: "Which declaration is private?",
            code: "________________",
            options: [
                "private int age;",
                "public int age;",
                "protected int age;",
                "internal int age;"
            ],
            answer: "private int age;",
            explanation: "private limits access to the containing type."
        },

        {
            type: "fill",
            title: "Public Method",
            question: "Complete the method modifier.",
            code: "___ void Start() { }",
            answer: "public",
            explanation: "public allows broader access to the method."
        }

    ],


    properties: [

        {
            type: "mc",
            title: "Property Syntax",
            question: "Which syntax defines a typical auto-property?",
            code: "public string Name { ______ }",
            options: ["get; set;", "read write;", "value;", "access;"],
            answer: "get; set;",
            explanation: "get and set define property accessors."
        },

        {
            type: "fill",
            title: "Getter",
            question: "Fill in the getter accessor.",
            code: "public int Age { ___; set; }",
            answer: "get",
            explanation: "get reads the property value."
        },

        {
            type: "mc",
            title: "Setter",
            question: "Which accessor assigns a property value?",
            code: "public int Age { get; ___; }",
            options: ["set", "put", "assign", "write"],
            answer: "set",
            explanation: "set assigns a property value."
        },

        {
            type: "fill",
            title: "Property Type",
            question: "Complete the type.",
            code: "public ___ Name { get; set; }",
            answer: "string",
            explanation: "Name is a string property."
        },

        {
            type: "mc",
            title: "Read-Only Property",
            question: "Which property only provides a getter?",
            code: "public int Age { ______ }",
            options: ["get;", "set;", "write;", "assign;"],
            answer: "get;",
            explanation: "A getter-only property can be read but not set through that property."
        },

        {
            type: "fill",
            title: "Property Access",
            question: "Complete the member access.",
            code: "person.___ = \"Ali\";",
            answer: "Name",
            explanation: "Name is the property being assigned."
        }

    ],


    inheritance: [

        {
            type: "mc",
            title: "Inheritance Syntax",
            question: "Which syntax shows inheritance?",
            code: "class Dog ___ Animal",
            options: [":", "extends", "inherits", "->"],
            answer: ":",
            explanation: "C# uses : to specify a base class."
        },

        {
            type: "fill",
            title: "Derived Class",
            question: "Complete the declaration.",
            code: "class Dog ___ Animal",
            answer: ":",
            explanation: "The colon introduces the base class."
        },

        {
            type: "mc",
            title: "Base Class",
            question: "In class Dog : Animal, what is Animal?",
            code: "class Dog : Animal",
            options: ["Base class", "Derived class", "Method", "Interface only"],
            answer: "Base class",
            explanation: "Animal is the base class."
        },

        {
            type: "fill",
            title: "Derived Class",
            question: "What is Dog called?",
            code: "class Dog : Animal",
            answer: "derived class",
            explanation: "Dog derives from Animal."
        },

        {
            type: "mc",
            title: "Inherited Members",
            question: "What can a derived class receive from a base class?",
            code: "class Dog : Animal",
            options: ["Accessible members", "Only comments", "Only constructors", "Nothing"],
            answer: "Accessible members",
            explanation: "Derived classes can use accessible inherited members."
        },

        {
            type: "fill",
            title: "Inheritance Keyword",
            question: "Complete the class declaration.",
            code: "class Car ___ Vehicle",
            answer: ":",
            explanation: "C# uses : for inheritance."
        },

        {
            type: "mc",
            title: "Inheritance Purpose",
            question: "Why is inheritance useful?",
            code: "class Dog : Animal",
            options: [
                "Reuse and extend behavior",
                "Only print text",
                "Create loops",
                "Convert strings"
            ],
            answer: "Reuse and extend behavior",
            explanation: "Inheritance supports reuse and specialization."
        }

    ],


    polymorphism: [

        {
            type: "mc",
            title: "Polymorphism",
            question: "What does polymorphism allow?",
            code: "Animal animal = new Dog();",
            options: [
                "Different implementations through a common type",
                "Only one class",
                "Only one method",
                "No inheritance"
            ],
            answer: "Different implementations through a common type",
            explanation: "Polymorphism allows different derived types to be treated through a common abstraction."
        },

        {
            type: "fill",
            title: "Virtual Method",
            question: "Which keyword allows a base method to be overridden?",
            code: "public ___ void Speak() { }",
            answer: "virtual",
            explanation: "virtual allows derived classes to override a method."
        },

        {
            type: "mc",
            title: "Override Keyword",
            question: "Which keyword replaces a virtual implementation in a derived class?",
            code: "public ___ void Speak() { }",
            options: ["override", "virtual", "replace", "newmethod"],
            answer: "override",
            explanation: "override provides a derived implementation."
        },

        {
            type: "fill",
            title: "Base Reference",
            question: "Complete the declaration.",
            code: "Animal animal = ___ Dog();",
            answer: "new",
            explanation: "new creates the Dog object."
        },

        {
            type: "mc",
            title: "Runtime Behavior",
            question: "Which OOP concept commonly enables runtime method selection?",
            code: "Animal animal = new Dog();\nanimal.Speak();",
            options: ["Polymorphism", "Parsing", "Casting only", "Iteration"],
            answer: "Polymorphism",
            explanation: "Polymorphism allows the appropriate overridden implementation to run."
        }

    ],


    abstraction: [

        {
            type: "mc",
            title: "Abstract Class",
            question: "Which keyword declares an abstract class?",
            code: "___ class Animal { }",
            options: ["abstract", "interface", "virtual", "base"],
            answer: "abstract",
            explanation: "abstract declares an abstract class."
        },

        {
            type: "fill",
            title: "Abstract Method",
            question: "Complete the keyword.",
            code: "public ___ void Speak();",
            answer: "abstract",
            explanation: "abstract declares a method without an implementation in the base class."
        },

        {
            type: "mc",
            title: "Instantiate Abstract Class",
            question: "Can you directly create an object of an abstract class?",
            code: "Animal animal = new Animal();",
            options: ["No", "Yes", "Only in Main", "Only with static"],
            answer: "No",
            explanation: "Abstract classes cannot be directly instantiated."
        },

        {
            type: "fill",
            title: "Abstract Keyword",
            question: "Complete the class declaration.",
            code: "___ class Shape { }",
            answer: "abstract",
            explanation: "abstract makes the class non-instantiable."
        },

        {
            type: "mc",
            title: "Abstraction Purpose",
            question: "What is abstraction mainly about?",
            code: "abstract class Shape { }",
            options: [
                "Hiding implementation details and exposing essential behavior",
                "Creating loops",
                "Sorting arrays",
                "Reading files"
            ],
            answer: "Hiding implementation details and exposing essential behavior",
            explanation: "Abstraction focuses on essential behavior."
        },

        {
            type: "fill",
            title: "Derived Implementation",
            question: "A derived class must provide an implementation for an inherited abstract method unless it is also ___.",
            code: "class Dog : Animal",
            answer: "abstract",
            explanation: "A non-abstract derived class must implement inherited abstract members."
        }

    ],


    interface: [

        {
            type: "mc",
            title: "Interface Keyword",
            question: "Which keyword declares an interface?",
            code: "___ IAnimal { }",
            options: ["interface", "abstract", "class", "contract"],
            answer: "interface",
            explanation: "interface declares an interface."
        },

        {
            type: "fill",
            title: "Implement Interface",
            question: "Complete the class declaration.",
            code: "class Dog ___ IAnimal",
            answer: ":",
            explanation: "The colon specifies the interface being implemented."
        },

        {
            type: "mc",
            title: "Interface Purpose",
            question: "What does an interface primarily define?",
            code: "interface IAnimal { void Speak(); }",
            options: [
                "A contract of members",
                "A database",
                "A loop",
                "A variable only"
            ],
            answer: "A contract of members",
            explanation: "An interface defines a contract that implementing types follow."
        },

        {
            type: "fill",
            title: "Interface Name",
            question: "Complete the common naming convention.",
            code: "interface ___Animal { }",
            answer: "I",
            explanation: "Interfaces commonly use an I prefix."
        },

        {
            type: "mc",
            title: "Implementation",
            question: "Which class implements IAnimal?",
            code: "class Dog : ______",
            options: ["IAnimal", "Animal()", "interface Animal", "implements IAnimal"],
            answer: "IAnimal",
            explanation: "The interface name follows the colon."
        },

        {
            type: "fill",
            title: "Interface Method",
            question: "Complete the method declaration.",
            code: "interface IAnimal\n{\n    void ___();\n}",
            answer: "Speak",
            explanation: "Speak is the interface member."
        },

        {
            type: "mc",
            title: "Multiple Interfaces",
            question: "Can a C# class implement multiple interfaces?",
            code: "class Dog : IAnimal, IPet",
            options: ["Yes", "No", "Only two", "Only one"],
            answer: "Yes",
            explanation: "A class can implement multiple interfaces."
        }

    ],


    enums: [

        {
            type: "mc",
            title: "Enum Keyword",
            question: "Which keyword creates an enum?",
            code: "___ Level { Low, Medium, High }",
            options: ["enum", "enumeration", "choice", "option"],
            answer: "enum",
            explanation: "enum declares an enumeration."
        },

        {
            type: "fill",
            title: "Enum Declaration",
            question: "Complete the declaration.",
            code: "___ Days { Monday, Tuesday }",
            answer: "enum",
            explanation: "enum defines named constants."
        },

        {
            type: "mc",
            title: "Enum Value",
            question: "Which is a valid enum member?",
            code: "enum Color { ______ }",
            options: ["Red", "red-value", "1Color", "Color.Red()"],
            answer: "Red",
            explanation: "Red is a valid identifier and enum member."
        },

        {
            type: "fill",
            title: "Enum Variable",
            question: "Complete the variable type.",
            code: "Color color = Color.___;",
            answer: "Red",
            explanation: "Red is an enum member."
        },

        {
            type: "mc",
            title: "Enum Purpose",
            question: "What is an enum useful for?",
            code: "enum Status { Pending, Approved, Rejected }",
            options: [
                "Representing a fixed set of named values",
                "Creating loops",
                "Reading files",
                "Storing unlimited text"
            ],
            answer: "Representing a fixed set of named values",
            explanation: "Enums represent a set of named constants."
        },

        {
            type: "fill",
            title: "Enum Member",
            question: "Complete the enum member.",
            code: "enum Size { Small, ___, Large }",
            answer: "Medium",
            explanation: "Medium completes the logical set."
        },

        {
            type: "mc",
            title: "Enum Type",
            question: "What type is Color in this code?",
            code: "enum Color { Red, Blue }",
            options: ["Enum type", "String", "Class only", "Array"],
            answer: "Enum type",
            explanation: "Color is an enumeration type."
        },

        {
            type: "fill",
            title: "Enum Keyword",
            question: "Fill in the missing keyword.",
            code: "___ Direction { North, South }",
            answer: "enum",
            explanation: "enum declares the enumeration."
        }

    ],


    files: [

        {
            type: "mc",
            title: "File Class",
            question: "Which class provides static methods for file operations?",
            code: "______.WriteAllText(\"data.txt\", \"Hello\");",
            options: ["File", "FileInfoOnly", "Document", "StreamFile"],
            answer: "File",
            explanation: "System.IO.File provides static file operations."
        },

        {
            type: "fill",
            title: "Write File",
            question: "Complete the method.",
            code: "File.___(\"data.txt\", \"Hello\");",
            answer: "WriteAllText",
            explanation: "WriteAllText writes text to a file."
        },

        {
            type: "mc",
            title: "Read File",
            question: "Which method reads all text from a file?",
            code: "string text = File.________(\"data.txt\");",
            options: ["ReadAllText", "ReadText", "GetText", "OpenText"],
            answer: "ReadAllText",
            explanation: "ReadAllText reads all text."
        },

        {
            type: "fill",
            title: "File Exists",
            question: "Which method checks whether a file exists?",
            code: "bool exists = File.___(\"data.txt\");",
            answer: "Exists",
            explanation: "File.Exists checks whether a file exists."
        },

        {
            type: "mc",
            title: "Delete File",
            question: "Which method deletes a file?",
            code: "File.______(\"data.txt\");",
            options: ["Delete", "Remove", "Erase", "Destroy"],
            answer: "Delete",
            explanation: "File.Delete removes a file."
        },

        {
            type: "fill",
            title: "Copy File",
            question: "Complete the method.",
            code: "File.___(source, destination);",
            answer: "Copy",
            explanation: "File.Copy copies a file."
        },

        {
            type: "mc",
            title: "Move File",
            question: "Which method moves a file?",
            code: "File._____(source, destination);",
            options: ["Move", "Transfer", "Shift", "Relocate"],
            answer: "Move",
            explanation: "File.Move moves a file."
        },

        {
            type: "fill",
            title: "File Namespace",
            question: "Which namespace contains the File class?",
            code: "using System.___;",
            answer: "IO",
            explanation: "File is in System.IO."
        }

    ],


    exceptions: [

        {
            type: "mc",
            title: "Exception Handling",
            question: "Which keyword begins an exception-handling block?",
            code: "___\n{\n    int x = 10 / 0;\n}",
            options: ["try", "catch", "throw", "error"],
            answer: "try",
            explanation: "try contains code that may throw an exception."
        },

        {
            type: "fill",
            title: "Catch Block",
            question: "Fill in the keyword that handles an exception.",
            code: "try { }\n___ (Exception ex) { }",
            answer: "catch",
            explanation: "catch handles exceptions thrown by the try block."
        },

        {
            type: "mc",
            title: "Finally",
            question: "Which block normally runs whether an exception occurs or not?",
            code: "try { }\ncatch { }\n______ { }",
            options: ["finally", "always", "last", "default"],
            answer: "finally",
            explanation: "finally is used for cleanup code."
        },

        {
            type: "fill",
            title: "Throw Exception",
            question: "Which keyword explicitly throws an exception?",
            code: "___ new Exception(\"Error\");",
            answer: "throw",
            explanation: "throw explicitly raises an exception."
        },

        {
            type: "mc",
            title: "Exception Type",
            question: "What is the common base type for exceptions?",
            code: "catch (________ ex)",
            options: ["Exception", "Error", "Problem", "Fault"],
            answer: "Exception",
            explanation: "System.Exception is the common base class for exceptions."
        },

        {
            type: "fill",
            title: "Try Catch",
            question: "Complete the exception handling syntax.",
            code: "___\n{\n    RiskyCode();\n}\ncatch (Exception ex)\n{\n}",
            answer: "try",
            explanation: "try contains code that may fail."
        },

        {
            type: "mc",
            title: "Divide by Zero",
            question: "Which exception is associated with dividing an integer by zero?",
            code: "int result = 10 / 0;",
            options: ["DivideByZeroException", "FileNotFoundException", "NullReferenceException", "FormatException"],
            answer: "DivideByZeroException",
            explanation: "Integer division by zero throws DivideByZeroException."
        },

        {
            type: "fill",
            title: "Format Exception",
            question: "Which exception can occur when parsing invalid numeric text?",
            code: "int.Parse(\"abc\");",
            answer: "FormatException",
            explanation: "Invalid numeric text can cause FormatException."
        }

    ]

};


/* ==========================================================
   Fallback Templates
   ========================================================== */

const fallbackTemplates = [

    {
        type: "mc",
        title: "Concept Check",
        question: "Which option represents the main C# concept in this category?",
        options: ["The correct concept", "HTML", "CSS", "SQL"],
        answer: "The correct concept",
        explanation: "This exercise checks the basic idea of the selected C# topic."
    },

    {
        type: "fill",
        title: "Complete the Keyword",
        question: "Fill in the missing C# keyword.",
        code: "___",
        answer: "C#",
        explanation: "The missing value is related to the current C# topic."
    }

];


/* ==========================================================
   Category Icons
   ========================================================== */

const categoryIcons = {

    syntax: "bx-code-alt",
    output: "bx-terminal",
    comments: "bx-comment-detail",
    variables: "bx bx-data",
    "constant-variables": "bx-lock-alt",
    "display-variables": "bx-show",
    "multiple-variables": "bx-list-ul",
    identifiers: "bx-id-card",
    "data-types": "bx-category",
    "type-casting": "bx-transfer",
    "user-input": "bx-keyboard",
    "arithmetic-operators": "bx-calculator",
    "assignment-operators": "bx-equalizer",
    "comparison-operators": "bx-git-compare",
    "logical-operators": "bx-git-branch",
    math: "bx-math",
    strings: "bx-text",
    "string-concatenation": "bx-link",
    "string-interpolation": "bx-bracket",
    "access-strings": "bx-search",
    "special-characters": "bx-code",
    booleans: "bx-toggle-left",
    if: "bx-git-compare",
    else: "bx-git-branch",
    "else-if": "bx-git-merge",
    "shorthand-if-else": "bx-question-mark",
    switch: "bx-git-compare",
    "while-loop": "bx-loader-circle",
    "for-loop": "bx-repeat",
    "break-continue": "bx-skip-next",
    arrays: "bx-grid",
    "array-loops": "bx-grid-alt",
    "sort-arrays": "bx-sort",
    "multidimensional-arrays": "bx-table",
    methods: "bx-function",
    "method-parameters": "bx-transfer-alt",
    "default-parameter": "bx-slider",
    "return-values": "bx-log-out",
    "method-overloading": "bx-copy",
    oop: "bx-cube",
    "classes-objects": "bx-shape-polygon",
    "multiple-objects": "bx-shapes",
    "class-members": "bx-list-check",
    constructors: "bx-buildings",
    "access-modifiers": "bx-lock-open",
    properties: "bx-slider-alt",
    inheritance: "bx-git-branch",
    polymorphism: "bx-transfer",
    abstraction: "bx-layer",
    interface: "bx-layout",
    enums: "bx-list-ol",
    files: "bx-file",
    exceptions: "bx-error-alt"

};


/* ==========================================================
   Storage
   ========================================================== */

const EXERCISE_STORAGE_KEY = "devpath_csharp_exercises_v1";


/* ==========================================================
   Selectors
   ========================================================== */

const categoriesContainer =
    document.getElementById("exerciseCategories");

const overallProgressText =
    document.getElementById("overallProgressText");

const overallProgressPercent =
    document.getElementById("overallProgressPercent");

const overallProgressBar =
    document.getElementById("overallProgressBar");


/* ==========================================================
   State
   ========================================================== */

let exerciseProgress = loadProgress();


/* ==========================================================
   Initialize
   ========================================================== */

renderCategories();

updateOverallProgress();


/* ==========================================================
   Render Categories
   ========================================================== */

function renderCategories() {

    if (!categoriesContainer) {
        return;
    }

    categoriesContainer.innerHTML = "";

    exerciseCategories.forEach((category, index) => {

        const categoryElement =
            createCategory(category, index);

        categoriesContainer.appendChild(categoryElement);

    });

}


/* ==========================================================
   Create Category
   ========================================================== */

function createCategory(category, index) {

    const item = document.createElement("div");

    item.className = "exercise-category accordion-item";


    const buttonId =
        `categoryButton-${category.id}`;

    const collapseId =
        `categoryCollapse-${category.id}`;


    const completed =
        getCompletedCount(category.id);


    const isCompleted =
        completed === category.count;


    item.innerHTML = `

        <button
            class="exercise-category-header accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${collapseId}"
            aria-expanded="false"
            aria-controls="${collapseId}"
            id="${buttonId}"
        >

            <span class="exercise-category-icon">

                <i class="bx ${categoryIcons[category.id] || "bx-code"}"></i>

            </span>


            <span class="exercise-category-info">

                <span class="exercise-category-title">
                    ${category.title}
                </span>

                <span class="exercise-category-meta">

                    <span class="exercise-category-count">
                        ${category.count} Exercises
                    </span>

                    <span
                        class="exercise-category-status ${isCompleted ? "show" : ""}"
                    >

                        <i class="bx bx-check-circle"></i>

                        Completed

                    </span>

                </span>

            </span>


            <span class="exercise-category-progress">

                <span class="exercise-category-progress-top">

                    <span>
                        Progress
                    </span>

                    <strong>
                        ${completed}/${category.count}
                    </strong>

                </span>

                <span class="exercise-category-progress-track">

                    <span
                        class="exercise-category-progress-bar"
                        style="width:${getPercentage(completed, category.count)}%"
                    ></span>

                </span>

            </span>


            <i class="bx bx-chevron-down exercise-category-arrow"></i>

        </button>


        <div
            id="${collapseId}"
            class="accordion-collapse collapse"
            aria-labelledby="${buttonId}"
            data-bs-parent="#exerciseCategories"
        >

            <div class="exercise-category-body">

                <div class="exercise-category-content">

                    <div class="exercise-category-toolbar">

                        <p>
                            Complete all ${category.count}
                            exercises in this category.
                        </p>

                        <button
                            type="button"
                            class="exercise-reset-button"
                            data-category="${category.id}"
                        >

                            <i class="bx bx-reset"></i>

                            Reset Category

                        </button>

                    </div>


                    <div class="exercise-list">

                        ${createExercises(category)}

                    </div>

                </div>

            </div>

        </div>

    `;


    return item;

}


/* ==========================================================
   Create Exercises
   ========================================================== */

function createExercises(category) {

    const templates =
        exerciseTemplates[category.id] ||
        fallbackTemplates;


    let html = "";


    for (let index = 0; index < category.count; index++) {

        const template =
            templates[index % templates.length];

        html += createExercise(
            category,
            template,
            index
        );

    }


    return html;

}


/* ==========================================================
   Create Exercise
   ========================================================== */

function createExercise(
    category,
    template,
    index
) {

    const exerciseId =
        `${category.id}-${index + 1}`;


    const completed =
        isExerciseCompleted(exerciseId);


    const code =
        template.code
            ? escapeHtml(template.code)
            : "";


    const answer =
        escapeHtml(template.answer);


    const question =
        escapeHtml(template.question);


    const title =
        escapeHtml(template.title);


    let codeHTML = "";


    if (template.code) {

        codeHTML = `

            <div class="exercise-code">

                <div class="exercise-code-header">

                    <span>
                        C# Code
                    </span>

                </div>

                <pre><code>${highlightCode(code)}</code></pre>

            </div>

        `;

    }


    let interactionHTML = "";


    if (template.type === "mc") {

        interactionHTML = `

            <div class="exercise-options">

                ${template.options
                    .map((option, optionIndex) => `

                        <button
                            type="button"
                            class="exercise-option"
                            data-answer="${escapeAttribute(option)}"
                            data-exercise="${exerciseId}"
                        >

                            <span class="exercise-option-icon">
                                ${String.fromCharCode(65 + optionIndex)}
                            </span>

                            <span>
                                ${escapeHtml(option)}
                            </span>

                        </button>

                    `)
                    .join("")
                }

            </div>

        `;

    }


    if (template.type === "fill") {

        interactionHTML = `

            <div class="exercise-fill">

                <div class="exercise-fill-form">

                    <input
                        type="text"
                        class="exercise-fill-input"
                        placeholder="Type your answer..."
                        autocomplete="off"
                        data-answer="${escapeAttribute(template.answer)}"
                        data-exercise="${exerciseId}"
                    >

                    <button
                        type="button"
                        class="exercise-check-button"
                        data-exercise="${exerciseId}"
                    >

                        <i class="bx bx-check"></i>

                        Check

                    </button>

                </div>

            </div>

        `;

    }


    return `

        <div
            class="exercise-preview ${completed ? "completed" : ""}"
            data-exercise="${exerciseId}"
            data-category="${category.id}"
            data-answer="${escapeAttribute(template.answer)}"
        >

            <div class="exercise-preview-header">

                <div>

                    <span class="exercise-section-label">
                        C# Exercise
                    </span>

                    <h3>
                        ${index + 1}. ${title}
                    </h3>

                </div>

                <span class="exercise-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

            </div>


            <div class="exercise-question">

                <p>
                    ${question}
                </p>

            </div>


            ${codeHTML}


            ${interactionHTML}


            <div
                class="exercise-result"
                aria-live="polite"
            ></div>


            <div class="exercise-actions">

                <button
                    type="button"
                    class="exercise-action-button show-answer-button"
                >

                    <i class="bx bx-show"></i>

                    Show Answer

                </button>

            </div>


            <div class="exercise-answer">

                <div class="exercise-answer-header">

                    <span>

                        <i class="bx bx-check-circle"></i>

                        Correct Answer

                    </span>

                </div>

                <pre><code>${answer}</code></pre>

                <div class="exercise-answer-explanation">

                    ${escapeHtml(template.explanation)}

                </div>

            </div>

        </div>

    `;

}


/* ==========================================================
   Event Delegation
   ========================================================== */

document.addEventListener("click", (event) => {


    /* ======================================================
       Multiple Choice
       ====================================================== */

    const option =
        event.target.closest(".exercise-option");


    if (option) {

        handleMultipleChoice(option);

        return;

    }


    /* ======================================================
       Fill Check
       ====================================================== */

    const checkButton =
        event.target.closest(".exercise-check-button");


    if (checkButton) {

        handleFillAnswer(checkButton);

        return;

    }


    /* ======================================================
       Show Answer
       ====================================================== */

    const showAnswer =
        event.target.closest(".show-answer-button");


    if (showAnswer) {

        handleShowAnswer(showAnswer);

        return;

    }


    /* ======================================================
       Reset Category
       ====================================================== */

    const resetButton =
        event.target.closest(".exercise-reset-button");


    if (resetButton) {

        handleResetCategory(resetButton);

    }

});


/* ==========================================================
   Multiple Choice
   ========================================================== */

function handleMultipleChoice(option) {

    const exercise =
        option.closest(".exercise-preview");


    if (!exercise) {
        return;
    }


    const selectedAnswer =
        option.dataset.answer;


    const correctAnswer =
        exercise.dataset.answer;


    const result =
        exercise.querySelector(".exercise-result");


    const options =
        exercise.querySelectorAll(".exercise-option");


    options.forEach((item) => {

        item.classList.remove(
            "correct",
            "wrong"
        );

    });


    if (normalizeAnswer(selectedAnswer) ===
        normalizeAnswer(correctAnswer)) {

        option.classList.add("correct");

        showResult(
            result,
            "Correct! Well done.",
            "correct-result"
        );

        markExerciseCompleted(exercise);

    } else {

        option.classList.add("wrong");

        showResult(
            result,
            "Not quite. Try again.",
            "wrong-result"
        );

    }

}


/* ==========================================================
   Fill Answer
   ========================================================== */

function handleFillAnswer(button) {

    const exercise =
        button.closest(".exercise-preview");


    if (!exercise) {
        return;
    }


    const input =
        exercise.querySelector(".exercise-fill-input");


    const result =
        exercise.querySelector(".exercise-result");


    const correctAnswer =
        input.dataset.answer;


    const userAnswer =
        input.value.trim();


    input.classList.remove(
        "correct",
        "wrong"
    );


    if (!userAnswer) {

        showResult(
            result,
            "Please enter an answer first.",
            "info-result"
        );

        input.focus();

        return;

    }


    if (
        normalizeAnswer(userAnswer) ===
        normalizeAnswer(correctAnswer)
    ) {

        input.classList.add("correct");

        showResult(
            result,
            "Correct! Well done.",
            "correct-result"
        );

        markExerciseCompleted(exercise);

    } else {

        input.classList.add("wrong");

        showResult(
            result,
            "Not quite. Try again.",
            "wrong-result"
        );

    }

}


/* ==========================================================
   Show Answer
   ========================================================== */

function handleShowAnswer(button) {

    const exercise =
        button.closest(".exercise-preview");


    if (!exercise) {
        return;
    }


    const answer =
        exercise.querySelector(".exercise-answer");


    if (!answer) {
        return;
    }


    answer.classList.toggle("show");


    const isShown =
        answer.classList.contains("show");


    button.innerHTML = isShown

        ? `
            <i class="bx bx-hide"></i>
            Hide Answer
          `

        : `
            <i class="bx bx-show"></i>
            Show Answer
          `;

}


/* ==========================================================
   Result
   ========================================================== */

function showResult(
    element,
    message,
    className
) {

    if (!element) {
        return;
    }


    element.textContent = message;

    element.className =
        `exercise-result show ${className}`;

}


/* ==========================================================
   Mark Exercise Completed
   ========================================================== */

function markExerciseCompleted(exercise) {

    const exerciseId =
        exercise.dataset.exercise;


    if (
        exerciseProgress.exercises.includes(
            exerciseId
        )
    ) {

        return;

    }


    exerciseProgress.exercises.push(
        exerciseId
    );


    saveProgress();


    exercise.classList.add("completed");


    updateCategoryProgress(
        exercise.dataset.category
    );


    updateOverallProgress();

}


/* ==========================================================
   Category Progress
   ========================================================== */

function updateCategoryProgress(categoryId) {

    const category =
        exerciseCategories.find(
            item => item.id === categoryId
        );


    if (!category) {
        return;
    }


    const categoryElement =
        document.querySelector(
            `[data-category="${categoryId}"]`
        );


    if (!categoryElement) {
        return;
    }


    const completed =
        getCompletedCount(categoryId);


    const progressBar =
        categoryElement.querySelector(
            ".exercise-category-progress-bar"
        );


    const progressText =
        categoryElement.querySelector(
            ".exercise-category-progress-top strong"
        );


    const status =
        categoryElement.querySelector(
            ".exercise-category-status"
        );


    if (progressBar) {

        progressBar.style.width =
            `${getPercentage(completed, category.count)}%`;

    }


    if (progressText) {

        progressText.textContent =
            `${completed}/${category.count}`;

    }


    if (status) {

        status.classList.toggle(
            "show",
            completed === category.count
        );

    }

}


/* ==========================================================
   Overall Progress
   ========================================================== */

function updateOverallProgress() {

    const total =
        exerciseCategories.reduce(
            (sum, category) =>
                sum + category.count,
            0
        );


    const completed =
        exerciseProgress.exercises.length;


    const percentage =
        getPercentage(
            completed,
            total
        );


    if (overallProgressText) {

        overallProgressText.textContent =
            `${completed} / ${total} Completed`;

    }


    if (overallProgressPercent) {

        overallProgressPercent.textContent =
            `${percentage}%`;

    }


    if (overallProgressBar) {

        overallProgressBar.style.width =
            `${percentage}%`;

    }

}


/* ==========================================================
   Reset Category
   ========================================================== */

function handleResetCategory(button) {

    const categoryId =
        button.dataset.category;


    const category =
        exerciseCategories.find(
            item => item.id === categoryId
        );


    if (!category) {
        return;
    }


    const confirmed =
        window.confirm(
            `Reset all progress for ${category.title}?`
        );


    if (!confirmed) {
        return;
    }


    exerciseProgress.exercises =
        exerciseProgress.exercises.filter(
            exerciseId =>
                !exerciseId.startsWith(
                    `${categoryId}-`
                )
        );


    saveProgress();


    const categoryElement =
        button.closest(".exercise-category");


    if (categoryElement) {

        categoryElement
            .querySelectorAll(".exercise-preview")
            .forEach((exercise) => {

                exercise.classList.remove(
                    "completed"
                );


                exercise
                    .querySelectorAll(".exercise-option")
                    .forEach((option) => {

                        option.classList.remove(
                            "correct",
                            "wrong"
                        );

                    });


                const input =
                    exercise.querySelector(
                        ".exercise-fill-input"
                    );


                if (input) {

                    input.value = "";

                    input.classList.remove(
                        "correct",
                        "wrong"
                    );

                }


                const result =
                    exercise.querySelector(
                        ".exercise-result"
                    );


                if (result) {

                    result.className =
                        "exercise-result";

                    result.textContent = "";

                }

            });


        categoryElement
            .querySelectorAll(".exercise-answer")
            .forEach((answer) => {

                answer.classList.remove("show");

            });


        categoryElement
            .querySelectorAll(".show-answer-button")
            .forEach((button) => {

                button.innerHTML = `
                    <i class="bx bx-show"></i>
                    Show Answer
                `;

            });

    }


    updateCategoryProgress(categoryId);

    updateOverallProgress();

}


/* ==========================================================
   Get Completed Count
   ========================================================== */

function getCompletedCount(categoryId) {

    const prefix =
        `${categoryId}-`;


    return exerciseProgress.exercises
        .filter(
            exerciseId =>
                exerciseId.startsWith(prefix)
        )
        .length;

}


/* ==========================================================
   Is Exercise Completed
   ========================================================== */

function isExerciseCompleted(exerciseId) {

    return exerciseProgress.exercises.includes(
        exerciseId
    );

}


/* ==========================================================
   Percentage
   ========================================================== */

function getPercentage(
    value,
    total
) {

    if (!total) {
        return 0;
    }


    return Math.round(
        (value / total) * 100
    );

}


/* ==========================================================
   Normalize Answer
   ========================================================== */

function normalizeAnswer(value) {

    return String(value)
        .trim()
        .toLowerCase();

}


/* ==========================================================
   Load Progress
   ========================================================== */

function loadProgress() {

    try {

        const saved =
            localStorage.getItem(
                EXERCISE_STORAGE_KEY
            );


        if (!saved) {

            return {
                exercises: []
            };

        }


        const parsed =
            JSON.parse(saved);


        if (
            !parsed ||
            !Array.isArray(parsed.exercises)
        ) {

            return {
                exercises: []
            };

        }


        return parsed;

    } catch (error) {

        return {
            exercises: []
        };

    }

}


/* ==========================================================
   Save Progress
   ========================================================== */

function saveProgress() {

    localStorage.setItem(
        EXERCISE_STORAGE_KEY,
        JSON.stringify(exerciseProgress)
    );

}


/* ==========================================================
   Escape HTML
   ========================================================== */

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ==========================================================
   Escape Attribute
   ========================================================== */

function escapeAttribute(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

}


/* ==========================================================
   Highlight C# Code
   ========================================================== */

function highlightCode(code) {

    let result = code;


    result = result.replace(
        /\b(int|double|string|bool|char|long|float|decimal|var|void|public|private|protected|internal|static|class|new|return|if|else|switch|case|default|break|continue|for|foreach|while|const|readonly|abstract|virtual|override|interface|enum|try|catch|finally|throw|using)\b/g,
        '<span class="exercise-keyword">$1</span>'
    );


    result = result.replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        '<span class="exercise-number-value">$1</span>'
    );


    result = result.replace(
        /(&quot;.*?&quot;|".*?")/g,
        '<span class="exercise-string">$1</span>'
    );


    return result;

}