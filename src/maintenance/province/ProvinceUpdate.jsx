import { React, Component } from "react";
import { useParams } from "react-router-dom";
import "./Province.css";
import "./ProvinceUpdate.css";
import axios from "axios";

class ProvinceUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinceCode: this.props.params.id,
            provinceEdited: {
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
            // nameNewprovince: "",
            // codeNewprovince: "",
            // descriptionNewprovince: "",
            // alternateNewprovince: "",
        };
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.alternateNewprovince === "" || this.state.descriptionNewprovince === "" || this.state.codeNewprovince === "" || this.state.nameNewprovince === "") {
            return;


        }
        console.log("submit");



        // let province = {
        //   name: this.state.nameNewprovince,
        //   code: this.state.codeNewprovince,
        //   description: this.state.descriptionNewprovince,
        //   alternate_description: this.state.alternateNewprovince,
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

        // this.setState({
        //   provinceEdited: province,
        // });
    }
    handleChangeDescription(e) {
        this.setState({
            provinceEdited: {
                ...this.state.provinceEdited,
                description: e.target.value,
            },
        });
    }
    handleChangeName(e) {
        this.setState({
            provinceEdited: {
                ...this.state.provinceEdited,
                name: e.target.value,
            },
        });
    }
    // handleChangeCode(e) {
    //   this.setState({
    //     provinceEdited: {
    //       ...this.state.provinceEdited,
    //       code: e.target.value,
    //     },
    //   });
    // }
    handleChangeAlternate(e) {
        this.setState({
            provinceEdited: {
                ...this.state.provinceEdited,
                alternateDescription: e.target.value,
            },
        });
    }
    componentDidUpdate() {
        //console.log(`name:${this.state.nameNewprovince} , code:${this.state.codeNewprovince},alternate_description:${this.state.alternateNewprovince}, description:${this.state.descriptionNewprovince}`);
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
        // fetch("/provinceData.json")
        //   .then((response) => response.json())
        //   .then((result) => {
        //     //console.log(result);
        // for (let i = 0; i < result.length; i++) {
        //   if (result[i].code === this.state.provinceCode.toString()) {
        //     let provinceChosen = {
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
        //       codeNewprovince: result[i].code,
        //       nameNewprovince: result[i].name,
        //       descriptionNewprovince: result[i].description,
        //       alternateNewprovince: alternateFinal,
        //       provinceEdited: provinceChosen,
        //     });
        //     break;
        //   }
        // }
        // });
        //seharusnya get detail aja id
        axios
            .request({
                method: "get",
                url: "https://kbdsi-mtsys.herokuapp.com/v0/province/retrieve-all",
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
                    console.log(result[i].code + this.state.provinceCode.toString());
                    if (result[i].code === this.state.provinceCode) {
                        let provinceChosen = {
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
                            codeNewprovince: result[i].code,
                            nameNewprovince: result[i].name,
                            descriptionNewprovince: result[i].description,
                            alternateNewprovince: alternateFinal,
                            provinceEdited: {
                                ...this.state.provinceEdited,
                                ...provinceChosen,
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
        //             {this.state.provinceEdited != null ? (
        //                 <div className="container-fluid">
        //                     <h1 className="h3 mb-1 text-gray-800">province</h1>

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
        //                                                         province Code
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     {/* <input required={true} onChange={this.handleChangeCode} value={this.state.codeNewprovince} className="col-sm-6 form-control margin-top-rem-1 label-bold" /> */}
        //                                                     <input required={true} value={this.state.provinceEdited.code} className="col-sm-7 col-lg-7 col-md-7 my-3 label" />
        //                                                 </div>
        //                                             </div>
        //                                             <div className="col-md-6">
        //                                                 <div className="row h-100 gx-0 form-group flex-row align-items-center">
        //                                                     <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
        //                                                         Name
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     <input required={true} value={this.state.nameNewprovince} onChange={this.handleChangeName} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
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
        //                                                     <input required={true} value={this.state.descriptionNewprovince} onChange={this.handleChangeDescription} className="col-sm-6 form-control margin-top-rem-1 label-bold    " />
        //                                                 </div>
        //                                             </div>
        //                                             <div className="col-md-6">
        //                                                 <div className="form-group row gx-0 flex-row h-100 align-items-center">
        //                                                     <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
        //                                                         Alternate Description
        //                                                     </label>
        //                                                     <label className="col-sm-1 col-form-label">:</label>
        //                                                     <input required={true} value={this.state.alternateNewprovince} onChange={this.handleChangeAlternate} className="col-sm-7 col-lg-7 col-md-7 my-3 label" />
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                         <div className="row gx-0 flex-row justify-content-center mt-2">
        //                                             <div className="btn-center mx-2">
        //                                                 <button type={"submit"} className="btn province-searching-criteria" title="Approve">
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
                {this.state.provinceEdited != null ? (
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
                                                            province Code
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.provinceEdited.code} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row h-100 gx-0 form-group flex-row align-items-center">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.provinceEdited.name} onChange={this.handleChangeName} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
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
                                                        <input required={true} value={this.state.provinceEdited.description} onChange={this.handleChangeDescription} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0 flex-row h-100 align-items-center">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.provinceEdited.alternateDescription} onChange={this.handleChangeAlternate} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
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

export default (props) => <ProvinceUpdate {...props} params={useParams()} />;
