import React from 'react';
// @ts-ignore
import style from './App.module.css';
import {NavBar} from "./components/navBar/navBar";
import {Header} from "./components/header/header";
import {Intro} from "./components/intro/intro";
import Steps from "./components/steps/steps";
import Contacts from "./components/contacts/contacts";
import {Cost} from "./components/cost/cost";
import {Services} from "./components/services/services";
import {civilCasesArr, criminalProceedingsArr, text1, text2} from "./services/constants";
import {Content} from "./components/content/content";
import {Form} from "./components/form/form";

function App() {
  return (
      <main className={style.main}>
          <NavBar/>
          <Header/>
          <Form/>
          <Intro/>
          <Content text1={text1} text2={text2}/>
          <Steps/>
          <Services arr={criminalProceedingsArr} title='услуги по уголовным делам' id='УГОЛОВНЫЕ_ДЕЛА'/>
          <Content text1='
          Каждому гарантируется право на
          получение квалифицированной
          юридической помощи (п. 1, ст. 48
          Конституции РФ). Я с успехом представляю
          интересы своих клиентов с 2009 года.
          Независимо от характера и сложности ваших
          юридических проблем, от меня вы получите
          полноценную помощь и эффективное
          юридическое сопровождение.
          '/>
          <Services arr={civilCasesArr} title='услуги по гражданским делам' id='ГРАЖДАНСКИЕ_ДЕЛА'/>
          <Cost/>
          <Contacts/>
      </main>
  );
}

export default App;
