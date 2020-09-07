import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components - fromt materialui folder
import Header from "../material-ui/Header";
import HeaderLinks from "../material-ui/HeaderLinks";
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
// import SectionFeatures from "./Sections/SectionFeatures.js";
// import SectionBlogs from "./Sections/SectionBlogs.js";
// import SectionTeams from "./Sections/SectionTeams.js";
// import SectionProjects from "./Sections/SectionProjects.js";
// import SectionPricing from "./Sections/SectionPricing.js";
// import SectionTestimonials from "./Sections/SectionTestimonials.js";
// import SectionContacts from "./Sections/SectionContacts.js";

import sectionsPageStyle from "../../assets/jss/material-kit-pro-react/views/sectionsPageStyle";

const useStyles = makeStyles(sectionsPageStyle);

export default function Home() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const classes = useStyles();
  return (
    <div>
      <Header
        color="info"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <div className={classes.main}>
        <SectionHeaders id="headers" />
        {/* <SectionFeatures id="features" />
        <SectionBlogs id="blogs" />
        <SectionTeams id="teams" />
        <SectionProjects id="projects" />
        <SectionPricing id="pricing" />
        <SectionTestimonials id="testimonials" />
        <SectionContacts id="contacts" /> */}
      </div>
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#headers"
              data-number="1"
              className="is-selected"
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("headers");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Headers</span>
            </a>
          </li>
          <li>
            <a
              href="#features"
              data-number="2"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("features");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Features</span>
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              data-number="3"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("blogs");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Blogs</span>
            </a>
          </li>
          <li>
            <a
              href="#teams"
              data-number="4"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("teams");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Teams</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              data-number="5"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("projects");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              data-number="6"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("pricing");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Pricing</span>
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              data-number="7"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("testimonials");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Testimonials</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              data-number="8"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("contacts");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
