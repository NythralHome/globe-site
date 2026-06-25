# Globe Site

Product site for [Globe](https://github.com/NythralHome/globe), a source-available macOS input source switcher with Globe Pro and App Store shortcut editions.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

The site is intended to be deployed to AWS Amplify at `globe.nythral.com`.

The app uses static export, so `npm run build` emits the deployable site into `out/`.
