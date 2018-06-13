import React, { Component } from 'react';
import Prism from 'prismjs'

class StyleEditor extends Component {
    /**
     * Created by zxt on 2017/3/7.
     */
    goBottom() {
        this.container.scrollTop = 100000;
    }
    render(){
        var highlightedCode = {__html: Prism.highlight(this.props.styleCode, Prism.languages.css)};
        //alert(highlightedCode);
        return <div className="container">
                <div id="rooter" className="styleEditor" ref={(div) => { this.container = div; }}>
                    <style>
                        {this.props.styleCode}
                    </style>
                    <pre dangerouslySetInnerHTML={ highlightedCode } />
                </div>
                </div>
    }

}

export default StyleEditor;