import html from "html-literal";
export default () => html`
  <form id="trainingForm" method="POST" action="">
    <h1>Sign Up For A February Training Session</h1>
    <div>
      <label for="traineeName">Name of Trainee:</label>
      <input
        id="traineeName"
        type="text"
        name="traineeName"
        placeholder="Full Name"
        required
      />
    </div>

    <div>
      <label for="day">Week Day for Training Session:</label>
      <select id="day" required name="day">
        <option value="">What week day?</option>
        <option value="monday">Monday</option>
        <option value="wednesday">Wednesday</option>
        <option value="friday">Friday</option>
      </select>
    </div>

    <div>
      <label for="date">Date:</label>
      <select id="date" required name="date">
        <option value="">Select date</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="9">9</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="19">19</option>
        <option value="21">21</option>
        <option value="23">23</option>
        <option value="26">26</option>
        <option value="28">28</option>
      </select>
    </div>

    <div>
      <label for="cost">Cost of Session:</label>
      <select id="cost" required name="cost">
        <option value="">Fee That Will Be Due</option>
        <option value="150">150</option>
      </select>
    </div>
    <div id="trainingSubmitButton">
      <input type="submit" name="submit" value="Sign Me Up For This Training" />
    </div>
  </form>

  <iframe
    class="trainingCalendar"
    src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23904263&ctz=America%2FChicago&mode=AGENDA&src=YjUwOTI0YzFhNGJhYTEyZjJmZThjODlmOWVkNGRlZDUzY2NmNTNjZDQyOGM3ODhiNzAxNTFiZDJkYjg1MDgwZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548"
    style="border:solid 1px #777"
    width="600"
    height="400"
    allowfullscreen
    frameborder="0"
    scrolling="no"
  ></iframe>
`;
