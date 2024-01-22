import html from "html-literal";
export default state => html`
  <table id="trainings">
    <tr>
      <th>Trainee Name</th>
      <th>Week Day</th>
      <th>Date</th>
      <th>Fee</th>
    </tr>
    ${state.trainings
      .map(training => {
        if (training.day === "monday")
          return `<tr><td>${training.traineeName}</td><td>${training.day}</td><td>${training.date}</td><td>${training.cost}</td></tr>`;
      })
      .join("")}
  </table>

  <table id="trainings">
    <tr>
      <th>Trainee Name</th>
      <th>Week Day</th>
      <th>Date</th>
      <th>Fee</th>
    </tr>
    ${state.trainings
      .map(training => {
        if (training.day === "wednesday")
          return `<tr><td>${training.traineeName}</td><td>${training.day}</td><td>${training.date}</td><td>${training.cost}</td></tr>`;
      })
      .join("")}
  </table>

  <table id="trainings">
    <tr>
      <th>Trainee Name</th>
      <th>Week Day</th>
      <th>Date</th>
      <th>Fee</th>
    </tr>
    ${state.trainings
      .map(training => {
        if (training.day === "friday")
          return `<tr><td>${training.traineeName}</td><td>${training.day}</td><td>${training.date}</td><td>${training.cost}</td></tr>`;
      })
      .join("")}
  </table>
`;
