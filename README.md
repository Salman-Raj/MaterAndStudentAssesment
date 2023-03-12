#Publsihed Link
https://master-student-spritle.netlify.app/

# Task name:

- You tell, I do

# Description:

- Write calculations using functions and get the results. Let's have a look at some examples:

- seven(times(five())) # must return 35
- four(plus(nine())) # must return 13
- eight(minus(three())) # must return 5
- six(divided_by(two())) # must return 3

# Conditions:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, divided_by
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

eight(divided_by(three()))

# Application Flow:

Create an application with two user roles: Master and Students
Both Student and Master can signup and login and logout.
Master can ask the Student(input) and get the value(output)
Students should be able to view the list of activities(calculations) sought by the master in the activity log section.


# Aproach
- Components to create 
- Register component for Both Master and student to register with their details
- Login Component ,after registration they will redirect to Login page
- Home component, after succesful login they redirect to Home page to perform Math operations

# Register Component

- In register component we need to provide details for regitration
- Used hooks for state management of details in this component
- intially login component is not updated until we provide details and register for login
- By using handleFormSubmit event, we store all details details by using local storage method and setlogin as true, so it navigates to login page
- we used bootstrap classes to create form for registration of both Mater and Student and used bootstrap classes for styling.
- after this there is handleClick function if user registeres,it set states to login false ,else true.
- We used Terninary operator to set registration and login based on login state value

# Login Component
-
