// import https from "https";
import axios from "axios";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "⛅";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "😶‍🌫️";
    default:
      break;
  }
};

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error("API does not exist, -t [API_KEY] for saving token ");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lan: "en",
        units: "metric",
      },
    }
  );

  return data;

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  // url.searchParams.append("q", city);
  // url.searchParams.append("appid", token);
  // url.searchParams.append("lan", "en");
  // url.searchParams.append("units", "metric");
  // console.log(url);
  // https.get(url, (response) => {
  //   let res = "";
  //   response.on("data", (chunk) => {
  //     res += chunk;
  //   });
  //   response.on("end", () => {
  //     console.log(res);
  //   });
  // });
};

export { getWeather, getIcon };
