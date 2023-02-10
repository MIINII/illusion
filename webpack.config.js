const path = require('path');

module.exports = {
  // entry : 컴파일 될 파일
  entry: {
    index: './app.js',
    fb:'./app.js'
  },
  mode: 'development', // development/production모드에 맞게 컴파일
  output: { // 컴파일 될 파일의 저장 옵션
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets', 'js'),
    clean: true, // true인 경우 컴파일 될 때마다 이전버전 제거
  },
  watch: true, // true인 경우 entry 파일이 변할 때마다 컴파일을 진행
  module: {
    rules: [ //  어떤 종류의 파일을 컴파일 할지, 어떤 Loader를 사용할지 등을 설정
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
            compact: false,
          },
        },
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
};

