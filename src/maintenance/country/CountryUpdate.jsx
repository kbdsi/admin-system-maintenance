import { React, Component } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";
import "./CountryUpdate.css";
import axios from "axios";

class CountryUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryCode: this.props.params.id,
            countryEdited: {
                alternateDescription: "",
                approved: true,
                approvedBy: "",
                approvedDate: new Date(),
                auditGroupId: "",
                code: "",
                createdBy: "",
                createdContentType: "",
                createdDate: new Date(),
                createdIp: "",
                deleted: false,
                description: "",
                enable: true,
                name: "",
                subject: true,
                system: false,
                updatedBy: "",
                updatedContentType: "",
                updatedDate: new Date(),
                updatedIp: "",
                version: 0,
            },
            // nameNewCountry: "",
            // codeNewCountry: "",
            // descriptionNewCountry: "",
            // alternateNewCountry: "",
        };
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.alternateNewCountry === "" || this.state.descriptionNewCountry === "" || this.state.codeNewCountry === "" || this.state.nameNewCountry === "") {
            return;


        }
        console.log("submit");
        alert("Berhasil Update");


        // let country = {
        //   name: this.state.nameNewCountry,
        //   code: this.state.codeNewCountry,
        //   description: this.state.descriptionNewCountry,
        //   alternate_description: this.state.alternateNewCountry,
        //   is_system: false,
        //   created_by: "USER",
        // };
        //add new instance to backend or file
        //add new instance to backend or file
        axios
            .request({
                headers: {
                    Accept: "application/json",
                    "Access-Allow-Control-Origin": "*",
                },
                method: "post",
                data: {
                    data: { ...this.state.countryEdited, updatedDate: Date.now(), system: false, createdBy: "USER" },
                    identity: {
                        platform: "string",
                        reqDateTime: "string",
                        token: "string",
                        userId: "string",
                    },
                    paging: {
                        limit: 0,
                        page: 0,
                        totalPage: 1000,
                        totalRecord: 1000000,
                    },
                    service: "string",
                },
                url: "https://kbdsi-mtsys.herokuapp.com/v0/country/update",
            })
            .then((response) => response)
            .then((result) => {
                // console.log(result);
                this.setState({
                    countryEdited: {
                        ...this.state.countryEdited,
                        // name: "",
                        // code: "",
                        // description: "",
                        // alternateDescription: "",
                    },
                });
            });

        // this.setState({
        //   countryEdited: country,
        // });
    }
    handleChangeDescription(e) {
        this.setState({
            countryEdited: {
                ...this.state.countryEdited,
                description: e.target.value,
            },
        });
    }
    handleChangeName(e) {
        this.setState({
            countryEdited: {
                ...this.state.countryEdited,
                name: e.target.value,
            },
        });
    }
    // handleChangeCode(e) {
    //   this.setState({
    //     countryEdited: {
    //       ...this.state.countryEdited,
    //       code: e.target.value,
    //     },
    //   });
    // }
    handleChangeAlternate(e) {
        this.setState({
            countryEdited: {
                ...this.state.countryEdited,
                alternateDescription: e.target.value,
            },
        });
    }
    componentDidUpdate() {
        //console.log(`name:${this.state.nameNewCountry} , code:${this.state.codeNewCountry},alternate_description:${this.state.alternateNewCountry}, description:${this.state.descriptionNewCountry}`);
    }
    componentWillUnmount() { }
    componentDidMount() {
        // const script = document.createElement("script");

        // script.src = "js/kb.js";
        // script.async = true;

        // document.body.appendChild(script);

        // const scriptKb1 = document.createElement("script");

        // scriptKb1.src = "js/kb1.js";
        // scriptKb1.async = true;

        // document.body.appendChild(scriptKb1);

        // // document.addEventListener("readystatechange", function (event) {
        // //   if (document.readyState === "complete") {
        // //     document.body.setAttribute("data-theme", "colored");
        // //   }
        // // });
        // fetch("/countryData.json")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     //console.log(result);
        // for (let i = 0; i < result.length; i++) {
        //   if (result[i].code === this.state.countryCode.toString()) {
        //     let countryChosen = {
        //       code: result[i].code,
        //       name: result[i].name,
        //       alternate_description: result[i].alternate_description,
        //       description: result[i].description,
        //       is_system: false,
        //       created_by: "USER",
        //     };
        //     let alternateFinal = "";
        //     if (result[i].alternate_description == null) {
        //       alternateFinal = "";
        //     } else {
        //       alternateFinal = result[i].alternate_description;
        //     }
        //     this.setState({
        //       codeNewCountry: result[i].code,
        //       nameNewCountry: result[i].name,
        //       descriptionNewCountry: result[i].description,
        //       alternateNewCountry: alternateFinal,
        //       countryEdited: countryChosen,
        //     });
        //     break;
        //   }
        // }
        // });
        //seharusnya get detail aja id
        axios
            .request({
                method: "get",
                url: "https://kbdsi-mtsys.herokuapp.com/v0/country/retrieve-all",
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                // data:{

                // }
            })
            .then((response) => response.data.data)
            .then((result) => {
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    console.log(result[i].code + this.state.countryCode.toString());
                    if (result[i].code === this.state.countryCode) {
                        let countryChosen = {
                            code: result[i].code,
                            createdDate: result[i].createdDate,
                            name: result[i].name,
                            alternateDescription: result[i].alternateDescription,
                            description: result[i].description,
                            system: false,
                            createdBy: "USER",
                        };
                        let alternateFinal = "";
                        if (result[i].alternateDescription == null) {
                            alternateFinal = "";
                        } else {
                            alternateFinal = result[i].alternateDescription;
                        }
                        this.setState({
                            codeNewCountry: result[i].code,
                            nameNewCountry: result[i].name,
                            descriptionNewCountry: result[i].description,
                            alternateNewCountry: alternateFinal,
                            countryEdited: {
                                ...this.state.countryEdited,
                                name: "",
                                code: "",
                                description: "",
                                alternateDescription: "",
                                ...countryChosen,
                            },
                        });
                        break;
                    }
                }
            });
    }
    render() {
        //     return (

        //         <>
        //             {this.state.countryEdited != null ? (
        //                 <div className="container-fluid">
        //                     <h1 className="h3 mb-1 text-gray-800">Country</h1>

        //                     <p className="mb-4" />
        //                     <div className="row">
        //                         <div className="col-lg-12">
        //                             <div className="card shadow mb-4">
        //                                 <div className="card-header py-3">
        //                                     <h6 className="m-0 font-weight-bold text-primary">Update</h6>
        //                                 </div>

        //                                 <div className="card-body">
        //                                     <form onSubmit={this.handleSubmit}>
        //                                         <div className="row gx-0 col-md-12 bg-ginger">
        //                                             <div className="col-md-6">
        //                                                 <div className="row gx-0 form-group flex-row h-100 align-items-center">
        //                                                     <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label">
        //                                                         Country Code
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     {/* <input required={true} onChange={this.handleChangeCode} value={this.state.codeNewCountry} className="col-sm-6 form-control margin-top-rem-1 label-bold" /> */}
        //                                                     <input required={true} value={this.state.countryEdited.code} className="col-sm-7 col-lg-7 col-md-7 my-3 label" />
        //                                                 </div>
        //                                             </div>
        //                                             <div className="col-md-6">
        //                                                 <div className="row h-100 gx-0 form-group flex-row align-items-center">
        //                                                     <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
        //                                                         Name
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     <input required={true} value={this.state.nameNewCountry} onChange={this.handleChangeName} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                         <div className="row gx-0 col-md-12 bg-light">
        //                                             <div className="col-md-6">
        //                                                 <div className="form-group row gx-0 flex-row h-100 align-items-center">
        //                                                     <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label">
        //                                                         Description
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     <input required={true} value={this.state.descriptionNewCountry} onChange={this.handleChangeDescription} className="col-sm-6 form-control margin-top-rem-1 label-bold    " />
        //                                                 </div>
        //                                             </div>
        //                                             <div className="col-md-6">
        //                                                 <div className="form-group row gx-0 flex-row h-100 align-items-center">
        //                                                     <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
        //                                                         Alternate Description
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     <input required={true} value={this.state.alternateNewCountry} onChange={this.handleChangeAlternate} className="col-sm-7 col-lg-7 col-md-7 my-3 label" />
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                         <div className="row gx-0 flex-row justify-content-center mt-2">
        //                                             <div className="btn-center mx-2">
        //                                                 <button type={"submit"} className="btn country-searching-criteria" title="Approve">
        //                                                     Update
        //                                                 </button>
        //                                             </div>
        //                                         </div>
        //                                     </form>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="card shadow mb-4">
        //                         {/* <div className="card-header bg-shadow-dark py-3">
        //                                 <h3 className="m-0 font-weight-bold text-light">Host Mapping</h3>
        //   </div>*/}
        //                         <div className="card-header py-3">
        //                             <h6 className="m-0 font-weight-bold text-primary">Host Mapping</h6>
        //                         </div>

        //                         <div className="card-body">
        //                             <div className="row gx-0 col-md-12 bg-ginger">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group gx-0 row">
        //                                         <label htmlFor="inputHostSystem1" className="col-sm-3 col-form-label">
        //                                             OJK System
        //                                         </label>
        //                                         <label className="col-sm-1 col-form-label">:</label>
        //                                         <label className="col-sm-7 col-form-label">DKI</label>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="row gx-0 col-md-12 bg-light">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group row gx-0">
        //                                         <label htmlFor="inputHostSystem2" className="col-sm-3 col-form-label">
        //                                             BI System
        //                                         </label>
        //                                         <label className="col-sm-1 col-form-label">:</label>
        //                                         <label className="col-sm-7 col-form-label">JKT</label>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="row gx-0 col-md-12 bg-ginger">
        //                                 <div className="col-md-6">
        //                                     <div className="form-group gx-0 row">
        //                                         <label htmlFor="inputHostSystem3" className="col-sm-3 col-form-label">
        //                                             LPS SYstem
        //                                         </label>
        //                                         <label className="col-sm-1 col-form-label ">:</label>
        //                                         <label className="col-sm-7 col-form-label ">DKI</label>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ) : (
        //                 <h1>Loading...</h1>
        //             )}
        //         </>
        //     );

        return (
            <>
                {this.state.countryEdited != null ? (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Update</h6>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row gx-0 col-md-12 bg-ginger">
                                                <div className="col-md-6">
                                                    <div className="row gx-0 form-group flex-row h-100 align-items-center">
                                                        <label htmlFor="inputCode" className="ms-2 col-sm-3 col-form-label">
                                                            Country Code
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.countryEdited.code} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row h-100 gx-0 form-group flex-row align-items-center">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.countryEdited.name} onChange={this.handleChangeName} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 col-md-12 bg-light">
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0 flex-row h-100 align-items-center">
                                                        <label htmlFor="inputDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.countryEdited.description} onChange={this.handleChangeDescription} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0 flex-row h-100 align-items-center">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.countryEdited.alternateDescription} onChange={this.handleChangeAlternate} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 flex-row justify-content-center mt-2">
                                                <div className="text-right mr-5">
                                                    <button type={"submit"} className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Approve">
                                                        Update
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            {/* <div className="card-header bg-shadow-dark py-3">
                                      <h3 className="m-0 font-weight-bold text-light">Host Mapping</h3>
        </div>*/}
                            <h5 className="p-1 card-header col-12 bg-shadow-dark text-white">Mapping Code to Host System</h5>
                            <div className="card-body">
                                <div className="row gx-0 col-md-12 bg-ginger">
                                    <div className="col-md-6">
                                        <div className="form-group gx-0 row">
                                            <label htmlFor="inputHostSystem1" className="col-sm-3 col-form-label">
                                                OJK System
                                            </label>
                                            <label className="col-sm-1 col-form-label">:</label>
                                            <label className="col-sm-7 col-form-label">DKI</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-0 col-md-12 bg-light">
                                    <div className="col-md-6">
                                        <div className="form-group row gx-0">
                                            <label htmlFor="inputHostSystem2" className="col-sm-3 col-form-label">
                                                BI System
                                            </label>
                                            <label className="col-sm-1 col-form-label">:</label>
                                            <label className="col-sm-7 col-form-label">JKT</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-0 col-md-12 bg-ginger">
                                    <div className="col-md-6">
                                        <div className="form-group gx-0 row">
                                            <label htmlFor="inputHostSystem3" className="col-sm-3 col-form-label">
                                                LPS SYstem
                                            </label>
                                            <label className="col-sm-1 col-form-label ">:</label>
                                            <label className="col-sm-7 col-form-label ">DKI</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </>
        );
    }
}

export default (props) => <CountryUpdate {...props} params={useParams()} />;
