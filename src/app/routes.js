import AddQualityPage from "./pages/addQuality";
import EditQualityPage from "./pages/editQuality";
import Example from "./pages/example";
import QualitiesListPage from "./pages/qualititesList";

const routes = [
  { path: "/add", name: "Add", component: AddQualityPage },
  {
    path: "/example",
    name: "Example",
    // display: false,
    component: Example,
  },
  {
    path: "/edit/:id",
    display: false,
    name: "Edit",
    component: EditQualityPage,
  },
  {
    path: "/",
    name: "Qualities List",
    display: false,
    component: QualitiesListPage,
  },
];

export default routes;
