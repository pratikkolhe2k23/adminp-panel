import * as React from 'react';
import NavigationSideBar from './components/sidebar';
import NavigationUpwardBar from './components/navcontrol';
import './App.css';
export default function App() {
  return (
    <>
      <NavigationSideBar />
      <NavigationUpwardBar />
    </>
  );
}

