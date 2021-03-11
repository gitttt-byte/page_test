const url = 'https://dev-dain.github.io/10-things-test';
const title = '춉춉이 테스트 ';
const hash = '%23쵸비_test %233분이미지테스트 %23이미지테스트 ';

const fb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url + '&t=' + title + '' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const tw = () => {
  let name = document.querySelector('.result').innerHTML;
  switch (name) {
    case '쵸비덕후':
    case '':
      name += '이에요! ';
      break;
    default:
      name += '예요! ';
  }
  window.open('https://twitter.com/intent/tweet?text='
    + title + '%0A' + '저는 ' + name + '' + hash + '%0A' + url,
    'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const nv = () => {
  window.open('http://share.naver.com/web/shareView.nhn?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
const band = () => {
  window.open('https://band.us/plugin/share?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
