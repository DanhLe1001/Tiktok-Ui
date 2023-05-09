import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRouter } from './routers';
import { DefaultLayout } from './layouts';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouter.map((router, index) => {
            let Layout: any = DefaultLayout;
            if (router.layout) {
              Layout = router.layout;
            }
            else if (router.layout === null) {
              Layout = Fragment;
            }

            const Page = router.component;
            return <Route
              key={index}
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
