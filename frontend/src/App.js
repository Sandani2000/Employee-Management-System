import Home from "./Pages/Home/Home";
import View from "./Pages/View/View";
import NoticeList from "./Pages/List/NoticeList";
import Edit from "./Pages/Edit/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HR from "./Pages/List/HR";
import Personal from "./Pages/List/Personal";
import AddEmployee from "./Pages/Add/AddEmployee";
import AddNotice from "./Pages/Add/AddNotice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            {/* Users */}
            {/* <Route path="user">
              <Route index element={<List />} />
              <Route path=":userId" element={<View />} />
              <Route path="add" />
            </Route> */}

            {/* Employees */}
            <Route path="employee">
              <Route index element={<Personal title="Personal info" />} />
              <Route path="hrInfo" element={<HR title="HR info" />} />
              <Route path="empId" element={<View />} />
              <Route path="add" element={<AddEmployee />} />
              <Route path="update/:id" element={<Edit />} />
            </Route>

            {/* Notices */}
            <Route path="notice">
              <Route index element={<NoticeList />} />
              <Route path="noticeId" element={<View />} />
              <Route path="add" element={<AddNotice />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
