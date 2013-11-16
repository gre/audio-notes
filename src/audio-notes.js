(function (definition) {
  if (typeof exports === "object") {
    module.exports = definition();
  }
  else if (typeof define === 'function' && define.amd) {
    define(definition);
  }
  else {
    window.AudioNotes = definition();
  }
})(function () {

  var notes = {};
  var toneSymbols = "CcDdEFfGgAaB";
  function noteToFrequency (note) {
    return Math.pow(2, (note-57)/12)*440;
  }
  for (var octave = 0; octave <= 10; ++octave) {
    for (var t = 0; t < 12; ++t) {
      notes[octave*12+t] = notes[toneSymbols[t]+octave] = noteToFrequency(octave * 12 + t);
    }
  }
  return notes;

});
