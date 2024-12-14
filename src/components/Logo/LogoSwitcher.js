// src/components/Logo/LogoSwitcher.js
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const LogoSwitcher = () => {
  const { colorMode } = useColorMode();

  return (
    <img
      src={colorMode === 'dark' ? './assets/images/avatar-dark.png' : './assets/images/avatar-light.png'}
      alt="logo"
      style={{ width: '500px', height: 'auto' }}
    />
  );
};

export default LogoSwitcher;
