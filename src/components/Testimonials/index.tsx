import Image from 'next/image'
import styles from './styles.module.scss'

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>Client Testimonials</h2>

        <div className={styles.grid}>
          <div className={styles.testimony}>
            <Image
              src="/images/image-emily.jpg"
              alt="Photo by Emily R."
              height={72}
              width={72}
            />

            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>

            <div className={styles.author}>
              <strong>Emily R.</strong>
              <span>Marketing Director</span>
            </div>
          </div>

          <div className={styles.testimony}>
            <Image
              src="/images/image-thomas.jpg"
              alt="Photo by Thomas S."
              height={72}
              width={72}
            />

            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>

            <div className={styles.author}>
              <strong>Thomas S.</strong>
              <span>Chief Operating Officer</span>
            </div>
          </div>

          <div className={styles.testimony}>
            <Image
              src="/images/image-jennie.jpg"
              alt="Photo by Jennie F."
              height={72}
              width={72}
            />

            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>

            <div className={styles.author}>
              <strong>Jennie F.</strong>
              <span>Business Owner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
