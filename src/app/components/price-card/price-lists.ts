import { PriceCardOffer, PriceCardTitleLine } from './price-card.component';

// Price list data shared by the home hero and the service pages

// DPF price list
export const DPF_TITLE: PriceCardTitleLine[] = [
  { key: 'dpf.title_1', accent: true, big: true },
  { key: 'dpf.title' },
];
export const DPF_SUBTITLE = ['dpf.subtitle'];
export const DPF_OFFERS: PriceCardOffer[] = [
  { icon: 'troubleshoot', titleKey: 'dpf.o1_title', descKey: 'dpf.o1_desc', priceLabelKey: 'dpf.from',       price: '30.00'  },
  { icon: 'recycling',    titleKey: 'dpf.o2_title', descKey: 'dpf.o2_desc', priceLabelKey: 'dpf.from',       price: '199.00' },
  { icon: 'filter_alt',   titleKey: 'dpf.o3_title', descKey: 'dpf.o3_desc', priceLabelKey: 'dpf.price_from', price: '250.00', noteKey: 'dpf.o3_note' },
];

// A/C refill price list
export const AC_TITLE: PriceCardTitleLine[] = [
  { key: 'ku.title_1' },
  { key: 'ku.title_2', accent: true },
  { key: 'ku.title_3' },
];
export const AC_SUBTITLE = ['ku.sub_1', 'ku.sub_2', 'ku.sub_3'];
export const AC_OFFERS: PriceCardOffer[] = [
  { icon: 'speed',   titleKey: 'ku.c1_title', descKey: 'ku.card_c1_desc', price: '25.00' },
  { icon: 'ac_unit', titleKey: 'ku.c2_title', price: '7',  unitKey: 'ku.per_100g' },
  { icon: 'eco',     titleKey: 'ku.c3_title', price: '20', unitKey: 'ku.per_100g' },
];
