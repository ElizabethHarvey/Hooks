UseMemo()

useMemo() also helps improve performance by storing the results of expensive operations

Memoization means that if a calculation has been done before with a given input, there is no
need to do it again, because we already have the stored result of that operation
useMemo() returns a value from the computation which is then stored in a variable

we can use the useMemo Hook to memoize the expensiveOperation function. This will cause the function to only run when needed.
The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
In the following example, the expensive function will only run when count is changed


