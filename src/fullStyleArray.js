const fullStyleArray = [
    `/*
* 你好，我是youzhiyong
* 感谢您在百忙之中点开我这份动态简历
* 话不多说，马上开始吧~
*/

/* 首先，我要给所有元素加上过渡效果 */
* {
  -webkit-transition: all 1s;
          transition: all 1s;
}
.container:not(:empty) {
  width: 49%;
  height: 95vh;
}
/* 白色背景太单调了，来点背景吧 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid white;
  margin: .5em;
  overflow: auto;
  max-height: 95%;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
.container {
  -webkit-perspective: 1000px;
    -webkit-transform: translateX(98.5%);
}
.styleEditor {
  -webkit-transform: rotateY(-10deg);
  -webkit-transform-origin: right;
}

/*我要给自己准备一个编辑器*/
.resumeEditor{
  position: fixed; 
  top: 0;
  padding: .5em;  
  margin: .5em;
  width: 49vw; 
  height: 95vh;
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */

`,
    `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
.resumeEditor{
  -webkit-transform: rotateZ(360deg);
}
`,
    `
/* 再对 HTML 加点样式 */
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 0.5em 0.5em;
}
.resumeEditor p{
  margin-left: 1.5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  display: flex;
  margin: 1em;
  padding: .5em;
  background: #ddd;
  overflow: hidden;
}
/* 简历展示结束，感谢您的查看
 * 欢迎查看我的Github主页~
 * Inspired by http://strml.net/
 * && https://github.com/youzhiyong/
 */
`];

module.exports =  fullStyleArray;