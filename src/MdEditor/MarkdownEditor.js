import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import codemirrorMd from 'codemirror/mode/markdown/markdown';
import Codemirror from 'react-codemirror';

//Custom components
import LinkDialog from './LinkDialog';
import ToolbarPanel from './ToolbarPanel';

import { MarkdownEditorContext, MarkdownEditorProvider } from './contexts'
import { setCode } from './formatting';

function MarkdownEditor(props) {

  const [code, setCode] = useContext(MarkdownEditorContext).codeState;
  const [title, setTitle] = useContext(MarkdownEditorContext).titleState;
  const [tokens, setTokens] = useContext(MarkdownEditorContext).tokensState;

  const [cm, setCm] = useState(null);


  useEffect(() => {
    setCm(props.cm);
    setCode(props.code);
    setTitle(props.title);
    cm.Codemirror.on('cursorActivity', setTokens(getCurrentFormat(cm)))
  });

    const options = {
      lineNumbers: true,
      mode: 'markdown'
    }

    return (
      <div>
        <MarkdownEditorProvider>
        <LinkDialog
          toggleDialog={this.toggleDialog}
          cm={this.state.cm}
        />
        <ToolbarPanel
          cm={this.state.cm}
        />
        <Codemirror
          ref={((ref) => { this.cm = ref })}
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
        />
        </MarkdownEditorProvider>
      </div>
    )
};

MarkdownEditor.propTypes = {
  code: PropTypes.string,
  title: PropTypes.string
}

export default MarkdownEditor;
