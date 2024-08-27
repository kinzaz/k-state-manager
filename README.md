```typescript
import { useStore } from "k-state-manager";

export default function App() {
  const state = useStore();

  return (
    <main>
      <div>{state.state}</div>
      <button onClick={() => state.setState(state.getState() + 1)}>+</button>
    </main>
  );
}
```
