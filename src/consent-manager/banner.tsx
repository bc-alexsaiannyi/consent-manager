import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'

import { Button } from './buttons'

const Root = styled<{ backgroundColor: string; textColor: string }, 'div'>('div')`
  ${fontStyles};
  position: relative;
  padding: 14px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  text-align: left;
  font-size: 12px;
  line-height: 1.3;
`

const Content = styled('div')`
  margin-top: 16px;
  a,
  button {
    display: inline;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
  }
`

const P = styled('p')`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin: 0;
`
const ButtonContainer = styled('div')`
  display: 'flex';
  flexdirection: 'row';
  justifycontent: 'flex-end';
  flexwrap: 'nowrap';
  margin: 0;
  margin-top: 16px;
`

const SettingsButton = styled(Button)`
  background: none;
  color: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;

  @media only screen and (min-width: 719px) {
    margin-left: 8px;
  }
`

const AcceptButton = styled(Button)`
  margin-left: 8px;
`

interface Props {
  innerRef: (node: HTMLElement | null) => void
  onChangePreferences: () => void
  onAcceptAll: () => void
  content: React.ReactNode
  backgroundColor: string
  textColor: string
}

export default class Banner extends PureComponent<Props> {
  static displayName = 'Banner'

  render() {
    const {
      innerRef,
      onChangePreferences,
      onAcceptAll,
      content,
      backgroundColor,
      textColor
    } = this.props

    return (
      <Root innerRef={innerRef} backgroundColor={backgroundColor} textColor={textColor}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            marginTop: '-16px'
          }}
        >
          <Content>
            <P>{content}</P>
          </Content>

          <ButtonContainer>
            <SettingsButton onClick={onChangePreferences}>Settings</SettingsButton>
            <AcceptButton onClick={onAcceptAll}>Accept All Cookies</AcceptButton>
          </ButtonContainer>
        </div>
      </Root>
    )
  }
}
