import { Component } from "react";
import TableTemplate from "../TableTemplate";
import { BsSearch as Search, BsTrash as Trash } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MdDone, MdModeEdit } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

class VillageDetail extends Component {
    //saat dipanggil, langsung render awal dengan village list yang kosong karena belum ada pencarian
    constructor(props) {
        /*save state for searched keywords:
         * option 1: onChange searched immediately
         * option 2: onSubmitted searched
         * option 3: both
         * */
        super(props);
        //console.log(this.props.params);
        this.state = {
            villageList: [],
            idChosen: this.props.params.id,
            villageChosen: {},
        };
        //tableContent must array of array of string
    } //saat setelah dirender, seorang dapat mencari village dengan mengetik dalam input text, nama / code village.
    componentDidUpdate(prevProps, prevState, snapShot) {
        //
        //console.log(this.state.villageChosen);
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
        //console.log(this.state.villageList);
        fetch("/villageData.json")
            .then((response) => response.json())
            .then((result) => {
                //console.log(result);
                for (let i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.code === this.state.idChosen) {
                        this.setState({
                            villageList: result,
                            villageChosen: obj,
                        });
                        break;
                    }
                }
            });
    }
    render() {
        return (
            <>
                {this.state.villageList.length > 0 ? (
                    <div className="container-fluid">
                        <h1 className="h3 mb-1 text-gray-800">village</h1>

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
                                                            village Code
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.code == null ? "" : `${this.state.villageChosen.code}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Name
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.name == null ? "" : `${this.state.villageChosen.name}`}</label>
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
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.description == null ? "" : `${this.state.villageChosen.description}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row gx-0">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Alternate Description
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.alternate_description == null ? "" : `${this.state.villageChosen.alternate_description}`}</label>
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
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.default_value == null ? "" : `${this.state.villageChosen.default_value}`}</label>
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
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.system == null ? "" : `${this.state.villageChosen.system}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label">
                                                            Is Delete
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.deleted == null ? "" : `${this.state.villageChosen.deleted}`}</label>
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
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.approved == null ? "" : `${this.state.villageChosen.approved}`}</label>
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
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.approved_by == null ? "" : `${this.state.villageChosen.approved_by}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label ">
                                                            Approved Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.approved_date == null ? "" : `${this.state.villageChosen.approved_date}`}</label>
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
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.created_by == null ? "" : this.state.villageChosen.created_by}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label ">
                                                            Created Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label">:</label>
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.created_date == null ? "" : `${this.state.villageChosen.created_date}`}</label>
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
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.created_ip_address == null ? "" : `${this.state.villageChosen.created_ip_address}`}</label>
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
                                                        <label className="col-sm-7 col-form-label">{this.state.villageChosen.updated_by == null ? "" : `${this.state.villageChosen.updated_by}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputName" className="ms-2 col-sm-3 col-form-label ">
                                                            Updated Date
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.updated_date == null ? "" : `${this.state.villageChosen.updated_date}`}</label>
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
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.updated_ip_address == null ? "" : `${this.state.villageChosen.updated_ip_address}`}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group gx-0 row">
                                                        <label htmlFor="inputAlternateDescription" className="ms-2 col-sm-3 col-form-label">
                                                            Updated Content Type
                                                        </label>
                                                        <label className="col-sm-1 col-form-label ">:</label>
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.updated_content_type == null ? "" : `${this.state.villageChosen.updated_content_type}`}</label>
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
                                                        <label className="col-sm-7 col-form-label ">{this.state.villageChosen.version == null ? "" : `${this.state.villageChosen.version}`}</label>
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
                                                    <Link to="/village-approve">
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Approve">
                                                            <MdDone></MdDone>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="btn-center mx-2">
                                                    <Link to={`/village/${this.state.idChosen}/edit`}>
                                                        <button className="btn btn-primary btn-min-width margin-top-rem-1 button-wrapper" title="Edit">
                                                            <MdModeEdit></MdModeEdit>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="btn-center mx-2">
                                                    <Link to="/village" className="text-decoration-none">
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
                                    {/* <div className="card-header bg-shadow-dark py-3">
                                    <h3 className="m-0 font-weight-bold text-light">Host Mapping</h3>
      </div>*/}
                                    <h5 className="p-1 card-header col-12 bg-shadow-dark text-white">Mapping Code to Host System</h5>
                                    <div className="card-body">
                                        <div className="row gx-0 col-md-12 bg-ginger">
                                            <div className="col-md-6">
                                                <div className="form-group gx-0 row">
                                                    <label htmlFor="inputHostSystem1" className="col-sm-3 ms-2 col-form-label">
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
                                                    <label htmlFor="inputHostSystem2" className="ms-2 col-sm-3 col-form-label">
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
                                                    <label htmlFor="inputHostSystem3" className="ms-2 col-sm-3 col-form-label">
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
export default (props) => <VillageDetail {...props} params={useParams()} />;
