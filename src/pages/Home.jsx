export default function Home() {
    return (
      <div>
        <h2>Home</h2>
        <p class="hero-title">Welcome to my page!</p>

        <h2>Blogs</h2>
        <section id="blogs">  
          <article>
            <h3>Adobe Photoshop 101</h3>
            <p>Learn the basics of Photoshop.</p>
            <a href="#">Read more</a>
          </article>
          
          <article>
            <h3>Adobe Illustrator 101</h3>
            <p>Learn the basics of Illustrator.</p>
            <a href="#">Read more</a>
          </article>
          
          <article>
            <h3>Adobe Lightroom 101</h3>
            <p>Learn the basics of Lightroom.</p>
            <a href="#">Read more</a>
          </article>
        </section>

        <footer>
          <p> 2023 My Home Page</p>
        </footer>
      </div>
    );
  }