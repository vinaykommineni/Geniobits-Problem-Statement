import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`

/* Fonts Used */

@font-face{
  font-family: 'Other';
  src: url(/fonts/lato.ttf);
  font-display: block;
}

@font-face{
  font-family: 'Main';
  src: url(/fonts/lato.ttf);
  font-display: block;
}

@font-face{
  font-family: 'Styled';
  src: url(/fonts/lato.ttf);
  font-display: block;
}

/* Fonts Used End */

/* ------------------------------------------------------------------ */

/* Fonts Size and Rem selection */

html{
  font-size: 16px;
}

h1 {
  font-size: 2pc;
  line-height: 3pc;
}

h2 {
  font-size: 1.8pc;
  line-height: 3pc;
}

h3 {
  font-size: 1.6pc;
  line-height: 2.5pc;
}

h4 {
  font-size: 1.4pc;
  line-height: 2.5pc;
}

h5 {
  font-size: 1.2pc;
  line-height: 2pc;
}

h6 {
  font-size: 1pc;
  line-height: 1.8pc;
}

/* Fonts Size and Rem selection END */

/* ------------------------------------------------------------------ */

/* Base Elements Styles */

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  font-family: inherit;
  font-size: inherit;
  word-break: break-word;
  line-height: inherit;
}

body{
  min-height: 100vh;
  font-size: .8pc;
  line-height: 2pc;
  font-family: Main, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

body > #root{
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.absolute-invisibility{
  position: absolute;
  display: none;
  width: 0; height: 0;
  border: 0; outline: 0;
  background: transparent;
}

a{
  text-decoration: underline;
}

button{
  background-color: transparent;
  outline: 0 none;
  cursor: pointer;
  padding: 0 .5rem;
}

input {
  outline: 0 none;
  background-color: transparent;
}

/* Base Elements Styles */

/* ------------------------------------------------------------------ */

/* Magnifing Glass */

.el-img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/

  width: 100px;
  height: 100px;
}

/* Magnifing Glass ENDS */

/* ------------------------------------------------------------------ */

/* Custom Scroll bar */

::-webkit-scrollbar {
  width: .3rem;
  height: .3rem;
}

/* Track */

::-webkit-scrollbar-track {
  background: #004f792a;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: #004f79;
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  background: #003957;
}

/* Custom Scroll bar END */

/* ------------------------------------------------------------------ */

/* Autocomplete for Input */

.el-autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/

  top: 100%;
  left: 0;
  right: 0;
}

.el-autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

.el-autocomplete-items div:hover {
  /*when hovering an item:*/

  background-color: #e9e9e9;
}

.el-autocomplete-active {
  /*when navigating through the items using the arrow keys:*/

  background-color: DodgerBlue !important;
  color: #ffffff;
}

/* Autocomplete for Input ENDS */

/* ------------------------------------------------------------------ */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

/* ------------------------------------------------------------------ */

@keyframes opacity-inm {
  from{
    opacity: 0;
  }

  to{
    opacity: 1;
  }

}

`

export default GlobalStyle;