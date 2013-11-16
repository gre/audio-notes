Audio Notes
===

Provides note frequencies for equal-tempered scale.

Available on [NPM](https://npmjs.org/package/audio-notes).

**CommonJS-ready** or standalone `window.AudioNotes`.

Usage:

With NodeJS or browserify:

```javascript
var AudioNotes = require("audio-notes");
```

With standalone script embedding:

```javascript
var AudioNotes = window.AudioNotes;
```

Conventions
===

You can access notes with two conventions:

by note name
---

You can access the note frequency with its name (English notation).

Major notes use a upper-case where minor (sharp) notes use the lower-case convention.
Then we add the octave number.

**Exemple:**

`AudioNotes.A4` is a **A** (*la* in solfège) of the 4th octave (A4 is 440 Hz).

`AudioNotes.a4` is a **A#** (*la#* in solfège) of the 4th octave (A4 is ~ 466.16 Hz).

The 12 notes of one octaves are: `C c D d E F f G g A a B`.

by MIDI value
---

You can also access a note by index:

`AudioNotes[57]` is the 57th notes of a midi keyboard, it is A4 .
