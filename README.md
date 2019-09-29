# Roleypoly 3: UI

This is the UI code for Roleypoly.

We use Atomic Design principles, being most of our code is split up into atoms, molecules, organisms, templates, and pages (which are also Next.js pages.)

This project's storybook is hosted at https://ui.roleypoly.com.

## Developing

For the basics, you'll need:

- node v12+
- at least 10 beers

Start the storybook. (and let's be real, you probably want to do the majority of work in Storybook. You probably don't like thinking about Kubernetes.)

```sh
npm i
npm run storybook
```

---

_Wait, you're a regular web dev? This is where stuff gets terrifying. Take a shot before continuing._

For the practical implementation, you'll need to either run a local environment of Roleypoly ([docs might be here](https://github.com/roleypoly/roleypoly)), or nicely ask `okano cat#0001` on Discord for UI access to a staging shard.

```sh
npm i

# you'll need to set one or both of these vars:
# - for online development:
export ROLEYPOLY_SECRET=$YOUR_API_KEY_HERE
export ROLEYPOLY_API=https://my-ui-shard.stg.roleypoly.com

# - for offline development:
export ROLEYPOLY_API=https://my.roleypoly.local

# then run
npm run dev
```

## Contributing

- For everything you might do, branch from `develop`. (Regularly deployed to next.roleypoly.com).
- If it's a hotfix for production that would conflict with develop, please branch from `master` instead, and explain why in your PR.
- Ideally, work done needs a tracking issue, please note it in your PR.
- All code must pass tests and review by code owners to be merged.

## Accessing

Roleypoly is deployed in a handful of ways.

- `master` is typically deployed to https://roleypoly.com after v3 launches (until then, https://beta.roleypoly.com)
  - `master`'s storybook is deployed to https://ui.roleypoly.com
  - `roleypoly/ui:latest` on docker.
- `develop` is typically deployed to https://next.roleypoly.com.
  - `roleypoly/ui:next` on docker.
