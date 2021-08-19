import "./style.css";

const Portfolio = () => {
  return (
    <ul className="cards">
      <li>
        <a href className="card">
          <img
            src="https://github.com/wa20/wrkwith-app/raw/main/public/img/cover.png"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://github.com/wa20/wrkwith-app/raw/main/public/img/cover.png"
                alt=""
              />
              <div className="card__header-text">
                <h1 className="card__title">Work With</h1>
              </div>
            </div>
            <p className="card__description">
              With WorkWith you can easily find collaborator for your ideas,
              your project, and make them become real!!! The portal is free and
              open to everyone.
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/wrkwith-app">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://wrkwith-app.herokuapp.com/">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>

      <li>
        <a href className="card">
          <img
            src="https://user-images.githubusercontent.com/76731133/129445759-a9467a17-6d5e-43b1-b2bd-d8a45dd14e59.png"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://user-images.githubusercontent.com/76731133/129445759-a9467a17-6d5e-43b1-b2bd-d8a45dd14e59.png"
                alt=""
              />
              <div className="card__header-text">
                <h1 className="card__title">Wedding Organiser</h1>
              </div>
            </div>
            <p className="card__description">
              The Big day is an app that takes away the stress from planning a
              wedding and inviting friends and family. The user will sign up in
              and login in the couple login. After that, they can create their
              wedding and view it after the form has been filled. Once they’re
              done, they can add their guests where a magic link will be sent to
              each individual. Once the email has been sent, the guest will be
              able to login and view the wedding details such as, who will be
              getting married, the location, and have the option to rsvp and
              choose a menu option
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/Wedding_Organiser">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://thebigday.herokuapp.com">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>

      <li>
        <a href className="card">
          <img
            src="https://github.com/Lloret82/Weather_Forecast_Dashboard/blob/main/assets/img/sshot.png?raw=true"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://github.com/Lloret82/Weather_Forecast_Dashboard/blob/main/assets/img/sshot.png?raw=true"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">Weather Dashboard </h3>
              </div>
            </div>
            <p className="card__description">
              A custom-btn btn-3 dashboard using OpenWeather API to retrieve
              weather data for cities that are searched by user. Use of
              localStorage to store any cities that have been searched before
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/Weather_Forecast_Dashboard">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://lloret82.github.io/Weather_Forecast_Dashboard/">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>
      <li>
        <a href className="card">
          <img
            src="https://github.com/Lloret82/progressive_budget/blob/main/screenB.png?raw=true"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://github.com/Lloret82/progressive_budget/blob/main/screenB.png?raw=true"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">Progressive Budget </h3>
              </div>
            </div>
            <p className="card__description">
              Track your finance with this Progressive Budget. The app will keep
              track of your expenses and income. The app dashboard will display
              a graphs of your wallet. Very Helpful!
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/progressive_budget">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://progressive-budget-lloret82.herokuapp.com/">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>
      <li>
        <a href className="card">
          <img
            src="https://github.com/Lloret82/Yummy_Fridge/blob/main/assets/img/readme-header.png?raw=true"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://github.com/Lloret82/Yummy_Fridge/blob/main/assets/img/readme-header.png?raw=true"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">Yumm Fridge</h3>
              </div>
            </div>
            <p className="card__description">
              This is an interactive recipe recommendation app. Based on the
              ingredient(s) submitted by the user our app will search the
              Spoonacular database of 5000+ recipes and returns 4 recipes to
              display to the end user.
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/Yummy_Fridge">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://lloret82.github.io/Yummy_Fridge">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>
      <li>
        <a href className="card">
          <img
            src="https://github.com/Lloret82/Fitness-Tracker/blob/main/screen.png?raw=true"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://github.com/Lloret82/Fitness-Tracker/blob/main/screen.png?raw=true"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">Fitness Tracker</h3>
              </div>
            </div>
            <p className="card__description">
              Track your workouts with Fitness Tracker. The app will keep track
              of every exercise in your workout. The app dashboard will display
              weekly summary graphs of all workouts done in a week. Work Hard
              for better results!
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/Fitness-Tracker">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://lloret82-fitness-tracker.herokuapp.com/">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>
      <li>
        <a href className="card">
          <img
            src="https://github.com/Lloret82/Tech-Blog/blob/main/screen.png?raw=true"
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <img
                className="card__thumb"
                src="https://github.com/Lloret82/Tech-Blog/blob/main/screen.png?raw=true"
                alt=""
              />
              <div className="card__header-text">
                <h3 className="card__title">Tech Blog</h3>
              </div>
            </div>
            <p className="card__description">
              This is a tech blog that allows a user to post about whatever they
              wish. It supports account creation with secure password hashing
              and storage as well as the ability to login. Users can view all
              posts, or go to their dashboards.
            </p>
            <button type="button" class="custom-btn btn-3">
              <a href="https://github.com/Lloret82/Tech-Blog">
                <span>GitHub Repo</span>
              </a>
            </button>
            <button type="button" class="custom-btn btn-3">
              <a href="https://tech-blog-uom.herokuapp.com/">
                <span>Live Website</span>
              </a>
            </button>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Portfolio;
