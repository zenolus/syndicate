### Naming Conventions

- Component’s names should be written using pascal case.
- Non-components should be written using camel case.
- Attribute name should be camel case.
- Inline styles should be camel case.
- Variable names should be camel case. Variable names can contain number and special characters.
- CSS files should be named the same as the component.
- If a component requires multiple files (css, test) locate all files within component a folder.
- Use .jsx or .tsx extension a for React components.

### Bug Avoidance

- Create PURE functions and avoid side-effects.
- Avoid mutating state when working with arrays.
- Remove all console.log().
- Treat props as read-only. Do not try to modify them.

### Clean Code

- No DRY violations. Create utility files to avoid duplicate code.
- Use Higher Order Components where appropriate.
- Split code into respective files, JavaScript, test, and CSS.
- Create a index.js within each folder for exporting. This will reduce repeating names on the imports.
- Favour functionless components
- No unneeded comments, Commented out code should be deleted, not committed.
- Methods that are longer than the screen should be refactored into smaller units.
- Avoid Inline CSS.

### JavaScript

- Use destructuring where needed and possible.
- Only use let or const
- Favour arrow functions