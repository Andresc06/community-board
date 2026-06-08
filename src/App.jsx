import './App.css';
import Header from './components/Header/Header';
import ResourceCard from './components/ResourceCard/ResourceCard';

const App = () => {

  return (
    <div className="App">
      <Header />
      <main className="board-content" id="resources">
        <ResourceCard 
        title="Title of Resource"
        description="Description of Resource"
        url="https://www.example.com/resource"
        imageUrl="https://www.example.com/resource-image.jpg"
        category="Category of Resource"
        />
      </main>
    </div>
  )
}

export default App