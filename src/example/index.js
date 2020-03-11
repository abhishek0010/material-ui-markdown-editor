import React from 'react'
import ReactDOM from 'react-dom'

//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';

//import injectTapEventPlugin from 'react-tap-event-plugin'  // eslint-disable-line
import 'codemirror/lib/codemirror.css';// import codemirror styles
import MdEditor from '../MdEditor';
import '../MdEditor/codemirrorOverride.css';


//injectTapEventPlugin()

const GithubIcon = () =>
  <a
    style={{
      fontSize: 24,
      lineHeight: '50px',
      color: '#ffffff',
      paddingRight: 24
    }}
    href="https://github.com/abhishek0010/material-ui-markdown-editor"
  >
    <i className="fa fa-github" aria-hidden="true" />
  </a>

const Example = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        showMenuIconButton={false}
        title="Material-UI Markdown Editor"
        iconElementRight={<GithubIcon />}
      />
      <div style={{ marginTop: 50 }} >
        <Grid container>
            <MdEditor
            title = "Custom Title"/>
        </Grid>
      </div>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
