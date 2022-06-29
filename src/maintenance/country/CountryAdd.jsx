import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Country.css";
import "./CountryAdd.css";
import axios from "axios";






// const validateEmail = (email) => {
//     var regex = /^\S+@\S+$/;
//     return (regex.test(email) && email.length > 10)
// };
// console.log(validateEmail('naufaladigm@ail.commmmmmmm'));
const validateDesc = (description) => {
    return (description.length > 10 && description.length < 30);


};
// console.log(validateDesc('asepppp'))




class CountryAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            countryAdded: {
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
                error: {
                    description: "",
                },


            },



            // nameNewCountry: "",
            // codeNewCountry: "",
            // descriptionNewCountry: "",
            // alternateNewCountry: "",
            // countryList: [],
        };
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }






    handleSubmit(e) {
        e.preventDefault();




        if (this.state.alternateNewCountry === "" || this.state.descriptionNewCountry === "" || this.state.codeNewCountry === "" || this.state.nameNewCountry === "") {
            return;
        }


        // let dateNow = new Date(Date.now());
        //console.log(dateNow.getFullYear());

        //let dateConvert = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}T${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.000Z`;

        // let country = {
        //   name: this.state.nameNewCountry,
        //   code: this.state.codeNewCountry,
        //   description: this.state.descriptionNewCountry,
        //   alternateDescription: this.state.alternateNewCountry,
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
                    data: { ...this.state.countryAdded, createdDate: Date.now(), updatedDate: Date.now(), system: false, createdBy: "USER" },
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
                url: "https://kbdsi-mtsys.herokuapp.com/v0/country/create",
            })
            .then((response) => response)
            .then((result) => {
                console.log(result);
                this.setState({
                    countryAdded: {
                        ...this.state.countryAdded,
                        name: "",
                        code: "",
                        description: "",
                        alternateDescription: "",
                    },
                });
            });
        // this.setState({
        //   countryAdded: country,
        // });
    }

    // formObject = (e) => {
    //     e.preventDefault();

    //     const { description, value } = e.target;
    //     let error = { ...this.state.countryAdded.error };

    //     switch (description) {
    //         case "description":
    //             this.state.countryAdded.error.description = value.length < 10 ? "Description should be more than 10 characters long" : "";
    //             break;
    //         default:
    //             break;
    //     }
    //     this.setState({
    //         countryAdded: {
    //             ...this.state.countryAdded,
    //             description: e.target.value,
    //         },
    //         error,
    //         [description]: value
    //     })
    // };


    handleChangeDescription(e) {

        validateDesc(e)

        this.setState({
            countryAdded: {
                ...this.state.countryAdded,
                description: e.target.value,
            },
        });
    }
    handleChangeName(e) {
        this.setState({
            countryAdded: {
                ...this.state.countryAdded,
                name: e.target.value,
            },
            // nameNewCountry: e.target.value,
        });
    }
    handleChangeCode(e) {
        this.setState({
            countryAdded: {
                ...this.state.countryAdded,
                code: e.target.value,
            },
        });
    }
    handleChangeAlternate(e) {
        this.setState({
            countryAdded: {
                ...this.state.countryAdded,
                alternateDescription: e.target.value,
            },
        });
    }
    componentDidUpdate() {
        // console.log(`name:${this.state.countryAdded.name} , code:${this.state.countryAdded.code},alternate_description:${this.state.countryAdded.alternateDescription}, description:${this.state.countryAdded.description}`);
    }
    componentWillUnmount() { }
    componentDidMount() {
        // fetch("/countryData.json")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     //console.log(result);
        //     this.setState({
        //       countryList: result,
        //     });
        //     //console.log(this.state.countryList);
        //   });
    }



    render() {


        return (
            <>
                <div className="container-fluid">
                    <h1 className="h3 mb-1 text-gray-800">Country</h1>
                    {/* {!validateEmail('asepfn6@gmail.com') &&

                        <p>Salah</p>
                    } */}

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
                                                    <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputCode" placeholder="Code" /> */}
                                                    <input required={true} onChange={this.handleChangeCode} value={this.state.countryAdded.code} className="col-sm-7 form-control margin-top-rem-1" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputName" placeholder="Name" /> */}
                                                    <input required={true} value={this.state.countryAdded.name} onChange={this.handleChangeName} className="col-sm-7 form-control margin-top-rem-1" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-highlight col-sm-12 bg-gray-200">
                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputDescription" placeholder="Description" /> */}
                                                    <input required={true} id="description" value={this.state.countryAdded.description} onChange={this.handleChangeDescription} className={!validateDesc(this.state.countryAdded.description) && this.state.countryAdded.description !== "" ? "col-sm-7 is-invalid form-control margin-top-rem-1" : "col-sm-7 form-control margin-top-rem-1"} />
                                                    {!validateDesc(this.state.countryAdded.description) && this.state.countryAdded.description !== "" && (
                                                        <span className="invalid-feedback mt-2">* Description must be longer than 10 characters</span>
                                                    )}



                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group row">
                                                    <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
                                                    <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
                                                    {/* <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputAlternateDescription" placeholder="Alternate Description" /> */}
                                                    <input required={true} value={this.state.countryAdded.alternateDescription} onChange={this.handleChangeAlternate} className="col-sm-7 form-control margin-top-rem-1" />
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
                                                    <button type={"submit"} className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" disabled={validateDesc(this.state.countryAdded.description) === false



                                                    }>Add</button>
                                                    <NavLink className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" to="/country">Back</NavLink>
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

export default CountryAdd;