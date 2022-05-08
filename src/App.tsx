import React from 'react';
// import logo from './logo.svg';
import { ProductCardList } from './components/product-card-list/product-card-list.component'
import './App.scss';
import { SearchBox } from './components/search-box/search-box.component';

type AppState = {
  products: any[],
  searchQuery: string
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    products: [],
    searchQuery: ''
  }

  // constructor(params: any) {
  //   super(params);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({products: users}));
  }

  handleChange = (e: any) => {
    this.setState({searchQuery: e.target.value});
  }

  render(): React.ReactNode {
    const {products, searchQuery} = this.state;    
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));    
    
    return (
      <div className="App">
        <header className='header'>
          <h1>Kodes Store</h1>
        </header>
        <SearchBox placeholder={'Search Products'} 
        handleChange={this.handleChange} />
        <ProductCardList products={filteredProducts}>          
        </ProductCardList>
      </div>
    );
  }
}

export default App;
