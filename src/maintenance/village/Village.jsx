import { Component } from "react";
import "./Village.css";
import axios from "axios";
import TableTemplate from "../TableTemplate";

class Village extends Component {

    //saat dipanggil, langsung render awal dengan village list yang kosong karena belum ada pencarian
    constructor(props) {
        /*save state for searched keywords:
         * option 1: onChange searched immediately
         * option 2: onSubmitted searched
         * option 3: both
         * */
        super(props);
        //tableContent must array of array of string
        this.state = {
            villageDemanded: "",
            searchCriteria: "",
            showSearchResult: false,
            villageList: [],
            tableContentWantToBeRendered: [],
            headerWantsToBeRender: [],
            tableTitle: "",
            searchClicked: false,
        };
        this.handleSearchedImmediate = this.handleSearchedImmediate.bind(this);
        this.handleSearchedSubmited = this.handleSearchedSubmited.bind(this);
        this.searchByCode = this.searchByCode.bind(this);
        this.searchByName = this.searchByName.bind(this);
    }
    handleSearchedImmediate(e) {
        //console.log(`yang lama ${this.state.villageDemanded} yang ${e.target.value}`);
        this.setState({
            villageDemanded: e.target.value,
        });
    }
    handleSearchedSubmited(e) {
        e.preventDefault();
        if (this.state.villageDemanded.length === 0) {
            var records = this.state.villageList;
            var recordsTem = [];
            var headersTem = [];
            headersTem.push("No.");
            headersTem.push("Code");
            headersTem.push("Name");
            // if (records.length == 0) {
            //   this.setState({
            //     tableContentWantToBeRendered: [],
            //   });
            // } else {
            for (let i = 0; i < records.length; i++) {
                var record = [];
                record.push(`${i + 1}`);
                record.push(records[i].code.toString());
                record.push(records[i].name.toString());
                recordsTem.push(record);
                if (i === records.length - 1) {
                    if (recordsTem.length > 0) {
                        this.setState((state) => ({
                            tableContentWantToBeRendered: recordsTem,
                            headerWantsToBeRender: headersTem,
                            tableTitle: "village list",
                            villageDemanded: "",
                            showSearchResult: true,
                            searchClicked: true,
                            searchCriteria: state.searchCriteria,
                        }));
                    }
                }
            }
        } else {
            //saat tombol search ditekan, cari dari villageData
            if (this.state.searchCriteria === "Code") {
                //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
                //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
                //var recordsTem=[];
                var records = this.state.villageList.filter((village) => village.code.toString().includes(this.state.villageDemanded.toUpperCase()));
                //console.log(records);
                var recordsTem = [];
                var headersTem = [];
                headersTem.push("No.");
                headersTem.push("Code");
                headersTem.push("Name");
                // if (records.length == 0) {
                //   this.setState({
                //     tableContentWantToBeRendered: [],
                //   });
                // } else {
                for (let i = 0; i < records.length; i++) {
                    var record = [];
                    record.push(`${i + 1}`);
                    record.push(records[i].code.toString());
                    record.push(records[i].name.toString());
                    recordsTem.push(record);
                    if (i === records.length - 1) {
                        if (recordsTem.length > 0) {
                            this.setState((state) => ({
                                tableContentWantToBeRendered: recordsTem,
                                headerWantsToBeRender: headersTem,
                                tableTitle: "village list",
                                villageDemanded: "",
                                showSearchResult: true,
                                searchClicked: true,
                                searchCriteria: state.searchCriteria,
                            }));
                        }
                    }
                }
            } else if (this.state.searchCriteria === "Name") {
                var records = this.state.villageList.filter((village) => village.name.toString().includes(this.state.villageDemanded.toUpperCase()));
                //console.log(records);
                //console.log(records.length);
                var recordsTem = [];
                var headersTem = [];
                headersTem.push("No.");
                headersTem.push("Code");
                headersTem.push("Name");
                // if (records.length == 0) {
                //   this.setState({
                //     tableContentWantToBeRendered: [],
                //   });
                // } else {
                for (let i = 0; i < records.length; i++) {
                    var record = [];
                    record.push(`${i + 1}`);
                    record.push(records[i].code.toString());
                    record.push(records[i].name.toString());
                    recordsTem.push(record);
                    if (i === records.length - 1) {
                        if (recordsTem.length > 0) {
                            //console.log(recordsTem.length);
                            this.setState((state) => ({
                                tableContentWantToBeRendered: recordsTem,
                                villageDemanded: "",
                                headerWantsToBeRender: headersTem,
                                tableTitle: "village list",
                                showSearchResult: true,
                                searchClicked: true,
                                searchCriteria: state.searchCriteria,
                            }));
                        }
                    }
                }
            }
        }
    }
    searchByName(e) {
        this.setState({
            searchCriteria: e.target.value,
        });
    }
    searchByCode(e) {
        this.setState({
            searchCriteria: e.target.value,
        });
    }
    //saat setelah dirender, seorang dapat mencari village dengan mengetik dalam input text, nama / code village.
    componentDidUpdate(prevProps, prevState, snapShot) {
        //console.log(this.state.villageDemanded);
        /*if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
          //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama village yang sesuai ke TableTemplate
        } else */

        //console.log("componentDidUpdate" + this.state.showSearchResult + prevState.showSearchResult);
        if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
            this.setState({
                showSearchResult: false,
            });
        }
    }
    componentDidMount() {
        //dipanggil pas render pertama selesai
        // fetch("https://kbdsi-mtsys.herokuapp.com/v0/village/retrieve-all")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     this.setState({
        //       villageList: result,
        //     });
        //     //console.log(this.state.villageList);
        //   });
        // fetch("https://kbdsi-mtsys.herokuapp.com/v0/village/retrieve-all", {
        //   method: "GET", // *GET, POST, PUT, DELETE, etc.
        //   mode: "cors", // no-cors, *cors, same-origin
        //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //   // credentials: 'same-origin', // include, *same-origin, omit
        //   headers: {
        //     Accept: "application/json",
        //     // Origin: "https://kbdsi-mtsys.herokuapp.com",
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //     "Access-Control-Allow-Origin": "*",
        //   },
        //   // redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: "strict-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //   // body: JSON.stringify(data) // body data type must match "Content-Type" header
        // }).then((res) => console.log(res.body));
        //get all village from mbak izza
        // axios
        //   .get("https://kbdsi-mtsys.herokuapp.com/v0/village/retrieve-all", {
        //     headers: {
        //       //Accept: "application/json",
        //       Accept: "application/json",
        //       // "Access-Control-Allow-Origin": "*",
        //     },
        //   })
        //   .then((response) => response.data.data)
        //   .then((result) => {
        //     console.log(result);
        //     this.setState({
        //       villageList: result,
        //     });
        //     //console.log(this.state.villageList);
        //   });

        //get lokal
        axios
            .get("/villageData.json", {
                headers: {
                    //Accept: "application/json",
                    Accept: "application/json",
                    // "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => response.data)
            .then((result) => {
                console.log(result);
                this.setState({
                    villageList: result,
                });
                //console.log(this.state.villageList);
            });
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">village</h1>

                    <p className="mb-4" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Search</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row" onSubmit={this.handleSearchedSubmited}>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 label-bold" id="inputCode">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type={"radio"} value="Code" onClick={this.searchByCode} name="criteria" required />
                                                            <label className="form-check-label" htmlFor="radioSearchByCode">
                                                                Code
                                                            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type={"radio"} value="Name" onClick={this.searchByName} name="criteria" required />
                                                            <label className="form-check-label" htmlFor="radioSearchByName">
                                                                Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputvillageSelect" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Country</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 ">
                                                        <select className="form-control" id="inputvillageSelect" multiple="">
                                                            <option value="ID">INDONESIA</option>
                                                            <option value="usa">USA</option>
                                                            <option value="sk">SOUTH KOREA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputProvinceSelect" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Province</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 ">
                                                        <select className="form-control" id="inputProvinceSelect" multiple="">
                                                            <option value="ID">DKI JAKARTA</option>
                                                            <option value="usa">JAWA BARAT</option>
                                                            <option value="sk">JAWA TENGAH</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCitySelect" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">City</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 ">
                                                        <select className="form-control" id="inputCitySelect" multiple="">
                                                            <option value="ID">JAKARTA PUSAT</option>
                                                            <option value="usa">JAKARTA BARAT</option>
                                                            <option value="sk">JAKARTA TIMUR</option>
                                                            <option value="sk">JAKARTA UTARA</option>
                                                            <option value="sk">JAKARTA SELATAN</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDistrictSelect" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">District</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 ">
                                                        <select className="form-control" id="inputDistrictSelect" multiple="">
                                                            <option value="ID">MENTENG</option>
                                                            <option value="usa">CEMPAKA PUTIH</option>
                                                            <option value="sk">GAMBIR</option>
                                                            <option value="sk">JOHAR BARU</option>
                                                            <option value="sk">KEMAYORAN</option>
                                                            <option value="sk">SAWAH BESAR</option>
                                                            <option value="sk">SENEN</option>
                                                            <option value="sk">TANAH ABANG</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputSearch" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search Criteria</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input className="col-sm-6 form-control margin-top-rem-1 label-bold" value={this.state.villageDemanded} type={"text"} onChange={this.handleSearchedImmediate} />
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type={"submit"} className="btn btn-primary btn-min-width margin-top-rem-1 ">Search</button>
                                                    &nbsp;
                                                    <button type="button" className="btn btn-primary btn-min-width margin-top-rem-1" onClick={this.addOnClick}>Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className=" pt-3 col-md-12 col-xl-12">
                                <TableTemplate
                                    tableShouldShow={this.state.searchClicked}
                                    tableShouldUpdate={this.state.showSearchResult}
                                    headersField={this.state.headerWantsToBeRender}
                                    tableContent={this.state.tableContentWantToBeRendered}
                                    tableTitle={this.state.tableTitle}
                                    addButtonShow={true}
                                    addButtonNav={"/village-create"}
                                    linkToDetail={["/village", 1]}
                                />
                            </div>

                            {/* <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Listing</h6>
                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>63</td>
                                                    <td>2011/07/25</td>
                                                    <td>$170,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Ashton Cox</td>
                                                    <td>Junior Technical Author</td>
                                                    <td>San Francisco</td>
                                                    <td>66</td>
                                                    <td>2009/01/12</td>
                                                    <td>$86,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>22</td>
                                                    <td>2012/03/29</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="/villageDetail">Airi Satou</a></td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                    <td>33</td>
                                                    <td>2008/11/28</td>
                                                    <td>$162,700</td>
                                                </tr>
                                                <tr>
                                                    <td>Brielle Williamson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>New York</td>
                                                    <td>61</td>
                                                    <td>2012/12/02</td>
                                                    <td>$372,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Herrod Chandler</td>
                                                    <td>Sales Assistant</td>
                                                    <td>San Francisco</td>
                                                    <td>59</td>
                                                    <td>2012/08/06</td>
                                                    <td>$137,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Rhona Davidson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>Tokyo</td>
                                                    <td>55</td>
                                                    <td>2010/10/14</td>
                                                    <td>$327,900</td>
                                                </tr>
                                                <tr>
                                                    <td>Colleen Hurst</td>
                                                    <td>Javascript Developer</td>
                                                    <td>San Francisco</td>
                                                    <td>39</td>
                                                    <td>2009/09/15</td>
                                                    <td>$205,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Sonya Frost</td>
                                                    <td>Software Engineer</td>
                                                    <td>Edinburgh</td>
                                                    <td>23</td>
                                                    <td>2008/12/13</td>
                                                    <td>$103,600</td>
                                                </tr>
                                                <tr>
                                                    <td>Jena Gaines</td>
                                                    <td>Office Manager</td>
                                                    <td>London</td>
                                                    <td>30</td>
                                                    <td>2008/12/19</td>
                                                    <td>$90,560</td>
                                                </tr>
                                                <tr>
                                                    <td>Quinn Flynn</td>
                                                    <td>Support Lead</td>
                                                    <td>Edinburgh</td>
                                                    <td>22</td>
                                                    <td>2013/03/03</td>
                                                    <td>$342,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Charde Marshall</td>
                                                    <td>Regional Director</td>
                                                    <td>San Francisco</td>
                                                    <td>36</td>
                                                    <td>2008/10/16</td>
                                                    <td>$470,600</td>
                                                </tr>
                                                <tr>
                                                    <td>Haley Kennedy</td>
                                                    <td>Senior Marketing Designer</td>
                                                    <td>London</td>
                                                    <td>43</td>
                                                    <td>2012/12/18</td>
                                                    <td>$313,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Tatyana Fitzpatrick</td>
                                                    <td>Regional Director</td>
                                                    <td>London</td>
                                                    <td>19</td>
                                                    <td>2010/03/17</td>
                                                    <td>$385,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Michael Silva</td>
                                                    <td>Marketing Designer</td>
                                                    <td>London</td>
                                                    <td>66</td>
                                                    <td>2012/11/27</td>
                                                    <td>$198,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Paul Byrd</td>
                                                    <td>Chief Financial Officer (CFO)</td>
                                                    <td>New York</td>
                                                    <td>64</td>
                                                    <td>2010/06/09</td>
                                                    <td>$725,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Gloria Little</td>
                                                    <td>Systems Administrator</td>
                                                    <td>New York</td>
                                                    <td>59</td>
                                                    <td>2009/04/10</td>
                                                    <td>$237,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Bradley Greer</td>
                                                    <td>Software Engineer</td>
                                                    <td>London</td>
                                                    <td>41</td>
                                                    <td>2012/10/13</td>
                                                    <td>$132,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Dai Rios</td>
                                                    <td>Personnel Lead</td>
                                                    <td>Edinburgh</td>
                                                    <td>35</td>
                                                    <td>2012/09/26</td>
                                                    <td>$217,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Jenette Caldwell</td>
                                                    <td>Development Lead</td>
                                                    <td>New York</td>
                                                    <td>30</td>
                                                    <td>2011/09/03</td>
                                                    <td>$345,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Yuri Berry</td>
                                                    <td>Chief Marketing Officer (CMO)</td>
                                                    <td>New York</td>
                                                    <td>40</td>
                                                    <td>2009/06/25</td>
                                                    <td>$675,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Caesar Vance</td>
                                                    <td>Pre-Sales Support</td>
                                                    <td>New York</td>
                                                    <td>21</td>
                                                    <td>2011/12/12</td>
                                                    <td>$106,450</td>
                                                </tr>
                                                <tr>
                                                    <td>Doris Wilder</td>
                                                    <td>Sales Assistant</td>
                                                    <td>Sidney</td>
                                                    <td>23</td>
                                                    <td>2010/09/20</td>
                                                    <td>$85,600</td>
                                                </tr>
                                                <tr>
                                                    <td>Angelica Ramos</td>
                                                    <td>Chief Executive Officer (CEO)</td>
                                                    <td>London</td>
                                                    <td>47</td>
                                                    <td>2009/10/09</td>
                                                    <td>$1,200,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Gavin Joyce</td>
                                                    <td>Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>42</td>
                                                    <td>2010/12/22</td>
                                                    <td>$92,575</td>
                                                </tr>
                                                <tr>
                                                    <td>Jennifer Chang</td>
                                                    <td>Regional Director</td>
                                                    <td>Singapore</td>
                                                    <td>28</td>
                                                    <td>2010/11/14</td>
                                                    <td>$357,650</td>
                                                </tr>
                                                <tr>
                                                    <td>Brenden Wagner</td>
                                                    <td>Software Engineer</td>
                                                    <td>San Francisco</td>
                                                    <td>28</td>
                                                    <td>2011/06/07</td>
                                                    <td>$206,850</td>
                                                </tr>
                                                <tr>
                                                    <td>Fiona Green</td>
                                                    <td>Chief Operating Officer (COO)</td>
                                                    <td>San Francisco</td>
                                                    <td>48</td>
                                                    <td>2010/03/11</td>
                                                    <td>$850,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Shou Itou</td>
                                                    <td>Regional Marketing</td>
                                                    <td>Tokyo</td>
                                                    <td>20</td>
                                                    <td>2011/08/14</td>
                                                    <td>$163,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Michelle House</td>
                                                    <td>Integration Specialist</td>
                                                    <td>Sidney</td>
                                                    <td>37</td>
                                                    <td>2011/06/02</td>
                                                    <td>$95,400</td>
                                                </tr>
                                                <tr>
                                                    <td>Suki Burks</td>
                                                    <td>Developer</td>
                                                    <td>London</td>
                                                    <td>53</td>
                                                    <td>2009/10/22</td>
                                                    <td>$114,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Prescott Bartlett</td>
                                                    <td>Technical Author</td>
                                                    <td>London</td>
                                                    <td>27</td>
                                                    <td>2011/05/07</td>
                                                    <td>$145,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Gavin Cortez</td>
                                                    <td>Team Leader</td>
                                                    <td>San Francisco</td>
                                                    <td>22</td>
                                                    <td>2008/10/26</td>
                                                    <td>$235,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Martena Mccray</td>
                                                    <td>Post-Sales support</td>
                                                    <td>Edinburgh</td>
                                                    <td>46</td>
                                                    <td>2011/03/09</td>
                                                    <td>$324,050</td>
                                                </tr>
                                                <tr>
                                                    <td>Unity Butler</td>
                                                    <td>Marketing Designer</td>
                                                    <td>San Francisco</td>
                                                    <td>47</td>
                                                    <td>2009/12/09</td>
                                                    <td>$85,675</td>
                                                </tr>
                                                <tr>
                                                    <td>Howard Hatfield</td>
                                                    <td>Office Manager</td>
                                                    <td>San Francisco</td>
                                                    <td>51</td>
                                                    <td>2008/12/16</td>
                                                    <td>$164,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Hope Fuentes</td>
                                                    <td>Secretary</td>
                                                    <td>San Francisco</td>
                                                    <td>41</td>
                                                    <td>2010/02/12</td>
                                                    <td>$109,850</td>
                                                </tr>
                                                <tr>
                                                    <td>Vivian Harrell</td>
                                                    <td>Financial Controller</td>
                                                    <td>San Francisco</td>
                                                    <td>62</td>
                                                    <td>2009/02/14</td>
                                                    <td>$452,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Timothy Mooney</td>
                                                    <td>Office Manager</td>
                                                    <td>London</td>
                                                    <td>37</td>
                                                    <td>2008/12/11</td>
                                                    <td>$136,200</td>
                                                </tr>
                                                <tr>
                                                    <td>Jackson Bradshaw</td>
                                                    <td>Director</td>
                                                    <td>New York</td>
                                                    <td>65</td>
                                                    <td>2008/09/26</td>
                                                    <td>$645,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Olivia Liang</td>
                                                    <td>Support Engineer</td>
                                                    <td>Singapore</td>
                                                    <td>64</td>
                                                    <td>2011/02/03</td>
                                                    <td>$234,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Bruno Nash</td>
                                                    <td>Software Engineer</td>
                                                    <td>London</td>
                                                    <td>38</td>
                                                    <td>2011/05/03</td>
                                                    <td>$163,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Sakura Yamamoto</td>
                                                    <td>Support Engineer</td>
                                                    <td>Tokyo</td>
                                                    <td>37</td>
                                                    <td>2009/08/19</td>
                                                    <td>$139,575</td>
                                                </tr>
                                                <tr>
                                                    <td>Thor Walton</td>
                                                    <td>Developer</td>
                                                    <td>New York</td>
                                                    <td>61</td>
                                                    <td>2013/08/11</td>
                                                    <td>$98,540</td>
                                                </tr>
                                                <tr>
                                                    <td>Finn Camacho</td>
                                                    <td>Support Engineer</td>
                                                    <td>San Francisco</td>
                                                    <td>47</td>
                                                    <td>2009/07/07</td>
                                                    <td>$87,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Serge Baldwin</td>
                                                    <td>Data Coordinator</td>
                                                    <td>Singapore</td>
                                                    <td>64</td>
                                                    <td>2012/04/09</td>
                                                    <td>$138,575</td>
                                                </tr>
                                                <tr>
                                                    <td>Zenaida Frank</td>
                                                    <td>Software Engineer</td>
                                                    <td>New York</td>
                                                    <td>63</td>
                                                    <td>2010/01/04</td>
                                                    <td>$125,250</td>
                                                </tr>
                                                <tr>
                                                    <td>Zorita Serrano</td>
                                                    <td>Software Engineer</td>
                                                    <td>San Francisco</td>
                                                    <td>56</td>
                                                    <td>2012/06/01</td>
                                                    <td>$115,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Jennifer Acosta</td>
                                                    <td>Junior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>43</td>
                                                    <td>2013/02/01</td>
                                                    <td>$75,650</td>
                                                </tr>
                                                <tr>
                                                    <td>Cara Stevens</td>
                                                    <td>Sales Assistant</td>
                                                    <td>New York</td>
                                                    <td>46</td>
                                                    <td>2011/12/06</td>
                                                    <td>$145,600</td>
                                                </tr>
                                                <tr>
                                                    <td>Hermione Butler</td>
                                                    <td>Regional Director</td>
                                                    <td>London</td>
                                                    <td>47</td>
                                                    <td>2011/03/21</td>
                                                    <td>$356,250</td>
                                                </tr>
                                                <tr>
                                                    <td>Lael Greer</td>
                                                    <td>Systems Administrator</td>
                                                    <td>London</td>
                                                    <td>21</td>
                                                    <td>2009/02/27</td>
                                                    <td>$103,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Jonas Alexander</td>
                                                    <td>Developer</td>
                                                    <td>San Francisco</td>
                                                    <td>30</td>
                                                    <td>2010/07/14</td>
                                                    <td>$86,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Shad Decker</td>
                                                    <td>Regional Director</td>
                                                    <td>Edinburgh</td>
                                                    <td>51</td>
                                                    <td>2008/11/13</td>
                                                    <td>$183,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Michael Bruce</td>
                                                    <td>Javascript Developer</td>
                                                    <td>Singapore</td>
                                                    <td>29</td>
                                                    <td>2011/06/27</td>
                                                    <td>$183,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Donna Snider</td>
                                                    <td>Customer Support</td>
                                                    <td>New York</td>
                                                    <td>27</td>
                                                    <td>2011/01/25</td>
                                                    <td>$112,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Village;