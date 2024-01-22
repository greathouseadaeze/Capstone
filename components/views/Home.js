import html from "html-literal";
import holdingfirearm from "../../docs/pictures/holdingfirearm.jpg";
import practicesheet from "../../docs/pictures/practicesheet.jpg";
import targetpractice from "../../docs/pictures/targetpractice.jpg";

export default () => html`
  <main>
    <div class="hero-image">
      </div>
    </div>
    <div class="business-photos-all">
      <img class="business-photos" src="${holdingfirearm}" />
      <img class="business-photos" src="${practicesheet}" />
      <img class="business-photos" src="${targetpractice}" />
    </div>
    <h1>Train</h1>
    <h1>Learn</h1>
    <h1>Empower</h1>
  </main>
`;
