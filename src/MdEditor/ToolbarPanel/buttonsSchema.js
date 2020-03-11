import React from 'react';

//MUI Stuff
import Bold from '@material-ui/icons/FormatBold';
import Italic from '@material-ui/icons/FormatItalic';
import Size from '@material-ui/icons/FormatSize';
import BulletsList from '@material-ui/icons/FormatListBulleted';
import NumbersList from '@material-ui/icons/FormatListNumbered';
import Quote from '@material-ui/icons/FormatQuote';
import Code from '@material-ui/icons/Code';
import ImageIcon from '@material-ui/icons/Image';
import LinkIcon from '@material-ui/icons/InsertLink';
import NavigationExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { lightBlack } from '@material-ui/core/colors'
import {
  getUrlStyleIfActive,
  getStyleIfActive,
  isActiveToken,
  isNotUrlBorder,
  handleHeading,
  setBold,
  removeBold,
  setItalic,
  removeItalic,
  setUl,
  removeUl,
  setOl,
  removeOl,
  setH1,
  removeH1,
  setH2,
  removeH2,
  setH3,
  removeH3,
  setCode,
  removeCode,
  setQuote,
  removeQuote
} from '../formatting'
import FlexWrapper from './FlexWrapper'

const getSchema = (cm, tokens) => {
  const getUrlStyle = getUrlStyleIfActive(cm)
  const getActiveStyle = getStyleIfActive(tokens)
  const formatBold = setBold(cm)
  const cancelBold = removeBold(cm)
  const formatItalic = setItalic(cm)
  const cancelItalic = removeItalic(cm)
  const formatUl = setUl(cm)
  const cancelUl = removeUl(cm)
  const formatOl = setOl(cm)
  const cancelOl = removeOl(cm)
  const formatCode = setCode(cm)
  const cancelCode = removeCode(cm)
  const formatQuote = setQuote(cm)
  const cancelQuote = removeQuote(cm)
  const handleH1 = isActiveToken('header-1', tokens, 1) ? removeH1(cm) : setH1(cm)
  const handleH2 = isActiveToken('header-2', tokens, 1) ? removeH2(cm) : setH2(cm)
  const handleH3 = isActiveToken('header-3', tokens, 1) ? removeH3(cm) : setH3(cm)

  return [
    [
      {
        style: {
          marginLeft: 24,
          height: 'auto',
          padding: 6,
          ...getActiveStyle('header')
        },
        isDropDown: true,
        onItemTouchTap: handleHeading([handleH1, handleH2, handleH3]),
        options: [
          {
            primaryText: 'Heading 1',
            style: { fontSize: 12 }
          },
          {
            primaryText: 'Heading 2',
            style: { fontSize: 14 }
          },
          {
            primaryText: 'Heading 3',
            style: { fontSize: 16 }
          }
        ],
        icon: (
          <FlexWrapper>
            <Size color={lightBlack} />
            <NavigationExpandMoreIcon />
          </FlexWrapper>
        )
      },
      {
        style: { ...getActiveStyle('strong') },
        icon: <Bold color={lightBlack} />,
        onClick: isActiveToken('strong', tokens) ? cancelBold : formatBold
      },
      {
        style: getActiveStyle('em'),
        icon: <Italic color={lightBlack} />,
        onClick: isActiveToken('em', tokens) ? cancelItalic : formatItalic
      }
    ],
    [
      {
        style: { marginLeft: 24, ...getActiveStyle('ul') },
        icon: <BulletsList color={lightBlack} />,
        onClick: isActiveToken('ul', tokens) ? cancelUl : formatUl
      },
      {
        style: getActiveStyle('ol'),
        icon: <NumbersList color={lightBlack} />,
        onClick: isActiveToken('ol', tokens) ? cancelOl : formatOl
      }
    ],
    [
      {
        style: { marginLeft: 24, ...getActiveStyle('comment') },
        icon: <Code color={lightBlack} />,
        onClick: isActiveToken('comment', tokens) ? cancelCode : formatCode
      },
      {
        style: { ...getActiveStyle('quote') },
        icon: <Quote color={lightBlack} />,
        onClick: isActiveToken('quote', tokens) ? cancelQuote : formatQuote
      }
    ],
    [
      {
        style: {
          marginLeft: 24,
          ...(isActiveToken('url', tokens, 1) && isNotUrlBorder(cm.codeMirror) ? getUrlStyle('link') : {})
        },
        icon: <LinkIcon color={lightBlack} />,
        openDialog: true
      },
      {
        style: {
          ...(isActiveToken('url', tokens, 1) && isNotUrlBorder(cm.codeMirror) ? getUrlStyle('image') : {})
        },
        icon: <ImageIcon color={lightBlack} />,
        openDialog: true,
        isImageDialog: true
      }
    ]
  ]
}

export default getSchema
