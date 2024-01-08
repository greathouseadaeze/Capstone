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
      <select required name="cost">
        <option value="">Fee That Will Be Due</option>
        <option value="150">150</option>
      </select>
    </div>
    <input type="submit" name="submit" value="Sign Me Up For This Training" />
  </form>
`;
