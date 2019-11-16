import React from "react";
import { Row, Col } from "reactstrap";
import Strip from "../Strip/Strip";
import "../../../../../../node_modules/react-open-weather/lib/css/ReactWeather.css";
import { toDateStringFormat } from "../../../utilies/displayFormater";
import applicationContants from "../../../constants/applicationContants";

class WeatherReport extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props", this.props);
    return (
      <Strip className="strip strip--short" containerType="container">
        {this.props.locationData.name ?
        <Row className="justify-content-end">
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={5}
            xl={5}
            className="weather__report-container"
          >
            <Row>
              <Col
                xs={7}
                sm={7}
                md={7}
                lg={7}
                xl={7}
                className="background-blue-medium weather__report-position"
              >
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="pt-4px pb-4px"
                  >
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h5 className="internal-page__title align-left title-white fw-800 openSans-bold">
                          {this.props.locationData.name}
                        </h5>
                        <p className="p-small internal-page__title align-left title-white pt-4px pb-4px">{`${toDateStringFormat(
                          this.props.locationData.localtime
                        )}`}</p>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <hr className="divider-line" />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="pt-4px pb-4px"
                  >
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h3 className="internal-page__title align-left title-white fw-800">
                          {this.props.currentData.temperature} C
                        </h3>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-4px">
                        <Row className="aligm-items-center">
                          <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                           <img src={applicationContants.weatherImg} className="opacity-6"/>
                          </Col>
                          <Col xs={11} sm={11} md={11} lg={11} xl={11} className="pl-4px">
                          <p className="p-small internal-page__title align-left title-white openSans-bold title-grey-light">
                            Moderate or heavy rain shower
                          </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-4px">
                        <hr className="divider-line" />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="pt-4px pb-4px"
                  >
                    <p className="p-small internal-page__title align-left title-white openSans-bold">
                      Wind Speed:{" "}
                      <font className="pl-4px">
                        {this.props.currentData.wind_speed} km/h
                      </font>
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <p className="p-small internal-page__title align-left title-white openSans-bold">
                     Humidity:{" "}
                      <font className="pl-4px">
                        {this.props.currentData.humidity} %
                      </font>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col
                xs={5}
                sm={5}
                md={5}
                lg={5}
                xl={5}
                className="background-blue-light weather__report-position d-flex"
              >
                <Row className="weather__img-container">
                  <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                    <img src={applicationContants.weatherImg} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      : <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="pt-16px pb-16px">
        <p className="p-small internal-page__title align-center title-black openSans-bold">
          No data found
        </p>
        </Col>
        </Row>}
      </Strip>
    );
  }
}

export default WeatherReport;
