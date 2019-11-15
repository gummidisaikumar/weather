import React from "react";
import { Row, Col } from "reactstrap";
import Strip from "../Strip/Strip";
import ReactWeather from "react-open-weather";
import "../../../../../../node_modules/react-open-weather/lib/css/ReactWeather.css";



class WeatherReport extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props", this.props);
    return (
      <Strip className="strip strip--short" containerType="container">
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-4px pb-4px">
                <Row>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="p-medium internal-page__title align-left">
                      Country
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.locationData.country}
                    </p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="p-medium internal-page__title align-left">
                      Name
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.locationData.name}
                    </p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="p-medium internal-page__title align-left">
                      Region
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.locationData.region}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-4px pb-4px">
                <Row>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="p-medium internal-page__title align-left">
                      Pressure
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.currentData.pressure}
                    </p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="p-medium internal-page__title align-left">
                      Temperature
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.currentData.temperature}
                    </p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4} className="pt-4px pb-4px"> 
                    <p className="p-medium internal-page__title align-left">
                      Wind Degree
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.currentData.wind_degree}
                    </p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4} className="pt-4px pb-4px">
                    <p className="p-medium internal-page__title align-left">
                      Wind Speed
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.currentData.wind_speed}
                    </p>
                  </Col>
                  <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                    <p className="p-medium internal-page__title align-left">
                      Weather Code
                    </p>
                    <p className="p-medium internal-page__title align-left">
                      {this.props.currentData.weather_code}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}></Col>
        </Row>
      </Strip>
    );
  }
}

export default WeatherReport;
