# Webpack use strict with BannerPlugin bug

Steps to reproduce:

1. run `pnpm install`
2. run `pnpm build`
3. check `dist/axios` file, `"use strict";` statement is under `const a = 1;`, which is incorrect. It should be in the top of the file.
