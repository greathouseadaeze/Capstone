import html from "html-literal";
import holdingfirearm from "../../docs/pictures/holdingfirearm.jpg";
import practicesheet from "../../docs/pictures/practicesheet.jpg";
import targetpractice from "../../docs/pictures/targetpractice.jpg";
import businessphoto from "../../docs/pictures/businessphoto.jpg";

export default () => html`
  <div class="hero-image"></div>

  <div class="row card">
    <div class="column">
      <h2
        style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
      >
        Train
      </h2>
      <img class="business-photos" src="${holdingfirearm}" />
      <p>
        Discover the art of precision at Rose's Roscoe, where our seasoned
        trainers guide you through comprehensive firearm training sessions.
        Perfect your marksmanship skills in a supportive environment that
        prioritizes safety and expertise, ensuring you feel confident and
        empowered with every shot.
      </p>
    </div>
    <div class="column">
      <h2
        style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
      >
        Learn
      </h2>
      <img class="business-photos" src="${practicesheet}" />
      <p>
        At Rose's Roscoe, we believe knowledge is power. Join our educational
        programs to delve into the intricacies of responsible firearm ownership.
        Learn about safety, maintenance, and the laws surrounding firearms,
        empowering yourself with the understanding needed to navigate the world
        of guns with confidence.
      </p>
    </div>
    <div class="column">
      <h2
        style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
      >
        Empower
      </h2>
      <img class="business-photos" src="${targetpractice}" />
      <p>
        Empowerment begins at Rose's Roscoe, where our community of women comes
        together to support, uplift, and empower one another. Through shared
        experiences and a commitment to fostering strength, our gun club is more
        than a place to shoot – it's a sisterhood where empowerment thrives.
        Join us, and let's rise together at Rose's Roscoe.
      </p>
    </div>
  </div>

  <div class="rowFindUs">
    <div class="columnFindUs">
      <h2
        style="text-shadow:1px 1px 2px white, 0 0 25px #904263, 0 0 5px #904263; color: #904263"
      >
        Where To Find Us
      </h2>
      <p style="margin-left:10vw; margin-right:10vw">
        Explore the vibrant city of St. Louis, MO, and stumble upon the hidden
        gem of empowerment—Rose's Roscoe. Nestled in the heart of the city, our
        exclusive women's gun club awaits you with open arms. Conveniently
        located near iconic landmarks and cultural hotspots, finding Rose's
        Roscoe is a journey in itself. Whether you're strolling through the
        lively streets or enjoying the scenic beauty of St. Louis, keep an eye
        out for the empowering haven that is Rose's Roscoe, where women come
        together to train, learn, and empower.
      </p>
    </div>
    <div class="columnFindUs">
      <img src="${businessphoto}" style="width: 600px; height: 400px;" />
    </div>
  </div>
`;
