import { faBinoculars, faCheck, faCog, faCompassDrafting, faFileAlt, faMagnifyingGlass, faPlus, faRightFromBracket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.scss';
import banner from './assets/banner.webp';
import wowNft from './assets/wow-nft.png';
import mv3elite1901 from './assets/mv3elite1901.png';
import azuki599 from './assets/azuki599.png';
import wonderpal5799 from './assets/wonderpal5799.png';
import rq241 from './assets/rq241.png';
import doodle9337 from './assets/doodle9337.png';
import coolcat1148 from './assets/coolcat1148.png';
import wow2138 from './assets/wow2138.png';
import bossbeauties3953 from './assets/bossbeauties3953.png';
import sunnies7735 from './assets/sunnies7735.png';
import clonex1259 from './assets/clonex1259.png';
import azuki2024 from './assets/azuki2024.png';
import azuki8129 from './assets/azuki8129.png';
import coolcat6135 from './assets/coolcat6135.png';
import bossbeauties39 from './assets/bossbeauties5446.png';
import azuki100 from './assets/azuki100.png';
import wonderpal4768 from './assets/wonderpal4768.png';
import cryptopunk6859 from './assets/cryptopunk6859.png';
import otan297 from './assets/otan297.jpeg';
import traveler29 from './assets/traveler29.png';
import kiba177 from './assets/kiba177.jpeg';
import hape27 from './assets/hape27.png';
import metav3rse from './assets/metav3rse.jpeg';
import handEmoji from './assets/hand-emoji.svg';

function App() {
  return (
    <div className="container">
      <div className="left-nav">
        <div className="left-nav__top">
          <div className="left-nav__top--header">
            Blank
          </div>
          <div className="left-nav__top--items">
            <button className="left-nav__top--item">
              Home
              <FontAwesomeIcon icon={faCompassDrafting} className="left-nav__top--icon" />
            </button>
            <button className="left-nav__top--item">
              Explore
              <FontAwesomeIcon icon={faBinoculars} className="left-nav__top--icon" />
            </button>
            <button className="left-nav__top--item">
              Projects
              <FontAwesomeIcon icon={faFileAlt} className="left-nav__top--icon" />
            </button>
            <button className="left-nav__top--item active">
              Profile
              <FontAwesomeIcon icon={faUserAlt} className="left-nav__top--icon" />
            </button>
          </div>
        </div>
        <div className="left-nav__center">
          <div className="left-nav__center--description">
            <img src={handEmoji} alt="Hand Sign Metallica" className="metallica-hand-sign" />
            <p>Made with love by your friends at <strong>Metav3rse</strong></p>
            <button className="button button-primary">Follow</button>
          </div>
        </div>
        <div className="left-nav__bottom">
          <div className="left-nav__bottom--items">
            <button className="left-nav__bottom--item">
              <FontAwesomeIcon icon={faCog}  className="left-nav__bottom--icon"/>
              Settings
            </button>
            <button className="left-nav__bottom--item">
              <FontAwesomeIcon icon={faRightFromBracket}  className="left-nav__bottom--icon"/>
              Disconnect
            </button>
            <button className="left-nav__bottom--item button button-secondary button-rounded">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="profile">
          <div className="profile-images">
            <img src={banner} alt="Profile Banner" className="profile-banner" />
            <img src={wowNft} alt="Profile" className="profile-picture" />
          </div>
          <h3 className="profile-name">
            carleigh.eth
            <FontAwesomeIcon icon={faCheck} className="verified" />
          </h3>
          <button className="button button-primary button-rounded">Follow</button>
        </div>
        <div className="profile-nav">
          <button className="profile-nav-item">Thoughts</button>
          <button className="profile-nav-item">About</button>
          <button className="profile-nav-item active">Collectibles</button>
          <button className="profile-nav-item">Created</button>
          <button className="profile-nav-item">Following</button>
          <button className="profile-nav-item">Followers</button>
        </div>
        <div className="profile-featured">
          <div className="profile-featured__heading">
            Pinned Four
          </div>
          <div className="profile-featured__items">
            <img src={mv3elite1901} alt="Featured NFT Number 1" className="profile-featured__item" />
            <img src={wonderpal5799} alt="Featured NFT Number 2" className="profile-featured__item" />
            <img src={rq241} alt="Featured NFT Number 3" className="profile-featured__item" />
            <img src={azuki599} alt="Featured NFT Number 4" className="profile-featured__item" />
          </div>
        </div>
        <div className="profile-collectibles">
          <div className="profile-collectibles__heading">
            <p>All Collectibles</p>
            <button className="button button-link">See All</button>
          </div>
          <div className="profile-collectibles__items">
            <img src={doodle9337} alt="NFT Number 1" className="profile-collectibles__item" />
            <img src={coolcat1148} alt="NFT Number 2" className="profile-collectibles__item" />
            <img src={wow2138} alt="NFT Number 3" className="profile-collectibles__item" />
            <img src={bossbeauties3953} alt="NFT Number 4" className="profile-collectibles__item" />
            <img src={sunnies7735} alt="NFT Number 5" className="profile-collectibles__item" />
            <img src={clonex1259} alt="NFT Number 6" className="profile-collectibles__item" />
            <img src={azuki2024} alt="NFT Number 7" className="profile-collectibles__item" />
            <img src={azuki8129} alt="NFT Number 8" className="profile-collectibles__item" />
          </div>
        </div>
      </div>
      <div className="right-nav">
        <div className="search-container">
          <input type="text" name="search" id="search" className="search" placeholder='search for ens / eth address '/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <div className="people-to-follow">
          <div className="people-to-follow__heading">
            People To Follow
          </div>
          <div className="people-to-follow__items">
            <div className="people-to-follow__item">
              <img src={coolcat6135} alt="Profile 1" className="people-to-follow__item--image" />
              <div className="people-to-follow__item--name">farokh.eth</div>
              <FontAwesomeIcon icon={faPlus} className="people-to-follow__item--icon"/>
            </div>
            <div className="people-to-follow__item">
              <img src={bossbeauties39} alt="Profile 2" className="people-to-follow__item--image" />
              <div className="people-to-follow__item--name">jmaze.eth</div>
              <FontAwesomeIcon icon={faPlus} className="people-to-follow__item--icon"/>
            </div>
            <div className="people-to-follow__item">
              <img src={metav3rse} alt="Profile 3" className="people-to-follow__item--image" />
              <div className="people-to-follow__item--name">metav3rse.eth</div>
              <FontAwesomeIcon icon={faCheck} className="verified" />
              <FontAwesomeIcon icon={faPlus} className="people-to-follow__item--icon"/>
            </div>
            <div className="people-to-follow__item">
              <img src={azuki100} alt="Profile 4" className="people-to-follow__item--image" />
              <div className="people-to-follow__item--name">0x5Bfh</div>
              <FontAwesomeIcon icon={faPlus} className="people-to-follow__item--icon"/>
            </div>
            <div className="people-to-follow__item active">
              <img src={wonderpal4768} alt="Profile 5" className="people-to-follow__item--image" />
              <div className="people-to-follow__item--name">wotion.eth</div>
              <FontAwesomeIcon icon={faPlus} className="people-to-follow__item--icon"/>
            </div>
          </div>
          <div className="activity">
            <div className="activity__heading">
              <p>Activity</p>
              <button className="button button-link">View More</button>
            </div>
            <div className="activity__items">
              <div className="activity__item">
                <img src={cryptopunk6859} alt="Activity Profile" className="activity__item--image" />
                <div className="activity__item--wrapper">
                  <div className="activity__item--name">
                    0xBf2G
                    <span className="activity__item--type">followed you</span>
                  </div>
                  <div className="activity__item--time">30 mins ago</div>
                </div>
              </div>
              <div className="activity__item">
                <img src={otan297} alt="Activity Profile" className="activity__item--image" />
                <div className="activity__item--wrapper">
                  <div className="activity__item--name">
                    dezmond.eth
                    <span className="activity__item--type">liked your <strong>thought</strong></span>
                  </div>
                  <div className="activity__item--time">45 mins ago</div>
                </div>
              </div>
              <div className="activity__item">
                <img src={traveler29} alt="Activity Profile" className="activity__item--image" />
                <div className="activity__item--wrapper">
                  <div className="activity__item--name">
                    nickson.eth
                    <span className="activity__item--type">followed you</span>
                  </div>
                  <div className="activity__item--time">2 hours ago</div>
                </div>
              </div>
              <div className="activity__item">
                <img src={kiba177} alt="Activity Profile" className="activity__item--image" />
                <div className="activity__item--wrapper">
                  <div className="activity__item--name">
                    longlonglongnamexample.eth
                    <span className="activity__item--type">liked your <strong>thought</strong></span>
                  </div>
                  <div className="activity__item--time">45 mins ago</div>
                </div>
              </div>
              <div className="activity__item">
                <img src={hape27} alt="Activity Profile" className="activity__item--image" />
                <div className="activity__item--wrapper">
                  <div className="activity__item--name">
                    0xPf4R
                    <span className="activity__item--type">followed you</span>
                  </div>
                  <div className="activity__item--time">30 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
