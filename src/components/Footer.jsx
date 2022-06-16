import githubLogo from "../images/githublogo.png";
import linkedinLogo from "../images/linkedinlogo.png";
import fbLogo from "../images/fblogo.png";
import spotifyLogo from "../images/spotifylogo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-items">
          <img src={githubLogo} alt="githubLogo" title="Visit my GitHub" />
          <img
            src={linkedinLogo}
            alt="linkedinLogo"
            title="Visit my LinkedIn"
          />
          <img src={fbLogo} alt="fbLogo" title="Visit my Facebook" />
          <img src={spotifyLogo} alt="spotifyLogo" title="Listen on Spotify" />
        </div>
      </footer>
    </>
  );
}
