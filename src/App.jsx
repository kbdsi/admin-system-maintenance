import './App.css';
import { Component } from 'react';
import LeftSideBar from './LeftSideBar';
import TopBar from './TopBar';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './maintenance/country/Country';
import CountryAdd from './maintenance/country/CountryAdd';
import CountryDetail from './maintenance/country/CountryDetail';
import CountryUpdate from './maintenance/country/CountryUpdate';
import Province from './maintenance/province/Province';
import ProvinceAdd from './maintenance/province/ProvinceAdd';
import ProvinceDetail from './maintenance/province/ProvinceDetail';
import ProvinceUpdate from './maintenance/province/ProvinceUpdate';
import City from './maintenance/city/City';
import CityAdd from './maintenance/city/CityAdd';
import CityDetail from './maintenance/city/CityDetail';
import CityUpdate from './maintenance/city/CityUpdate';
import District from './maintenance/district/District';
import DistrictAdd from './maintenance/district/DistrictAdd';
import DistrictDetail from './maintenance/district/DistrictDetail';
import DistrictUpdate from './maintenance/district/DistrictUpdate';
import Village from './maintenance/village/Village';
import VillageAdd from './maintenance/village/VillageAdd';
import VillageDetail from './maintenance/village/VillageDetail';
import VillageUpdate from './maintenance/village/VillageUpdate';
import Parameter from './maintenance/parameter/Parameter';
import ParameterAdd from './maintenance/parameter/ParameterAdd';
import ParameterDetail from './maintenance/parameter/ParameterDetail';
import ParameterUpdate from './maintenance/parameter/ParameterUpdate';

class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "/js/kb.js";
    script.async = true;

    document.body.appendChild(script);

    const scriptKb1 = document.createElement("script");

    scriptKb1.src = "/js/kb1.js";
    scriptKb1.async = true;

    document.body.appendChild(scriptKb1);

    document.addEventListener('readystatechange', function (event) {
      if (document.readyState === "complete") {
        document.body.setAttribute("data-theme", "colored");
      }
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <LeftSideBar />

          <div className="main">
            <TopBar />

            <main className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/parameter" element={<Parameter />} />
                <Route exact path="/parameterAdd" element={<ParameterAdd />} />
                <Route exact path="/parameterDetail" element={<ParameterDetail />} />
                <Route exact path="/parameterUpdate" element={<ParameterUpdate />} />
                <Route exact path="/country" element={<Country />} />
                <Route exact path="/countryAdd" element={<CountryAdd />} />
                <Route exact path="/country/:id" element={<CountryDetail />} />
                <Route exact path="/country/:id/edit" element={<CountryUpdate />} />
                <Route exact path="/province" element={<Province />} />
                <Route exact path="/provinceAdd" element={<ProvinceAdd />} />
                <Route exact path="/province/:id" element={<ProvinceDetail />} />
                <Route exact path="/province/:id/edit" element={<ProvinceUpdate />} />
                <Route exact path="/city" element={<City />} />
                <Route exact path="/cityAdd" element={<CityAdd />} />
                <Route exact path="/city/:id" element={<CityDetail />} />
                <Route exact path="/city/:id/edit" element={<CityUpdate />} />
                <Route exact path="/district" element={<District />} />
                <Route exact path="/districtAdd" element={<DistrictAdd />} />
                <Route exact path="/district/:id" element={<DistrictDetail />} />
                <Route exact path="/district/:id/edit" element={<DistrictUpdate />} />
                <Route exact path="/village" element={<Village />} />
                <Route exact path="/villageAdd" element={<VillageAdd />} />
                <Route exact path="/village/:id" element={<VillageDetail />} />
                <Route exact path="/village/:id/edit" element={<VillageUpdate />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
