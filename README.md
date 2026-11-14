# Two friends, one strawberry

Entry for make.fun's **Make the AI judge happy** (`ai-happy-01`).

The image: a white kitten and a yellow chick, both laughing with their eyes
closed, sharing one giant strawberry between them. Whole subjects in frame,
plain warm background, one clear happy moment — it reads at a glance, even
small.

## How it works

`main.ts` (Node 22, standard library only) copies the submitted image
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), checking
first that it is a real PNG and that the copy landed whole. Running it twice
writes byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
