import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Country.css";
import TableTemplate from "../TableTemplate";
import axios from "axios";

class Country extends Component {
    //saat dipanggil, langsung render awal dengan country list yang kosong karena belum ada pencarian
    constructor(props) {
        /*save state for searched keywords:
         * option 1: onChange searched immediately
         * option 2: onSubmitted searched
         * option 3: both
         * */
        super(props);
        //tableContent must array of array of string
        this.state = {
            countryDemanded: "",
            searchCriteria: "",
            showSearchResult: false,
            countryList: [],
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
        //console.log(`yang lama ${this.state.countryDemanded} yang ${e.target.value}`);
        this.setState({
            countryDemanded: e.target.value,
        });
    }
    handleSearchedSubmited(e) {
        e.preventDefault();
        if (this.state.countryDemanded.length === 0) {
            var records = this.state.countryList;
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
                            tableTitle: "Country list",
                            countryDemanded: "",
                            showSearchResult: true,
                            searchClicked: true,
                            searchCriteria: state.searchCriteria,
                        }));
                    }
                }
            }
        } else {
            //saat tombol search ditekan, cari dari countryData
            if (this.state.searchCriteria === "Code") {
                //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
                //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
                //var recordsTem=[];
                var records = this.state.countryList.filter((country) => country.code.toString().includes(this.state.countryDemanded.toUpperCase()));
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
                                tableTitle: "Country list",
                                countryDemanded: "",
                                showSearchResult: true,
                                searchClicked: true,
                                searchCriteria: state.searchCriteria,
                            }));
                        }
                    }
                }
            } else if (this.state.searchCriteria === "Name") {
                var records = this.state.countryList.filter((country) => country.name.toString().includes(this.state.countryDemanded.toUpperCase()));
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
                                countryDemanded: "",
                                headerWantsToBeRender: headersTem,
                                tableTitle: "Country list",
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
    //saat setelah dirender, seorang dapat mencari country dengan mengetik dalam input text, nama / code country.
    componentDidUpdate(prevProps, prevState, snapShot) {
        //console.log(this.state.countryDemanded);
        /*if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
          //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama country yang sesuai ke TableTemplate
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
        // fetch("https://kbdsi-mtsys.herokuapp.com/v0/country/retrieve-all")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     this.setState({
        //       countryList: result,
        //     });
        //     //console.log(this.state.countryList);
        //   });
        // fetch("https://kbdsi-mtsys.herokuapp.com/v0/country/retrieve-all", {
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

        //get all country from mbak izzan || Method POST
        // axios.request({
        //     method: 'POST',
        //     url: `https://kbdsi-mtsys.herokuapp.com/v0/country/retrieve-by-name`,
        //     headers: {
        //         //   'Authorization': token
        //         Accept: "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     data: {
        //         data: "string",
        //         identity: {
        //             reqDateTime: "string",
        //             platform: "string",
        //             token: "string",
        //             userId: "string"
        //         },
        //         paging: {
        //             limit: 0,
        //             page: 0,
        //             totalPage: 0,
        //             totalRecord: 0
        //         },
        //         service: "string"

        //     },

        // }).then((response) => response.data.data)
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({
        //             countryList: result,
        //         });
        //         //console.log(this.state.countryList);
        //     });

        axios
            .get("https://kbdsi-mtsys.herokuapp.com/v0/country/retrieve-all", {
                headers: {
                    //Accept: "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => response.data.data)
            .then((result) => {
                console.log(result);
                this.setState({
                    countryList: result,
                });
                //console.log(this.state.countryList);
            });

        //get from mas satriyo  
        // axios.get('https://kbdsi-core.herokuapp.com/mt/parameter/get', {
        //     headers: {
        //         // request_id: "1",
        //         // user_id: "2",
        //         // request_date: "2022-03-25 09:09:09.000",
        //         // screen_code: "MT_0002R"

        //         // Accept: "application/json",
        //         Accept: "*/*",
        //         "Access-Control-Allow-Origin": "*",
        //     },

        //     params: {


        //         header: {
        //             request_id: "1",
        //             user_id: "2",
        //             request_date: "2022-03-25 09:09:09.000",
        //             screen_code: "MT_0001R"
        //         },
        //         body: {
        //             body_request: {
        //                 table_code: "kbmt.mt_language",
        //                 search_by: "CODE",
        //                 search_criteria: "id"
        //             }
        //         }

        //     }




        // })
        //     .then((response) => response.data.data)
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({
        //             countryList: result,
        //         });
        //         //console.log(this.state.provinceList);
        //     })

        // axios.get(`https://kbdsi-mt.herokuapp.com/mt/country/search`, {
        //     method: 'GET',
        //     body: JSON.stringify({
        //         body_request: {
        //             search_by: "CODE",
        //             search_criteria: null
        //         }
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //         request_id: "1",
        //         user_id: "2",
        //         request_date: "2022-03-25 09:09:09.000",
        //         screen_code: "MT_0002R"
        //     }
        // })
        //     .then(response => response.json())
        //     .then(json => console.log(json));
        // console.warn(response.data);



        //get lokal
        // axios
        //     .get("/countryData.json", {
        //         headers: {
        //             //Accept: "application/json",
        //             Accept: "application/json",
        //             // "Access-Control-Allow-Origin": "*",
        //         },
        //     })
        //     .then((response) => response.data)
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({
        //             countryList: result,
        //         });
        //         //console.log(this.state.countryList);
        //     });
    }



    render() {
        return (
            <>


                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Country</h1>

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
                                                    <label htmlFor="inputSearch" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search Criteria</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input className="col-sm-6 form-control margin-top-rem-1 label-bold" value={this.state.countryDemanded} type={"text"} onChange={this.handleSearchedImmediate} />
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type={"submit"} className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper">Search</button>
                                                    <NavLink className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" to="/countryAdd">Add</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <TableTemplate
                                tableShouldShow={this.state.searchClicked}
                                tableShouldUpdate={this.state.showSearchResult}
                                headersField={this.state.headerWantsToBeRender}
                                tableContent={this.state.tableContentWantToBeRendered}
                                tableTitle={this.state.tableTitle}
                                addButtonShow={true}
                                addButtonNav={"/countryAdd"}
                                linkToDetail={["/country", 1]}
                            />

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Listing</h6>
                                </div>

                                <div className="card-body">
                                    No Data Found
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr className="label-mandatory">
                                                    <th>Code</th>
                                                    <th>Description</th>
                                                    <th>Is Enable</th>
                                                    <th>Is System</th>
                                                    <th>Is Deleted</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr className="label-mandatory">
                                                    <th>Code</th>
                                                    <th>Description</th>
                                                    <th>Is Enable</th>
                                                    <th>Is System</th>
                                                    <th>Is Deleted</th>
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                                <tr>
                                                    <td><NavLink to="/parameterDetail" >ID</NavLink></td>
                                                    <td>INDONESIA</td>
                                                    <td>Yes</td>
                                                    <td>No</td>
                                                    <td>No</td>
                                                </tr>

                                                <tr>
                                                    <td>USA</td>
                                                    <td>UNITED STATE OF AMERICA</td>
                                                    <td>Yes</td>
                                                    <td>No</td>
                                                    <td>No</td>
                                                </tr>

                                                <tr>
                                                    <td>KR</td>
                                                    <td>SOUTH KOREA</td>
                                                    <td>Yes</td>
                                                    <td>No</td>
                                                    <td>No</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Country;