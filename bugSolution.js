```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Functional update prevents infinite loop
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array ensures effect runs only once

  return <div>Count: {count}</div>;
}
```