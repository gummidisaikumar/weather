import React from "react";
import { Row, Col } from "reactstrap";
import DatePicker from "react-date-picker";
import RenderPage from "../../customComponent/common/RenderPage/RenderPage";
import Strip from "../../customComponent/common/Strip/Strip";
import WeatherReport from "../../customComponent/common/WeatherReport/WeatherReport";
import axios from 'axios';
import { toDateFormatYYYYMMDD } from "../../utilies/displayFormater";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentData:[],
      locationData:[],
      requestData:[],
    };
  }

  async componentDidMount() {
    debugger;
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
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

 onChange = async (date) => {

    this.setState({ date });
    await axios
    .get(
      "http://api.weatherstack.com/current?access_key=29d5c30bf1149ba2efc49d5649584f38&query=fetch:ip&&historical_date="+toDateFormatYYYYMMDD(date)+"&hourly=1",
    )
    .then(response => {
      console.log("response", response);
      this.setState({
          currentData: response.data.current,
          locationData: response.data.location,
          requestData: response.data.request,
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <RenderPage className="render-page" containerType="container-fluid">
        <Strip className="strip strip--short" containerType="container">
          <Row className="align-items-center">
            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <p className="internal-page__title align-left">Weather</p>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DatePicker onChange={this.onChange} value={this.state.date} />
            </Col>
            <Col xs={12} sm={12} lg={12} xl={12}>
              <hr className="divider-line" />
            </Col>
          </Row>
        </Strip>
        <WeatherReport 
        currentData={this.state.currentData}
        requestData={this.state.requestData}
        locationData={this.state.locationData}/>
      </RenderPage>
    );
  }
}

export default Weather;
