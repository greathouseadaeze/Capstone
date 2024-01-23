import html from "html-literal";
import logo from "../docs/pictures/logo.png";

export default (state, links) => html`
  <header>
    <div id="homeBranding">
      <a href="/">
        <img class="logo-image" src="${logo}" />
      </a>

      <h1 class="glow">${state.header}</h1>
    </div>
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}"
        title="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </nav>
  </header>
`;
