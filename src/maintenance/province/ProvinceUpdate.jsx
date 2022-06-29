// import { Component } from "react";
// import "./Province.css";
// import "./ProvinceUpdate.css";

// class ProvinceUpdate extends Component {

//     backOnClick = () => {
//         window.location = "/province";
//     }

//     render() {
//         return(
//             <>
//                 <div className="container-fluid">
//                     <h1 className="h3 mb-1 text-gray-800">INDONESIA &gt; Province</h1>

//                     <p className="mb-4" />

//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="card shadow mb-4">
//                                 <div className="card-header py-3">
//                                     <h6 className="m-0 font-weight-bold text-primary">Update</h6>
//                                 </div>

//                                 <div className="card-body">
//                                     <form className="row">
//                                         <div className="row-highlight col-sm-12 bg-gray-100">
//                                             <div className="col-md-6">
//                                                 <div className="form-group row">
//                                                     <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Code</label>
//                                                     <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
//                                                     <label htmlFor="inputCode" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">31</label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <div className="form-group row">
//                                                     <label htmlFor="inputName" className="col-sm-3 col-form-label margin-top-rem-1 label-bold label-mandatory">Name</label>
//                                                     <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
//                                                     <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputName" placeholder="Name" value="DKI JAKARTA"/>                                                
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="row-highlight col-sm-12 bg-gray-200">
//                                             <div className="col-md-6">
//                                                 <div className="form-group row">
//                                                     <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Description</label>
//                                                     <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
//                                                     <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputDescription" placeholder="Description" value="Ibukota" />                                                
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <div className="form-group row">
//                                                     <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Alternate Description</label>
//                                                     <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
//                                                     <input type="text" className="col-sm-7 form-control margin-top-rem-1" id="inputAlternateDescription" placeholder="Alternate Description" value="Republik Indonesia" />                                                
//                                                 </div>
//                                             </div>
//                                         </div>     
//                                         <div className="row-highlight col-sm-12 bg-gray-100">
//                                             <div className="col-md-6">
//                                                 <div className="form-group row">
//                                                     <label htmlFor="inputDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Default</label>
//                                                     <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
//                                                     <input type="checkbox" className="col-sm-1 form-control margin-top-rem-1" id="checkBoxIsDefault" name="checkBoxIsDefault" value="false" />
//                                                     <div className="col-sm-6" />
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <div className="form-group row">
//                                                     <label htmlFor="inputAlternateDescription" className="col-sm-3 col-form-label margin-top-rem-1 label-bold">Is Enable</label>
//                                                     <label className="col-sm-1 col-form-label margin-top-rem-1">:</label>
//                                                     <input type="checkbox" className="col-sm-1 form-control margin-top-rem-1" id="checkBoxIsEnable" name="checkBoxIsEnable" value="true" defaultChecked />
//                                                     <div className="col-sm-6" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="row-highlight col-sm-12">
//                                             <div className="col-md-11">
//                                                 <button type="submit" className="btn btn-primary float-right margin-top-rem-1 btn-min-width">Update</button>
//                                             </div>

//                                             <div className="col-md-1">
//                                                 <button type="button" className="btn btn-primary float-right margin-top-rem-1 btn-min-width" onClick={this.backOnClick}>Back</button>
//                                             </div>
//                                         </div>
//                                     </form>              
//                                 </div>
//                             </div>

//                             <div className="card shadow mb-4">
//                                 <div className="card-header py-3">
//                                     <h6 className="m-0 font-weight-bold text-primary">Language Mapping</h6>
//                                 </div>

//                                 <div className="card-body">                                    
//                                     <div className="table-responsive">
//                                         <table className="table table-bordered" id="dataTableLanguage" width="100%" cellSpacing="0">
//                                             <thead>
//                                                 <tr>
//                                                     <th>Language</th>
//                                                     <th>Code</th>
//                                                     <th>Name</th>
//                                                     <th>Is Enable</th>
//                                                 </tr>
//                                             </thead>
//                                             <tfoot>
//                                                 <tr>
//                                                     <th>Language</th>
//                                                     <th>Code</th>
//                                                     <th>Name</th>
//                                                     <th>Is Enable</th>
//                                                 </tr>
//                                             </tfoot>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>Bahasa</td>
//                                                     <td><input type="text" className="form-control" id="inputCodeLanguage1" placeholder="Code" /></td>
//                                                     <td><input type="text" className="form-control" id="inputNameLanguage1" placeholder="Name" /></td>
//                                                     <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage1" value="true" /></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>South Korea</td>
//                                                     <td><input type="text" className="form-control" id="inputCodeLanguage2" placeholder="Code" /></td>
//                                                     <td><input type="text" className="form-control" id="inputNameLanguage2" placeholder="Name" /></td>
//                                                     <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage2" value="true" /></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Dutch</td>
//                                                     <td><input type="text" className="form-control" id="inputCodeLanguage3" placeholder="Code" /></td>
//                                                     <td><input type="text" className="form-control" id="inputNameLanguage3" placeholder="Name" /></td>
//                                                     <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage3" value="true" /></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Jowo</td>
//                                                     <td><input type="text" className="form-control" id="inputCodeLanguage4" placeholder="Code" /></td>
//                                                     <td><input type="text" className="form-control" id="inputNameLanguage4" placeholder="Name" /></td>
//                                                     <td><input type="checkbox" className="form-control" id="vehicle1" name="checkBoxLanguage4" value="true" /></td>
//                                                 </tr>                                                
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="card shadow mb-4">
//                                 <div className="card-header py-3">
//                                     <h6 className="m-0 font-weight-bold text-primary">Host Mapping</h6>
//                                 </div>

