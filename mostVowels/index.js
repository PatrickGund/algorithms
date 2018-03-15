const mostVowels = (para, search = 'aeiou') => {
  const words = para.toLowerCase().split(' ');
  let leadWord = '', leadVowels = 0;

  words.forEach(word => {
    let vowelCount = 0;
    [...word].forEach(letter => {
      if (search.indexOf(letter) > -1) vowelCount++;
    });
    if (leadVowels <= vowelCount) {leadWord = word; leadVowels = vowelCount;}
  });

  return leadWord;
};
mostVowels('I am a keeper with some real rhythms'); // => "keeper"
mostVowels('I may not be a keeper, but I am a bookkeeper.', 'ee'); // => "bookkeeper"
