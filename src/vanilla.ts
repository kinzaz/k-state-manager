class KStore<T> {
  state: T;
  listeners: Set<() => void>;

  constructor(initialState: T) {
    this.state = initialState;
    this.listeners = new Set();
  }

  subscribe(callback: () => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  getSnapshot(): T {
    return this.state;
  }

  setState(newState: T) {
    this.state = newState;
    this.listeners.forEach((listener) => listener());
  }
}

export const kStore = new KStore<number>(1);
