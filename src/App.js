import './App.css';
import logo from './logo.svg';
import { NotFound } from './NotFound';
import { Todo as TodoApp} from './TodoModule/Todo';
import { ContactsBookApp } from './ContactsModule/ContactsBookApp';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<div className="App">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-header">Welcome to my Projects:</h1>
					<nav>
						<li> <Link to="/todolist" className='App-link' >Todo List</Link></li>
						<li> <Link to="/contactsbook" className='App-link'>Contacts Book</Link></li>
					</nav>
					<div className="App-gh">
						<a href="https://github.com/AnnaRusskova/HW8_Routing" className="App-gh-link">My GitHub Account</a>
						<div className="App-gh-link fz14">by Anna Russkova</div> 
					</div>	
					</div>
				</Route>
				<Route path='/todolist' component={TodoApp} />
				<Route path='/contactsbook' component={ContactsBookApp} />
				<Route path='*' component={NotFound} />

			</Switch>
		</Router>
		);
}

export default App;
