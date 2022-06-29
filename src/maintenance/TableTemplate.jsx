import { HashLink as Link } from "react-router-hash-link";
import { BsPlusLg as Plus } from "react-icons/bs";
import { React, Component } from "react";

class TableTemplate extends Component {
  constructor(props) {
    super(props);
    //render every time the props changed (once) default false cause we dont see any table when searched button on this parent hasnt clicked yet
    this.state = {
      tableShouldShow: false,
      addButtonShow: false,
      paginationActive: 1,
      paginationPage: [1],
      headersField: ["No.", "Name", "Id", "Description", "Alternative Description"],
      tableContent: [
        ["This", "is", "template", "and you are", "calling this"],
        ["without", "any", "tableContent", "and you set", "shouldShowTable"],
        ["to true", "instead of", "calling empty", "insert any", "table content"],
      ],
      tableTitle: "Template Title",
      instanceSeen: 5,
      instanceVisible: [5],
      addButtonNav: "#",
      linkToDetail: ["#", -1],
    };
    this.selectInstanceVisible = this.selectInstanceVisible.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  rangeString = (start, stop, stringRepetition) => Array.from({ length: stop - start }, (_, i) => stringRepetition);
  changePage(e) {
    //console.log(e.target.value);
    let pageChosen = e.target.value;
    if (pageChosen > this.state.paginationPage[this.state.paginationPage.length - 1]) {
      let maxPageTem = Math.ceil(this.props.tableContent.length / this.state.instanceSeen) - this.state.paginationPage[this.state.paginationPage.length - 1];
      let maxRes = 0;
      if (maxPageTem <= 5) {
        maxRes = maxPageTem + this.state.paginationPage[this.state.paginationPage.length - 1];
      } else {
        maxRes = this.state.paginationPage[this.state.paginationPage.length - 1] + 5;
      }
      this.setState({
        tableContent: this.props.tableContent.slice(this.state.instanceSeen * (pageChosen - 1), this.state.instanceSeen * pageChosen),
        paginationActive: pageChosen,
        paginationPage: this.range(this.state.paginationPage[0] + 5, maxRes, 1),
      });
    } else if (pageChosen < this.state.paginationPage[0]) {
      this.setState({
        tableContent: this.props.tableContent.slice(this.state.instanceSeen * (pageChosen - 1), this.state.instanceSeen * pageChosen),
        paginationActive: pageChosen,
        paginationPage: this.range(this.state.paginationPage[0] - 5, this.state.paginationPage[0] - 1, 1),
      });
    } else {
      this.setState({
        tableContent: this.props.tableContent.slice(this.state.instanceSeen * (pageChosen - 1), this.state.instanceSeen * pageChosen),
        paginationActive: pageChosen,
      });
    }
    //console.log(`${this.state.paginationPage[this.state.paginationPage.length - 1]} ${this.state.paginationActive}`);
  }
  renderTable() {
    return (
      <tbody>
        {this.state.tableContent.map((record) => (
          <tr key={this.state.tableContent.indexOf(record)}>
            {record.map((instance) => {
              if (record.indexOf(instance) == Number.parseInt(this.state.linkToDetail[1])) {
                return (
                  <td key={record.indexOf(instance)}>
                    <Link to={`${this.state.linkToDetail[0]}/${instance}`}>{instance}</Link>
                  </td>
                );
              } else {
                return <td key={record.indexOf(instance)}>{instance}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }

  selectInstanceVisible(e) {
    //console.log(e.target.value);
    let instanceVisibleChosen = e.target.value;
    if (instanceVisibleChosen > 0) {
      //harus kembali lagi kalo ganti instanceVisiblenya ke 1 pageActivenya
      //jika select memilih 5,10,25,50,100, maka harus mengubah apa yang ingin ditampilkan
      let tableContentRendered = [];

      this.props.tableContent.map((record) => {
        if (this.props.tableContent.indexOf(record) < instanceVisibleChosen) {
          tableContentRendered.push(record);
        }
      });
      let maxPage = Math.ceil(this.props.tableContent.length / instanceVisibleChosen);
      let maxRes = 0;
      if (maxPage < 5) {
        maxRes = maxPage;
      } else {
        maxRes = 5;
      }
      this.setState({
        instanceSeen: instanceVisibleChosen,
        paginationPage: this.range(1, maxRes, 1),
        tableContent: tableContentRendered,
        paginationActive: 1,
      });
    }
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    //instead doing update every time component has been rendered call state again and render again
    //compare before render props and current props
    //only update table if table is added, updated, deleted
    //tergantung sama props yang paling new
    //kalo sudah diganti jumlah record nya, maka table render lagi shouldTableUpdate=false
    if (this.props.tableShouldShow === true) {
      //update jika hanya properti this.props.shouldUpdate==true dan sebelumnya false
      //
      //content hanya overwrite yang diberi sama React.parent
      if (this.props.tableShouldUpdate === true) {
        if (this.props.tableContent.length > 0) {
          //console.log("ComponentDidUpdate"+this.props.tableShouldUpdate);

          //search the maximum amount of visible count can be seen in every pagination
          //changed cause props and content change
          let maximumCount = 0;

          let arrayMax = [5, 10, 25, 50, 100];
          let paginationCount = 0;
          if (Math.floor(this.props.tableContent.length / 100) > 0) {
            maximumCount = 100;
          } else if (Math.floor(this.props.tableContent.length / 50) > 0) {
            maximumCount = 50;
            arrayMax.pop();
          } else if (Math.floor(this.props.tableContent.length / 25) > 0) {
            maximumCount = 25;
            arrayMax.pop();
            arrayMax.pop();
          } else if (Math.floor(this.props.tableContent.length / 10) > 0) {
            maximumCount = 10;
            for (let i = 0; i < 3; i++) {
              arrayMax.pop();
            }
          } else if (Math.floor(this.props.tableContent.length / 5) > 0) {
            maximumCount = 5;
            for (let i = 0; i < 4; i++) {
              arrayMax.pop();
            }
          } else {
            maximumCount = 5;
            for (let i = 0; i < 4; i++) {
              arrayMax.pop();
            }
          }
          paginationCount = Math.ceil(this.props.tableContent.length / maximumCount) < 5 ? Math.ceil(this.props.tableContent.length / maximumCount) : 5;
          //console.log(arrayMax);
          //console.log(Math.floor(this.props.tableContent.length / 100));
          //const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
          this.setState({
            tableShouldShow: this.props.tableShouldShow,
            addButtonShow: this.props.addButtonShow,
            headersField: this.props.headersField,
            tableTitle: this.props.tableTitle,
            tableContent: this.props.tableContent.slice(0, maximumCount),
            paginationPage: this.range(1, paginationCount, 1),
            instanceVisible: arrayMax,
            instanceSeen: maximumCount,
            paginationActive: 1,
            addButtonNav: this.props.addButtonNav,
            linkToDetail: this.props.linkToDetail,
          });
        }
      }
    }
  }

  componentDidMount() {
    //happens when state already rendered once.
  }
  render() {
    return (
      <>
        {this.state.tableShouldShow ? (
          <div className="card shadow flex-column mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">{this.state.tableTitle}</h6>
            </div>
            <div className="form-check input-group flex-row my-3 justify-content-between align-items-center">
              <select className="select" onChange={this.selectInstanceVisible} value={this.state.instanceSeen}>
                <option value={-1}>Visible instance</option>
                {this.state.instanceVisible.map((visible) => (
                  <option key={this.state.instanceVisible.indexOf(visible)} value={visible}>
                    {visible}
                  </option>
                ))}
              </select>
              {this.state.addButtonShow === true ? (
                <Link className="btn btn-primary mx-4" title="Tambah" to={this.state.addButtonNav}>
                  <Plus />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      {this.state.headersField.map((header) => (
                        <th key={this.state.headersField.indexOf(header)}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  {this.renderTable()}
                </table>
              </div>
            </div>
            <div className="align-self-center">
              <nav>
                <ul className="pagination">
                  {
                    <li className={this.state.paginationActive == 1 ? "page-item disabled" : "page-item"} key="previous">
                      <button onClick={this.changePage} value={Number.parseInt(this.state.paginationActive) - 1} className="page-link">
                        Previous
                      </button>
                    </li>
                  }
                  {this.state.paginationPage[0] > 1 ? (
                    <li className="page-item" key="foldPrev">
                      <button onClick={this.changePage} value={Number.parseInt(this.state.paginationPage[0]) - 1} className="page-link">
                        ...
                      </button>
                    </li>
                  ) : (
                    <></>
                  )}
                  {this.state.paginationPage.map((pagination) => {
                    return (
                      <li key={this.state.paginationPage.indexOf(pagination)} className={this.state.paginationActive == pagination ? "page-item active" : "page-item"}>
                        <button onClick={this.changePage} className="page-link" value={pagination}>
                          {pagination}
                        </button>
                      </li>
                    );
                  })}
                  {this.state.paginationPage[this.state.paginationPage.length - 1] < Math.ceil(this.props.tableContent.length / this.state.instanceSeen) ? (
                    <li className="page-item" key="foldNext">
                      <button onClick={this.changePage} value={Number.parseInt(this.state.paginationPage[this.state.paginationPage.length - 1]) + 1} className="page-link">
                        ...
                      </button>
                    </li>
                  ) : (
                    <></>
                  )}
                  {
                    <li className={this.state.paginationActive == Math.ceil(this.props.tableContent.length / this.state.instanceSeen) ? "page-item disabled" : "page-item"} key="next">
                      <button className="page-link" onClick={this.changePage} value={Number.parseInt(this.state.paginationActive) + 1}>
                        Next
                      </button>
                    </li>
                  }
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default TableTemplate;
