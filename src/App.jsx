import './App.css'
import { Link, useParams, BrowserRouter, Routes, Route } from 'react-router-dom'

function FooRoutes() {
  return (
    <>
      <h1>Foos</h1>
      <Routes>
        <Route path="foo/:name/*" element={<FooDetail />} />
      </Routes>
    </>
  )
}

function FooDetail() {
  return (
    <>
      <h2>Foo details</h2>
      <Routes>
        <Route path="" element={<Name />} />
      </Routes>
    </>
  )
}

function Name() {
  const { name } = useParams()
  console.log('name', name)
  return <p>name: &quot;{name}&quot;</p>
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">Home</Link>
        <Link to="/foos/foo/bar">Working path</Link>
        <Link to="/foos/foo/%20">Broken path</Link>
        <Link to="/foos/foo/%0A">Broken path with newline</Link>
      </div>
      <Routes>
        <Route path="/foos/*" element={<FooRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
