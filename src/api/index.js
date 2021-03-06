import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeurl= url;
    if(country){
        changeurl=`${url}/countries/${country}`
    }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeurl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};



export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily");

    // const modifiedData = data.map((dailyData) => ({
    //   confirmed: dailyData.confirmed.total,
    //   deaths: dailyData.deaths.total,
    //   date: dailyData.date.total,
    // }));
    // console.log(modifiedData[0]);
    const modi =  data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
      
    return modi
  } catch (error) {}
};



export const fetchcountries = async () => {
    try{
        const { data: { countries}} =await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    }catch(error){

    }
};

