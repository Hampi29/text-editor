import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color:#25262c;
    height:100vh;
    width:100vw;
    padding:30px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Card = styled.div`
    background-color:#1b1c22;
    height:60vh;
    width:70vw;
    padding:15px;
    display:flex;
    align-items:center;
`
export const TextEditorContainer = styled.div`
    padding:20px;
    text-align:center;
    color:white;
    width:50%;
    height:100%;
`
export const Image = styled.img`
    height:50%;
    width:80%;
    margin-top:20px;
`
export const RightContainer = styled.div`
    background-color:#25262c;
    border:2px #f8fafc solid;
    border-radius:15px;
    height:100%;
    width:50%;
`
export const Styles = styled.ul`
    padding:5px;
    display:flex;
    align-items:center;
    list-style-type:none;
`

export const LineBreak = styled.br`
    border:2px #f8fafc solid;
`
export const TextArea = styled.textarea`
    padding:10px;
    height:70%;
    width:100%;
    color:white;
    font-weight:${props => (props.isBold ? 'bold' : 'normal')};
    font-style:${props => (props.isItalic ? 'italic' : 'normal')};
    text-decoration:${props => (props.isUnderLine ? 'underline' : 'normal')};
    background-color:#25262c;
`
export const CustomButtonBold = styled.button`
    border:none;
    background-color:transparent;
    color:${props => (props.isBold ? '#faff00' : '#f1f5f9')};
`
export const CustomButtonItalic = styled.button`
    border:none;
    background-color:transparent;
    color:${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
    margin-left:15px;
    font-style:italic;
`

export const CustomButtonUnderLine = styled.button`
    border:none;
    background-color:transparent;
    color:${props => (props.isUnderLine ? '#faff00' : '#f1f5f9')};
    text-decoration:underline;
    margin-left:15px;
`
