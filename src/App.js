import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSearchField } from './redux/searchSlice';
import { setMonsters } from './redux/monstersSlice';
import { setFilteredMonsters } from './redux/filteredMonstersSlice';

const App=() => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.searchFieldReducer.searchField);
  const monsters = useSelector((state) => state.monstersReducer.monsters);
  const filteredMonsters = useSelector((state) => state.filteredMonstersReducer.filteredMonsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>response.json())
      .then((users)=> dispatch(setMonsters(users)))
  }, [dispatch]);

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(setSearchField(searchFieldString));
  }
  console.log('rendered');
  
  useEffect(()=>{
    const newArray = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    dispatch(setFilteredMonsters(newArray));
  },[monsters, searchField, dispatch]);

  return (
    <div className="App">
      <h1 className='app-title'>
        Monsters Rolodex
      </h1>
      <SearchBox 
        onChangeHandler = {onSearchChange}
        className = 'monsters-search-box'
        placeholder = 'search monsters'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component{
//   constructor() {
//     super();

//      this.state = {
//       monsters: [],
//       searchField: ''
//      };

//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) =>response.json())
//     .then((users)=> this.setState(()=>{
//       return {monsters: users};
//     }))
//   }

//   onSearchChange = (event)=>{
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(()=>{
//       return {searchField};
//     });
//   }

//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filterArray = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
      
//     );
//   }
// }

export default App;
