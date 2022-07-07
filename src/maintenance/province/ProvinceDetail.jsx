import { Component } from "react";
import TableTemplate from "../TableTemplate";
import { BsSearch as Search, BsTrash as Trash } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MdDone, MdModeEdit } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";

class ProvinceDetail extends Component {
    //saat dipanggil, langsung render awal dengan province list yang kosong karena belum ada pencarian
    constructor(props) {
        /*save state for searched keywords:
         * option 1: onChange searched immediately
         * option 2: onSubmitted searched
         * option 3: both
         * */
        super(props);
        //console.log(this.props.params);
        this.state = {
            provinceList: [],
            idChosen: this.props.params.id,
            countryChosen: {},
            provinceChosen: {},
        };
        //tableContent must array of array of string
    } //saat setelah dirender, seorang dapat mencari province dengan mengetik dalam input text, nama / code province.
    componentDidUpdate(prevProps, prevState, snapShot) {
        //
        //console.log(this.state.provinceChosen);
    }
    componentDidMount() {
        // const script = document.createElement("script");
        // script.src = "js/kb.js";
        // script.async = true;
        // document.body.appendChild(script);
        // const scriptKb1 = document.createElement("script");
        // scriptKb1.src = "js/kb1.js";
        // scriptKb1.async = true;
        // document.body.appendChild(scriptKb1);
        // document.addEventListener("readystatechange", function (event) {
        //   if (document.readyState === "complete") {
        //     document.body.setAttribute("data-theme", "colored");
        //   }
        // });
        //dipanggil pas render pertama selesai
        //console.log(this.state.provinceList);
        axios
            .request({
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Access-Allow-Control-Origin": "*",
                },
                url: "https://kbdsi-mtsys.herokuapp.com/v0/province/retrieve-by-code",
                data: {
                    data: this.state.idChosen,
                    identity: {
                        platform: "string",
                        reqDateTime: "string",
                        token: "string",
                        userId: "string",
                    },
                    paging: {
                        limit: 0,
                        page: 0,
                        totalPage: 0,
                        totalRecord: 0,
                    },
                    service: "string",
                },
            })
            .then((response) => response.data.data[0])
            .then((result) => {
                // console.log(result);
                this.setState({
                    provinceChosen: result,

                });
                //console.log(this.state.provinceList);
                console.log("terpilih " + this.state.provinceChosen.country.name)
            });

