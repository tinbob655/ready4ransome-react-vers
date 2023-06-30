import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

export function changePage(destination) {   //change page function
  if (destination == sessionStorage.getItem('currentPage')) {
    return null;
  } else {
    sessionStorage.setItem('currentPage', destination);
  };
  document.body.style.opacity = 0.0;
  setTimeout(() => {
    window.location.reload();
  }, 1001);
};

export async function copyTextToClipboard(text) {   //copy to clipboard function
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

if (sessionStorage.getItem('currentPage') == null || sessionStorage.getItem('currentPage') == undefined) {  //set home if no page saved
  sessionStorage.setItem('currentPage', 'Home');
};


setTimeout(() => {    //fadin
  window.scrollTo(0, 0);
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1.0;
}, 500);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>
);
