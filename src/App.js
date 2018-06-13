import React, { Component } from 'react';
import './App.css';
import StyleEditor from './components/StyleEditor.js';
import ResumeEditor from './components/ResumeEditor.js';
const fullStyleArray = require( './fullStyleArray.js');
const fullMarkdownString = require('./fullMarkdownString.js');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 50,
            currentStyle: '',
            enableHtml: false,
            fullStyle: fullStyleArray,
            currentMarkdown: '',
            fullMarkdown:fullMarkdownString
        };
    }
    componentDidMount() {
        this.makeResume()();
    }
    makeResume() {
        return async ()=> {
            await this.progressivelyShowStyle(0);
            await this.progressivelyShowResume();
            await this.progressivelyShowStyle(1);
            await this.showHtml();
            await this.progressivelyShowStyle(2);
        }
    }
    progressivelyShowStyle(n){
        return new Promise((resolve, reject) => {
            let interval = this.state.interval;
            let showStyle = (async function () {
                let style = this.state.fullStyle[n];
                if (!style) {
                    return
                }
                // 计算前 n 个 style 的字符总数
                let length = this.state.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0);
                let prefixLength = length - style.length;
                if (this.state.currentStyle.length < length) {
                    let l = this.state.currentStyle.length - prefixLength;
                    let char = style.substring(l, l + 1) || ' ';
                    if (style.substring(l - 1, l) === '\n' && this.styleEditor) {
                        this.styleEditor.goBottom();
                    }
                    this.setState((prevState, props) => ({
                            currentStyle: prevState.currentStyle + char
                        }));
                    setTimeout(showStyle, interval);
                }else {
                    resolve()
                }
            }).bind(this);
            showStyle();
        });
    }
    showHtml(){
        return new Promise((resolve, reject) => {
            this.setState(()=>({
                enableHtml: true
            }))
            resolve()
        })
    }
    progressivelyShowResume() {
        return new Promise((resolve, reject) => {
            let length = this.state.fullMarkdown.length
            let interval = this.state.interval
            let showResume = () => {
                if (this.state.currentMarkdown.length < length) {
                    let prevChar = this.state.currentMarkdown.substring( this.state.currentMarkdown.length - 2, this.state.currentMarkdown.length );
                    this.setState((prevState, props) => ({
                        currentMarkdown: this.state.fullMarkdown.substring(0, prevState.currentMarkdown.length + 1)
                    }));
                    if (prevChar === '\n' && this.resumeEditor) {
                        this.resumeEditor.goBottom();
                    }
                    setTimeout(showResume, interval)
                } else {
                    resolve()
                }
            }
            showResume()
        })
    }
    render(){
        return <div className="APP">
                    <StyleEditor ref={(div) => { this.styleEditor = div; }} styleCode={this.state.currentStyle}/>
                    <ResumeEditor ref={(resume) => { this.resumeEditor = resume; }} markdown={this.state.currentMarkdown} showHtml={this.state.enableHtml}/>
                </div>
    }
}

export default App;
