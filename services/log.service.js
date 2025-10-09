import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("Error") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + " " + message);
};

const printHelp = (help) => {
  console.log(dedent`
        ${chalk.bgCyan("Help")}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
    `);
};

const printWeather = (response, icon) => {
  console.log(dedent`
  ${chalk.bgBlackBright("Weather")} City weather ${response.name}
  ${icon} ${response.weather[0].description}
  Temperature: ${response.main.temp} (Feels like ${response.main.feels_like})
  Humidity: ${response.main.humidity}
  Wind: ${response.wind.speed}
  `);
};

export { printError, printSuccess, printHelp, printWeather };
