var a = [1, 2, 3];

try {
  for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
} catch (error) {
  console.log('エラーが発生しました: ' + error);
}