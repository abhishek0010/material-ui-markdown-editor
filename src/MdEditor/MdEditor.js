import React from 'react';

import MarkdownEditor from './MarkdownEditor';
import { MarkdownEditorProvider } from './contexts';

export function MdEditor(props) {
    return (
        <div>
            <MarkdownEditorProvider>
                <MarkdownEditor title={props.title}
                    code={props.code}
                />
            </MarkdownEditorProvider>
        </div>
    );
};

export default MdEditor
