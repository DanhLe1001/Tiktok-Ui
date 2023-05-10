import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRouter } from './routers/routers';
import { DefaultLayout } from './layouts';
import Live from './page/Live/Live';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {publicRouter.map((applicant) => (
              <Route
                path={applicant.path}
                key={applicant.path}
                element={applicant.component}
              />
            ))}
          </Route>
          <Route path="/live" element={<Live />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
