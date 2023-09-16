import styles from './styles.module.scss'

export function Gallery() {
  return (
    <div className={styles.gallery}>
      <picture>
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          alt="Milk bottles"
        />
      </picture>

      <picture>
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          alt="A plate with a piece of orange"
        />
      </picture>

      <picture>
        <img src="/images/mobile/image-gallery-cone.jpg" alt="Ice cream cone" />
      </picture>

      <picture>
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="Sugar cubes"
        />
      </picture>
    </div>
  )
}
