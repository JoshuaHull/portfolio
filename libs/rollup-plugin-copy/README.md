# rollup-plugin-copy

Copy a file or group of files to another location.

Looks like I didn't really need to write this.

Originally I just installed the popular `rollup-plugin-copy` package from NPM. But... it didn't work. It didn't copy my files across.

So then I checked the source code and was surprised because it looks like it should work, but it's also more complicated than I expected, so I wasn't sure. "I'll just write my own", I thought. 

Well, now I've also written a too-complicated file copier, and guess what? It doesn't work! After some investigation, it looks like Vite's library mode is deleting the files being copied by my plugin and the popular plugin of the same name.

They both work, I am just dumb.

Anyway, mine intends to do the "*" thing the same way that Node's `package.json.exports` field works, rather than using a glob library. So that's useful in its own right.
