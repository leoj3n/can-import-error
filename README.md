# can-import-error

Shows the warning given by `<can-import from="~/components/a-comp"><a-comp/></can-import>`.

Also shows how the warning goes away when using `can-tag` on `can-import`.

## Quick Start

```
git clone https://github.com/leoj3n/can-import-error.git && cd can-import-error && npm install
```

Then run `develop-ssr` and visit <http://localhost:3000> with DevTools open.

Next try `develop-static` and visit <http://localhost:3000> with DevTools open.

## npm run

```
Lifecycle scripts included in can-import-error:
  install
    npm install --prefix server && npm install --prefix client
  start
    npm start --prefix server
  test
    npm run test --prefix server && npm run test --prefix client

available via `npm run-script`:
  develop-ssr
    npm run develop-ssr --prefix server
  develop-static
    npm run develop-static --prefix server
  lint
    npm run prettier-multi && npm run prettier-pkg && npm run prettier-html
  prettier-html
    prettier --parser html --write '**/*.html'
  prettier-multi
    prettier --single-quote --trailing-comma es5 --write '**/*.{js,json,md,less}'
  prettier-pkg
    prettier-package-json --write package.json client/package.json server/package.json
```
