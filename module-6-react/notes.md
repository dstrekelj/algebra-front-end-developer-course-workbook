# Algebra / Front End Developer / Module 6 - React / Notes

[:arrow_backward: Algebra / Front End Developer / Module 6 - React](./README.md)

---

## Table of contents

- [Algebra / Front End Developer / Module 6 - React / Notes](#algebra--front-end-developer--module-6---react--notes)
  - [Table of contents](#table-of-contents)
  - [Requirements:](#requirements)
  - [Quick start](#quick-start)
    - [Using create-react-app](#using-create-react-app)
      - [Using create-react-app scripts](#using-create-react-app-scripts)
      - [Deploying the application to a server](#deploying-the-application-to-a-server)
      - [Working with public assets (e.g. index.html, favicon)](#working-with-public-assets-eg-indexhtml-favicon)
  - [Wortking with modules](#wortking-with-modules)
    - [Exports](#exports)
      - [Exporting a function from a module](#exporting-a-function-from-a-module)
      - [Exporting an arrow function from a module](#exporting-an-arrow-function-from-a-module)
      - [Exporting a class from a module](#exporting-a-class-from-a-module)
      - [Aggregating exports](#aggregating-exports)
    - [Imports](#imports)
  - [Basic concepts](#basic-concepts)
    - [Creating components](#creating-components)
      - [Function component](#function-component)
      - [Arrow function component](#arrow-function-component)
      - [Class component](#class-component)
    - [Mounting a React application to a DOM node](#mounting-a-react-application-to-a-dom-node)
    - [Nesting components](#nesting-components)
    - [Component props](#component-props)
      - [Using simple component props](#using-simple-component-props)
      - [Using complex component props](#using-complex-component-props)
      - [Using children props](#using-children-props)
    - [Conditional rendering](#conditional-rendering)
    - [Events](#events)
      - [Class components](#class-components)
      - [Function components](#function-components)
    - [Component state](#component-state)
      - [Class components (setState method)](#class-components-setstate-method)
      - [Function components (useState hook)](#function-components-usestate-hook)
    - [Lists](#lists)
    - [Forms](#forms)
  - [Advanced concepts](#advanced-concepts)
    - [Component lifecycle](#component-lifecycle)
      - [Overview](#overview)
      - [Using lifecycle methods with class components](#using-lifecycle-methods-with-class-components)
      - [Hooking into lifecycle methods with function components](#hooking-into-lifecycle-methods-with-function-components)
    - [Context](#context)
    - [AJAX](#ajax)
    - [HOC (Higher Order Components)](#hoc-higher-order-components)
    - [React Router](#react-router)
    - [Redux](#redux)

## Requirements:

- Node
- NPM or Yarn

## Quick start

### Using create-react-app

`npx create-react-app <project folder>`

#### Using create-react-app scripts

- `npm run start` - run the application for development purposes
- `npm run build` - build the application for deployment purposes

#### Deploying the application to a server

- Build the application with `npm run build`
- Copy the `build/` folder contents to a server

#### Working with public assets (e.g. index.html, favicon)

- Add, remove, or modify content in `public/` - public content is added to the `build/` folder when building the React application

## Wortking with modules

### Exports

#### Exporting a function from a module

```js
// Named export version 1
export function Foo() {
  return 42;
}

// Named export version 2
function Foo() {
  return 42;
}
export { Foo };

// Default export version 1
export default function Foo() {
  return 42;
}

// Default export version 2
function Foo() {
  return 42;
}
export default Foo;
```

#### Exporting an arrow function from a module

```js
// Named export version 1
export const Foo = () => {
  return 42;
};

// Named export version 2
const Foo = () => {
  return 42;
};
export { Foo };

// Default export version 1
const Foo = () => {
  return 42;
};
export default Foo;

// Default export version 2
export default () => {
  return 42;
};
```

#### Exporting a class from a module

```js
// Named export version 1
export class Foo {
  constructor() {
    console.log("Hello world!");
  }
}

// Named export version 2
class Foo {
  constructor() {
    console.log("Hello world!");
  }
}
export { Foo };

// Default export version 1
export default class Foo {
  constructor() {
    console.log("Hello world!");
  }
}

// Default export version 2
class Foo {
  constructor() {
    console.log("Hello world!");
  }
}
export default Foo;
```

#### Aggregating exports

```js
// Aggregating all exports from Foo module as default export
export * from "./Foo";
// Aggregating all exports as Foo export from Foo module
export * as Foo from "./Foo";
// Aggregating named export Foo from Foo module as Foo export
export { Foo } from "./Foo";
// Aggregating named export Foo from Foo module as alias FooComponent
export { Foo as FooComponent } from "./Foo";
// Aggregating default export from Foo module as default export
export { default } from "./Foo";
```

### Imports

```js
// Importing all exports from Foo module
import "./Foo";
// Importing all exports from Foo module under Foo identifier
import * as Foo from "./Foo";
// Importing named export Foo from Foo module under Foo identifier
import { Foo } from "./Foo";
// Importing named export Foo from Foo module under FooComponent identifier
import { Foo as FooComponent } from "./Foo";
// Importing default export from Foo module under Foo identifier
import Foo from "./Foo";
```

## Basic concepts

### Creating components

#### Function component

```jsx
import React from "react";

function Button() {
  return <button>Submit</button>;
}

// @see "Exporting from modules"
```

#### Arrow function component

```jsx
import React from "react";

const Button = () => {
  return <button>Submit</button>;
};

// @see "Exporting from modules"
```

#### Class component

```jsx
import React from "react";

class Button extends React.Component {
  render() {
    return <button>Submit</button>;
  }
}

// @see "Exporting from modules"
```

### Mounting a React application to a DOM node

```jsx
import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello world!</h1>;

ReactDOM.render(<App />, document.getElementById("root"));
```

### Nesting components

```jsx
const Child = () => <div>Child</div>;

const Parent = () => (
  <div>
    <div>Parent</div>
    <div>
      <Child />
      <Child />
    </div>
  </div>
);
```

### Component props

#### Using simple component props

```jsx
const Child = (props) => (
  <div>
    <div>Child name: {props.name}</div>
    <div>Child age: {props.age}</div>
  </div>
);

const Parent = () => (
  <div>
    <div>Parent</div>
    <div>
      <Child name="First" age={10} />
      <Child name="Second" age={11} />
    </div>
  </div>
);
```

#### Using complex component props

```jsx
const Child = (props) => (
  <div>
    <div>Child name: {props.info.name}</div>
    <div>Child age: {props.info.age}</div>
  </div>
);

const Parent = () => (
  <div>
    <div>Parent</div>
    <div>
      <Child info={{ name: "First", age: 10 }} />
      <Child info={{ name: "Second", age: 11 }} />
    </div>
  </div>
);
```

#### Using children props

```jsx
const Child = (props) => (
  <div>
    <div>Child name: {props.info.name}</div>
    <div>Child age: {props.info.age}</div>
    <div>Child says {props.children}</div>
  </div>
);

const Parent = () => (
  <div>
    <div>Parent</div>
    <div>
      <Child info={{ name: "First", age: 10 }}>Hello!</Child>
      <Child info={{ name: "Second", age: 11 }}>Hi!</Child>
    </div>
  </div>
);
```

### Conditional rendering

```jsx
const Recorder = (props) => {
  return (
    <div>
      {!props.isRecording && <button>Start recording</button>}
      {props.isRecording && <button>Stop recording</button>}
    </div>
  );
};
```

### Events

#### Class components

```jsx
class Button extends React.Component {
  handleClick = (event) => {
    console.log("You clicked", event.target);
  };

  render() {
    return <button onClick={handleClick}>Click me</button>;
  }
}
```

#### Function components

```jsx
const Button = () => {
  const handleClick = (event) => {
    console.log("You clicked", event.target);
  };

  return <button onClick={handleClick}>Click me</button>;
};
```

### Component state

#### Class components (setState method)

```jsx
class Recorder extends React.Component {
  state = {
    isRecording: false,
  };

  handleClick = () => {
    // Set new state value
    this.setState({
      isRecording: !this.state.isRecording,
    });
    // ... or derive state value by function
    this.setState((state) => ({
      isRecording: !state.isRecording,
    }));
  };

  render() {
    return (
      <div>
        {!this.state.isRecording && (
          <button onClick={this.handleClick}>Start recording</button>
        )}
        {this.state.isRecording && (
          <button onClick={this.handleClick}>Stop recording</button>
        )}
      </div>
    );
  }
}
```

#### Function components (useState hook)

```jsx
const Recorder = () => {
  const [isRecording, setIsRecording] = React.useState(false);

  const handleClick = () => {
    // Set new state value
    setIsRecording(!isRecording);
    // ... or derive state value by function
    setIsRecording((isRecording) => !isRecording);
  };

  return (
    <div>
      {!isRecording && <button onClick={handleClick}>Start recording</button>}
      {isRecording && <button onClick={handleClick}>Stop recording</button>}
    </div>
  );
};
```

### Lists

```jsx
const data = ["Abby", "Ben", "Calvin", "Dolores"];

const Friends = () => {
  return (
    <ul>
      {data.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
```

### Forms

```jsx
const data = [ "Abby", "Ben", "Calvin", "Dolores" ];

const Friends = () => {
    [ friends, setFriends ] = React.useState(data);
    [ name, setName ] = React.useState('');

    const addFriend = (event) => {
        event.preventDefault();
        setFriends([ ...friends, name ]);
        setName('');
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    return (
        <form onSubmit={addFriend}>
            <input type="text" value={name} onChange={handleName} />
            <button type="submit">Add friend</button>
        </form>
        <ul>
            {data.map((friend, index) => (
                <li key={index}>{friend}</li>
            ))}
        </ul>
    );
}
```

## Advanced concepts

### Component lifecycle

#### Overview

1. Initalization (props and state setup)
2. Mounting
   1. `componentWillMount()`
   2. `render()`
   3. `componentDidMount()`
3. Update
   - Props
     1. `componentWillReceiveProps(nextProps)`
     2. `shouldComponentUpdate(nextProps, nextState)`
     3. `componentWillUpdate(nextProps, nextState)`
     4. `render()`
     5. `componentDidUpdate(prevProps, prevState)`
   - State
     1. `shouldComponentUpdate(nextProps, nextState)`
     2. `componentWillUpdate(nextProps, nextState)`
     3. `render()`
     4. `componentDidUpdate(prevProps, prevState)`
4. Unmounting
   1. `componentWillUnmount()`

#### Using lifecycle methods with class components

```jsx
class MyComponent extends React.Component {
  // 1. Initialization
  constructor(props) {
    super(props);

    this.state = {
      /* ... */
    };
  }

  // 2. Mounting
  componentWillMount() {
    /* ... */
  }
  componentDidMount() {
    /* ... */
  }

  // 3. Update
  componentWillReceiveProps(nextProps) {
    /* ... */
  }
  shouldComponentUpdate(nextProps, nextState) {
    /* return true to update */
  }
  componentWillUpdate(nextProps, nextState) {
    /* ... */
  }
  componentDidUpdate(prevProps, prevState) {
    /* ... */
  }

  // 4. Unmounting
  componentWillUnmount() {
    /* ... */
  }

  render() {
    return <div>Hello world!</div>;
  }
}
```

#### Hooking into lifecycle methods with function components

```jsx
function MyComponent() {
  const [state, setState] = React.useState(0);

  // componentDidMount
  React.useEffect(() => {
    // componentWillUnmount
    return () => {
      /* ... */
    };
  }, []);
  // empty dependencies array means effect is called on mount

  // shouldComponentUpdate
  React.useEffect(() => {
    // componentWillUnmount
    return () => {
      /* ... */
    };
  }, [state]);
  // effect is called only if listed dependencies are updated

  // componentDidUpdate
  React.useEffect(() => {
    // componentWillUnmount
    return () => {
      /* ... */
    };
  });
  // no dependencies means effect is called on every render (update)

  return <div>Hello world!</div>;
}
```

### Context

```jsx
const themes = {
  dark: {
    primary: "#000",
    secondary: "#fff",
  },
  light: {
    primary: "#fff",
    secondary: "#000",
  },
};

const ThemeContext = React.createContext(themes.dark);

const Button = (props) => {
  const theme = React.useContext(ThemeContext);

  const style = {
    ...props.style,
    backgroundColor: theme.primary,
    color: theme.secondary,
  };

  return <button {...props} style={style} />;
};

class TextInput extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const style = {
            ...this.props.style,
            backgroundColor: theme.primary,
            color: theme.secondary,
          };

          return <input {...this.props} type="text" style={style} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <form>
        <TextInput />
        <Button>Submit</Button>
      </form>
    </ThemeContext.Provider>
  );
}
```

### AJAX

```jsx
const TvShowSearch = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  useEffect(async () => {
    if (name === "") return;

    try {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${name}`
      );
      const results = await response.json();
      setResults(results);
    } catch (e) {
      console.error(e);
    }
  }, [name]);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" name="name" value={name} onChange={onChangeName} />
      <ul>
        {results.map((result) => (
          <li key={result.show.id}>{result.show.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

### HOC (Higher Order Components)

### React Router

### Redux
