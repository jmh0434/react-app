import './App.css';
import { useState } from "react";

const Header = (props) => {
  return <header>
         <h1><a href = "/" onClick = {(event) => {
            event.preventDefault();
            props.onChangeMode();
         }}>{props.title}</a></h1>
       </header>
}

const Nav = (props) => {
  const lis = [];
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key = {t.id}><a id= {t.id} href = {"/list/"+t.id}
      onClick = {(event) => {
        event.preventDefault();
        props.onChangeMode(event.target.title);
      }}>{t.title}</a></li>);
  } 
  return <nav>
         <ol>
            {lis}
         </ol>
       </nav>
}

const Article = (props) => {
  return <article>
          <h2>{props.title}</h2>
            {props.body}
         </article>
}
const App = () => {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id : 1, title : "html", body : "html is.."},
    {id : 2, title : "css", body : "css is.."},
    {id : 3, title : "javascipt", body : "javascript is.."}
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title = 'WELCOME' body = "Hello React"></Article>
  } else if (mode === 'READ') {
      let title, body = null;
      for (let i = 0; i < topics.length; i++) {
        if(topics[i].id === id){
          title = topics[i].title;
          body = topics[i].body;
        }
      }
      content = <Article title = {title} body = {body}></Article>
}
  return (
    <div>
      <Header
        title="Hello React"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}></Nav>
      {content}
    </div>
  );
}

export default App;
