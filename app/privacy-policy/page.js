'use client';
import { React } from 'react';
import styles from '../page.module.css';
import Data from '../content/privacy-policy.mdx';
import '../styles/content.css';

const TermsAndConditions = () => {
  return (
    <main
      className={`container maxwidth-1366`}
      style={{ margin: '116px auto 16px auto' }}
    >
      <Data />
    </main>
  );
};

export default TermsAndConditions;
