# simple-react-modal

A simple, customizable React modal component that allows you to display content in a modal overlay. 

## Installation

To install the package, use npm:

```bash
npm install simple-react-modal-ocp14
```
## How to use
First, import the module into your project:

```js

import SimpleModal from "simple-react-modal-ocp14";

```

### Example Usage
Here's an example of how to use the modal component in your project:
```jsx

import { useState } from "react";
import SimpleModal from "simple-react-modal-ocp14";

export default function YourComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <SimpleModal
        text={"Your text here"}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
```

| Prop          | Type       | Description                              |
|---------------|------------|------------------------------------------|
| `text`        | `string`   | The text displayed in the modal.         |
| `isOpen`      | `boolean`  | Controls if the modal is open or closed. |
| `closeModal`  | `function` | Function to close the modal.             |


## Styling
The modal includes basic inline styles. If you need additional styling, you can wrap the modal component or add custom CSS classes.
