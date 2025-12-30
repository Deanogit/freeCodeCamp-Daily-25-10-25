// Complementary DNA
// Given a string representing a DNA sequence, return its complementary strand using the following rules:

// DNA consists of the letters "A", "C", "G", and "T".
// The letters "A" and "T" complement each other.
// The letters "C" and "G" complement each other.
// For example, given "ACGT", return "TGCA".

function complementaryDNA(strand) {
  console.log(strand);

  // set up an object;
  const ref = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  const arr = strand.split('');
  console.log(arr);
  const switched = arr.map((x) => {
    // if ref.includes(x) {
    // swap the key for value
    //}
    return ref[x];
  });
  console.log(switched);
  return switched.join('');
  //return strand;
}