//                                 <div className="card-body">                                    
//                                     <div className="table-responsive">
//                                         <table className="table table-bordered" id="dataTableHost" width="100%" cellSpacing="0">
//                                             <thead>
//                                                 <tr>
//                                                     <th>Host</th>
//                                                     <th>Code</th>
//                                                 </tr>
//                                             </thead>
//                                             <tfoot>
//                                                 <tr>
//                                                     <th>Host</th>
//                                                     <th>Code</th>
//                                                 </tr>
//                                             </tfoot>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>Bank Indonesia</td>
//                                                     <td><input type="text" className="form-control" id="hostCode1" placeholder="Code.." /></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>OJK</td>
//                                                     <td><input type="text" className="form-control" id="hostCode2" placeholder="Code.." /></td>
//                                                 </tr>                                                                                    
//                                             </tbody>
//                                         </table>
//                                     </div> 
//                                 </div>
//                             </div>                            
//                         </div>                        
//                     </div>
//                 </div>            
//             </>
//         );
//     }
// }

// export default ProvinceUpdate;

import { React, Component } from "react";
import { useParams } from "react-router-dom";
import "./Province.css";
import "./ProvinceUpdate.css";

class ProvinceUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinceCode: this.props.params.id,
            provinceEdited: {},
            nameNewprovince: "",
            codeNewprovince: "",
            descriptionNewprovince: "",
            alternateNewprovince: "",
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
        let province = {
            name: this.state.nameNewprovince,
            code: this.state.codeNewprovince,
            description: this.state.descriptionNewprovince,
            alternate_description: this.state.alternateNewprovince,
            is_system: false,
            created_by: "USER",
        };
        //add new instance to backend or file

        this.setState({
            provinceEdited: province,
        });
    }
    handleChangeDescription(e) {
        this.setState({
            descriptionNewprovince: e.target.value,
        });
    }
    handleChangeName(e) {
        this.setState({
            nameNewprovince: e.target.value,
        });
    }
    handleChangeCode(e) {
        this.setState({
            codeNewprovince: e.target.value,
        });
    }
    handleChangeAlternate(e) {
        this.setState({
            alternateNewprovince: e.target.value,
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

        // document.addEventListener("readystatechange", function (event) {
        //   if (document.readyState === "complete") {
        //     document.body.setAttribute("data-theme", "colored");
        //   }
        // });
        fetch("/provinceData.json")
            .then((response) => response.json())
            .then((result) => {
                //console.log(result);
                for (let i = 0; i < result.length; i++) {
                    if (result[i].code === this.state.provinceCode.toString()) {
                        let provinceChosen = {
                            code: result[i].code,
                            name: result[i].name,
                            alternate_description: result[i].alternate_description,
                            description: result[i].description,
                            is_system: false,
                            created_by: "USER",
                        };
                        let alternateFinal = "";
                        if (result[i].alternate_description == null) {
                            alternateFinal = "";
                        } else {
                            alternateFinal = result[i].alternate_description;
                        }
                        this.setState({
                            codeNewprovince: result[i].code,
                            nameNewprovince: result[i].name,
                            descriptionNewprovince: result[i].description,
                            alternateNewprovince: alternateFinal,
                            provinceEdited: provinceChosen,
                        });
                        break;
                    }
                }
            });
    }
    render() {
        return (
            <>
                {this.state.provinceEdited != null ? (
                    <div className="container-fluid">
                        <h1 className="h3 mb-1 text-gray-800">province</h1>

                        <p className="mb-4" />
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
                                                        <input required={true} onChange={this.handleChangeCode} value={this.state.codeNewprovince} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row h-100 gx-0 form-group flex-row align-items-center">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.nameNewprovince} onChange={this.handleChangeName} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
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
                                                        <input required={true} value={this.state.descriptionNewprovince} onChange={this.handleChangeDescription} className="col-sm-6 form-control margin-top-rem-1 label-bold    " />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0 flex-row h-100 align-items-center">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.alternateNewprovince} onChange={this.handleChangeAlternate} className="col-sm-7 col-lg-7 col-md-7 my-3 label" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row gx-0 flex-row justify-content-center mt-2">
                                                <div className="btn-center mx-2">
                                                    <button type={"submit"} className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper align-items-center" title="Update">
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
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Host Mapping</h6>
                            </div>

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
