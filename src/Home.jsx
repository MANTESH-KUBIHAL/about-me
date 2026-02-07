import { useEffect } from "react";
import vtu1 from './assets/vtu1.jpg'
import vtu2 from './assets/vtu2.jpg'
import vtu3 from './assets/vtu3.jpg'
import vtu4 from './assets/vtu4.jpg'
import vtu5 from './assets/vtu5.jpg'
import agm from './assets/agm.jpg'

function Home() {
    const images = [vtu1, vtu2, vtu3, vtu4, vtu5, agm];

    useEffect(() => {
        const cards = document.querySelectorAll(".card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => observer.observe(card));
    }, []);

    return (
        <>
            <div className="homepage">
                <div className="declarationbox">
                    <span>
                        Aspiring full-stack developer with a strong foundation in Java, including OOP,
                        collections, exception handling, and multithreading. Proficient in HTML, CSS, JavaScript,
                        and React.js for building responsive and interactive web applications. Skilled in Node.js
                        and Express.js for creating backend logic and REST APIs, with practical knowledge of MySQL
                        for database design and data management. Hands-on experience through projects in frontend
                        and full-stack development, integrating frontend interfaces with backend services and databases.
                        Familiar with version control using Git/GitHub and deployment on platforms such as Railway, Render,
                        and GitHub Pages. Passionate about learning modern technologies, solving problems through coding, and
                        building scalable, maintainable applications.
                    </span>
                </div>

                <div className="photobax">
                    <div className="photoandexplain">

                        <div className="card">
                            <img src={images[3]} alt="VTU Event 3" />
                            <p className="explainbax">
                                While exploring GIT College, I visited the Aerospace Engineering department and
                                got to see some really interesting projects and concepts up close..
                            </p>
                        </div>

                        <div className="card">
                            <img src={images[1]} alt="VTU Event 2" />
                            <p className="explainbax">
                                A memorable moment from the cultural event with amazing performances.
                            </p>
                        </div>

                        <div className="card">
                            <img src={images[2]} alt="VTU Event 3" />
                            <p className="explainbax">
                                This image captures me and my team roaming around GAT College during the VTU Fest 2025,
                                exploring the campus and enjoying the event together.
                            </p>
                        </div>

                        <div className="card">
                            <img src={images[5]} alt="VTU Event 3" />
                            <p className="explainbax">
                                This image captures our Student Association’s visit to nearby government schools,
                                where we interacted with students and shared our experiences
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
