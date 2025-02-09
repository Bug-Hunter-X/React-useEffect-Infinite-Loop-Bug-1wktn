# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly updating state within a useEffect hook's dependency array.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected version.

## Bug Description
The `useEffect` hook in `MyComponent` attempts to increment the `count` state variable within its own dependency array. This creates an infinite loop because every update to `count` triggers a re-render, which then triggers the `useEffect` again, leading to an endless cycle of state updates.

## Solution
The corrected code uses a functional update pattern within `useEffect` or removes the count from the dependency array if only using it once.