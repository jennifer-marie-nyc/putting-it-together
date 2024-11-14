import PersonCard from "./components/PersonCard"

function App() {

  return (
    <div className="container mt-4 pt-5 px-4">
      <PersonCard
        lastName="Doe"
        firstName="Jane"
        startingAge={45}
        hairColor="Black"
      />
      <PersonCard
        lastName="Smith"
        firstName="John"
        startingAge={88}
        hairColor="Brown"
      />
    </div>
  )
}

export default App
