import './App.css';
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
    lis.push(<li key = {t.id}><a id = {t.id} href = {"/list/"+t.id}
      onClick = {(event) => {
        event.preventDefault();
        props.onChangeMode(event.target.id);
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
  const topics = [
    {id : 1, title : "html", body : "html is.."},
    {id : 2, title : "css", body : "css is.."},
    {id : 3, title : "javascipt", body : "javascript is.."}
  ];
  return (
    <div>
      <Header title = "Hello React" onChangeMode = {()=>{
        alert('header');
        }}></Header>
      <Nav topics = {topics} onChangeMode = {(id)=>{
        alert(id);
      }}></Nav>
      <Article title = "Welcome" body = "Web"></Article>
    </div>
  );
}

export default App;
