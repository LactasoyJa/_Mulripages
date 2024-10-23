import "./Home.css";
function Home() {
  return (
    <div className="app">
      <header className="header">
        <img
          src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/464315525_1628869598509330_7528167637628589420_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a_PR_Uci_QYQ7kNvgFXR40Y&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&_nc_gid=ATDBecn9aLUHuv9VprqEjrI&oh=00_AYDdzXgeXLn789cEEWhZm7uBuRCti2XDR91D3FZIEdBqTg&oe=671E992A"  // ใส่ URL รูปภาพของคุณ
          alt="Profile"
          className="profile-img"
        />
        <h1 className="name">Nattapat Maruy 66053976 CSI205</h1>
        <p className="title">SPU</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
        ศึกษาอยู่ที่มหาวิทยาลัยศรีปทุม (SPU) ในสาขา Computer Science and Information Technology (CSI) มีความสนใจในเทคโนโลยีและการพัฒนาโปรแกรม และหวังว่าจะได้เรียนรู้เพิ่มเติมเกี่ยวกับการสร้างนวัตกรรมใหม่ ๆ ในอนาคต


        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (React, Node.js)</li>
          <li>HTML & CSS</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      <section className="contact">
        <h2>My contact</h2>
        <p>Email: nattapat.mar@spulive.net</p>
      </section>
    </div>
  );
}

export default Home;
