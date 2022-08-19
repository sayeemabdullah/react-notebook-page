# [React Notebook Page](https://www.npmjs.com/package/react-notebook-page)

A customizable responsive notebook page.

### Installing as a package

`npm i react-notebook-page`

### Customize it yourself

_Codesandbox:_ <https://codesandbox.io/s/react-notebook-page-demo-tjzgio>

### Usage

```javascript
import Notepage from "react-notebook-page";

export default function App() {
  return (
    <div>
      <Notepage>Hello!</Notepage>
    </div>
  );
}
```

> The notebook page needs props to be customized. You can learn more about props by reading the section on props.

### Props

| Name                         | Value      | Description                                                                                |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| children **<sup>\*</sup>**   | `string`   | Content that passes through the children is shown in the notepad                           |
| notepadHeaderColor           | `string`   | Changes the notepad header's color by passing notepadHeaderColor. The default is `#423830` |
| notepadWidth                 | `string`   | Changes the width of the notepad by passing notepadWidth. The default is `600px`           |
| pageHeight                   | `string`   | Changes the height of the page by passing pageHeight. The default is `60vh`                |
| setContent **<sup>\*</sup>** | `function` | By passing `(e) => {setState(e);}` to setContent, the content is set in the state.         |

> **<sup>\*</sup>** It is possible to use either **children** or **setContent** while using this package. This is a **limitation** that will be fixed in a future version or you can contribute to it.

### Contributing

Found a bug? Want to add a new feature? Please send a pull request or raise an issue.
