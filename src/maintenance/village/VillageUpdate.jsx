import { React, Component } from "react";
import { useParams } from "react-router-dom";
import "./Village.css";
import "./VillageUpdate.css";

class VillageUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            villageCode: this.props.params.id,
            villageEdited: {},
            nameNewvillage: "",
            codeNewvillage: "",
            descriptionNewvillage: "",
            alternateNewvillage: "",
        };
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.alternateNewvillage === "" || this.state.descriptionNewvillage === "" || this.state.codeNewvillage === "" || this.state.nameNewvillage === "") {
            return;
        }
        let village = {
            name: this.state.nameNewvillage,
            code: this.state.codeNewvillage,
            description: this.state.descriptionNewvillage,
            alternate_description: this.state.alternateNewvillage,
            is_system: false,
            created_by: "USER",
        };
        //add new instance to backend or file

        this.setState({
            villageEdited: village,
        });
    }
    handleChangeDescription(e) {
        this.setState({
            descriptionNewvillage: e.target.value,
        });
    }
    handleChangeName(e) {
        this.setState({
            nameNewvillage: e.target.value,
        });
    }
    handleChangeCode(e) {
        this.setState({
            codeNewvillage: e.target.value,
        });
    }
    handleChangeAlternate(e) {
        this.setState({
            alternateNewvillage: e.target.value,
        });
    }
    componentDidUpdate() {
        //console.log(`name:${this.state.nameNewvillage} , code:${this.state.codeNewvillage},alternate_description:${this.state.alternateNewvillage}, description:${this.state.descriptionNewvillage}`);
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
        fetch("/villageData.json")
            .then((response) => response.json())
            .then((result) => {
                //console.log(result);
                for (let i = 0; i < result.length; i++) {
                    if (result[i].code === this.state.villageCode.toString()) {
                        let villageChosen = {
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
                            codeNewvillage: result[i].code,
                            nameNewvillage: result[i].name,
                            descriptionNewvillage: result[i].description,
                            alternateNewvillage: alternateFinal,
                            villageEdited: villageChosen,
                        });
                        break;
                    }
                }
            });
    }
    render() {
        return (
            <>
                {this.state.villageEdited != null ? (
                    <div className="container-fluid">
                        <h1 className="h3 mb-1 text-gray-800">village</h1>

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
                                                            village Code
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} onChange={this.handleChangeCode} value={this.state.codeNewvillage} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row h-100 gx-0 form-group flex-row align-items-center">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.nameNewvillage} onChange={this.handleChangeName} className="col-sm-6 form-control margin-top-rem-1 label-bold" />
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
                                                        <input required={true} value={this.state.descriptionNewvillage} onChange={this.handleChangeDescription} className="col-sm-6 form-control margin-top-rem-1 label-bold    " />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0 flex-row h-100 align-items-center">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <input required={true} value={this.state.alternateNewvillage} onChange={this.handleChangeAlternate} className="col-sm-7 col-lg-7 col-md-7 my-3 label" />
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

export default (props) => <VillageUpdate {...props} params={useParams()} />;