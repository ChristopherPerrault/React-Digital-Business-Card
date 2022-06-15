import githubLogo from "../images/githublogo.png";
import linkedinLogo from "../images/linkedinlogo.png";
import fbLogo from "../images/fblogo.png";
import spotifyLogo from "../images/spotifylogo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-icons">
          <img src={githubLogo} alt="githubLogo" title="githubLogo" />
          <img src={linkedinLogo} alt="linkedinLogo" title="linkedinLogo" />
          <img src={fbLogo} alt="fbLogo" title="fbLogo" />
          <img src={spotifyLogo} alt="spotifyLogo" title="spotifyLogo" />
        </div>
      </footer>
    </>
  );
}
