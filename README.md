## Development

Run the dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Database

```
turso db create <database-name>
turso db show --url <database-name>  # TURSO_DATABASE_URL
turso db tokens create <database-url>  # TURSO_AUTH_TOKEN
turso db shell <database-url> < ./drizzle/migrations/<migration-name>.sql
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already
configured for a simple default starting experience. You can use whatever css
framework you prefer. See the
[Vite docs on css](https://vitejs.dev/guide/features.html#css) for more
information.
