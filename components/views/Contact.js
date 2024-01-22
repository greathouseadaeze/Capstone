import html from "html-literal";
export default () => html`
  <form id="contactForm" action="https://formspree.io/f/mjvqnngv" method="POST">
    <h1>Ask Us A Question / Leave Feedback</h1>
    <label for="name">Name:</label>
    <input id="name" type="text" name="name" placeholder="Full Name" required />

    <label for="email">Email:</label>
    <input type="email" name="email" required />

    <label for="msg">Enter your message:</label>
    <textarea name="msg" id="msg" cols="30" rows="10"></textarea>

    <label for="reason">What is your message about?</label>
    <select id="reason" name="reason">
      <option value="training">Training Request</option>
      <option value="general" selected>General Question</option>
      <option value="comment">Comment/Concern</option>
    </select>
    <input type="submit" style="width: 200px; height: 50px;" />
  </form>
`;
