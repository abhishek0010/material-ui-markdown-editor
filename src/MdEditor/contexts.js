import React, { useState, createContext} from 'react';

import MarkdownEditor from './MarkdownEditor';

const MarkdownEditorContext = createContext();

const MarkdownEditorProvider = (props) => {
    const [title, setTitle] = useState("Foo");
    const [code, setCode] = useState("# Fancy markdown editor!");
    const [tokens, setTokens] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isImageDialog, setIsImageDialog] = useState(false);

    const toggleDialog = (isImageDialog) => {
          setIsDialogOpen(!isDialogOpen);
          setIsImageDialog(isImageDialog);
    };

    

    return (
        <MarkdownEditorContext.Provider value={{
            titleState : [title, setTitle],
            codeState: [code, setCode],
            tokensState : [tokens, setTokens],
            isDialogOpenState : [isDialogOpen, setIsDialogOpen],
            isImageDialogState : [isImageDialog, setIsImageDialog],
            toggleDialog: toggleDialog
            }}>
            {props.children}
        </MarkdownEditorContext.Provider>
    )

};

export {MarkdownEditorContext, MarkdownEditorProvider};