        // fetch lokal
        // fetch("/provinceData.json")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     console.log(result);
        //     console.log(this.state.idChosen);
        //     for (let i = 0; i < result.length; i++) {
        //       var obj = result[i];
        //       if (obj.code === this.state.idChosen) {
        //         console.log(obj);
        //         this.setState({
        //           provinceList: result,
        //           provinceChosen: obj,
        //         });
        //         break;
        //       }
        //     }
        // });
    }
    render() {
        return (
            <>
                {this.state.provinceChosen !== null ? (
                    <div className="container-fluid">

                        <h1 className="h3 mb-1 text-gray-800">{this.state.provinceChosen.name !== undefined ? this.state.provinceChosen.country.name : ""} {">"} {this.state.provinceChosen.name} Province</h1>

                        <p className="mb-4" />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Information</h6>
                                    </div>

                                    <div className="card-body">
                                        <form>
                                            <div className="row gx-0 align-items-center col-md-12 bg-ginger">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            province Code
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.code == null ? "" : `${this.state.provinceChosen.code}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.name == null ? "" : `${this.state.provinceChosen.name}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.description == null ? "" : `${this.state.provinceChosen.description}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        {/* <label className="col-sm-7 col-form-label">{this.state.provinceChosen.alternate_description == null ? "" : `${this.state.provinceChosen.alternate_description}`}</label> */}
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.alternateDescription == null ? "" : `${this.state.provinceChosen.alternateDescription}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Is Default
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.default_value == null ? "" : `${this.state.provinceChosen.default_value}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label"></label>
                                                        <label className="col-sm-1 col-form-label"></label>
                                                        <label className="col-sm-7 col-form-label"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 align-items-center col-md-12 bg-light">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Is System
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.system == null ? "" : `${this.state.provinceChosen.system}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Is Delete
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.deleted == null ? "" : `${this.state.provinceChosen.deleted}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label">
                                                            Is Approved
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.approved == null ? "" : `${this.state.provinceChosen.approved}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="col-sm-3 col-form-label "></label>
                                                        <label className="col-sm-1 col-form-label "></label>
                                                        <label className="col-sm-7 col-form-label "></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Approved By
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.approved_by == null ? "" : `${this.state.provinceChosen.approved_by}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Approved Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.approved_date == null ? "" : `${this.state.provinceChosen.approved_date}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Created By
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.created_by == null ? "" : this.state.provinceChosen.created_by}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label ">
                                                            Created Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.created_date == null ? "" : `${this.state.provinceChosen.created_date}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Created IP
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.created_ip_address == null ? "" : `${this.state.provinceChosen.created_ip_address}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Created Content Type
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">application/json</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated By
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.provinceChosen.updated_by == null ? "" : `${this.state.provinceChosen.updated_by}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.updated_date == null ? "" : `${this.state.provinceChosen.updated_date}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gx-0 row col-md-12 bg-light align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated IP
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.updated_ip_address == null ? "" : `${this.state.provinceChosen.updated_ip_address}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Updated Content Type
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.updated_content_type == null ? "" : `${this.state.provinceChosen.updated_content_type}`}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-ginger align-items-center">
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Version
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.provinceChosen.version == null ? "" : `${this.state.provinceChosen.version}`}</label>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                          <div className="form-group gx-0 row">
                            <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label "></label>
                            <label className="col-sm-1 col-form-label"></label>
                            <label className="col-sm-7 col-form-label"></label>
                          </div>
                        </div> */}
                                            </div>
                                            {/* <div class="col-12">
                                            <div className="form-group row mt-2">
                                                <div className="col-sm-10">
                                                </div>
                                                <div className="col-sm-1">
                                                    <button type="submit" className="btn btn-primary btn-min-width"><MdDone /></button>
                                                </div>
                                                <div className="col-sm-1">
                                                    <button type="button" className="btn btn-primary btn-min-width" onClick={this.editOnClick}><MdModeEdit></MdModeEdit></button>
                                                </div>
                                            </div>
        </div> */}
                                            <div className="flex-wrap d-flex flex-row justify-content-center col-sm-12 mt-2">
                                                <div className="btn-center mx-2">
                                                    <Link to="/province-approve">
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Approve">
                                                            <MdDone></MdDone>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="btn-center mx-2">
                                                    <Link to={`/province/${this.state.idChosen}/edit`}>
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Edit">
                                                            <MdModeEdit></MdModeEdit>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="btn-center mx-2">
                                                    <Link to="/province" className="text-decoration-none">
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper " title="Delete ">
                                                            <Trash />
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <TableTemplate />
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Province List</h6>
                                    </div>

                                    <div className="card-body">
                                        No Data Found
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
                                                        <td><a href="/provinceDetail">Airi Satou</a></td>
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
                                </div>


                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Language Mapping</h6>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTableLanguage" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Language</th>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                        <th>Is Enable</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Language</th>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                        <th>Is Enable</th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <td>Bahasa</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>South Korea</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dutch</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jowo</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Host Mapping</h6>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTableHost" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Host</th>
                                                        <th>Code</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr>
                                                        <th>Host</th>
                                                        <th>Code</th>
                                                    </tr>
                                                </tfoot>
                                                <tbody>
                                                    <tr>
                                                        <td>Bank Indonesia</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>OJK</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-align-center">Loading...</h1>
                )}
                <div className="modal-dialog modal-dialog-centered">...</div>
            </>
        );
    }
}
export default (props) => <ProvinceDetail {...props} params={useParams()} />;
