import {Comments} from '../../types/comments-types';
import {CurrentOffer} from '../../types/offers-types';

export type ReviewsOffersProps = {
  offer: CurrentOffer;
  comments: Comments;
};
