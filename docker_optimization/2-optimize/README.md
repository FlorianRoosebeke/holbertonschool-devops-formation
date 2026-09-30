# Docker Optimization & Hardening

## Task 2 — Optimize a Node.js image

I optimized the Dockerfile in `2-optimize/` to make the image smaller and speed up rebuilds after changing the application code.

| Measurement | Before | After |
|---|---:|---:|
| Image size | 1.59 GB | 305 MB |
| Rebuild after changing `index.js` | 9.260 s | 1.902 s |

I switched from `node:20` to `node:20-slim`, added a `.dockerignore`, and copied `package.json` before `index.js`. This lets Docker reuse the dependency installation layer when I only change the application code: `RUN npm install --omit=dev` showed `CACHED` during the optimized rebuild.

The application still runs on port 3000. I also checked that the optimized container runs as the `node` user (`uid=1000`) instead of root.
