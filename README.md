# Isa Chato personal page

## Project Structure

The content lives in the `src/content/` directory.
If you want to modify any information on the page, you can refer to that folder.

There are 2 types of files:

* `.mdx` files for static content
* `.json` files for dynamic content

If you need to add or modify the public assets, you can do it in the `public/` directory.

Keep in mind that some `.json` files in `src/content/` refer to the public assets in `public/`. If you change any asset in `public/`, make sure to update the corresponding `.json` file.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
