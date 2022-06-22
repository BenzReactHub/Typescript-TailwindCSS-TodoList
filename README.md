# DEMO URL

<https://benzreacthub.github.io/Typescript-TailwindCSS-TodoList/>

### 練習來源

<https://www.youtube.com/channel/UC1rMgKD4Rn-7aVcymjlvhfQ/videos>

### React + Typescript 項目初始化

[https://create-react-app.dev/docs/adding-typescript/](https://create-react-app.dev/docs/adding-typescript/)

### React 安裝 Tailwind CSS

[https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

```bash
# 項目初始化 React Typescript
npx create-react-app demo --template typescript
# 安裝Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
