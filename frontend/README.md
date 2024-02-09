### Frontend

These commands are run from the 'frontend' directory of the project, from a terminal:

| Command           | Action                                               |
| :---------------- | :--------------------------------------------------- |
| `npm install`     | Installs dependencies                                |
| `npm run dev`     | Starts local frontend dev server at `localhost:5173` |
| `npm run build`   | Build your production site to `./dist/`              |
| `npm run preview` | Preview your build locally, before deploying         |

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
