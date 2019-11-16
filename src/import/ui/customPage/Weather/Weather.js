import React from "react";
import { Row, Col } from "reactstrap";
import DatePicker from "react-date-picker";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import WeatherReport from "../../customComponent/common/WeatherReport/WeatherReport";
import axios from "axios";
import Loading from "../../customComponent/common/Loader/Loader";
import WeatherDetails from "../../customComponent/common/WeatherDetails/WeatherDetails";
import data from "./WeatherData";
import { toDateFormatYYYYMMDD } from "../../utilies/displayFormater";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentData: [],
      locationData: [],
      requestData: [],
      isLoading: true,
      data: data,
    };
    this.getDayWeatherReport = this.getDayWeatherReport.bind(this);
  }

  async componentDidMount() {
    await axios
      .get(
        "http://api.weatherstack.com/current?access_key=29d5c30bf1149ba2efc49d5649584f38&query=fetch:ip"
      )
      .then(response => {
        console.log("res", response);
        this.setState({
          currentData: response.data.current,
          locationData: response.data.location,
          requestData: response.data.request,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false
        });
        console.log(error);
      });
  }

  async getDayWeatherReport(date) {
    console.log("date1", toDateFormatYYYYMMDD(date))
    
    const data = this.state.data.filter(function(item){
      if(toDateFormatYYYYMMDD(date) == toDateFormatYYYYMMDD(item.location.localtime)){
        return item;
      }
    });
    console.log(data);
    if(data.length > 0){
      this.setState({
        currentData: data[0].current,
        locationData: data[0].location,
        requestData: data[0].request
      })
    }
    else{
      this.setState({
        currentData:[],
        locationData:[],
        requestData:[]
      })
    }


    //Due to Api issue unable to fetch the api based on date. For that implemented with Local Json File
    // await axios
    // .get(
    //   "http://api.weatherstack.com/current?access_key=29d5c30bf1149ba2efc49d5649584f38&query=fetch:ip&&historical_date="+toDateFormatYYYYMMDD(date)+"&hourly=1",
    // )
    // .then(response => {
    //   console.log("response", response);
    //   this.setState({
    //       currentData: response.data.current,
    //       locationData: response.data.location,
    //       requestData: response.data.request,
    //   })
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  onChange = async date => {
    await this.setState({ date });
    this.getDayWeatherReport(this.state.date);
  };

  render() {
    return (
      <RenderPage className="render-page" containerType="container-fluid">
        <Strip className="strip strip--short" containerType="container">
          <Row className="align-items-center">
            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <h5 className="internal-page__title align-left openSans-bold">
                Weather Reports
              </h5>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DatePicker onChange={this.onChange} value={this.state.date} />
            </Col>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <hr className="" />
            </Col>
          </Row>
        </Strip>
        {!this.state.isLoading ? (
          <WeatherReport
            currentData={this.state.currentData}
            requestData={this.state.requestData}
            locationData={this.state.locationData}
          />
        ) : (
          <Loading />
        )}
        {data ? (
        <WeatherDetails data={data} />
        ) : (
          <Loading />
        )}
      </RenderPage>
    );
  }
}

export default Weather;
