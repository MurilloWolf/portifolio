/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { Copy } from 'phosphor-react';
// import Highlight from 'react-highlight';
// import 'highlight.js/styles/github-dark.css';
import styles from './styles.module.css';
import * as Styles from './styles';

function Card(props: AppProps) {
  const [showAnwser, setShowAnswer] = useState(false);
  const marked = 'const result = []\nconst filteredList = result.map( item => item.name)';

  const handleShowAnswer = () => {
    setShowAnswer(!showAnwser);
  };

  return (
    <div className={`${styles.flipContainer}  max-w-3xl`}>
      <section className={`${styles.flipper} flex flex-col rounded-lg p-0 ${showAnwser ? styles.showBack : ''}`}>
        <div className={`${styles.front}`}>
          <Styles.CardHeader className="justify-center">
            <Styles.CardAvatar
              className="w-8 h-8"
              alt="Tecnology - Js"
              src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png"
            />
            <Styles.CardInfo>
              <Styles.InfoTitle>
                JS Vanilla

              </Styles.InfoTitle>
              <Styles.InfoSubtitle>HOF - High Order Function</Styles.InfoSubtitle>
            </Styles.CardInfo>
            <span className="badge badge-outline badge-primary badge-sm">Fácil</span>
          </Styles.CardHeader>
          <Styles.CardContent>
            <Styles.CardTitle>O que esse código faz ?</Styles.CardTitle>
            <Styles.CodePanel>
              {/* <Highlight className="p-0 mt-4 w-full md:text-md sm:text-sm overflow-hidden text-xs" language="javascript" style={{ worldWrap: '   break-word' }}>{marked}</Highlight> */}
              <Styles.CopyIcon color="white" size={32} />
            </Styles.CodePanel>
          </Styles.CardContent>
          <Styles.ButtonLink
            type="button"
            onClick={handleShowAnswer}
          >
            Ver resposta
          </Styles.ButtonLink>
        </div>
        <div className={`${styles.back}  right-0 top-0 p-6 ${showAnwser ? styles.showBack : ''}`}>
          <Styles.CardContent>
            <Styles.CardTitle>
              Ele cria uma nova lista (array) a partir da lista "result".
            </Styles.CardTitle>
            <Styles.CardText>Uma lista com o nome ("name") da lista result</Styles.CardText>
          </Styles.CardContent>
          <Styles.ButtonLink
            type="button"
            onClick={handleShowAnswer}
          >
            Ver pergunta
          </Styles.ButtonLink>
        </div>
      </section>

    </div>

  );
}
export default Card;
