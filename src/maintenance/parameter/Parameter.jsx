import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Parameter extends Component {
    //saat dipanggil, langsung render awal dengan parameter list yang kosong karena belum ada pencarian
    constructor(props) {
        /*save state for searched keywords:
         * option 1: onChange searched immediately
         * option 2: onSubmitted searched
         * option 3: both
         * */
        super(props);
        //tableContent must array of array of string
        this.state = {
            parameterDemanded: "",
            searchCriteria: "",
            showSearchResult: false,
            parameterList: [],
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
        //console.log(`yang lama ${this.state.parameterDemanded} yang ${e.target.value}`);
        this.setState({
            parameterDemanded: e.target.value,
        });
    }
    handleSearchedSubmited(e) {
        e.preventDefault();
        if (this.state.parameterDemanded.length === 0) {
            var records = this.state.parameterList;
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
                            tableTitle: "parameter list",
                            parameterDemanded: "",
                            showSearchResult: true,
                            searchClicked: true,
                            searchCriteria: state.searchCriteria,
                        }));
                    }
                }
            }
        } else {
            //saat tombol search ditekan, cari dari parameterData
            if (this.state.searchCriteria === "Code") {
                //jika mencari berdasarkan code, maka apapun yang sesuai sama Code
                //exact match maka masukkan ke tableContent dari Tabletemplate yang ingin render
                //var recordsTem=[];
                var records = this.state.parameterList.filter((parameter) => parameter.code.toString().includes(this.state.parameterDemanded.toUpperCase()));
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
                                tableTitle: "parameter list",
                                parameterDemanded: "",
                                showSearchResult: true,
                                searchClicked: true,
                                searchCriteria: state.searchCriteria,
                            }));
                        }
                    }
                }
            } else if (this.state.searchCriteria === "Name") {
                var records = this.state.parameterList.filter((parameter) => parameter.name.toString().includes(this.state.parameterDemanded.toUpperCase()));
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
                                parameterDemanded: "",
                                headerWantsToBeRender: headersTem,
                                tableTitle: "parameter list",
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
    //saat setelah dirender, seorang dapat mencari parameter dengan mengetik dalam input text, nama / code parameter.
    componentDidUpdate(prevProps, prevState, snapShot) {
        //console.log(this.state.parameterDemanded);
        /*if (this.state.showSearchResult === true && prevState.showSearchResult === false) {
          //tombol untuk mencari sudah ditekan sehingga dengan algoritma pencarian, masukkan setiap nama parameter yang sesuai ke TableTemplate
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
        // fetch("https://kbdsi-mtsys.herokuapp.com/v0/parameter/retrieve-all")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     this.setState({
        //       parameterList: result,
        //     });
        //     //console.log(this.state.parameterList);
        //   });
        // fetch("https://kbdsi-mtsys.herokuapp.com/v0/parameter/retrieve-all", {
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

        //get all parameter from mbak izzan || Method POST
        axios.request({
            method: 'POST',
            url: "https://kbdsi-core.herokuapp.com/mt/parameter/search",
            headers: {
                //   'Authorization': token
                Accept: "application/json",
                // Accept: "*/*",
                "Access-Control-Allow-Origin": "*",
                request_date: "2022-06-24T06:28:53.533Z",
                request_id: "string",
                request_server_date: "2022-06-24T06:28:53.533Z",
                response_date: "2022-06-24T06:28:53.533Z",
                screen_code: "string",
                table_code: "string",
                user_id: "string"
            },

            data: {
                body: {
                    body_request: {
                        entitys: [
                            {}
                        ],
                        page_at: 0,
                        save_one_by_one: true,
                        search_by: "string",
                        search_criteria: "string",
                        table_code: "string",
                        total_entity_per_page: 0
                    },
                    body_response: {
                        entity: {},
                        entity_per_page: 0,
                        entitys: [
                            {}
                        ],
                        page: 0,
                        total_entitys: 0,
                        total_pages: 0
                    },
                    message: {
                        additional_messages: [
                            {}
                        ],
                        code: "string",
                        message: "string"
                    }
                },
                footer: {
                    messages: [
                        {
                            additional_messages: [
                                {}
                            ],
                            code: "string",
                            message: "string"
                        }
                    ]
                },
                header: {
                    request_date: "2022-06-24T06:28:53.541Z",
                    request_id: "string",
                    request_server_date: "2022-06-24T06:28:53.541Z",
                    response_date: "2022-06-24T06:28:53.541Z",
                    screen_code: "string",
                    table_code: "string",
                    user_id: "string"
                }



            },

        }).then((response) => response.data.data)
            .then((result) => {
                console.log(result);
                this.setState({
                    parameterList: result,
                });
                //console.log(this.state.parameterList);
            });

        // axios
        //     .get("https://kbdsi-core.herokuapp.com/mt/parameter/getScreenCode", {
        //         headers: {
        //             //Accept: "application/json",
        //             Accept: "application/json",
        //             "Access-Control-Allow-Origin": "*",
        //         },
        //     })
        //     .then((response) => response.data.data)
        //     .then((result) => {
        //         console.log(result);
        //         this.setState({
        //             parameterList: result,
        //         });
        //         console.log("ok");
        //         //console.log(this.state.parameterList);

        //     });

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
        //             parameterList: result,
        //         });
        //         //console.log(this.state.provinceList);
        //     })

        // axios.get(`https://kbdsi-mt.herokuapp.com/mt/parameter/search`, {
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
        //     .get("/parameterData.json", {
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
        //             parameterList: result,
        //         });
        //         //console.log(this.state.parameterList);
        //     });
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Parameter</h1>

                    <p className="mb-4" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Search</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row">
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search By</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 label-bold" id="inputCode">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioSearchBy" id="radioSearchByCode" value="code" defaultChecked />
                                                            <label className="form-check-label" htmlFor="radioSearchByCode">
                                                                Code
                                                            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioSearchBy" id="radioSearchByName" value="name" />
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
                                                    <label htmlFor="inputMaintenanceSelect" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Parameter</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-6 col-form-label margin-top-rem-1 ">
                                                        <select className="form-control" id="inputMaintenanceSelect" multiple="">
                                                            <option value="mt_gender">Gender</option>
                                                            <option value="mt_religion">Religion</option>
                                                            <option value="mt_id_type">ID Type</option>
                                                            <option value="mt_address_type">Address Type</option>
                                                            <option value="mt_education_level">Education Level</option>
                                                            <option value="mt_title">Title</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputSearch" className="col-sm-4 col-form-label margin-top-rem-1 label-bold label-mandatory">Search Criteria</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-6 form-control margin-top-rem-1 label-bold" id="inputSearch" placeholder="Search..." />
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type="button" className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper">Search</button>
                                                    <NavLink className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" to="/parameterAdd" >Add</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

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
                                                    <td><NavLink to="/parameterDetail" >M</NavLink></td>
                                                    <td>Male</td>
                                                    <td>Yes</td>
                                                    <td>No</td>
                                                    <td>No</td>
                                                </tr>
                                                <tr>
                                                    <td>F</td>
                                                    <td>Female</td>
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

export default Parameter;