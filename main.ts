// news-image-20261119: one image that sums up the world's news of
// Thursday 19 November 2026. Node 22, standard library only.
// The program copies entry.png (a JPEG, named entry.png per the rules)
// to /output/entry.png, or to $MAKEFUN_OUTPUT_DIR when set, so the
// grader can run it twice and get byte-identical output both times.
// It creates the output directory first: the grader's /output is
// writable but may not exist yet when the program starts.
//
// Run it: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
