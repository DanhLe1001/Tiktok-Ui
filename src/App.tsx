import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRouter } from './routers/routers';
import { DefaultLayout, HeaderOnly } from './layouts';
import Search from './page/Search/Search';
import Upload from './page/Upload/Upload';

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
          <Route path="/search" element={<Search />}></Route>
          <Route path="/upload" element={<><HeaderOnly /> <Upload /></>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
