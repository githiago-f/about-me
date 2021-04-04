import React from 'react';

const colors = {
  javascript: 'bg-javascript',
  java: 'bg-java',
  scala: 'bg-scala',
  typescript: 'bg-typescript',
  nolang: 'bg-nolang'
};

type Lang = keyof typeof colors;

type Props = {language: Lang};

export const ProgramingLanguage = (props: Props) => (
  <div className="flex flex-row items-center justify-start space-x-2">
    <span className={`rounded-full p-1 h-1 ${colors[props.language.toLowerCase() as Lang]}`}></span>
    <span translate="no">{props.language}</span>
  </div>
);

