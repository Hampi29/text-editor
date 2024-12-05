import {Component} from 'react'

import {
  MainContainer,
  Card,
  TextEditorContainer,
  Image,
  RightContainer,
  Styles,
  TextArea,
  LineBreak,
  CustomButtonBold,
  CustomButtonUnderLine,
  CustomButtonItalic,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false, text: ''}
  onText = event => {
    this.setState({text: event.target.value})
  }
  onClickBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({isUnderLine: !prev.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine, text} = this.state
    return (
      <MainContainer>
        <Card>
          <TextEditorContainer>
            <h1>Text Editor</h1>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorContainer>
          <RightContainer>
            <Styles>
              <li>
                <CustomButtonBold data-testid="bold" onClick={this.onClickBold} isBold={isBold} >
                  B
                </CustomButtonBold>
              </li>
              <li>
                <CustomButtonItalic
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  isItalic={isItalic}
                >
                  i
                </CustomButtonItalic>
              </li>
              <li>
                <CustomButtonUnderLine
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  isUnderLine={isUnderLine}
                >
                  U
                </CustomButtonUnderLine>
              </li>
            </Styles>
            <LineBreak />
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderLine={isUnderLine}
              value={text}
              onChange={this.onText}
            ></TextArea>
          </RightContainer>
        </Card>
      </MainContainer>
    )
  }
}

export default TextEditor
