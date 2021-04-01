import { selector } from "recoil";
import { artWorkAtom, artStatusAtom, singlePieceIdAtom, userUrl, usersArrAtom, userProfile } from "./atoms";
import { ArtFunctions } from '../utils/firebase/requests/artworkRequests';

export const onSaleOrSoldState = selector({
    key: "onSaleOrSoldState",
    get: ({ get }) => {
        const status = get(artStatusAtom);
        const artWorkList = get(artWorkAtom);
        const artWorksFilter = artWorkList.filter(piece => piece.onSale === status);
        return artWorksFilter;
    }
})

export const BuyerOrSeller = selector({
    key: "BuyerOrSeller",
    get: ({ get }) => {
        const uid = get(userUrl)
        const users = get(usersArrAtom)
        const user = users.filter(user => user.uid === uid);
        return user[0]
    }
})

// export const Creations = selector({
//     key: "Creations",
//     get: ({ get }) => {
//         const user = get(userProfile)
//         const artWorkList = get(artWorkAtom)
//         const Creation = artWorkList.filter(art => art.authorId === user.id)
//         return Creation
//     }
// })
// export const Collections = selector({
//     key: "Collections",
//     get: ({ get }) => {
//         const user = get(userProfile)
//         const artWorkList = get(artWorkAtom)
//         const Collection = artWorkList.filter(art => art.ownerId === user.id)
//         return Collection
//     }
// })
export const CollectionOrCreation = selector({
    key: "CollectionOrCreation",
    get: ({ get }) => {
        const user = get(userProfile)
        const artWorkList = get(artWorkAtom)
        const status = get(artStatusAtom);
        let CollectionOrCreation;
        if (status === true) {
            CollectionOrCreation = artWorkList.filter(art => art.ownerId === user.id)
        } else {
            CollectionOrCreation = artWorkList.filter(art => art.authorId === user.id)
        }
        return CollectionOrCreation
    }
})

/* export const singleArtworkState = selector({
    key: 'singleArtworkState',
    get: ({ get }) => {
        const artWorkList = get(artWorkAtom);
        const id = get(singlePieceIdAtom);
        const pieceFilter = artWorkList.filter(piece => piece.id == id);
        console.log(pieceFilter[0])
        return pieceFilter[0];
    }
}) */