import html from "html-literal";
import lady1 from "../../docs/pictures/lady1.jpg";
import lady2 from "../../docs/pictures/lady2.jpg";
import guy1 from "../../docs/pictures/guy1.jpg";
import guy2 from "../../docs/pictures/guy2.jpg";

export default state => html`
  <div class="aboutPage">
    <div class="about-us-body-text">
      <h2
        style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
      >
        Who We Are
      </h2>
      <h3>
        Welcome to Rose's Roscoe, a beacon of empowerment for women seeking to
        hone their firearm skills in a supportive and educational environment.
        Our mission at Rose's Roscoe is to train, educate, and empower our
        members, fostering a community where women can confidently navigate the
        world of firearms. From beginners to seasoned enthusiasts, Rose's Roscoe
        provides a space where members can enhance their skills, build
        camaraderie, and gain the confidence to navigate the world safely. Join
        us at Rose's Roscoe and embark on a transformative journey where
        training meets empowerment, creating a community of empowered women
        ready to face any challenge.
      </h3>
    </div>

    <div class="team-member-info">
      <h2
        style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
      >
        Meet Our Team
      </h2>
      <div class="team-pictures">
        <img class="team-member-photos" src="${lady1}" />
        <img class="team-member-photos" src="${lady2}" />
        <img class="team-member-photos" src="${guy1}" />
        <img class="team-member-photos" src="${guy2}" />
      </div>
      <div class="team-descriptions">
        <h3>
          ${state.trainerInfo.results[0].name["first"] + " "}
          ${state.trainerInfo.results[0].name["last"]}
          <br />
          ${state.trainerInfo.results[0].email}
        </h3>

        <h3>
          ${state.trainerInfo.results[1].name["first"] + " "}
          ${state.trainerInfo.results[1].name["last"]}
          <br />
          ${state.trainerInfo.results[1].email}
        </h3>

        <h3>
          ${state.trainerInfo.results[2].name["first"] + " "}
          ${state.trainerInfo.results[2].name["last"]}
          <br />
          ${state.trainerInfo.results[2].email}
        </h3>

        <h3>
          ${state.trainerInfo.results[3].name["first"] + " "}
          ${state.trainerInfo.results[3].name["last"]}
          <br />
          ${state.trainerInfo.results[3].email}
        </h3>
      </div>
    </div>
  </div>
  <div class="map">
    <h2
      style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
    >
      Where To Find Us
    </h2>

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
`;
