import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links, state)}
  ${Main(state)}
  ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Training") {
    // Add an event handler for the submit button on the form
    document
      .getElementById("trainingForm")
      .addEventListener("submit", event => {
        event.preventDefault();

        // Get the form element
        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        // Create a request body object to send to the API
        const requestData = {
          traineeName: inputList.traineeName.value,
          day: inputList.day.value,
          date: inputList.date.value,
          cost: inputList.cost.value
        };
        // Log the request body to the console
        console.log("request Body", requestData);

        axios
          // Make a POST request to the API to create a new training
          .post(`${process.env.ROSES_ROSCOE_URL}/trainings`, requestData)
          .then(response => {
            store.Registered.trainings.push(response.data);
            // alert(
            //   "You have successfully registered for this training! Thank you!"
            // );
            router.navigate("/Training");
          })
          // If there is an error log it to the console
          .catch(error => {
            console.log("It puked", error);
          });
      });
  }
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      case "About":
        // New Axios get request utilizing already made environment variable
        axios
          .get("https://randomuser.me/api/?results=4")
          .then(response => {
            // We need to store the response to the state
            console.log("response", response);
            store.About.trainerInfo = response.data;
            done();
          })
          .catch(error => {
            console.log(
              "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.",
              error
            );
            done();
          });
        break;
      // Add a case for each view that needs data from an API
      case "Registered":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.ROSES_ROSCOE_URL}/trainings`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Registered.trainings = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
