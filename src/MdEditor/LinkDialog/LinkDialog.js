import React from 'react';
import PropTypes from 'prop-types';

//MUI stuff
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { getUrl, isUrl, setUrl, updateUrl } from '../formatting'

export default class LinkDialog extends React.Component {
  static propTypes = {
    isDialogOpen: PropTypes.bool.isRequired,
    cm: PropTypes.object, //eslint-disable-line
    isImageDialog: PropTypes.bool,
    tokens: PropTypes.arrayOf(PropTypes.string)
  }

  static contextTypes = {
    toggleDialog: PropTypes.func
  }

  constructor() {
    super()
    this.state = {
      url: ''
    }
    this.onChange = this.onChange.bind(this)
    this.insertLink = this.insertLink.bind(this)
  }

  componentWillReceiveProps({ tokens, cm }) {
    if (tokens[1] && tokens[1] === 'url') {
      this.setState({ url: getUrl(cm.codeMirror) })
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value
    })
  }

  insertLink() {
    const { state: { url } } = this
    const { props: { cm, tokens, isImageDialog } } = this

    this.setState({ url: '' })
    this.context.toggleDialog()()

    return isUrl(tokens) ? updateUrl(cm, url) : setUrl(cm, url, isImageDialog)
  }

  handleClose() {
    setOpen(false);
  }

  render() {
    const { isDialogOpen } = this.props
    const { toggleDialog } = this.context
    return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Insert hyperlink</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please paste the hyperlink below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Url"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

/*
<Dialog
        title="Insert hyperlink"
        actions={[
          <FlatButton
            label="Cancel"
            primary
            onTouchTap={toggleDialog()}
          />,
          <FlatButton
            label="Ok"
            primary
            keyboardFocused
            disabled={this.state.url === ''}
            onTouchTap={this.insertLink}
          />
        ]}
        modal={false}
        open={isDialogOpen}
        onRequestClose={toggleDialog()}
      >
        <TextField
          id="url"
          onChange={this.onChange}
          floatingLabelText="Url"
          value={this.state.url}
          style={{
            width: '100%'
          }}
        />
      </Dialog>
*/
