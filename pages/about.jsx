import { useEffect, useState } from "react";
import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  const [message, setMessage] = useState("");
  const [isDataSave, setIsDataSave] = useState(false);

  const handleSaveInfo = (e) => {
    e.preventDefault();
    localStorage.setItem("saveInfo", message);
    setIsDataSave(!isDataSave);
  };

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("saveInfo") || "";
    setMessage(value);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        {!isDataSave ? (
          <h3>{message}</h3>
        ) : (
          <form className={styles.form}>
            <textarea
              name="message"
              id="message"
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </form>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "end", marginTop: 20 }}>
        <button
          onClick={handleSaveInfo}
          type="button"
          className={styles.outlined}
        >
          {!isDataSave ? "+" : "Save"}
        </button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
