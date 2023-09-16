import styles from './styles.module.scss'

export function Gallery() {
  return (
    <div className={styles.gallery}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/desktop/image-gallery-milkbottles.jpg"
        />
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          alt="Milk bottles"
        />
      </picture>

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/desktop/image-gallery-orange.jpg"
        />
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          alt="A plate with a piece of orange"
        />
      </picture>

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/desktop/image-gallery-cone.jpg"
        />
        <img src="/images/mobile/image-gallery-cone.jpg" alt="Ice cream cone" />
      </picture>

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/desktop/image-gallery-sugar-cubes.jpg"
        />
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="Sugar cubes"
        />
      </picture>
    </div>
  )
}
