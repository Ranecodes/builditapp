import about1 from "../assets/images/about1.png";
import { React, useState } from "react";
import useFetch from "../useFetch";

export default function AboutHistory() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=9&seed=abc`
  );

  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = 5;

  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <section className="aboutHistoryContainer">
      <div className="aboutHistory-top">
        <div className="about-content-text">
          <h1 className="about-title" style={{ textAlign: "left" }}>
            Our History
          </h1>
          <h2>Owner and investor with a reputation</h2>
          <p style={{ color: "#486A6F" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Nunc elit sem, vestibulum sed leo eu, malesuada pharetra
            mauris.
            <br /> Integer rhoncus, eros vel euismod tempor, ipsum magna
            tristique nisi,
            <br /> quis ullamcorper enim magna eu orci.
            <br /> Sed semper ex quis semper aliquet. Cras hendrerit molestie
            sapien sed fermentum.
            <br /> Mauris dui tortor, viverra vel ultrices in, congue sed ex.
          </p>
        </div>
        <div>
          <img src={about1} alt="" className="about1" />
        </div>
      </div>

      <div>
        <h2 className="title">Meet The Team</h2>
        <div className="pagination-list-users">
          {data?.results.map((each, index) => {
            const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
            const email = `${each.email}`;
            const phone = `${each.phone}`;
            const picture = `${each.picture.large}`;

            return (
              <section className="user-card">
                <img src={picture} alt={name} className="users-photo" />
                <div className="user-info">
                  <li
                    className="user-list"
                    key={name.toLowerCase().replaceAll(" ", "")}
                    style={{ fontWeight: "700", fontSize: "24px" }}
                  >{`${name}`}</li>
                  <li className="user-list" key={email}>{`${email}`}</li>
                  <li className="user-list" key={phone}>{`${phone}`}</li>
                </div>
              </section>
            );
          })}
        </div>

        <div className="pagination-container">
          <div className="pagination-bar">
            {
              <button
                className="pagination-btn"
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                prev
              </button>
            }
            {Array.from({ length: pages }, (value, index) => index + 1).map(
              (each) => (
                <button
                  className="pagination-btn"
                  onClick={() => setPage(each)}
                >
                  {each}
                </button>
              )
            )}
            {
              <button
                disabled={page >= pages}
                aria-disabled={page >= pages}
                onClick={() => setPage((prev) => prev + 1)}
                className="pagination-btn"
              >
                next
              </button>
            }
          </div>

          <p className="pagination">
            Pages: {page} of {pages}
          </p>
        </div>
      </div>
    </section>
  );
}
