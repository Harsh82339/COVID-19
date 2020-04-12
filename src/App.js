import React from "react";
import { Cards, Country, Graph } from "./components";
import styles from "./App.module.css";
import corona from "./sim.png";
import { fetchData, fetchDailyData } from "./api";
class App extends React.Component {
    state= {
        data: {},
        country:' ',
    }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
 handleCountryChange = async (country) =>
 {
   const fetchedData =await fetchData(country);
   console.log(fetchedData);
   console.log(country);
   this.setState({data: fetchedData, country: country})
 }

  render() {
      const {data, country} =this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={corona} alt="COVID-19" />
        <Cards  data={data}/>
        <Country handleCountryChange={this.handleCountryChange} />  
        <Graph data={data} country={country} />
      </div>
    );
  }
}
export default App;
