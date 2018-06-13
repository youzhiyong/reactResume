import React, { Component } from 'react';
import marked from 'marked'
import './resumeEditor.css';

class ResumeEditor extends Component {
    /**
     * Created by zxt on 2017/3/7.
     */
    goBottom() {
        this.container.scrollTop = 100000
    }
    render(){
        var markdown = this.props.markdown;
        var markdownCode = {__html: this.props.showHtml ? marked(markdown) : markdown};
        return <div className="resumeEditor" ref={(div) => { this.container = div; }}>
                    <pre className="md" dangerouslySetInnerHTML={ markdownCode } />
                </div>
    }

}

export default ResumeEditor;