import './App.css';
function Header(){
  return <header>
         <h1><a href = "/">Hello World</a></h1>
       </header>
}

function Nav(){
  return <nav>
         <ol>
            <li><a href = "/list/1">html</a></li>
            <li><a href = "/list/2">css</a></li>
            <li><a href = "/list/3">javascript</a></li>
         </ol>
       </nav>
}

function Article() {
  return <article>
          <h2>Welcome</h2>
            This is..
         </article>
}
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
