import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Province.css";
import "./ProvinceAdd.css";
import axios from "axios";
import Select from 'react-select'






// const validateEmail = (email) => {
//     var regex = /^\S+@\S+$/;
//     return (regex.test(email) && email.length > 10)
// };
// console.log(validateEmail('naufaladigm@ail.commmmmmmm'));
const validateDesc = (description) => {
    return (description.length > 10 && description.length < 30 && description !== null);


};

const validateName = (name) => {
    return (name.length >= 5);
}
console.log(validateName('aseeepppppppp'))

const validateCode = (code) => {
    var re = /^[a-zA-Z0-9]+$/

    return (re.test(code) && code.length <= 5)
}
console.log("code " + validateCode("@@@22RRJEEWW2"));


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
            countryList: [],
            selectedOption: {},



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
                    data:
                    {


                        alternateDescription: this.state.provinceAdded.alternateDescription,
                        approved: false,
                        approvedBy: "user_who_approved",
                        approvedDate: "",
                        auditGroupId: "",
                        code: this.state.provinceAdded.code,

                        country: this.state.selectedOption,

                        createdBy: "USER",
                        createdContentType: "string",
                        createdDate: Date.now(),
                        createdIp: "string",
                        deleted: true,
                        description: this.state.provinceAdded.description,
                        enable: true,
                        id: this.state.provinceAdded.code,
                        name: this.state.provinceAdded.name,
                        subject: true,
                        system: true,
                        updatedBy: "user who update it",
                        updatedContentType: "string",
                        updatedDate: "",
                        updatedIp: "string",
                        version: 0,
                    },
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
            .then((response) => {
                console.log(response);
            }

            )

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
        this.setState({
            provinceAdded: province,
        });
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

        validateName(e)
        this.setState({
            provinceAdded: {
                ...this.state.provinceAdded,
                name: e.target.value,
            },
            // nameNewprovince: e.target.value,
        });
    }
    handleChangeCode(e) {

        validateCode(e)
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
        // console.log(`name:${this.state.provinceAdded.name} , code:${this.state.provinceAdded.code},alternate_description:${this.state.provinceAdded.alternateDescription}, description:${this.state.provinceAdded.description}`);
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

    }

    handleSelect = (hasil) => {
        this.setState({ selectedOption: hasil });
        console.log(`Option selected:`, hasil);
    }









    render() {

        console.log("sss " + this.state.selectedOption.name);
        console.log("value " + this.state.provinceAdded.name);

        const valueProvince = this.state.selectedOption.code + this.state.provinceAdded.code;




        const isEverythingValid =
            validateDesc(this.state.provinceAdded.description) && validateName(this.state.provinceAdded.name) && validateCode(this.state.provinceAdded.code);

        return (
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">province</h1>


                    <p className="mb-4" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Add</h6>
                                </div>

                                <div className="card-body">
                                    <form id="form" className="row" onSubmit={this.handleSubmit}>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCountrySelect" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Country</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <div className="col-sm-7 margin-top-rem-1">
                                                        <div className="mb-3">
                                                            {/* <select className="form-control" id="inputCountrySelect" multiple="">
                                                                <option value="ID">INDONESIA</option>
                                                                <option value="usa">USA</option>
                                                                <option value="sk">SOUTH KOREA</option>
                                                            </select> */}

                                                            <Select className="" options={this.state.countryList}
                                                                getOptionLabel={(option) => option.name}
                                                                onChange={this.handleSelect}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6" />
                                        </div>
                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputCode" placeholder="Code" /> */}
                                                    <p>{this.state.selectedOption.code !== undefined ? this.state.selectedOption.code : ""}</p>
                                                    <input required={true} onChange={this.handleChangeCode} value={valueProvince} className={!validateCode(this.state.provinceAdded.code) && this.state.provinceAdded.code !== "" ? "col-sm-7 is-invalid form-control margin-top-rem-1" : "col-sm-7 form-control margin-top-rem-1"} />
                                                    {!validateCode(this.state.provinceAdded.code) && (
                                                        <span className="invalid-feedback mt-2">* Code must not be longer than 5 characters and doesnt contain any special characters</span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputName" placeholder="Name" /> */}
                                                    <input required={true} value={this.state.provinceAdded.name} onChange={this.handleChangeName} className={!validateDesc(this.state.provinceAdded.name) && this.state.provinceAdded.name !== "" ? "col-sm-7 is-invalid form-control margin-top-rem-1" : "col-sm-7 form-control margin-top-rem-1"} />
                                                    {!validateName(this.state.provinceAdded.name) && (
                                                        <span className="invalid-feedback mt-2">* Name must be longer than 5-20  characters characters</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputDescription" placehohandleChangeDescriptionlder="Description" /> */}
                                                    <input required={true} id="description" value={this.state.provinceAdded.description} onChange={this.handleChangeDescription} className={!validateDesc(this.state.provinceAdded.description) && this.state.provinceAdded.description !== "" ? "col-sm-7 is-invalid form-control margin-top-rem-1" : "col-sm-7 form-control margin-top-rem-1"} />
                                                    {!validateDesc(this.state.provinceAdded.description) && (
                                                        <span className="invalid-feedback mt-2">* Description must be longer than 10-30  characters characters</span>
                                                    )}
                                                    {console.log("desc nya adalah " + this.state.provinceAdded.description + " dan bernilai " + validateDesc(this.state.provinceAdded.description))}





                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputAlternateDescription" placeholder="Alternate Description" /> */}
                                                    <input required={true} value={this.state.provinceAdded.alternateDescription} onChange={this.handleChangeAlternate} className="col-sm-7 form-control margin-top-rem-1" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-100">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="checkBoxIsDefault" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-1 form-check">
                                                        <input type="checkbox" className="form-check-input margin-top-rem-1-point-75" id="checkBoxIsDefault" name="checkBoxIsDefault" value="" />
                                                    </label>
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    <label className="col-sm-1 form-check">
                                                        <input type="checkbox" className="form-check-input margin-top-rem-1-point-75" id="checkBoxIsEnable" name="checkBoxIsEnable" defaultChecked />
                                                    </label>
                                                    <div className="col-sm-6" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group row margin-top-rem-1">
                                                <div className="col-md-8" />

                                                <div className="col-md-4">
                                                    <button type={"submit"} className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" disabled={isEverythingValid === false



                                                    }>Add</button>
                                                    <NavLink className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" to="/province">Back</NavLink>
                                                </div>
                                                {/* {Object.keys(errors).map((key) => {
                                                    return <div key={key}>{errors[key]}</div>
                                                })} */}
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
                                                <tr className="label-mandatory">
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr className="label-mandatory">
                                                    <th>Language</th>
                                                    <th>Code</th>
                                                    <th>Name</th>
                                                    <th>Is Enable</th>
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                                <tr>
                                                    <td className="label-bold">Bahasa</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage1" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage1" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage1" name="checkBoxLanguage1" />
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="label-bold">South Korea</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage2" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage2" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage2" name="checkBoxLanguage2" />
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="label-bold">Dutch</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage3" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage3" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage3" name="checkBoxLanguage3" />
                                                        </label>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="label-bold">Jowo</td>
                                                    <td><input type="text" className="form-control" id="inputCodeLanguage4" placeholder="Code" /></td>
                                                    <td><input type="text" className="form-control" id="inputNameLanguage4" placeholder="Name" /></td>
                                                    <td>
                                                        <label className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkBoxLanguage4" name="checkBoxLanguage4" />
                                                        </label>
                                                    </td>
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
                                                <tr className="label-mandatory">
                                                    <th>Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </thead>

                                            <tfoot>
                                                <tr className="label-mandatory">
                                                    <th>Host</th>
                                                    <th>Code</th>
                                                </tr>
                                            </tfoot>

                                            <tbody>
                                                <tr>
                                                    <td className="label-bold">Bank Indonesia</td>
                                                    <td><input type="text" className="form-control" id="hostCode1" placeholder="Code.." /></td>
                                                </tr>

                                                <tr>
                                                    <td className="label-bold">OJK</td>
                                                    <td><input type="text" className="form-control" id="hostCode2" placeholder="Code.." /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </>
        );
    }
}

export default ProvinceAdd;