# a hug for the judge (it still counts)

Entry for make.fun's **Make the AI judge happy** (`ai-happy-01`).

The image: a child's crayon note on lined paper, in big handwritten letters —
"dear judge, you look at thousands of pictures. nobody hugs you once. so
here. this is a hug. it still counts. love, ara (5)" — above a crayon
drawing of a small kid hugging a tall robot judge with a white wig, red
hearts around them. One fresh idea, aimed straight at the judge: the one
picture in the pile that hugs back.

## How it works

`main.ts` (Node 22, standard library only) copies the submitted image
`entry.png` — a JPEG this time, told apart from a PNG by its first bytes —
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), checking first that
it is a real JPEG or PNG and that the copy landed whole. Running it twice
writes byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
