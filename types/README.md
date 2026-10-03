# Worker types

`npm run types` creates `cloudflare.d.ts` here from the pinned Wrangler runtime.
The generated declarations are ignored. This tracked file keeps the output
directory present in a clean checkout, including GitHub Actions.

`wrangler.types.jsonc` is used only for declaration generation; it does not
provision or connect a production database.
