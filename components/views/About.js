import html from "html-literal";
import lady1 from "../../docs/pictures/lady1.jpg";
import lady2 from "../../docs/pictures/lady2.jpg";
import guy1 from "../../docs/pictures/guy1.jpg";
import guy2 from "../../docs/pictures/guy2.jpg";

export default state => html`
  <div class="about-page-grid">
    <div class="about-us-body-text">
      <h1>
        About Us
      </h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h3>
    </div>

    <div class="team-member-info">
      <h2>Meet Our Team</h2>
      <div class="team-pictures">
        <img class="team-member-photos" src="${lady1}" />
        <img class="team-member-photos" src="${lady2}" />
        <img class="team-member-photos" src="${guy1}" />
        <img class="team-member-photos" src="${guy2}" />
      </div>
      <div class="team-descriptions">
        <h3>
          ${state.trainerInfo.results[0].email}
        </h3>

        <h3>
          ${state.trainerInfo.results[1].email}
        </h3>

        <h3>
          ${state.trainerInfo.results[2].email}
        </h3>

        <h3>
          ${state.trainerInfo.results[3].email}
        </h3>
      </div>
    </div>

    <div class="map">
      <h2>Where To Find Us</h2>

      <iframe
        width="400"
        height="325"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=${process.env
          .GOOGLE_MAPS_API_KEY}
    &q=place_id:ChIJ-5nXQNXK2IcRoJT-0SSWg8U&"
      >
      </iframe>
    </div>
  </div>
`;
