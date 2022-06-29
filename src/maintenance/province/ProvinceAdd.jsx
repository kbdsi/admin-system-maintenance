import { Component } from "react";
import "./Province.css";
import "./ProvinceAdd.css";
import axios from "axios";

class ProvinceAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinceAdded: {
                alternateDescription: "",
                approved: true,
                approvedBy: "string",
                approvedDate: "2022-06-16T06:41:10.484Z",
                auditGroupId: "string",
                code: "",
                createdBy: "string",
                createdContentType: "string",
                createdDate: new Date(),
                createdIp: "string",
                deleted: true,
                description: "",
                enable: true,
                name: "",
                subject: true,
                system: true,
                updatedBy: "string",
                updatedContentType: "string",
                updatedDate: new Date(),
                updatedIp: "string",
                version: 0,
            },

            // nameNewprovince: "",
            // codeNewprovince: "",
            // descriptionNewprovince: "",
            // alternateNewprovince: "",
            // provinceList: [],
        };
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.alternateNewprovince === "" || this.state.descriptionNewprovince === "" || this.state.codeNewprovince === "" || this.state.nameNewprovince === "") {
            return;
        }
        // let dateNow = new Date(Date.now());
        //console.log(dateNow.getFullYear());

        //let dateConvert = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}T${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.000Z`;

        // let province = {
        //   name: this.state.nameNewprovince,
        //   code: this.state.codeNewprovince,
        //   description: this.state.descriptionNewprovince,
        //   alternateDescription: this.state.alternateNewprovince,
        //   system: false,
        //   createdBy: "USER",
        // };
        //add new instance to backend or file
        axios
            .request({
                headers: {
                    Accept: "application/json",
                    "Access-Allow-Control-Origin": "*",
                },
                method: "post",
                data: {
                    data: { ...this.state.provinceAdded, createdDate: Date.now(), updatedDate: Date.now(), system: false, createdBy: "USER" },
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
                url: "https://kbdsi-mtsys.herokuapp.com/v0/province/create",
            })
            .then((response) => response)
            .then((result) => {
                console.log(result);
                this.setState({
                    provinceAdded: {
                        ...this.state.provinceAdded,
                        name: "",
                        code: "",
                        description: "",
                        alternateDescription: "",
                    },
                });
            });
        // this.setState({
        //   provinceAdded: province,
        // });
    }
    handleChangeDescription(e) {
        this.setState({
            provinceAdded: {
                ...this.state.provinceAdded,
                description: e.target.value,
            },
        });
    }
    handleChangeName(e) {
        this.setState({
            provinceAdded: {
                ...this.state.provinceAdded,
                name: e.target.value,
            },
            // nameNewprovince: e.target.value,
        });
    }
    handleChangeCode(e) {
        this.setState({
            provinceAdded: {
                ...this.state.provinceAdded,
                code: e.target.value,
            },
        });
    }
    handleChangeAlternate(e) {
        this.setState({
            provinceAdded: {
                ...this.state.provinceAdded,
                alternateDescription: e.target.value,
            },
        });
    }
    componentDidUpdate() {
        console.log(`name:${this.state.provinceAdded.name} , code:${this.state.provinceAdded.code},alternate_description:${this.state.provinceAdded.alternateDescription}, description:${this.state.provinceAdded.description}`);
    }
    componentWillUnmount() { }
    componentDidMount() {
        // fetch("/provinceData.json")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     //console.log(result);
        //     this.setState({
        //       provinceList: result,
        //     });
        //     //console.log(this.state.provinceList);
        //   });
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Province</h1>

                    <p className="mb-4" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Add</h6>
                                </div>

                                <div className="card-body">
                                    <form className="row" onSubmit={this.handleSubmit}>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputprovinceSelect" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">province</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-7 margin-top-rem-1">
                                                        <div className="mb-3">
                                                            <select className="form-control" id="inputprovinceSelect" multiple="">
                                                                <option value="ID">INDONESIA</option>
                                                                <option value="usa">USA</option>
                                                                <option value="sk">SOUTH KOREA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputCode" placeholder="Code" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputName" placeholder="Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputDescription" placeholder="Description" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputAlternateDescription" placeholder="Alternate Description" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="checkbox" className="col-sm-1 form-control margin-top-rem-1" id="checkBoxIsDefault" name="checkBoxIsDefault" value="false" />
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <input type="checkbox" className="col-sm-1 form-control margin-top-rem-1" id="checkBoxIsEnable" name="checkBoxIsEnable" value="true" defaultChecked />
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-highlight col-sm-12">
                                            <div className="col-md-11">
                                                <button type="submit" className="btn btn-primary float-right margin-top-rem-1 btn-min-width">Add</button>
                                            </div>

                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-primary float-right margin-top-rem-1 btn-min-width" onClick={this.backOnClick}>Back</button>
                                            </div>
                                        </div>
                                    </form>
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
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage1" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage1" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage1" value="true" /></td>
                                                </tr>
                                                <tr>
                                                    <td>South Korea</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage2" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage2" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage2" value="true" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Dutch</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage3" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage3" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage3" value="true" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Jowo</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage4" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage4" placeholder="Name" /></td>
                                                    <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage4" value="true" /></td>
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
                                                    <td><input type="text" className="form-control" id="hostCode1" placeholder="Code.." /></td>
                                                </tr>
                                                <tr>
                                                    <td>OJK</td>
                                                    <td><input type="text" className="form-control" id="hostCode2" placeholder="Code.." /></td>
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

export default ProvinceAdd;