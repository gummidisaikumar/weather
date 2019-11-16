import React from "react";
import { Row, Col, Table } from "reactstrap";
import Strip from "../Strip/Strip";

class WeatherDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    console.log("data", data);
    return (
      <Strip className="strip strip--short" containerType="container">
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h5 className="internal-page__title align-left openSans-bold">
              Weather Details
            </h5>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <hr className="" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table className="table table-bordered">
              <thead>
                <tr>
                  <th>Location Name</th>
                  <th>Country</th>
                  <th>Temperature</th>
                  <th>Wind Speed</th>
                  <th>Wind Degree</th>
                  <th>lat-lon</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr>
                    <td>{item.location.name}</td>
                    <td>{item.location.country}</td>
                    <td>{item.current.temperature}</td>
                    <td>{item.current.wind_speed}</td>
                    <td>{item.current.wind_degree}</td>
                    <td>
                      {item.location.lat}, {item.location.lon}
                    </td>
                    <td>{item.current.humidity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Strip>
    );
  }
}

export default WeatherDetails;
