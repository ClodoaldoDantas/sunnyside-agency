import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <section id="transform-your-brand">
        <div className={styles.grid}>
          <picture className={styles.picture}>
            <img src="/images/mobile/image-transform.jpg" alt="" />
          </picture>

          <div className={styles.content}>
            <h2>Transform your brand</h2>

            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <a data-type="primary" href="#">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="stand-out">
        <div className={styles.grid}>
          <picture className={styles.picture}>
            <img src="/images/mobile/image-stand-out.jpg" alt="" />
          </picture>

          <div className={styles.content}>
            <h2>Stand out to the right audience</h2>

            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>

            <a data-type="secondary" href="#">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="services" className={styles.grid}>
        <article data-type="design" className={styles.article}>
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </article>

        <article data-type="photography" className={styles.article}>
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </article>
      </section>
    </main>
  )
}
