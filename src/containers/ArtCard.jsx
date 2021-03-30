import React from "react"
import styles from "../styles/Home.module.css"

const ArtCard = ({ piece }) => {
  return (
    <div key={piece.id} className={styles.homeSingleArtworkContainer}>
      <img
        className={styles.homeSingleArtworkImage}
        src={piece.imgURI}
        alt=""
      />
      <div className={styles.homeSingleArtworkTitle}>{piece.title}</div>
      <div className={styles.homeSingleArtworkCreator}>
        <img
          className={styles.homeSingleArtworkCreatorAvatar}
          src="http://www.fubiz.net/wp-content/uploads/2018/03/beeple-crap-art-renders-03.jpg"
          alt=""
        />
        <div>@deeple</div>
      </div>
      <div className={styles.homeSingleArtworkPrice}>
        {piece.onSale ? "Price" : "Sold For"}
        <div className={styles.homeSingleArtworkPriceAmount}>
          {piece.price} ETH
        </div>
      </div>
    </div>
  )
}

export default ArtCard
