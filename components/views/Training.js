import html from "html-literal";
export default () => html`
  <form id="trainingForm" method="POST" action="">
    <h2>Sign Up For A Training Session</h2>
    <div>
      <label for="traineeName">Name of Trainee:</label>
      <input type="text" name="traineeName" placeholder="Full Name" required />
    </div>

    <div>
      <label for="day">Week Day for Training Session:</label>
      <select required name="day">
        <option value="">What week day?</option>
        <option value="monday">Monday</option>
        <option value="wednesday">Wednesday</option>
        <option value="friday">Friday</option>
      </select>
    </div>

    <div>
      <label for="date">Date:</label>
      <select required name="date">
        <option value="">Select date</option>
        <option value="two">2</option>
        <option value="five">5</option>
        <option value="seven">7</option>
        <option value="nine">9</option>
        <option value="twelve">12</option>
        <option value="fourteen">14</option>
        <option value="sixteen">16</option>
        <option value="nineteen">19</option>
        <option value="twenty-one">21</option>
        <option value="twenty-three">23</option>
        <option value="twenty-six">26</option>
        <option value="twenty-eight">28</option>
      </select>
    </div>

    <div>
      <label for="cost">Cost of Session:</label>
      <select required name="cost">
        <option value="">Fee That Will Be Due</option>
        <option value="one-hundred-fifty">150</option>
      </select>
    </div>
    <input type="submit" name="submit" value="Sign Me Up For This Training" />
  </form>
`;
