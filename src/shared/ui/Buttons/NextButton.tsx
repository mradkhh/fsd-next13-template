import React, {FC} from 'react';
import styles from './styles/NextButton.module.scss';
import Link from 'next/link';

interface ButtonProps {
  type: string;
  text: string;
  href?: string | undefined;
}

const NextButton = ({type = 'button', text, href = '/'}: ButtonProps) => {
  return <div className={styles.bsdsdutton}>{text}</div>;
};

export default NextButton;
